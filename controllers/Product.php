<?php

class Product{
  protected $config;

  public function __construct(){
    $this->config = parse_ini_file( __DIR__ . "/../config/config.ini");
  }

  private function _validateProduct($data){
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

  private function _validatePrice($price){
    return (is_numeric($price) && $price > 0)?true:false;
  }

  public function create($data){
    try{
      $errors = $this->_validateProduct($data);
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
      $table = ProductsTable::getInstance();
      $product = $table->get($id);
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

  public function updatePrice($id, $price){
    try{
      if($this->_validatePrice($price)){
        $table = ProductsTable::getInstance();
        $product = $table->get($id);
        if($product){
          $product->price = $price;
          $product->save();
          return array('response' => array('result' => 'success'), 'status' => 200);
        } else{
          return Misc::getError('ProductNotFound');
        }
      } else{
        return Misc::getError('InvalidPrice');
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

   public function delete($id){
    try{
        $table = ProductsTable::getInstance();
        $product = $table->get($id);
        if($product){
          $product->delete();
          return array('response' => array('result' => 'success'), 'status' => 200);
        } else{
          return Misc::getError('ProductNotFound');
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
}