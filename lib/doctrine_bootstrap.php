<?php
    require_once __DIR__ . '/Doctrine.php';
    $config = parse_ini_file( __DIR__ . "/../config/config.ini");
    
	spl_autoload_register(array('Doctrine', 'autoload'));
	$conn = Doctrine_Manager::connection('mysql://'. $config['user'] .':'. $config['pass'] .'@'. $config['host'] .':'.$config['port'].'/'. $config['db'], 'doctrine');
	$conn->setCharset('utf8');
	$manager = Doctrine_Manager::getInstance();
	
	$manager->setAttribute(Doctrine_Core::ATTR_MODEL_LOADING, Doctrine_Core::MODEL_LOADING_CONSERVATIVE);
	spl_autoload_register(array('Doctrine_Core', 'modelsAutoload'));
	Doctrine_Core::loadModels(__DIR__ . '/../models');