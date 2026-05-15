package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewAirTemperatureEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntity

var NewCollectionEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntity

var NewRainfallEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntity

var NewRelativeHumidityEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntity

var NewWindDirectionEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntity

var NewWindSpeedEntityFunc func(client *RealtimeWeatherSDK, entopts map[string]any) RealtimeWeatherEntity

