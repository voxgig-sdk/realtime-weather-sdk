// Typed models for the RealtimeWeather SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AirTemperature {
  station_id?: string
  timestamp?: string
  value?: number
}

export interface AirTemperatureListMatch {
  collection_id: number
}

export interface Collection {
  coverage?: string
  dataset_id?: string
  name?: string
  type?: string
}

export interface CollectionListMatch {
  id: number
}

export interface Rainfall {
  station_id?: string
  timestamp?: string
  value?: number
}

export interface RainfallListMatch {
  collection_id: number
}

export interface RelativeHumidity {
  station_id?: string
  timestamp?: string
  value?: number
}

export interface RelativeHumidityListMatch {
  collection_id: number
}

export interface WindDirection {
  station_id?: string
  timestamp?: string
  value?: number
}

export interface WindDirectionListMatch {
  collection_id: number
}

export interface WindSpeed {
  station_id?: string
  timestamp?: string
  value?: number
}

export interface WindSpeedListMatch {
  collection_id: number
}

