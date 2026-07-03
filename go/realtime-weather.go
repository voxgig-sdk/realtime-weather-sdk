package voxgigrealtimeweathersdk

import (
	"github.com/voxgig-sdk/realtime-weather-sdk/go/core"
	"github.com/voxgig-sdk/realtime-weather-sdk/go/entity"
	"github.com/voxgig-sdk/realtime-weather-sdk/go/feature"
	_ "github.com/voxgig-sdk/realtime-weather-sdk/go/utility"
)

// Type aliases preserve external API.
type RealtimeWeatherSDK = core.RealtimeWeatherSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type RealtimeWeatherEntity = core.RealtimeWeatherEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type RealtimeWeatherError = core.RealtimeWeatherError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAirTemperatureEntityFunc = func(client *core.RealtimeWeatherSDK, entopts map[string]any) core.RealtimeWeatherEntity {
		return entity.NewAirTemperatureEntity(client, entopts)
	}
	core.NewCollectionEntityFunc = func(client *core.RealtimeWeatherSDK, entopts map[string]any) core.RealtimeWeatherEntity {
		return entity.NewCollectionEntity(client, entopts)
	}
	core.NewRainfallEntityFunc = func(client *core.RealtimeWeatherSDK, entopts map[string]any) core.RealtimeWeatherEntity {
		return entity.NewRainfallEntity(client, entopts)
	}
	core.NewRelativeHumidityEntityFunc = func(client *core.RealtimeWeatherSDK, entopts map[string]any) core.RealtimeWeatherEntity {
		return entity.NewRelativeHumidityEntity(client, entopts)
	}
	core.NewWindDirectionEntityFunc = func(client *core.RealtimeWeatherSDK, entopts map[string]any) core.RealtimeWeatherEntity {
		return entity.NewWindDirectionEntity(client, entopts)
	}
	core.NewWindSpeedEntityFunc = func(client *core.RealtimeWeatherSDK, entopts map[string]any) core.RealtimeWeatherEntity {
		return entity.NewWindSpeedEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewRealtimeWeatherSDK = core.NewRealtimeWeatherSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewRealtimeWeatherSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *RealtimeWeatherSDK  { return NewRealtimeWeatherSDK(nil) }
func Test() *RealtimeWeatherSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
