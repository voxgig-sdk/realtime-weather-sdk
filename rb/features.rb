# RealtimeWeather SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module RealtimeWeatherFeatures
  def self.make_feature(name)
    case name
    when "base"
      RealtimeWeatherBaseFeature.new
    when "test"
      RealtimeWeatherTestFeature.new
    else
      RealtimeWeatherBaseFeature.new
    end
  end
end
