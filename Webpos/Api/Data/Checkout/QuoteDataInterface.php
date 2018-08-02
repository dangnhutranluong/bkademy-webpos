<?php

namespace Bkademy\Webpos\Api\Data\Checkout;

/**
 * Interface QuoteDataInterface
 * @package Bkademy\Webpos\Api\Data\Checkout
 */
interface QuoteDataInterface
{
    /**#@+
     * Config object data keys
     */

    const KEY_QUOTE_ID = 'quote_id';
    const KEY_ITEMS = 'items';
    const KEY_TOTALS = 'totals';
    const KEY_SHIPPING = 'shipping';
    const KEY_PAYMENT = 'payment';

    /**
     * @param string $quoteId
     * @return $this
     */
    public function setQuoteId($quoteId);

    /**
     * @return string
     */
    public function getQuoteId();

    /**
     * @param \Bkademy\Webpos\Api\Data\Checkout\ShippingDataInterface[] $shipping
     * @return $this
     */
    public function setShipping($shipping);

    /**
     * @return \Bkademy\Webpos\Api\Data\Checkout\ShippingDataInterface[]
     */
    public function getShipping();

    /**
     * @param \Bkademy\Webpos\Api\Data\Checkout\PaymentDataInterface[] $payment
     * @return $this
     */
    public function setPayment($payment);

    /**
     * @return \Bkademy\Webpos\Api\Data\Checkout\PaymentDataInterface[]
     */
    public function getPayment();

    /**
     * @param array $items
     * @return $this
     */
    public function setItems($items);

    /**
     * @return array
     */
    public function getItems();

    /**
     * @param array $totals
     * @return $this
     */
    public function setTotals($totals);

    /**
     * @return array
     */
    public function getTotals();


}
