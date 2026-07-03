<?php
declare(strict_types=1);

// Rainfall entity test

require_once __DIR__ . '/../realtimeweather_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RainfallEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = RealtimeWeatherSDK::test(null, null);
        $ent = $testsdk->Rainfall(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = rainfall_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "rainfall." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set REALTIMEWEATHER_TEST_RAINFALL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $rainfall_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.rainfall")));
        $rainfall_ref01_data = null;
        if (count($rainfall_ref01_data_raw) > 0) {
            $rainfall_ref01_data = Helpers::to_map($rainfall_ref01_data_raw[0][1]);
        }

        // LIST
        $rainfall_ref01_ent = $client->Rainfall(null);
        $rainfall_ref01_match = [
            "collection_id" => $setup["idmap"]["collection01"],
        ];

        [$rainfall_ref01_list_result, $err] = $rainfall_ref01_ent->list($rainfall_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($rainfall_ref01_list_result);

    }
}

function rainfall_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/rainfall/RainfallTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = RealtimeWeatherSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["rainfall01", "rainfall02", "rainfall03", "collection01", "collection02", "collection03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("REALTIMEWEATHER_TEST_RAINFALL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "REALTIMEWEATHER_TEST_RAINFALL_ENTID" => $idmap,
        "REALTIMEWEATHER_TEST_LIVE" => "FALSE",
        "REALTIMEWEATHER_TEST_EXPLAIN" => "FALSE",
        "REALTIMEWEATHER_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["REALTIMEWEATHER_TEST_RAINFALL_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["REALTIMEWEATHER_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["REALTIMEWEATHER_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new RealtimeWeatherSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["REALTIMEWEATHER_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["REALTIMEWEATHER_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
