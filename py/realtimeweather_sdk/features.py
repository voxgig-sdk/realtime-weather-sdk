# RealtimeWeather SDK feature factory

from realtimeweather_sdk.feature.base_feature import RealtimeWeatherBaseFeature
from realtimeweather_sdk.feature.test_feature import RealtimeWeatherTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RealtimeWeatherBaseFeature(),
        "test": lambda: RealtimeWeatherTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
