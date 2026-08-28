-- Typed models for the RealtimeWeather SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class AirTemperature
---@field stationId? string
---@field timestamp? string
---@field value? number

---@class AirTemperatureListMatch
---@field collection_id number
---@field date? string
---@field datetime? string

---@class Collection
---@field coverage? string
---@field datasetId? string
---@field id? string
---@field name? string
---@field type? string

---@class CollectionListMatch
---@field id number

---@class Rainfall
---@field stationId? string
---@field timestamp? string
---@field value? number

---@class RainfallListMatch
---@field collection_id number
---@field date? string
---@field datetime? string

---@class RelativeHumidity
---@field stationId? string
---@field timestamp? string
---@field value? number

---@class RelativeHumidityListMatch
---@field collection_id number
---@field date? string
---@field datetime? string

---@class WindDirection
---@field stationId? string
---@field timestamp? string
---@field value? number

---@class WindDirectionListMatch
---@field collection_id number
---@field date? string
---@field datetime? string

---@class WindSpeed
---@field stationId? string
---@field timestamp? string
---@field value? number

---@class WindSpeedListMatch
---@field collection_id number
---@field date? string
---@field datetime? string

local M = {}

return M
