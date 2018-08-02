define([
    'jquery',
    'ko',
    'uiComponent',
    'mage/storage',
    'Bkademy_Webpos/js/model/url-builder',
    'mage/translate',
    'Bkademy_Webpos/js/model/customers/customer',
    'Bkademy_Webpos/js/action/customers/action',
], function ($, ko, Component, storage, urlBuilder, $t, customerVar, customerAction) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Bkademy_Webpos/customer/customer-view',
        },

        customerData: customerVar.customerData,
        customerGroupArray: customerVar.customerGroupArray,

        currentFirstName: customerVar.currentFirstName,
        currentLastName: customerVar.currentLastName,
        currentEmail: customerVar.currentEmail,
        currentGroupId: customerVar.currentGroupId,
        currentWebsiteId: customerVar.currentWebsiteId,

        initialize: function () {
            this._super();
        },

        /* Save Customer Information When Edit*/
        saveInformation: function () {
            var self = this;
            if (this.validateForm('#customer-edit-form')) {
                var customerData = this.customerData.call();
                customerData.firstname = this.currentFirstName();
                customerData.lastname = this.currentLastName();
                customerData.full_name = this.currentFirstName() + ' ' + this.currentLastName();
                customerData.email = this.currentEmail();
                customerData.group_id = this.currentGroupId();
                customerData.website_id = this.currentWebsiteId();

                var params = {};
                var serviceUrl = urlBuilder.createUrl('/webpos/customers/'+ customerData.id, params);
                // console.log(serviceUrl);
                var payload = {
                    customer: {
                        firstname: customerData.firstname,
                        lastname: customerData.lastname,
                        email: customerData.email,
                        group_id: customerData.group_id,
                        website_id: customerData.website_id,
                    }
                };
                storage.put(
                    serviceUrl, JSON.stringify(payload)
                ).done(function (response) {
                    customerAction().showList(1);
                    // console.log(response);
                }).fail(function (response) {

                }).always(function (response){

                });
            }
        },

        /* Validation Form*/
        validateForm: function (form) {
            return true;
            return $(form).validation() && $(form).validation('isValid');
        },
    });
});

