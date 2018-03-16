<?php
error_reporting(-1);
ini_set('display_errors', 1);
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');
}

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
        header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
}

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/lib/doctrine_bootstrap.php';
require_once __DIR__ . '/controllers/autoload.php';

$configuration = ['settings' => ['displayErrorDetails' => true]];

$c = new \Slim\Container($configuration);

$c['errorHandler'] = function ($c) {
    return function ($request, $response, $exception) use ($c) {
        $data = [
            'code' => $exception->getCode(),
            'message' => $exception->getMessage(),
            'file' => $exception->getFile(),
            'line' => $exception->getLine(),
            'trace' => explode("\n", $exception->getTraceAsString())
        ];

        return $c->get('response')->withStatus(500)
                 ->withHeader('Content-Type', 'application/json')
                 ->write(json_encode($data));
    };
};

$c['view'] = function ($container) {
    return new \Slim\Views\PhpRenderer('views/');
};

$app = new \Slim\App($c);

// General
require_once 'routes/misc.php';

// Users
require_once 'routes/users.php';

// Products
require_once 'routes/products.php';

$app->run();