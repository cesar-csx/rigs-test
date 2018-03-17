<?php
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