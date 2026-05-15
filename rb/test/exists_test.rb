# RealtimeWeather SDK exists test

require "minitest/autorun"
require_relative "../RealtimeWeather_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = RealtimeWeatherSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
