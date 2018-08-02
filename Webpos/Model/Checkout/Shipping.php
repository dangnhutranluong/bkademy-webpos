<?php

namespace Bkademy\Webpos\Model\Checkout;

class Shipping extends \Magento\Framework\DataObject implements \Bkademy\Webpos\Api\Data\Checkout\ShippingDataInterface
{
    /**
     * @param string $code
     * @return $this
     */
    public function setCode($code){
        return $this->setData(self::CODE, $code);
    }

    /**
     * @return string
     */
    public function getCode(){
        return $this->getData(self::CODE);
    }

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle($title){
        return $this->setData(self::TITLE, $title);
    }

    /**
     * @return string
     */
    public function getTitle(){
        return $this->getData(self::TITLE);
    }

    /**
     * @param string $price
     * @return $this
     */
    public function setPrice($price){
        return $this->setData(self::PRICE, $price);
    }

    /**
     * @return string
     */
    public function getPrice(){
        return $this->getData(self::PRICE);
    }
}
