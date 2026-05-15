<?php
declare(strict_types=1);

// RealtimeWeather SDK utility: prepare_body

class RealtimeWeatherPrepareBody
{
    public static function call(RealtimeWeatherContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
