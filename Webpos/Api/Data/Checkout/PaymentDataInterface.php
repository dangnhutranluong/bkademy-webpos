<?php

namespace Bkademy\Webpos\Api\Data\Checkout;

/**
 * Interface ResponseInterface
 * @package Bkademy\Webpos\Api\Data\Checkout
 */
interface PaymentDataInterface
{
    const CODE = 'code';
    const TITLE = 'title';

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
}
