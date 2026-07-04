-- Typed models for the RealtimeWeather SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AirTemperature
---@field station_id? string
---@field timestamp? string
---@field value? number

---@class AirTemperatureListMatch
---@field collection_id number

---@class Collection
---@field coverage? string
---@field dataset_id? string
---@field name? string
---@field type? string

---@class CollectionListMatch
---@field id number

---@class Rainfall
---@field station_id? string
---@field timestamp? string
---@field value? number

---@class RainfallListMatch
---@field collection_id number

---@class RelativeHumidity
---@field station_id? string
---@field timestamp? string
---@field value? number

---@class RelativeHumidityListMatch
---@field collection_id number

---@class WindDirection
---@field station_id? string
---@field timestamp? string
---@field value? number

---@class WindDirectionListMatch
---@field collection_id number

---@class WindSpeed
---@field station_id? string
---@field timestamp? string
---@field value? number

---@class WindSpeedListMatch
---@field collection_id number

local M = {}

return M
