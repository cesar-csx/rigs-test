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

  private function _writeLog($user, $product, $quantity, $response = null){
    try{
      $record = new PurchasesLog();
      $record->user_id = $user;
      $record->product_id = $product;
      $record->quantity = $quantity;
      $record->response = $response;
      $record->date = date('Y-m-d H:i:s');
      return $record->save();
    } catch(Exception $e){
        return array('response' => array('error' => array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )),
        'status' => 500);
    }
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

  public function likeProduct($id){
    try{
        $table = ProductsTable::getInstance();
        $product = $table->get($id);
        if($product){
          $likes = (int)$product->likes;
          $likes++;
          $product->likes = $likes;
          $product->save();
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

  public function buyProduct($user, $product_id, $quantity){
    try{
        $table = ProductsTable::getInstance();
        $product = $table->get($product_id);
        if($product){
          $quantity = (int)$quantity;
          if($product->stock >= $quantity){
            $product->stock = (int)$product->stock - $quantity;
            $product->save();
            $response = array('result' => 'success');
            $this->_writeLog($user, $product, $quantity, json_encode($response));
            return array('response' => $response, 'status' => 200);
          } else{
            return Misc::getError('NoStockProduct');
          }
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


  public function getProducts($page, $sort, $filter){
    try{
      $table = ProductsTable::getInstance();
      $products = $table->getAllProducts($page, $sort, $filter);
      $counter = $table->getTotalProducts($page, $sort, $filter);
      $list = Misc::cleanEntity($products, array('stock', 'last_update'));
      return array('response' => array(
        'products' => $list,
        'total_products' => $counter['total_records'],
        'total_pages' => $counter['total_pages'],
      ), 'status' => 200);
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