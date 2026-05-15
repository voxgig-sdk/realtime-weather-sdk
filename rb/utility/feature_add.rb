# RealtimeWeather SDK utility: feature_add
module RealtimeWeatherUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
