define(
    [
        'jquery',
        'ko',
    ],
    function ($, ko) {
        "use strict";
        return {
            customers: ko.observableArray([]),
            searchKey: ko.observable(''),
            pageSize: 10,
            curPage: ko.observable(1),
            isLoading: false,
            stopLazyLoad: false,
            isCustomerSelect: ko.observable(0),
            customerViewData: ko.observableArray([]),

            customerData: ko.observableArray([]),
            customerGroupArray: [],

            currentFirstName: ko.observable(''),
            currentLastName: ko.observable(''),
            currentEmail: ko.observable(''),
            currentGroupId: ko.observable(''),
            currentWebsiteId: ko.observable(''),
        }
    }
);
