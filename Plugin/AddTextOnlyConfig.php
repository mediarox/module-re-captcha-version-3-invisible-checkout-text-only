<?php
/**
 * Copyright 2024 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See LICENSE for license details.
 */
namespace ReCaptchaVersion3Invisible\CheckoutTextOnly\Plugin;

use Magento\ReCaptchaVersion3Invisible\Model\Frontend\UiConfigProvider as Origin;
use ReCaptchaVersion3Invisible\CheckoutTextOnly\Model\Config;

class AddTextOnlyConfig
{
    private Config $config;

    public function __construct(
        Config $config
    )
    {
        $this->config = $config;
    }

    public function afterGet(Origin $subject, $result)
    {
        if (isset($result['rendering'])) {
            $result['rendering']['textOnly'] = $this->config->getTextOnly();
        }
        return $result;
    }
}