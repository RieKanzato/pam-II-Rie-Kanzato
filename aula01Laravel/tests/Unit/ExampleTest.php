<?php

namespace Tests\Unit;

use PHPUnit\Framework\TestCase;

class ExampleTest extends TestCase
{

    public function test_that_true_is_true(): void
    {
        $this->assertTrue(true);
    }

    public function test_same(): void
    {
        $this->assertSame('20', 20);
    }

    public function test_equals(): void
    {
        $this->assertEquals(1, 0);
    }
    
    public function teste_assert_false(): void
    {
        $this->assertFalse(true);
    }
}
