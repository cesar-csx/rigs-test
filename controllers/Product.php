<?php

class Product{
  protected $config;

  public function __construct(){
    $this->config = parse_ini_file( __DIR__ . "/../config/config.ini");
  }

  
}