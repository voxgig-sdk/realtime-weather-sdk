# ProjectName SDK exists test

import pytest
from realtimeweather_sdk import RealtimeWeatherSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = RealtimeWeatherSDK.test(None, None)
        assert testsdk is not None
