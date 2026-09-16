# RealtimeWeather SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module RealtimeWeatherFeatures
  def self.make_feature(name)
    case name
    when "base"
      RealtimeWeatherBaseFeature.new
    when "ratelimit"
      RealtimeWeatherRatelimitFeature.new
    when "retry"
      RealtimeWeatherRetryFeature.new
    when "test"
      RealtimeWeatherTestFeature.new
    when "timeout"
      RealtimeWeatherTimeoutFeature.new
    else
      RealtimeWeatherBaseFeature.new
    end
  end
end
