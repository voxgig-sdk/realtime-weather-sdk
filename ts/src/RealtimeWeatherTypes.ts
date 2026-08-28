// Typed models for the RealtimeWeather SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface AirTemperature {
  stationId?: string
  timestamp?: string
  value?: number
}

export interface AirTemperatureListMatch {
  collection_id: number
  date?: string
  datetime?: string
}

export interface Collection {
  coverage?: string
  datasetId?: string
  id?: string
  name?: string
  type?: string
}

export interface CollectionListMatch {
  id: number

  // Selects a custom action instead of the plain list:
  //   'metadata'
  // The remaining keys are that action's own payload.
  $action?: string
  [action: string]: any
}

export interface Rainfall {
  stationId?: string
  timestamp?: string
  value?: number
}

export interface RainfallListMatch {
  collection_id: number
  date?: string
  datetime?: string
}

export interface RelativeHumidity {
  stationId?: string
  timestamp?: string
  value?: number
}

export interface RelativeHumidityListMatch {
  collection_id: number
  date?: string
  datetime?: string
}

export interface WindDirection {
  stationId?: string
  timestamp?: string
  value?: number
}

export interface WindDirectionListMatch {
  collection_id: number
  date?: string
  datetime?: string
}

export interface WindSpeed {
  stationId?: string
  timestamp?: string
  value?: number
}

export interface WindSpeedListMatch {
  collection_id: number
  date?: string
  datetime?: string
}

