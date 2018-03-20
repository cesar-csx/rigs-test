<?php
class Misc {
    public static function cleanEntity($entity, $removeFields) {
        foreach ($entity as &$element) {
            foreach ($removeFields as $field) {
                unset($element[$field]);
            }
        }
    
        return $entity;
    }

    public static function getError($code){
        switch ($code) {
        	case 'MissingField':
                $description = 'La petición no es correcta, falta uno o mas parámetros, revise los parámetros de su petición.';
                $status = 400;
                break;
            case 'Unauthorized':
                $description = 'El usuario que intenta realizar la petición no es administrador.';
                $status = 403;
                break;
            case 'UserNotFound':
                $description = 'El usuario que capturó no existe en el sistema';
                $status = 404;
                break;
            case 'IncorrectPassword':
                $description = 'El password que capturó es incorrecto.';
                $status = 401;
                break;
            case 'ProductNotFound':
                $description = 'El producto solicitado no se encontró';
                $status = 404;
                break;
            case 'InvalidPrice':
                $description = 'El precio que capturó es inválido. Revise de nuevo sus parámetros';
                $status = 400;
                break;
            case 'NoStockProduct':
                $description = 'El producto se encuentra agotado por el momento.';
                $status = 400;
                break;
                case 'NotRegularUser':
                $description = 'El usuario que intenta realizar la petición es administrador. Solo los usuarios nomrales pueden hacer peticiones al listado.';
                $status = 400;
                break;
            default:
                $description = 'Hubo un error en la petición. Intente de nuevo mas tarde.';
                $status = 400;
                break;
        }
        return array('response' => array('error' => array(
            'code' => $code,
            'message' => $description,
        )),
        'status' => $status);
    }  
}