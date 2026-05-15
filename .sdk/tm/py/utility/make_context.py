# RealtimeWeather SDK utility: make_context

from core.context import RealtimeWeatherContext


def make_context_util(ctxmap, basectx):
    return RealtimeWeatherContext(ctxmap, basectx)
