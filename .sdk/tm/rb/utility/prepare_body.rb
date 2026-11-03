# RealtimeWeather SDK utility: prepare_body
require_relative 'media'
module RealtimeWeatherUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return RealtimeWeatherUtilities.raw_body(ctx.reqdata) if RealtimeWeatherUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
