// Typed models for the RealtimeWeather SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/realtime-weather-sdk/go/core"
)

// AirTemperature is the typed data model for the air_temperature entity.
type AirTemperature struct {
	StationId *string `json:"stationId,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// AirTemperatureListMatch is the typed request payload for AirTemperature.ListTyped.
type AirTemperatureListMatch struct {
	CollectionId int `json:"collection_id"`
	Date *string `json:"date,omitempty"`
	Datetime *string `json:"datetime,omitempty"`
}

// Collection is the typed data model for the collection entity.
type Collection struct {
	Coverage *string `json:"coverage,omitempty"`
	DatasetId *string `json:"datasetId,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Type *string `json:"type,omitempty"`
}

// CollectionListMatch is the typed request payload for Collection.ListTyped.
type CollectionListMatch struct {
	Id int `json:"id"`
}

// Rainfall is the typed data model for the rainfall entity.
type Rainfall struct {
	StationId *string `json:"stationId,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// RainfallListMatch is the typed request payload for Rainfall.ListTyped.
type RainfallListMatch struct {
	CollectionId int `json:"collection_id"`
	Date *string `json:"date,omitempty"`
	Datetime *string `json:"datetime,omitempty"`
}

// RelativeHumidity is the typed data model for the relative_humidity entity.
type RelativeHumidity struct {
	StationId *string `json:"stationId,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// RelativeHumidityListMatch is the typed request payload for RelativeHumidity.ListTyped.
type RelativeHumidityListMatch struct {
	CollectionId int `json:"collection_id"`
	Date *string `json:"date,omitempty"`
	Datetime *string `json:"datetime,omitempty"`
}

// WindDirection is the typed data model for the wind_direction entity.
type WindDirection struct {
	StationId *string `json:"stationId,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// WindDirectionListMatch is the typed request payload for WindDirection.ListTyped.
type WindDirectionListMatch struct {
	CollectionId int `json:"collection_id"`
	Date *string `json:"date,omitempty"`
	Datetime *string `json:"datetime,omitempty"`
}

// WindSpeed is the typed data model for the wind_speed entity.
type WindSpeed struct {
	StationId *string `json:"stationId,omitempty"`
	Timestamp *string `json:"timestamp,omitempty"`
	Value *float64 `json:"value,omitempty"`
}

// WindSpeedListMatch is the typed request payload for WindSpeed.ListTyped.
type WindSpeedListMatch struct {
	CollectionId int `json:"collection_id"`
	Date *string `json:"date,omitempty"`
	Datetime *string `json:"datetime,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
