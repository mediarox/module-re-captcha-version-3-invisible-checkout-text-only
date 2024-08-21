/**
 * Copyright 2024 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See LICENSE for license details.
 */

define(function () {
    'use strict';

    var mixin = {

        /**
         * Checking that reCAPTCHA invisible is in text only mode
         * @returns {Boolean}
         */
        getIsInvisibleRecaptchaTextOnly: function () {
            if (this.settings ===

                void 0) {
                return false;
            }

            return this.settings.rendering.textOnly;
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});

