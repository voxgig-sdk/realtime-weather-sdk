// Typed models for the RealtimeWeather SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// AirTemperature is the typed data model for the air_temperature entity.
type AirTemperature struct {
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// AirTemperatureListMatch is the typed request payload for AirTemperature.ListTyped.
type AirTemperatureListMatch struct {
	CollectionId int `json:"collection_id"`
}

// Collection is the typed data model for the collection entity.
type Collection struct {
	Coverage *string `json:"coverage,omitempty"`
	DatasetId *string `json:"dataset_id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CollectionListMatch is the typed request payload for Collection.ListTyped.
type CollectionListMatch struct {
	Id int `json:"id"`
}

// Rainfall is the typed data model for the rainfall entity.
type Rainfall struct {
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// RainfallListMatch is the typed request payload for Rainfall.ListTyped.
type RainfallListMatch struct {
	CollectionId int `json:"collection_id"`
}

// RelativeHumidity is the typed data model for the relative_humidity entity.
type RelativeHumidity struct {
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// RelativeHumidityListMatch is the typed request payload for RelativeHumidity.ListTyped.
type RelativeHumidityListMatch struct {
	CollectionId int `json:"collection_id"`
}

// WindDirection is the typed data model for the wind_direction entity.
type WindDirection struct {
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// WindDirectionListMatch is the typed request payload for WindDirection.ListTyped.
type WindDirectionListMatch struct {
	CollectionId int `json:"collection_id"`
}

// WindSpeed is the typed data model for the wind_speed entity.
type WindSpeed struct {
	StationId *string `json:"station_id,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// WindSpeedListMatch is the typed request payload for WindSpeed.ListTyped.
type WindSpeedListMatch struct {
	CollectionId int `json:"collection_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
