package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "RealtimeWeather",
			"slug": "realtime-weather",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
		},
		"options": map[string]any{
			"base": "https://api-production.data.gov.sg/v2/public/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"air_temperature": map[string]any{},
				"collection": map[string]any{},
				"rainfall": map[string]any{},
				"relative_humidity": map[string]any{},
				"wind_direction": map[string]any{},
				"wind_speed": map[string]any{},
			},
		},
		"entity": map[string]any{
			"air_temperature": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"short": "Station identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the reading",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "value",
						"short": "The measured value",
						"type": "`$NUMBER`",
					},
				},
				"name": "air_temperature",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/air-temperature",
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "air-temperature",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"collections",
									"{collection_id}",
									"air-temperature",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"collection": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "collection",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/metadata",
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "id",
									},
									map[string]any{
										"lit": "metadata",
									},
								},
								"select": map[string]any{
									"$action": "metadata",
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.datasets`",
								},
								"parts": []any{
									"collections",
									"{id}",
									"metadata",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"rainfall": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"short": "Station identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the reading",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "value",
						"short": "The measured value",
						"type": "`$NUMBER`",
					},
				},
				"name": "rainfall",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/rainfall",
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "rainfall",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"collections",
									"{collection_id}",
									"rainfall",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"relative_humidity": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"short": "Station identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the reading",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "value",
						"short": "The measured value",
						"type": "`$NUMBER`",
					},
				},
				"name": "relative_humidity",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/relative-humidity",
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "relative-humidity",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"collections",
									"{collection_id}",
									"relative-humidity",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"wind_direction": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"short": "Station identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the reading",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "value",
						"short": "The measured value",
						"type": "`$NUMBER`",
					},
				},
				"name": "wind_direction",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/wind-direction",
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "wind-direction",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"collections",
									"{collection_id}",
									"wind-direction",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
			"wind_speed": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "stationId",
						"short": "Station identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "date-time",
						"name": "timestamp",
						"short": "Timestamp of the reading",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "double",
						"name": "value",
						"short": "The measured value",
						"type": "`$NUMBER`",
					},
				},
				"name": "wind_speed",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": 1459,
											"kind": "param",
											"name": "collection_id",
											"orig": "collection_id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "date",
											"orig": "date",
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "query",
											"name": "datetime",
											"orig": "datetime",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/collections/{collectionId}/wind-speed",
								"rename": map[string]any{
									"param": map[string]any{
										"collectionId": "collection_id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "collections",
									},
									map[string]any{
										"var": "collection_id",
									},
									map[string]any{
										"lit": "wind-speed",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"collection_id",
										"date",
										"datetime",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"collections",
									"{collection_id}",
									"wind-speed",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{
						[]any{
							"collection",
						},
					},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
