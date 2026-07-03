# RealtimeWeather Golang SDK Reference

Complete API reference for the RealtimeWeather Golang SDK.


## RealtimeWeatherSDK

### Constructor

```go
func NewRealtimeWeatherSDK(options map[string]any) *RealtimeWeatherSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *RealtimeWeatherSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *RealtimeWeatherSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `AirTemperature(data map[string]any) RealtimeWeatherEntity`

Create a new `AirTemperature` entity instance. Pass `nil` for no initial data.

#### `Collection(data map[string]any) RealtimeWeatherEntity`

Create a new `Collection` entity instance. Pass `nil` for no initial data.

#### `Rainfall(data map[string]any) RealtimeWeatherEntity`

Create a new `Rainfall` entity instance. Pass `nil` for no initial data.

#### `RelativeHumidity(data map[string]any) RealtimeWeatherEntity`

Create a new `RelativeHumidity` entity instance. Pass `nil` for no initial data.

#### `WindDirection(data map[string]any) RealtimeWeatherEntity`

Create a new `WindDirection` entity instance. Pass `nil` for no initial data.

#### `WindSpeed(data map[string]any) RealtimeWeatherEntity`

Create a new `WindSpeed` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## AirTemperatureEntity

```go
air_temperature := client.AirTemperature(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.AirTemperature(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `AirTemperatureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## CollectionEntity

```go
collection := client.Collection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage` | ``$STRING`` | No |  |
| `dataset_id` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Collection(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RainfallEntity

```go
rainfall := client.Rainfall(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Rainfall(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RainfallEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RelativeHumidityEntity

```go
relative_humidity := client.RelativeHumidity(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.RelativeHumidity(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RelativeHumidityEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WindDirectionEntity

```go
wind_direction := client.WindDirection(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WindDirection(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WindDirectionEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WindSpeedEntity

```go
wind_speed := client.WindSpeed(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.WindSpeed(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WindSpeedEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewRealtimeWeatherSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

