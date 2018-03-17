<?php

class Product{
  protected $config;

  public function __construct(){
    $this->config = parse_ini_file( __DIR__ . "/../config/config.ini");
  }

  public function create($data){
    try{
      $errors = $this->_validate($data);
      if(count($errors)==0){
        $product = new Products();
        foreach ($data as $key => $value) {
          if(isset($product->$key)){
            $product->$key = $value;
          }
        }
        $product->last_update = date('Y-m-d H:i:s');
        $product->save();
        return array('response' => array('product' => $product->toArray()),
        'status' => 201);
      } else{
        return array('response' => array('errors' => $errors),
        'status' => 400);
      }
    } catch(Exception $e){
        return array('response' => array('error' => array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )),
        'status' => 500);
    }
  }

  public function getProduct($id){
    try{
      $product_model = new Products();
      $product = $product_model->getById($id);
      if($product){
        return array('response' => array('product' => $product->toArray()),
        'status' => 200);
      } else{
        $result = Misc::getError('ProductNotFound');
        return $result;
      }
    } catch(Exception $e){
        return array('response' => array('error' => array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )),
        'status' => 500);
    }
  }

  private function _validate($data){
    $errors = [];
    if(!isset($data['name'])){
      $errors['name'] = "El nombre es un campo requerido";
    }
    if(!isset($data['npc'])){
      $errors['npc'] = "Este es un campo requerido";
    }
    if(!isset($data['stock'])){
      $errors['stock'] = "El stock es campo requerido";
    } else if(!is_numeric($data['stock'])){
      $errors['stock'] = "El stock debe ser un campo entero.";
    }
    if(!isset($data['price'])){
      $errors['price'] = "El precio es un campo requerido";
    } else if(!is_numeric($data['stock'])){
      $errors['price'] = "El precio debe ser un campo numérico.";
    }
    return $errors;
  }
}