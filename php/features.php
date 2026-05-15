<?php
declare(strict_types=1);

// RealtimeWeather SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class RealtimeWeatherFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new RealtimeWeatherBaseFeature();
            case "test":
                return new RealtimeWeatherTestFeature();
            default:
                return new RealtimeWeatherBaseFeature();
        }
    }
}
