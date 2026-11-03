<?php
declare(strict_types=1);

// RealtimeWeather SDK configuration

class RealtimeWeatherConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "RealtimeWeather",
                "slug" => "realtime-weather",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'now' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://api-production.data.gov.sg/v2/public/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "air_temperature" => [],
                    "collection" => [],
                    "rainfall" => [],
                    "relative_humidity" => [],
                    "wind_direction" => [],
                    "wind_speed" => [],
                ],
            ],
            "entity" => [
        'air_temperature' => [
          'fields' => [
            [
              'name' => 'stationId',
              'title' => 'Station Id',
              'type' => '`$STRING`',
              'short' => 'Station identifier',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the reading',
              'format' => 'date-time',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$NUMBER`',
              'short' => 'The measured value',
              'format' => 'double',
            ],
          ],
          'name' => 'air_temperature',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/{collectionId}/air-temperature',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'var' => 'collection_id',
                    ],
                    [
                      'lit' => 'air-temperature',
                    ],
                  ],
                  'parts' => [
                    'collections',
                    '{collection_id}',
                    'air-temperature',
                  ],
                  'rename' => [
                    'param' => [
                      'collectionId' => 'collection_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'collection_id',
                        'orig' => 'collectionId',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 1459,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'date',
                        'orig' => 'date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'collection_id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.collection',
              ],
            ],
          ],
        ],
        'collection' => [
          'fields' => [
            [
              'name' => 'id',
              'title' => 'Id',
              'type' => '`$STRING`',
            ],
          ],
          'id' => [
            'field' => 'id',
            'name' => 'id',
          ],
          'name' => 'collection',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/{collectionId}/metadata',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'var' => 'id',
                    ],
                    [
                      'lit' => 'metadata',
                    ],
                  ],
                  'parts' => [
                    'collections',
                    '{id}',
                    'metadata',
                  ],
                  'rename' => [
                    'param' => [
                      'collectionId' => 'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.datasets`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'id',
                        'orig' => 'collectionId',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 1459,
                      ],
                    ],
                  ],
                  'select' => [
                    '$action' => 'metadata',
                    'exist' => [
                      'id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'rainfall' => [
          'fields' => [
            [
              'name' => 'stationId',
              'title' => 'Station Id',
              'type' => '`$STRING`',
              'short' => 'Station identifier',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the reading',
              'format' => 'date-time',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$NUMBER`',
              'short' => 'The measured value',
              'format' => 'double',
            ],
          ],
          'name' => 'rainfall',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/{collectionId}/rainfall',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'var' => 'collection_id',
                    ],
                    [
                      'lit' => 'rainfall',
                    ],
                  ],
                  'parts' => [
                    'collections',
                    '{collection_id}',
                    'rainfall',
                  ],
                  'rename' => [
                    'param' => [
                      'collectionId' => 'collection_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'collection_id',
                        'orig' => 'collectionId',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 1459,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'date',
                        'orig' => 'date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'collection_id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.collection',
              ],
            ],
          ],
        ],
        'relative_humidity' => [
          'fields' => [
            [
              'name' => 'stationId',
              'title' => 'Station Id',
              'type' => '`$STRING`',
              'short' => 'Station identifier',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the reading',
              'format' => 'date-time',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$NUMBER`',
              'short' => 'The measured value',
              'format' => 'double',
            ],
          ],
          'name' => 'relative_humidity',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/{collectionId}/relative-humidity',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'var' => 'collection_id',
                    ],
                    [
                      'lit' => 'relative-humidity',
                    ],
                  ],
                  'parts' => [
                    'collections',
                    '{collection_id}',
                    'relative-humidity',
                  ],
                  'rename' => [
                    'param' => [
                      'collectionId' => 'collection_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'collection_id',
                        'orig' => 'collectionId',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 1459,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'date',
                        'orig' => 'date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'collection_id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.collection',
              ],
            ],
          ],
        ],
        'wind_direction' => [
          'fields' => [
            [
              'name' => 'stationId',
              'title' => 'Station Id',
              'type' => '`$STRING`',
              'short' => 'Station identifier',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the reading',
              'format' => 'date-time',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$NUMBER`',
              'short' => 'The measured value',
              'format' => 'double',
            ],
          ],
          'name' => 'wind_direction',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/{collectionId}/wind-direction',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'var' => 'collection_id',
                    ],
                    [
                      'lit' => 'wind-direction',
                    ],
                  ],
                  'parts' => [
                    'collections',
                    '{collection_id}',
                    'wind-direction',
                  ],
                  'rename' => [
                    'param' => [
                      'collectionId' => 'collection_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'collection_id',
                        'orig' => 'collectionId',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 1459,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'date',
                        'orig' => 'date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'collection_id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.collection',
              ],
            ],
          ],
        ],
        'wind_speed' => [
          'fields' => [
            [
              'name' => 'stationId',
              'title' => 'Station Id',
              'type' => '`$STRING`',
              'short' => 'Station identifier',
            ],
            [
              'name' => 'timestamp',
              'title' => 'Timestamp',
              'type' => '`$STRING`',
              'short' => 'Timestamp of the reading',
              'format' => 'date-time',
            ],
            [
              'name' => 'value',
              'title' => 'Value',
              'type' => '`$NUMBER`',
              'short' => 'The measured value',
              'format' => 'double',
            ],
          ],
          'name' => 'wind_speed',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/collections/{collectionId}/wind-speed',
                  'segments' => [
                    [
                      'lit' => 'collections',
                    ],
                    [
                      'var' => 'collection_id',
                    ],
                    [
                      'lit' => 'wind-speed',
                    ],
                  ],
                  'parts' => [
                    'collections',
                    '{collection_id}',
                    'wind-speed',
                  ],
                  'rename' => [
                    'param' => [
                      'collectionId' => 'collection_id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.data`',
                  ],
                  'args' => [
                    'params' => [
                      [
                        'name' => 'collection_id',
                        'orig' => 'collectionId',
                        'type' => '`$INTEGER`',
                        'kind' => 'param',
                        'reqd' => true,
                        'example' => 1459,
                      ],
                    ],
                    'query' => [
                      [
                        'name' => 'date',
                        'orig' => 'date',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                      [
                        'name' => 'datetime',
                        'orig' => 'datetime',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'collection_id',
                    ],
                  ],
                  'response' => [
                    'kind' => 'json',
                    'media' => 'application/json',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [
              [
                '$.main.kit.entity.collection',
              ],
            ],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return RealtimeWeatherFeatures::make_feature($name);
    }
}
