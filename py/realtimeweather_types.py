# Typed models for the RealtimeWeather SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AirTemperature(TypedDict, total=False):
    station_id: str
    timestamp: str
    value: float


class AirTemperatureListMatch(TypedDict):
    collection_id: int


class Collection(TypedDict, total=False):
    coverage: str
    dataset_id: str
    name: str
    type: str


class CollectionListMatch(TypedDict):
    id: int


class Rainfall(TypedDict, total=False):
    station_id: str
    timestamp: str
    value: float


class RainfallListMatch(TypedDict):
    collection_id: int


class RelativeHumidity(TypedDict, total=False):
    station_id: str
    timestamp: str
    value: float


class RelativeHumidityListMatch(TypedDict):
    collection_id: int


class WindDirection(TypedDict, total=False):
    station_id: str
    timestamp: str
    value: float


class WindDirectionListMatch(TypedDict):
    collection_id: int


class WindSpeed(TypedDict, total=False):
    station_id: str
    timestamp: str
    value: float


class WindSpeedListMatch(TypedDict):
    collection_id: int
