/**
 * Copyright 2024 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See LICENSE for license details.
 */

var config = {
    map: {
        '*':
            {
                "Magento_ReCaptchaCheckout/template/reCaptcha.html": "ReCaptchaVersion3Invisible_CheckoutTextOnly/template/reCaptcha.html"
            }
    },
    config: {
        mixins: {
            'Magento_ReCaptchaCheckout/js/reCaptchaCheckout': {
                'ReCaptchaVersion3Invisible_CheckoutTextOnly/js/reCaptchaCheckout-mixin': true
            }
        }
    }
};

