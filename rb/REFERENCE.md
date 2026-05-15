# RealtimeWeather Ruby SDK Reference

Complete API reference for the RealtimeWeather Ruby SDK.


## RealtimeWeatherSDK

### Constructor

```ruby
require_relative 'realtime-weather_sdk'

client = RealtimeWeatherSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RealtimeWeatherSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = RealtimeWeatherSDK.test
```


### Instance Methods

#### `AirTemperature(data = nil)`

Create a new `AirTemperature` entity instance. Pass `nil` for no initial data.

#### `Collection(data = nil)`

Create a new `Collection` entity instance. Pass `nil` for no initial data.

#### `Rainfall(data = nil)`

Create a new `Rainfall` entity instance. Pass `nil` for no initial data.

#### `RelativeHumidity(data = nil)`

Create a new `RelativeHumidity` entity instance. Pass `nil` for no initial data.

#### `WindDirection(data = nil)`

Create a new `WindDirection` entity instance. Pass `nil` for no initial data.

#### `WindSpeed(data = nil)`

Create a new `WindSpeed` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## AirTemperatureEntity

```ruby
air_temperature = client.AirTemperature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.AirTemperature.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AirTemperatureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CollectionEntity

```ruby
collection = client.Collection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage` | ``$STRING`` | No |  |
| `dataset_id` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `type` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Collection.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CollectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RainfallEntity

```ruby
rainfall = client.Rainfall
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Rainfall.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RainfallEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RelativeHumidityEntity

```ruby
relative_humidity = client.RelativeHumidity
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.RelativeHumidity.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RelativeHumidityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WindDirectionEntity

```ruby
wind_direction = client.WindDirection
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.WindDirection.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WindDirectionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WindSpeedEntity

```ruby
wind_speed = client.WindSpeed
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `station_id` | ``$STRING`` | No |  |
| `timestamp` | ``$STRING`` | No |  |
| `value` | ``$NUMBER`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.WindSpeed.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WindSpeedEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = RealtimeWeatherSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

