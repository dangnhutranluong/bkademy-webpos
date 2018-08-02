define([
    'jquery',
    'uiComponent',
    'mage/storage',
    'ko',
    'Bkademy_Webpos/js/model/url-builder',
    'Bkademy_Webpos/js/model/customers/customer',
    'Bkademy_Webpos/js/action/customers/action',
], function ($, Component, storage, ko, urlBuilder, customerVar, customerAction) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Bkademy_Webpos/customer/customer-list'
        },

        customers: customerVar.customers,
        searchKey: customerVar.searchKey,
        pageSize: customerVar.pageSize,
        curPage: customerVar.curPage,
        isLoading: customerVar.isLoading,
        stopLazyLoad: customerVar.stopLazyLoad,
        isCustomerSelect: customerVar.isCustomerSelect,

        initialize: function () {
            var self = this;
            this._super();
            self.showList(1);
        },

        showList: function (pageNumber) {
            customerAction().showList(pageNumber);
        },
        loadCustomer: function(data, event) {
            let self = this;
            self.isCustomerSelect(data.id);
            customerAction().setData(data);
        },
        filter: function (element, event) {
            if(this.isLoading) {
                return;
            }
            this.stopLazyLoad = false;
            var searchKey = event.target.value;
            var self = this;
            var params = {};
            var serviceUrl = urlBuilder.createUrl('/webpos/customers?searchCriteria[pageSize]='+this.pageSize+
                '&searchCriteria[filterGroups][0][filters][0][field]=email' +
                '&searchCriteria[filterGroups][0][filters][0][value]=%25'+searchKey+'%25'+
                '&searchCriteria[filterGroups][0][filters][0][conditionType]=like'+
                '&searchCriteria[filterGroups][0][filters][1][field]=firstname' +
                '&searchCriteria[filterGroups][0][filters][1][value]=%25'+searchKey+'%25'+
                '&searchCriteria[filterGroups][0][filters][1][conditionType]=like'+
                '&searchCriteria[filterGroups][0][filters][2][field]=lastname' +
                '&searchCriteria[filterGroups][0][filters][2][value]=%25'+searchKey+'%25'+
                '&searchCriteria[filterGroups][0][filters][2][conditionType]=like'
                , params);
            var payload = {};
            storage.get(
                serviceUrl, JSON.stringify(payload)
            ).done(function (response) {
                self.customers(response.items);
                self.curPage(1);
            }).fail(function (response) {

            }).always(function (response){
                self.isLoading = false;
            });
        },
        lazyload: function() {
            if(this.isLoading) {
                return;
            }
            if(this.stopLazyLoad) {
                return;
            }
            var curPage = this.curPage() + 1;
            this.showList(curPage);
        }
    });
});

    