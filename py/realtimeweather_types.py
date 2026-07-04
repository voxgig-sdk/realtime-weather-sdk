# Typed models for the RealtimeWeather SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class AirTemperature:
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    value: Optional[float] = None


@dataclass
class AirTemperatureListMatch:
    collection_id: int


@dataclass
class Collection:
    coverage: Optional[str] = None
    dataset_id: Optional[str] = None
    name: Optional[str] = None
    type: Optional[str] = None


@dataclass
class CollectionListMatch:
    id: int


@dataclass
class Rainfall:
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    value: Optional[float] = None


@dataclass
class RainfallListMatch:
    collection_id: int


@dataclass
class RelativeHumidity:
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    value: Optional[float] = None


@dataclass
class RelativeHumidityListMatch:
    collection_id: int


@dataclass
class WindDirection:
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    value: Optional[float] = None


@dataclass
class WindDirectionListMatch:
    collection_id: int


@dataclass
class WindSpeed:
    station_id: Optional[str] = None
    timestamp: Optional[str] = None
    value: Optional[float] = None


@dataclass
class WindSpeedListMatch:
    collection_id: int

