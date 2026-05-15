<?php
declare(strict_types=1);

// RealtimeWeather SDK utility: feature_hook

class RealtimeWeatherFeatureHook
{
    public static function call(RealtimeWeatherContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
