<?php
class User{
    protected $config;

    public function __construct(){
        $this->config = parse_ini_file( __DIR__ . "/../config/config.ini");
    }

    public function login($email, $password){
        try{
            if(UsersTable::exists($email)){
                $user = $this->_validatePassword($email, $password);
                if($user){
                    $result = array(
                        'id' => $user->id,
                        'name' => $user->name,
                        'last_name' => $user->last_name,
                        'email' => $user->email,
                        'token' => $user->Tokens->token
                    );
                    return array('response' => $result, 'status' => 200);
                } else{
                    return $this->getError('IncorrectPassword');
                }

                return $result;
            } else{
                return $this->getError('UserNotFound');
            }
        } catch(Exception $exception){
            return array('response' => array('error' => array(
                'code' => $e->getCode(),
                'message' => $e->getMessage(),
                'track' => $e->getTraceAsString()
            )),
            'status' => 500);
        }
    }

    public function getError($code){
        switch ($code) {
            case 'MissingField':
                $description = 'La petición no es correcta, falta uno o mas parámetros.';
                $status = 400;
                break;
            case 'UserNotFound':
                $description = 'El usuario que capturó no existe en el sistema';
                $status = 404;
                break;
            case 'IncorrectPassword':
                $description = 'El password que capturó es incorrecto.';
                $status = 401;
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

    
    private function _validatePassword($email, $password) {
        $salt     = $this->config['salt'];
        $password = crypt($password, $salt);

        $user_model = new Users();

        $user = $user_model->getUser($email, $password);
        return $user;
    }

    public function isAdmin($id){
        $user_model = new Users();
        return $user_model->isAdmin($id)?true:false;
    }
}