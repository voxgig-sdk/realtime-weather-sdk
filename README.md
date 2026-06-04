# RealtimeWeather SDK

Real-time temperature, humidity, rainfall and wind readings from Singapore's NEA weather stations

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Realtime Weather API

This SDK wraps the real-time weather collection published by [data.gov.sg](https://data.gov.sg/collections/1459/view), Singapore's official open data portal. The underlying readings come from a network of weather stations operated by the National Environment Agency (NEA).

What you get from the API:

- Air temperature readings from NEA weather stations
- Rainfall measurements
- Relative humidity values
- Wind direction
- Wind speed
- A collection endpoint that exposes metadata about the grouped datasets

Readings are reported at the weather-station level and refreshed at intervals as frequent as one minute. The service is served from `https://api-production.data.gov.sg/v2/public/api` and does not require an API key for these public endpoints. CORS is enabled, so the API can be called directly from browser-based clients.

## Try it

**TypeScript**
```bash
npm install realtime-weather
```

**Python**
```bash
pip install realtime-weather-sdk
```

**PHP**
```bash
composer require voxgig/realtime-weather-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/realtime-weather-sdk/go
```

**Ruby**
```bash
gem install realtime-weather-sdk
```

**Lua**
```bash
luarocks install realtime-weather-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { RealtimeWeatherSDK } from 'realtime-weather'

const client = new RealtimeWeatherSDK({})

// List all airtemperatures
const airtemperatures = await client.AirTemperature().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o realtime-weather-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "realtime-weather": {
      "command": "/abs/path/to/realtime-weather-mcp"
    }
  }
}
```

## Entities

The API exposes 6 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **AirTemperature** | Real-time air temperature readings (in degrees Celsius) from NEA weather stations across Singapore. | `/collections/{collectionId}/air-temperature` |
| **Collection** | Metadata describing the realtime weather collection (collection id `1459`), including the datasets it groups together; backed by `/collections/{id}/metadata`. | `/collections/{collectionId}/metadata` |
| **Rainfall** | Real-time rainfall measurements reported per weather station. | `/collections/{collectionId}/rainfall` |
| **RelativeHumidity** | Real-time relative humidity percentages from NEA weather stations. | `/collections/{collectionId}/relative-humidity` |
| **WindDirection** | Real-time wind direction readings from NEA weather stations. | `/collections/{collectionId}/wind-direction` |
| **WindSpeed** | Real-time wind speed readings from NEA weather stations. | `/collections/{collectionId}/wind-speed` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from realtimeweather_sdk import RealtimeWeatherSDK

client = RealtimeWeatherSDK({})

# List all airtemperatures
airtemperatures, err = client.AirTemperature(None).list(None, None)
```

### PHP

```php
<?php
require_once 'realtimeweather_sdk.php';

$client = new RealtimeWeatherSDK([]);

// List all airtemperatures
[$airtemperatures, $err] = $client->AirTemperature(null)->list(null, null);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/realtime-weather-sdk/go"

client := sdk.NewRealtimeWeatherSDK(map[string]any{})

// List all airtemperatures
airtemperatures, err := client.AirTemperature(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "RealtimeWeather_sdk"

client = RealtimeWeatherSDK.new({})

# List all airtemperatures
airtemperatures, err = client.AirTemperature(nil).list(nil, nil)
```

### Lua

```lua
local sdk = require("realtime-weather_sdk")

local client = sdk.new({})

-- List all airtemperatures
local airtemperatures, err = client:AirTemperature(nil):list(nil, nil)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = RealtimeWeatherSDK.test()
const result = await client.AirTemperature().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = RealtimeWeatherSDK.test(None, None)
result, err = client.AirTemperature(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = RealtimeWeatherSDK::test(null, null);
[$result, $err] = $client->AirTemperature(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.AirTemperature(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = RealtimeWeatherSDK.test(nil, nil)
result, err = client.AirTemperature(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:AirTemperature(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Realtime Weather API

- Upstream: [https://data.gov.sg/collections/1459/view](https://data.gov.sg/collections/1459/view)

- Data is published under the Singapore Open Data Licence via data.gov.sg.
- Attribution to the National Environment Agency (NEA) and data.gov.sg is expected when reusing the data.
- Review the full licence terms on data.gov.sg before redistributing or building commercial products.

---

Generated from the Realtime Weather API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
