<?php
require_once __DIR__ . '/../lib/Doctrine.php';
$config = parse_ini_file( __DIR__ . "/../config/config.ini");
spl_autoload_register(array('Doctrine', 'autoload'));
$conn = Doctrine_Manager::connection('mysql://'. $config['user'] .':'. $config['pass'] .'@'. $config['host'] .':'.$config['port'].'/'. $config['db'], 'doctrine');
$conn->setCharset('utf8');
Doctrine_Core::generateModelsFromDb('../models', array('doctrine'), array('generateTableClasses' => true));