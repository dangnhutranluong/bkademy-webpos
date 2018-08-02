define([
    'jquery',
    'uiComponent',
    'mage/storage',
    'ko',
    'Bkademy_Webpos/js/model/url-builder',
    'Bkademy_Webpos/js/model/customers/customer',
], function ($, Component, storage, ko, urlBuilder, customerVar) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Bkademy_Webpos/customer/customer-list'
        },

        initialize: function () {
            this._super();
        },

        getData: function(){
            return customerVar.customerData();
        },

        setData: function(data){
            customerVar.customerData(data);
            customerVar.currentFirstName(data.firstname);
            customerVar.currentLastName(data.lastname);
            customerVar.currentEmail(data.email);
            customerVar.currentGroupId(data.group_id);
            customerVar.currentWebsiteId(data.website_id);
        },

        showList: function (pageNumber) {
            var self = this;
            var params = {};
            var serviceUrl = urlBuilder.createUrl('/webpos/customers?searchCriteria[pageSize]='+customerVar.pageSize+'&searchCriteria[currentPage]='+pageNumber, params);
            var payload = {};
            this.isLoading = true;
            storage.get(
                serviceUrl, JSON.stringify(payload)
            ).done(function (response) {
                self.addItemsToList(response.items);
                customerVar.curPage(pageNumber);
                if(pageNumber * customerVar.pageSize >= response.total_count) {
                    customerVar.stopLazyLoad = true;
                }
                if(!self.getData() || !self.getData().id) {
                    customerVar.isCustomerSelect(response.items[0].id);
                    self.setData(response.items[0]);
                }
            }).fail(function (response) {

            }).always(function (response){
                customerVar.isLoading = false;
            });
        },

        addItemsToList: function(items){
            customerVar.customers([]);
            let customers = customerVar.customers();
            for(var i in items){
                customers.push(items[i]);
            }
            customerVar.customers(customers);
        },
    });
});

