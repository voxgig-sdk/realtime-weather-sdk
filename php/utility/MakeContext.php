<?php
declare(strict_types=1);

// RealtimeWeather SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class RealtimeWeatherMakeContext
{
    public static function call(array $ctxmap, ?RealtimeWeatherContext $basectx): RealtimeWeatherContext
    {
        return new RealtimeWeatherContext($ctxmap, $basectx);
    }
}
