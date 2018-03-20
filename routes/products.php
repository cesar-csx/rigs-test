<?php

/**
 * @api {get} /products?page=:page&sort=:sort&search=:seach Obtiene la lista de productos.
 * @apiName GetProducts
 * @apiGroup Productos
 *
 *
 * @apiParam {int} [page] Página que se desea consultar (si no se recibe este parámetro, por defecto se regresará la primera página)
 * @apiParam {string} [sort] Ordenamiento que se le desea dar (solo acepta dos posibles valores: "name" o "likes"). Si no se recibe este parámetro por defecto el ordenamiento es por nombre del producto.
 * @apiParam {string} [search] Parámetro de búsqueda. Se buscará alguna coincidencia en el nombre del producto si es que se recibe este parámetro.
 *
 * @apiSuccess {object} products Listado de productos paginado, ordenado y con filtros (si es que se agregó a la petición)
 * @apiSuccess {int} products.id ID del producto.
 * @apiSuccess {string} products.name Nombre del producto
 * @apiSuccess {string} products.npc  NPC del producto
 * @apiSuccess {string} products.stock Existencia del producto
 * @apiSuccess {string} products.price Precio del producto
 * @apiSuccess {string} products.likes Número de "Likes" del producto
 * @apiSuccess {int} total_products Número total de productos encontrados en esta petición.
 * @apiSuccess {string} total_pages Número total de páginas de esta petición. Es un valor de referencia para saber el número máximo de páginas que se puede solicitar con los parámetros dados.
 *
 * @apiSuccessExample Success-Response GET /products:
 *     HTTP/1.1 200 OK
 *     {
 *        "products": [
 *           {
 *             "id": "1",
 *             "name": "Producto 1",
 *             "npc": "CCC",
 *             "stock": "53",
 *             "price": "1200.00",
 *             "likes": "27",
 *           },
 *           {
 *             "id": "2",
 *             "name": "Producto 2",
 *             "npc": "AAA",
 *             "stock": "20",
 *             "price": "850.00",
 *             "likes": "70",
 *           },
 *           ...
 *           {
 *             "id": "246",
 *             "name": "Radiador Nuevo",
 *             "npc": "RRR",
 *             "stock": "15",
 *             "price": "1000.00",
 *             "likes": "120",
 *           },
 *        ],
 *        total_products: 235,
 *        total_pages: 24
 *     }
 *
 * @apiSuccessExample Success-Response GET /products?page=2&sort=likes%search=pro
 *     HTTP/1.1 200 OK
 *     {
 *        "products": [
 *           {
 *             "id": "1",
 *             "name": "Producto 8",
 *             "npc": "CCC",
 *             "stock": "10",
 *             "price": "1100.00",
 *             "likes": "120",
 *           },
 *           {
 *             "id": "2",
 *             "name": "Producto 13",
 *             "npc": "AAA",
 *             "stock": "15",
 *             "price": "200.00",
 *             "likes": "70",
 *           },
 *           ...
 *           {
 *             "id": "246",
 *             "name": "Radiador Profesional",
 *             "npc": "RRR",
 *             "stock": "15",
 *             "price": "1000.00",
 *             "likes": "35",
 *           },
 *        ],
 *        total_products: 17,
 *        total_pages: 2
 *     }
 *
 *
 *
 */
$app->get('/products', function($request, $response){
	try{
		$params = $request->getQueryParams();
		$page = isset($params['page'])? $params['page']: 1;
		$order = isset($params['sort'])? $params['sort']: 1;
		$filter = isset($params['search'])?$params['search']:'';

		$product = new Product();
		$result = $product->getProducts($page, $order, $filter);

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;
	} catch(Exception $e){
		$response->getBody()
        ->write(json_encode(array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )));
		$newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus(500);
		return $newResponse;
	}
});

/**
 * @api {post} /products Crea nuevos productos
 * @apiName CreateProducts
 * @apiGroup Productos
 *
 * @apiHeader {string} Authorization Token de acceso del usuario (Este token se obtiene al hacer login correctamente)
 *
 * @apiParam {string} name Nombre del producto
 * @apiParam {string} npc NPC del producto
 * @apiParam {string} stock Existencia del producto
 * @apiParam {string} price Precio del producto
 *
 * @apiSuccess {object} product Objeto producto. Contiene la información del producto.
 * @apiSuccess {int} product.id ID del producto.
 * @apiSuccess {string} product.name Nombre del producto
 * @apiSuccess {string} product.npc  NPC del producto
 * @apiSuccess {string} product.stock Existencia del producto
 * @apiSuccess {string} product.price Existencia del producto
 * @apiSuccess {string} product.likes Número de "Likes" del producto
 * @apiSuccess {string} product.last_update Fecha de última actualización del producto
 *
 * @apiSuccessExample POST /products:
 *     {
 *           "name": "Producto 2",
 *           "npc": "XX",
 *           "stock": "53",
 *           "price": "1000.00"
 *     }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *        "product": {
 *           "id": "3",
 *           "name": "Producto 2",
 *           "npc": "XX",
 *           "stock": "53",
 *           "price": "1000.00",
 *           "likes": "0",
 *           "last_update": "2018-03-16 12:03:40"
 *        }
 *     }
 *
 * @apiError Errors Objeto que contiene el nombre del campo y mensaje que genera error
 *
 * @apiErrorExample Errors-Response
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "errors": {
 *         "name": "El nombre es un campo requerido",
 *         "npc": "Este es un campo requerido",
 *         "stock": "El stock es campo requerido",
 *         "price": "El precio es un campo requerido"
 *       }
 *     }
 *
 */
$app->post('/products', function($request, $response){
	try{
		$Auth = new Auth();
		$user = $Auth->authorize($request->getHeader('Authorization'), $response);
		$data = $request->getParsedBody();

		if($user->isAdmin()){
			$product = new Product();
			$result = $product->create($data);
		} else{
			$result = Misc::getError('Unauthorized');
		}

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;
	} catch(Exception $e){
		$response->getBody()
        ->write(json_encode(array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )));
		$newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus(500);
		return $newResponse;
	}
});

/**
 * @api {get} /products/:id Obtiene la información de un producto por ID
 * @apiName GetProduct
 * @apiGroup Productos
 *
 * @apiParam {int} id ID del producto

 * @apiSuccess {object} product Objeto producto. Contiene la información del producto.
 * @apiSuccess {int} product.id ID del producto.
 * @apiSuccess {string} product.name Nombre del producto
 * @apiSuccess {string} product.npc  NPC del producto
 * @apiSuccess {string} product.stock Existencia del producto
 * @apiSuccess {string} product.price Existencia del producto
 * @apiSuccess {string} product.likes Número de "Likes" del producto
 * @apiSuccess {string} product.last_update Fecha de última actualización del producto
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *        "product": {
 *           "id": "3",
 *           "name": "Producto 2",
 *           "npc": "XX",
 *           "stock": "53",
 *           "price": "1000.00",
 *           "likes": "0",
 *           "last_update": "2018-03-16 12:03:40"
 *        }
 *     }
 *
 * @apiError Errors Objeto que contiene el nombre del campo y mensaje que genera error
 *
 * @apiErrorExample Errors-Response
 *     HTTP/1.1 404 Bad Request
 *     {
 *       "errors": {
 *         "name": "El nombre es un campo requerido",
 *         "npc": "Este es un campo requerido",
 *         "stock": "El stock es campo requerido",
 *         "price": "El precio es un campo requerido"
 *       }
 *     }
 *
 */
$app->get('/products/{id}', function($request, $response){
	try{
		$Auth = new Auth();
		$user = $Auth->authorize($request->getHeader('Authorization'), $response);
		$id = $request->getAttribute('id');

		if($user->isAdmin()){
			$product = new Product();
			$result = $product->getProduct($id);
		} else{
			$result = Misc::getError('Unauthorized');
		}

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;
	} catch(Exception $e){
		$response->getBody()
        ->write(json_encode(array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )));
		$newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus(500);
		return $newResponse;
	}
});

/**
 * @api {put} /products/like/:id Like a un producto
 * @apiName LikeProducts
 * @apiGroup Productos
 *
 * @apiHeader {string} Authorization Token de acceso del usuario (Este token se obtiene al hacer login correctamente)
 *
 * @apiParam {string} id ID del producto al que se desea hacer like
 *
 * @apiSuccess {string} result Si la petición se realizó correctamente retornará "success".
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "result": "success"
 *     }
 *
 * @apiError NotRegularUser Error al intentar hacer la petición como administrador. Solo los usuarios registrados pueden dar like a un producto.
 *
 * @apiErrorExample NotRegularUser-Response
 *     HTTP/1.1 403 Forbidden
 *     {
 *         "error": {
 *           "code": "NotRegularUser",
 *           "message": "El usuario que intenta realizar la petición es administrador. Solo los usuarios registrados pueden realizar esta acción."
 *         }
 *    }
 *
 */

$app->put('/products/like/{id}', function($request, $response){
	try{
		$Auth = new Auth();
		$user = $Auth->authorize($request->getHeader('Authorization'), $response);
		$id = $request->getAttribute('id');

		if(!$user->isAdmin()){
			$product = new Product();
			$result = $product->likeProduct($id);
		} else{
			$result = Misc::getError('NotRegularUser');
		}

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;
	} catch(Exception $e){
		$response->getBody()
        ->write(json_encode(array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )));
		$newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus(500);
		return $newResponse;
	}
});

/**
 * @api {put} /products/:id Modifica el precio de un producto
 * @apiName EditProducts
 * @apiGroup Productos
 *
 * @apiHeader {string} Authorization Token de acceso del usuario (Este token se obtiene al hacer login correctamente)
 *
 * @apiParam {string} id ID del producto al que se desea ediar el precio
 * @apiParam {number} price Nuevo precio que se desea establecer al producto. Este parámetro debe enviarse en la petición como un objeto JSON.
 *
 * @apiSuccess {string} result Si la petición se realizó correctamente retornará "success".
 *
 * @apiSuccessExample PUT /products/1:
 *     {
 *        "price": 75.50
 *     }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "result": "success"
 *     }
 *
 * @apiError Unauthorized Error al intentar hacer la petición como usuario registrado. Solo los adminsitradores pueden modificar el precio a un producto.
 *
 * @apiErrorExample Unauthorized-Response
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": {
 *         "code": "Unauthorized",
 *         "message": "El usuario que intenta realizar la petición no es administrador."
 *       }
 *     }
 *
 */

$app->put('/products/{id}', function($request, $response){
	try{
		$Auth = new Auth();
		$user = $Auth->authorize($request->getHeader('Authorization'), $response);
		$id = $request->getAttribute('id');
		$price = $request->getParsedBody()['price'];

		if($user->isAdmin()){
			$product = new Product();
			$result = $product->updatePrice($id, $price);
		} else{
			$result = Misc::getError('Unauthorized');
		}

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;
	} catch(Exception $e){
		$response->getBody()
        ->write(json_encode(array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )));
		$newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus(500);
		return $newResponse;
	}
});

/**
 * @api {delete} /products/:id Elimina un producto
 * @apiName DeleteProducts
 * @apiGroup Productos
 *
 * @apiHeader {string} Authorization Token de acceso del usuario (Este token se obtiene al hacer login correctamente)
 *
 * @apiParam {string} id ID del producto al que se desea eliminar
 *
 * @apiSuccess {string} result Si la petición se realizó correctamente retornará "success".
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "result": "success"
 *     }
 *
 * @apiError Unauthorized Error al intentar hacer la petición como usuario registrado. Solo los adminsitradores pueden eliminar productos.
 *
 * @apiErrorExample Unauthorized-Response
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": {
 *         "code": "Unauthorized",
 *         "message": "El usuario que intenta realizar la petición no es administrador."
 *       }
 *     }
 *
 */

$app->delete('/products/{id}', function($request, $response){
	try{
		$Auth = new Auth();
		$user = $Auth->authorize($request->getHeader('Authorization'), $response);
		$id = $request->getAttribute('id');

		if($user->isAdmin()){
			$product = new Product();
			$result = $product->delete($id);
		} else{
			$result = Misc::getError('Unauthorized');
		}

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;
	} catch(Exception $e){
		$response->getBody()
        ->write(json_encode(array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )));
		$newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus(500);
		return $newResponse;
	}
});


/**
 * @api {post} /products/buy Comprar un producto
 * @apiName BuyProducts
 * @apiGroup Productos
 *
 * @apiHeader {string} Authorization Token de acceso del usuario (Este token se obtiene al hacer login correctamente)
 *
 * @apiParam {string} product_id ID del producto que se desea comprar.
 * @apiParam {number} quantity Cantidad de productos que se desea comprar.
 *
 * @apiSuccess {string} result Si la petición se realizó correctamente retornará "success".
 *
 * @apiSuccessExample PUT /products/1:
 *     {
 *        "price": 75.50
 *     }
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "result": "success"
 *     }
 *
 * @apiError NotRegularUser Error al intentar hacer la petición como usuario registrado. Solo los adminsitradores pueden modificar el precio a un producto.
 *
 * @apiErrorExample NotRegularUser-Response
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": {
 *         "code": "NotRegularUser",
 *         "message": "Error al intentar hacer la petición como administrador. Solo los usuarios registrados pueden dar like a un producto."
 *       }
 *     }
 *
 *
 * @apiError NoStockProduct Error cuando el stock del producto no logra satisfacer la cantidad de productos comprados.
 *
 * @apiErrorExample NoStockProduct-Response
 *     HTTP/1.1 400 Bad Request
 *   {
 *       "error": {
 *          "code": "NoStockProduct",
 *          "message": "El producto se encuentra agotado por el momento."
 *       }
 *   }
 *
 */

$app->post('/products/buy', function($request, $response){
	try{
		$Auth = new Auth();
		$user = $Auth->authorize($request->getHeader('Authorization'), $response);
		$data = $request->getParsedBody();

		if(!$user->isAdmin()){
			if(isset($data['product_id']) && isset($data['quantity'])){
				$product = new Product();
				$result = $product->buyProduct(
					$user->id,
					$data['product_id'],
					$data['quantity']
				);
			} else{
				$result = Misc::getError('MissingField');
			}
		} else{
			$result = Misc::getError('NotRegularUser');
		}

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;
	} catch(Exception $e){
		$response->getBody()
        ->write(json_encode(array(
            'code' => $e->getCode(),
            'message' => $e->getMessage(),
            'track' => $e->getTraceAsString()
        )));
		$newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus(500);
		return $newResponse;
	}
});