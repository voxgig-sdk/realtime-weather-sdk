<?php
declare(strict_types=1);

// RealtimeWeather SDK base feature

class RealtimeWeatherBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(RealtimeWeatherContext $ctx, array $options): void {}
    public function PostConstruct(RealtimeWeatherContext $ctx): void {}
    public function PostConstructEntity(RealtimeWeatherContext $ctx): void {}
    public function SetData(RealtimeWeatherContext $ctx): void {}
    public function GetData(RealtimeWeatherContext $ctx): void {}
    public function GetMatch(RealtimeWeatherContext $ctx): void {}
    public function SetMatch(RealtimeWeatherContext $ctx): void {}
    public function PrePoint(RealtimeWeatherContext $ctx): void {}
    public function PreSpec(RealtimeWeatherContext $ctx): void {}
    public function PreRequest(RealtimeWeatherContext $ctx): void {}
    public function PreResponse(RealtimeWeatherContext $ctx): void {}
    public function PreResult(RealtimeWeatherContext $ctx): void {}
    public function PreDone(RealtimeWeatherContext $ctx): void {}
    public function PreUnexpected(RealtimeWeatherContext $ctx): void {}
}
