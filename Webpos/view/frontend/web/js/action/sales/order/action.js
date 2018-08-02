define([
    'jquery',
    'uiComponent',
    'mage/storage',
    'ko',
    'Bkademy_Webpos/js/model/url-builder'
], function ($, Component, storage, ko, urlBuilder) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Bkademy_Webpos/customer/customer-list'
        },

        initialize: function () {
            this._super();
        },

    });
});

