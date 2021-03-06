<?php

namespace App\Controller\Pages;

use \App\Utils\View;


class Error extends Page{
    public static function getError404() {
        $content =  View::render('pages/templates/404',[]);
        return parent::getErrorPage('Page not found | New Games',$content);
    }

    public static function getError403() {
        $content =  View::render('pages/templates/403',[]);
        return parent::getErrorPage('Forbidden | New Games',$content);
    }
   
}