define(
    [
        'ko',
        'uiComponent',
        'Bkademy_Webpos/js/model/checkout/checkout',
        'Bkademy_Webpos/js/model/checkout/cart',
        'Bkademy_Webpos/js/model/checkout/cart/totals',
        'Magento_Catalog/js/price-utils',
        'mage/translate',
        'Magento_Ui/js/modal/alert'
    ],
    function (ko, Component, CheckoutModel, CartModel, Totals, PriceUtils, __, alert) {
        "use strict";
        return Component.extend({
            defaults: {
                template: 'Bkademy_Webpos/checkout/checkout'
            },
            loading: CheckoutModel.loading,
            cartTotal: ko.pureComputed(function(){
                return PriceUtils.formatPrice((Totals.getGrandTotal()) ? Totals.getGrandTotal():0, window.webposConfig.priceFormat);
            }),
            selectedShippingTitle: ko.pureComputed(function(){
                return (CheckoutModel.selectedShippingTitle())?CheckoutModel.selectedShippingTitle():"";
            }),
            selectedShippingCode: ko.pureComputed(function(){
                return (CheckoutModel.selectedShippingCode())?CheckoutModel.selectedShippingCode():"";
            }),
            shippingHeader: ko.pureComputed(function() {
                return "Shipping: "+CheckoutModel.selectedShippingTitle();
            }),
            checkoutButtonLabel: ko.pureComputed(function(){
                var label = __("Place Order");
                return label;
            }),
            placeOrder: function(){
                if((!CheckoutModel.paymentCode()) && Totals.getGrandTotal() > 0){
                    alert({
                        title: 'Notice!',
                        content: 'Please select the payment method before continue.',
                        actions: {
                            always: function(){}
                        }
                    });
                    return false;
                }

                if(!CheckoutModel.selectedShippingCode()){
                    alert({
                        title: 'Notice!',
                        content: 'Please select shipping method before continue.',
                        actions: {
                            always: function(){}
                        }
                    });
                    return false;
                    // CheckoutModel.useWebposShipping();
                }

                if(!CartModel.hasQuote()){
                    alert("The quote does not exist");
                    return false;
                }
                CheckoutModel.placeOrder();
                return true;
            },
            afterRenderCheckout: function(){
                CheckoutModel.initDefaultData();
            }
        });
    }
);
