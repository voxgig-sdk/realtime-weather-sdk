package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/realtime-weather-sdk"
	"github.com/voxgig-sdk/realtime-weather-sdk/core"

	vs "github.com/voxgig/struct"
)

func TestAirTemperatureEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.AirTemperature(nil)
		if ent == nil {
			t.Fatal("expected non-nil AirTemperatureEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := air_temperatureBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "air_temperature." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set REALTIMEWEATHER_TEST_AIR_TEMPERATURE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		airTemperatureRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.air_temperature", setup.data)))
		var airTemperatureRef01Data map[string]any
		if len(airTemperatureRef01DataRaw) > 0 {
			airTemperatureRef01Data = core.ToMapAny(airTemperatureRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = airTemperatureRef01Data

		// LIST
		airTemperatureRef01Ent := client.AirTemperature(nil)
		airTemperatureRef01Match := map[string]any{
			"collection_id": setup.idmap["collection01"],
		}

		airTemperatureRef01ListResult, err := airTemperatureRef01Ent.List(airTemperatureRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, airTemperatureRef01ListOk := airTemperatureRef01ListResult.([]any)
		if !airTemperatureRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", airTemperatureRef01ListResult)
		}

	})
}

func air_temperatureBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "air_temperature", "AirTemperatureTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read air_temperature test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse air_temperature test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"air_temperature01", "air_temperature02", "air_temperature03", "collection01", "collection02", "collection03"},
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
	entidEnvRaw := os.Getenv("REALTIMEWEATHER_TEST_AIR_TEMPERATURE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"REALTIMEWEATHER_TEST_AIR_TEMPERATURE_ENTID": idmap,
		"REALTIMEWEATHER_TEST_LIVE":      "FALSE",
		"REALTIMEWEATHER_TEST_EXPLAIN":   "FALSE",
		"REALTIMEWEATHER_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["REALTIMEWEATHER_TEST_AIR_TEMPERATURE_ENTID"])
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
