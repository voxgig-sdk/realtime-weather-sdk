<?php
declare(strict_types=1);

// RealtimeWeather SDK utility: feature_add

class RealtimeWeatherFeatureAdd
{
    public static function call(RealtimeWeatherContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
