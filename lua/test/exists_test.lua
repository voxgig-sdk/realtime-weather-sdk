-- RealtimeWeather SDK exists test

local sdk = require("realtime-weather_sdk")

describe("RealtimeWeatherSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
