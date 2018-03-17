<?php
/**
 * @api {post} /users/login Inicio de sesión del usuario
 * @apiName LoginUsers
 * @apiGroup Usuarios
 *
 * @apiParam {string} email e-mail del usuario. Nota, es obligatorio si no se captura el número de ejecutivo.
 * @apiParam {string} password Contraseña del usuario.
 *
 * @apiSuccess {int} id ID del usuario.
 * @apiSuccess {string} name Nombre(s) del usuario
 * @apiSuccess {string} email  Correo electrónico del usuario.
 * @apiSuccess {string} token Cadena hash aleatoria para realizar peticiones a la API, una vez logueado en el sistema.
 *
 * @apiSuccessExample POST /users/login:
 *     {
 *       "email": "usuario@rigs.com.mx"
 *       "password": "password123"
 *     }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": "1",
 *       "name": "César",
 *       "last_name": "Sánchez de Tagle",
 *       "email": "usuario@rigs.com.mx",
 *       "token": "G4Dab26745pd485bPhuvXuL4E2oEAt4k15ZA5Vk51dIl0qZLowzCa"
 *     }
 *
 * @apiError UserNotFound El email capturado no está registrado en el sistema.
 * @apiError IncorrectPassword El password capturado es incorrecto
 *
 * @apiErrorExample UserNotFound-Response
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 *
 * @apiErrorExample IncorrectPassword-Response
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "IncorrectPassword"
 *     }
 */
$app->post('/users/login', function ($request, $response){
	try {
		$params = $request->getParsedBody();
		$user = new User();
        if(isset($params['email']) && isset($params['password'])){
            $result = $user->login($params['email'], $params['password']);
        } else{
            $result = Misc::getError('MissingField');
        }

		$response->getBody()->write(json_encode($result['response']));
        $newResponse = $response
        ->withHeader('Content-type', 'application/json; charset=utf-8')
        ->withStatus($result['status']);
		return $newResponse;

	} catch (Exception $e) {
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