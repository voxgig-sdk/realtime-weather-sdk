# RealtimeWeather Ruby SDK Reference

Complete API reference for the RealtimeWeather Ruby SDK.


## RealtimeWeatherSDK

### Constructor

```ruby
require_relative 'RealtimeWeather_sdk'

client = RealtimeWeatherSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
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

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

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

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AirTemperatureEntity

```ruby
air_temperature = client.AirTemperature
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stationId` | `String` | No | Station identifier |
| `timestamp` | `String` | No | Timestamp of the reading |
| `value` | `Float` | No | The measured value |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.AirTemperature.list
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
| `coverage` | `String` | No | Time coverage of the dataset |
| `datasetId` | `String` | No | Unique identifier for the dataset |
| `id` | `String` | No |  |
| `name` | `String` | No | Name of the dataset |
| `type` | `String` | No | Type of dataset |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Collection.list
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
| `stationId` | `String` | No | Station identifier |
| `timestamp` | `String` | No | Timestamp of the reading |
| `value` | `Float` | No | The measured value |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Rainfall.list
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
| `stationId` | `String` | No | Station identifier |
| `timestamp` | `String` | No | Timestamp of the reading |
| `value` | `Float` | No | The measured value |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RelativeHumidity.list
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
| `stationId` | `String` | No | Station identifier |
| `timestamp` | `String` | No | Timestamp of the reading |
| `value` | `Float` | No | The measured value |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WindDirection.list
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
| `stationId` | `String` | No | Station identifier |
| `timestamp` | `String` | No | Timestamp of the reading |
| `value` | `Float` | No | The measured value |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.WindSpeed.list
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


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

