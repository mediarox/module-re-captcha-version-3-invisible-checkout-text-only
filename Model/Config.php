<?php
/**
 * Copyright 2024 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See LICENSE for license details.
 */
namespace ReCaptchaVersion3Invisible\CheckoutTextOnly\Model;

use Magento\Framework\App\Config\ScopeConfigInterface;
use Magento\Store\Model\ScopeInterface;

class Config
{
    private ScopeConfigInterface $scopeConfig;
    public const XML_PATH_TEXT_ONLY = 'recaptcha_frontend/type_for/place_order_text_only';

    public function __construct(
        ScopeConfigInterface $scopeConfig
    )
    {
        $this->scopeConfig = $scopeConfig;
    }

    public function getTextOnly(): bool
    {
        return (bool)$this->scopeConfig->getValue(
            self::XML_PATH_TEXT_ONLY,
            ScopeInterface::SCOPE_STORE
        );
    }
}