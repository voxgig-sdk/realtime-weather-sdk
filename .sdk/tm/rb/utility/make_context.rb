# RealtimeWeather SDK utility: make_context
require_relative '../core/context'
module RealtimeWeatherUtilities
  MakeContext = ->(ctxmap, basectx) {
    RealtimeWeatherContext.new(ctxmap, basectx)
  }
end
