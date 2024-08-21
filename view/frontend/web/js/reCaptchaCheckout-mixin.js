/**
 * Copyright 2024 (c) mediarox UG (haftungsbeschraenkt) (http://www.mediarox.de)
 * See LICENSE for license details.
 */

define([
    'mage/translate'
], function ($t) {
    'use strict';

    var mixin = {
        urlTemplatePrivacyPolicy: 'https://www.google.com/intl/%1/policies/privacy/',
        urlTemplateConditionsOfUse: 'https://www.google.com/intl/%1/policies/terms/',
        linkTemplate: '<a target="_blank" href="%url">%link-text</a>',
        getIsInvisibleRecaptchaTextOnly: function () {
            if (this.settings === void 0) {
                return false;
            }
            return this.settings.rendering.textOnly;
        },
        getLink: function (url, text) {
            return this.linkTemplate
                .replace('%url', url)
                .replace('%link-text', text);
        },
        getPrivacyPolicyLink: function () {
            return this.getLink(this.getPrivacyPolicyUrl(), $t('Privacy Policy'));
        },
        getConditionsOfUseLink: function () {
            return this.getLink(this.getConditionsOfUseUrl(), $t('Conditions of use'));
        },
        getPrivacyPolicyUrl: function () {
            return this.urlTemplatePrivacyPolicy.replace('%1', this.getLanguage())
        },
        getConditionsOfUseUrl: function () {
            return this.urlTemplateConditionsOfUse.replace('%1', this.getLanguage())
        },
        getLocale: function () {
          return window.LOCALE;
        },
        getLanguage: function () {
            const locale = new Intl.Locale(this.getLocale());
            return locale.language;
        }
    };

    return function (target) {
        return target.extend(mixin);
    };
});

