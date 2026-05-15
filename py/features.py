# RealtimeWeather SDK feature factory

from feature.base_feature import RealtimeWeatherBaseFeature
from feature.test_feature import RealtimeWeatherTestFeature


def _make_feature(name):
    features = {
        "base": lambda: RealtimeWeatherBaseFeature(),
        "test": lambda: RealtimeWeatherTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
