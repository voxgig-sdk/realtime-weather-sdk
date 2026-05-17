package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/realtime-weather-sdk/go"
	"github.com/voxgig-sdk/realtime-weather-sdk/go/core"

	vs "github.com/voxgig-sdk/realtime-weather-sdk/go/utility/struct"
)

func TestWindDirectionEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.WindDirection(nil)
		if ent == nil {
			t.Fatal("expected non-nil WindDirectionEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := wind_directionBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "wind_direction." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set REALTIMEWEATHER_TEST_WIND_DIRECTION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		windDirectionRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.wind_direction", setup.data)))
		var windDirectionRef01Data map[string]any
		if len(windDirectionRef01DataRaw) > 0 {
			windDirectionRef01Data = core.ToMapAny(windDirectionRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = windDirectionRef01Data

		// LIST
		windDirectionRef01Ent := client.WindDirection(nil)
		windDirectionRef01Match := map[string]any{
			"collection_id": setup.idmap["collection01"],
		}

		windDirectionRef01ListResult, err := windDirectionRef01Ent.List(windDirectionRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, windDirectionRef01ListOk := windDirectionRef01ListResult.([]any)
		if !windDirectionRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", windDirectionRef01ListResult)
		}

	})
}

func wind_directionBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "wind_direction", "WindDirectionTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read wind_direction test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse wind_direction test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"wind_direction01", "wind_direction02", "wind_direction03", "collection01", "collection02", "collection03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("REALTIMEWEATHER_TEST_WIND_DIRECTION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"REALTIMEWEATHER_TEST_WIND_DIRECTION_ENTID": idmap,
		"REALTIMEWEATHER_TEST_LIVE":      "FALSE",
		"REALTIMEWEATHER_TEST_EXPLAIN":   "FALSE",
		"REALTIMEWEATHER_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["REALTIMEWEATHER_TEST_WIND_DIRECTION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["REALTIMEWEATHER_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["REALTIMEWEATHER_APIKEY"],
			},
			extra,
		})
		client = sdk.NewRealtimeWeatherSDK(core.ToMapAny(mergedOpts))
	}

	live := env["REALTIMEWEATHER_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["REALTIMEWEATHER_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
