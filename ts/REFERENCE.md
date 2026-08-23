# RealtimeWeather TypeScript SDK Reference

Complete API reference for the RealtimeWeather TypeScript SDK.


## RealtimeWeatherSDK

### Constructor

```ts
new RealtimeWeatherSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `RealtimeWeatherSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = RealtimeWeatherSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `RealtimeWeatherSDK` instance in test mode.


### Instance Methods

#### `AirTemperature(data?: object)`

Create a new `AirTemperature` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `AirTemperatureEntity` instance.

#### `Collection(data?: object)`

Create a new `Collection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `CollectionEntity` instance.

#### `Rainfall(data?: object)`

Create a new `Rainfall` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RainfallEntity` instance.

#### `RelativeHumidity(data?: object)`

Create a new `RelativeHumidity` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RelativeHumidityEntity` instance.

#### `WindDirection(data?: object)`

Create a new `WindDirection` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WindDirectionEntity` instance.

#### `WindSpeed(data?: object)`

Create a new `WindSpeed` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WindSpeedEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `RealtimeWeatherSDK.test()`.

**Returns:** `RealtimeWeatherSDK` instance in test mode.


---

## AirTemperatureEntity

```ts
const air_temperature = client.AirTemperature()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stationId` | `string` | No | Station identifier |
| `timestamp` | `string` | No | Timestamp of the reading |
| `value` | `number` | No | The measured value |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.AirTemperature().list({ collection_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `AirTemperatureEntity` instance with the same client and
options.

#### `client()`

Return the parent `RealtimeWeatherSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## CollectionEntity

```ts
const collection = client.Collection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coverage` | `string` | No | Time coverage of the dataset |
| `datasetId` | `string` | No | Unique identifier for the dataset |
| `name` | `string` | No | Name of the dataset |
| `type` | `string` | No | Type of dataset |

### Actions

This entity exposes custom API actions in addition to the standard
operations. Select one with `$action` in the call's argument; the
remaining keys are sent as that action's payload.

| Action | Route | Call |
| --- | --- | --- |
| `metadata` | `/collections/{collectionId}/metadata` | `client.Collection().list({ $action: 'metadata', ... })` |

An action returns that action's OWN response, which is not necessarily a
Collection record — check the API definition for its shape.

```ts
const result = await client.Collection().list({
  $action: 'metadata',
  /* ...the action's own arguments */
})
```

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Collection().list({ id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `CollectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `RealtimeWeatherSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RainfallEntity

```ts
const rainfall = client.Rainfall()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stationId` | `string` | No | Station identifier |
| `timestamp` | `string` | No | Timestamp of the reading |
| `value` | `number` | No | The measured value |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Rainfall().list({ collection_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RainfallEntity` instance with the same client and
options.

#### `client()`

Return the parent `RealtimeWeatherSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RelativeHumidityEntity

```ts
const relative_humidity = client.RelativeHumidity()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stationId` | `string` | No | Station identifier |
| `timestamp` | `string` | No | Timestamp of the reading |
| `value` | `number` | No | The measured value |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.RelativeHumidity().list({ collection_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RelativeHumidityEntity` instance with the same client and
options.

#### `client()`

Return the parent `RealtimeWeatherSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WindDirectionEntity

```ts
const wind_direction = client.WindDirection()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stationId` | `string` | No | Station identifier |
| `timestamp` | `string` | No | Timestamp of the reading |
| `value` | `number` | No | The measured value |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WindDirection().list({ collection_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WindDirectionEntity` instance with the same client and
options.

#### `client()`

Return the parent `RealtimeWeatherSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WindSpeedEntity

```ts
const wind_speed = client.WindSpeed()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `stationId` | `string` | No | Station identifier |
| `timestamp` | `string` | No | Timestamp of the reading |
| `value` | `number` | No | The measured value |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.WindSpeed().list({ collection_id: 1 })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WindSpeedEntity` instance with the same client and
options.

#### `client()`

Return the parent `RealtimeWeatherSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new RealtimeWeatherSDK({
  feature: {
    test: { active: true },
  }
})
```

