package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewAirTemperatureEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntityBase

var NewCollectionEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntityBase

var NewRainfallEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntityBase

var NewRelativeHumidityEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntityBase

var NewWindDirectionEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntityBase

var NewWindSpeedEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntityBase

