# RealtimeWeather SDK configuration

module RealtimeWeatherConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "RealtimeWeather",
        "slug" => "realtime-weather",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://api-production.data.gov.sg/v2/public/api",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "air_temperature" => {},
          "collection" => {},
          "rainfall" => {},
          "relative_humidity" => {},
          "wind_direction" => {},
          "wind_speed" => {},
        },
      },
      "entity" => {
        "air_temperature" => {
          "fields" => [
            {
              "name" => "stationId",
              "short" => "Station identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "timestamp",
              "short" => "Timestamp of the reading",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "short" => "The measured value",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "air_temperature",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/air-temperature",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "air-temperature",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "collection" => {
          "fields" => [
            {
              "name" => "coverage",
              "short" => "Time coverage of the dataset",
              "type" => "`$STRING`",
            },
            {
              "name" => "datasetId",
              "short" => "Unique identifier for the dataset",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the dataset",
              "type" => "`$STRING`",
            },
            {
              "name" => "type",
              "short" => "Type of dataset",
              "type" => "`$STRING`",
            },
          ],
          "name" => "collection",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/metadata",
                  "parts" => [
                    "collections",
                    "{id}",
                    "metadata",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "id",
                    },
                  },
                  "select" => {
                    "$action" => "metadata",
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body.datasets`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "rainfall" => {
          "fields" => [
            {
              "name" => "stationId",
              "short" => "Station identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "timestamp",
              "short" => "Timestamp of the reading",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "short" => "The measured value",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "rainfall",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/rainfall",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "rainfall",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "relative_humidity" => {
          "fields" => [
            {
              "name" => "stationId",
              "short" => "Station identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "timestamp",
              "short" => "Timestamp of the reading",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "short" => "The measured value",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "relative_humidity",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/relative-humidity",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "relative-humidity",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "wind_direction" => {
          "fields" => [
            {
              "name" => "stationId",
              "short" => "Station identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "timestamp",
              "short" => "Timestamp of the reading",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "short" => "The measured value",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "wind_direction",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/wind-direction",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "wind-direction",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
        "wind_speed" => {
          "fields" => [
            {
              "name" => "stationId",
              "short" => "Station identifier",
              "type" => "`$STRING`",
            },
            {
              "name" => "timestamp",
              "short" => "Timestamp of the reading",
              "type" => "`$STRING`",
            },
            {
              "name" => "value",
              "short" => "The measured value",
              "type" => "`$NUMBER`",
            },
          ],
          "name" => "wind_speed",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "example" => 1459,
                        "kind" => "param",
                        "name" => "collection_id",
                        "orig" => "collection_id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "date",
                        "orig" => "date",
                        "type" => "`$STRING`",
                      },
                      {
                        "kind" => "query",
                        "name" => "datetime",
                        "orig" => "datetime",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/collections/{collectionId}/wind-speed",
                  "parts" => [
                    "collections",
                    "{collection_id}",
                    "wind-speed",
                  ],
                  "rename" => {
                    "param" => {
                      "collectionId" => "collection_id",
                    },
                  },
                  "select" => {
                    "exist" => [
                      "collection_id",
                      "date",
                      "datetime",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [
              [
                "collection",
              ],
            ],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    RealtimeWeatherFeatures.make_feature(name)
  end
end
