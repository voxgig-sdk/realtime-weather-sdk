# RealtimeWeather PHP SDK Reference

Complete API reference for the RealtimeWeather PHP SDK.


## RealtimeWeatherSDK

### Constructor

```php
require_once __DIR__ . '/realtime-weather_sdk.php';

$client = new RealtimeWeatherSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RealtimeWeatherSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = RealtimeWeatherSDK::test();
```


### Instance Methods

#### `AirTemperature($data = null)`

Create a new `AirTemperatureEntity` instance. Pass `null` for no initial data.

#### `Collection($data = null)`

Create a new `CollectionEntity` instance. Pass `null` for no initial data.

#### `Rainfall($data = null)`

Create a new `RainfallEntity` instance. Pass `null` for no initial data.

#### `RelativeHumidity($data = null)`

Create a new `RelativeHumidityEntity` instance. Pass `null` for no initial data.

#### `WindDirection($data = null)`

Create a new `WindDirectionEntity` instance. Pass `null` for no initial data.

#### `WindSpeed($data = null)`

Create a new `WindSpeedEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AirTemperatureEntity

```php
$air_temperature = $client->AirTemperature();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->AirTemperature()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): AirTemperatureEntity`

Create a new `AirTemperatureEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## CollectionEntity

```php
$collection = $client->Collection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage` | ``$STRING`` | No |  |
| `dataset_id` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Collection()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): CollectionEntity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RainfallEntity

```php
$rainfall = $client->Rainfall();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->Rainfall()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RainfallEntity`

Create a new `RainfallEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RelativeHumidityEntity

```php
$relative_humidity = $client->RelativeHumidity();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->RelativeHumidity()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RelativeHumidityEntity`

Create a new `RelativeHumidityEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## WindDirectionEntity

```php
$wind_direction = $client->WindDirection();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->WindDirection()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): WindDirectionEntity`

Create a new `WindDirectionEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## WindSpeedEntity

```php
$wind_speed = $client->WindSpeed();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->WindSpeed()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): WindSpeedEntity`

Create a new `WindSpeedEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new RealtimeWeatherSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

