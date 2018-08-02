<?php

namespace Bkademy\Webpos\Api\Data\Checkout;

/**
 * Interface ResponseInterface
 * @package Bkademy\Webpos\Api\Data\Checkout
 */
interface ShippingDataInterface
{
    const CODE = 'code';
    const TITLE = 'title';
    const PRICE = 'price';

    /**
     * @param string $code
     * @return $this
     */
    public function setCode($code);

    /**
     * @return string
     */
    public function getCode();

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle($title);

    /**
     * @return string
     */
    public function getTitle();

    /**
     * @param string $price
     * @return $this
     */
    public function setPrice($price);

    /**
     * @return string
     */
    public function getPrice();
}
