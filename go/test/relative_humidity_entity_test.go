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

// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const relative_humidityEntityLiveStrict = true


func TestRelativeHumidityEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RelativeHumidity(nil)
		if ent == nil {
			t.Fatal("expected non-nil RelativeHumidityEntity")
		}
	})

	t.Run("validate", func(t *testing.T) {
		if !fhHasFeature("validate") {
			t.Skip("feature not present in this SDK: validate")
		}
		client := sdk.TestSDK(nil, map[string]any{
			"feature": map[string]any{"validate": map[string]any{"active": true}},
		})
		_, err := client.RelativeHumidity(nil).List(map[string]any{"collection_id": "x"}, nil)
		if sdkerr, ok := err.(*core.RealtimeWeatherError); !ok || "validate_failed" != sdkerr.Code {
			t.Fatalf("expected validate_failed, got %v", err)
		}
	})

	t.Run("basic", func(tt *testing.T) {
		var t testing.TB = tt
		setup := relative_humidityBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "relative_humidity." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		if setup.live {
			for _liveKey, _liveEx := range map[string]any{"collection01": float64(1459)} {
				if setup.syntheticOnly || setup.idmap[_liveKey] == nil {
					setup.idmap[_liveKey] = _liveEx
				}
			}
		}
		client := setup.client
		_ = client

		// Bootstrap entity data from existing test data (no create step in flow).
		relativeHumidityRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath(setup.data, "existing.relative_humidity")))
		var relativeHumidityRef01Data map[string]any
		if len(relativeHumidityRef01DataRaw) > 0 {
			relativeHumidityRef01Data = core.ToMapAny(relativeHumidityRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = relativeHumidityRef01Data

		// LIST
		relativeHumidityRef01Ent := client.RelativeHumidity(nil)
		relativeHumidityRef01Match := map[string]any{
			"collection_id": setup.idmap["collection01"],
		}

		relativeHumidityRef01ListResult, err := relativeHumidityRef01Ent.List(relativeHumidityRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, relativeHumidityRef01ListOk := relativeHumidityRef01ListResult.([]any)
		if !relativeHumidityRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", relativeHumidityRef01ListResult)
		}

	})
}

func relative_humidityBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "relative_humidity", "RelativeHumidityTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read relative_humidity test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse relative_humidity test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"relative_humidity01", "relative_humidity02", "relative_humidity03", "collection01", "collection02", "collection03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Whether *_ENTID supplied the idmap, read before envOverride consumes it:
	// without it, the ids a live flow binds are the fixture's synthetic ones.
	entidEnvRaw := os.Getenv("REALTIME_WEATHER_TEST_RELATIVE_HUMIDITY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"REALTIME_WEATHER_TEST_RELATIVE_HUMIDITY_ENTID": idmap,
		"REALTIME_WEATHER_TEST_LIVE":      "FALSE",
		"REALTIME_WEATHER_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["REALTIME_WEATHER_TEST_RELATIVE_HUMIDITY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["REALTIME_WEATHER_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
			},
			extraOpts,
		})
		client = sdk.NewRealtimeWeatherSDK(core.ToMapAny(mergedOpts))
	}

	live := env["REALTIME_WEATHER_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["REALTIME_WEATHER_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
