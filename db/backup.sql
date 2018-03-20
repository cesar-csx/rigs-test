SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `npc` varchar(50) DEFAULT NULL,
  `stock` int(11) NOT NULL DEFAULT '0',
  `price` float(10,2) NOT NULL DEFAULT '0.00',
  `likes` int(11) NOT NULL DEFAULT '0',
  `last_update` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `products` (`id`, `name`, `npc`, `stock`, `price`, `likes`, `last_update`) VALUES
(1,	'Producto Estrella',	'XX',	77,	75.90,	7,	'2018-03-17 07:32:27'),
(2,	'Producto original de RIGS',	'XX',	200,	5.00,	3,	'2018-03-20 01:49:19'),
(3,	'Nuevo carburador',	'YYY',	50,	850.00,	0,	'2018-03-20 01:53:21'),
(4,	'Neumático 14 pulgadas',	'ZZZ',	50,	1030.00,	13,	'2018-03-20 02:27:06'),
(5,	'Abanico para el auto',	'AAA',	2000,	250.00,	0,	'2018-03-20 02:30:36');

DROP TABLE IF EXISTS `purchases_log`;
CREATE TABLE `purchases_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `response` text,
  `date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `purchases_log_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `purchases_log_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `purchases_log` (`id`, `user_id`, `product_id`, `quantity`, `response`, `date`) VALUES
(1,	1,	4,	4,	'{\"result\":\"success\"}	',	'2018-03-18 08:02:17'),
(2,	1,	4,	16,	'{\"result\":\"success\"}	',	'2018-03-18 08:05:37'),
(3,	1,	4,	16,	'{\"result\":\"success\"}',	'2018-03-18 08:06:50'),
(4,	1,	4,	3,	'{\"result\":\"success\"}',	'2018-03-18 08:07:36'),
(5,	1,	4,	16,	'{\"result\":\"success\"}',	'2018-03-20 10:42:12');

DROP TABLE IF EXISTS `tokens`;
CREATE TABLE `tokens` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `token` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tokens_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `tokens` (`id`, `token`, `user_id`, `updated_at`) VALUES
(1,	'8EXbf00845pd485bPhuvXueaUvaYaIG//isT63lAZr7L1V7gbduuu',	1,	'2018-03-16 08:31:19'),
(2,	'8EXbf00845pd485bPhuvXeauUvaYaIG//isT79AIZr7M3V7gbdTYK',	2,	'2018-03-16 08:31:19');

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` enum('admin','regular') NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`id`, `name`, `last_name`, `email`, `password`, `type`) VALUES
(1,	'César',	'Sánchez de Tagle',	'cesar@rigs.io',	'$2y$10$8EXbf00845pd485bPhuvXuZESRW.UvHjyqg8X3O9xDseIrAmCY4YC',	'admin'),
(2,	'Guillermo',	'García',	'guillermo@rigs.io',	'$2y$10$8EXbf00845pd485bPhuvXuZESRW.UvHjyqg8X3O9xDseIrAmCY4YC',	'regular');
