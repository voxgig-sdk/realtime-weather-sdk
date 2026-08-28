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
# @!attribute [rw] stationId
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
AirTemperature = Struct.new(
  :stationId,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for AirTemperature#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] datetime
#   @return [String, nil]
AirTemperatureListMatch = Struct.new(
  :collection_id,
  :date,
  :datetime,
  keyword_init: true
)

# Collection entity data model.
#
# @!attribute [rw] coverage
#   @return [String, nil]
#
# @!attribute [rw] datasetId
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
Collection = Struct.new(
  :coverage,
  :datasetId,
  :id,
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
# @!attribute [rw] stationId
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
Rainfall = Struct.new(
  :stationId,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for Rainfall#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] datetime
#   @return [String, nil]
RainfallListMatch = Struct.new(
  :collection_id,
  :date,
  :datetime,
  keyword_init: true
)

# RelativeHumidity entity data model.
#
# @!attribute [rw] stationId
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
RelativeHumidity = Struct.new(
  :stationId,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for RelativeHumidity#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] datetime
#   @return [String, nil]
RelativeHumidityListMatch = Struct.new(
  :collection_id,
  :date,
  :datetime,
  keyword_init: true
)

# WindDirection entity data model.
#
# @!attribute [rw] stationId
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
WindDirection = Struct.new(
  :stationId,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for WindDirection#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] datetime
#   @return [String, nil]
WindDirectionListMatch = Struct.new(
  :collection_id,
  :date,
  :datetime,
  keyword_init: true
)

# WindSpeed entity data model.
#
# @!attribute [rw] stationId
#   @return [String, nil]
#
# @!attribute [rw] timestamp
#   @return [String, nil]
#
# @!attribute [rw] value
#   @return [Float, nil]
WindSpeed = Struct.new(
  :stationId,
  :timestamp,
  :value,
  keyword_init: true
)

# Request payload for WindSpeed#list.
#
# @!attribute [rw] collection_id
#   @return [Integer]
#
# @!attribute [rw] date
#   @return [String, nil]
#
# @!attribute [rw] datetime
#   @return [String, nil]
WindSpeedListMatch = Struct.new(
  :collection_id,
  :date,
  :datetime,
  keyword_init: true
)

