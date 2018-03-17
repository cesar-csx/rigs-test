<?php
class Misc {
    public static function cleanEntity($entity, $removeFields) {
        foreach ($removeFields as $field) {
            unset($entity[$field]);
        }
    
        return $entity;
    }

    public static function getError($code){
        switch ($code) {
        	case 'MissingField':
                $description = 'La petición no es correcta, falta uno o mas parámetros.';
                $status = 400;
                break;
            case 'Unauthorized':
                $description = 'El usuario que intenta realizar la petición no es administrador.';
                $status = 401;
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