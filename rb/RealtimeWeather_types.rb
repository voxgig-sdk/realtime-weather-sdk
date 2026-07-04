# frozen_string_literal: true

# Typed models for the RealtimeWeather SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# AirTemperature entity data model.
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
AirTemperature = Struct.new(
  :station_id,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for AirTemperature#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
AirTemperatureListMatch = Struct.new(
  :collection_id,
  keyword_init: true
)

# Collection entity data model.
#
# @!attribute [rw] coverage
#   @return [String, nil]
#
# @!attribute [rw] dataset_id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Collection = Struct.new(
  :coverage,
  :dataset_id,
  :name,
  :type,
  keyword_init: true
)

# Request payload for Collection#list.
#
# @!attribute [rw] id
#   @return [Integer]
CollectionListMatch = Struct.new(
  :id,
  keyword_init: true
)

# Rainfall entity data model.
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
Rainfall = Struct.new(
  :station_id,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for Rainfall#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
RainfallListMatch = Struct.new(
  :collection_id,
  keyword_init: true
)

# RelativeHumidity entity data model.
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
RelativeHumidity = Struct.new(
  :station_id,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for RelativeHumidity#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
RelativeHumidityListMatch = Struct.new(
  :collection_id,
  keyword_init: true
)

# WindDirection entity data model.
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
WindDirection = Struct.new(
  :station_id,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for WindDirection#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
WindDirectionListMatch = Struct.new(
  :collection_id,
  keyword_init: true
)

# WindSpeed entity data model.
#
# @!attribute [rw] station_id
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
WindSpeed = Struct.new(
  :station_id,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for WindSpeed#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
WindSpeedListMatch = Struct.new(
  :collection_id,
  keyword_init: true
)

