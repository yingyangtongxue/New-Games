<?php

namespace App\Controller\Pages;

use \App\Utils\View;


class ShoppingCart extends Page{
    public static function getShoppingCart() {
        $content =  View::render('pages/shoppingCart',[]);
        return parent::getPage('Cart | New Games',$content,'cart');
    }
   
}