<?php
declare(strict_types=1);

// Typed models for the RealtimeWeather SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** AirTemperature entity data model. */
class AirTemperature
{
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $value = null;
}

/** Request payload for AirTemperature#list. */
class AirTemperatureListMatch
{
    public int $collection_id;
}

/** Collection entity data model. */
class Collection
{
    public ?string $coverage = null;
    public ?string $dataset_id = null;
    public ?string $name = null;
    public ?string $type = null;
}

/** Request payload for Collection#list. */
class CollectionListMatch
{
    public int $id;
}

/** Rainfall entity data model. */
class Rainfall
{
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $value = null;
}

/** Request payload for Rainfall#list. */
class RainfallListMatch
{
    public int $collection_id;
}

/** RelativeHumidity entity data model. */
class RelativeHumidity
{
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $value = null;
}

/** Request payload for RelativeHumidity#list. */
class RelativeHumidityListMatch
{
    public int $collection_id;
}

/** WindDirection entity data model. */
class WindDirection
{
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $value = null;
}

/** Request payload for WindDirection#list. */
class WindDirectionListMatch
{
    public int $collection_id;
}

/** WindSpeed entity data model. */
class WindSpeed
{
    public ?string $station_id = null;
    public ?string $timestamp = null;
    public ?float $value = null;
}

/** Request payload for WindSpeed#list. */
class WindSpeedListMatch
{
    public int $collection_id;
}

