<?php
class User{
    protected $config;

    public function __construct(){
        $this->config = parse_ini_file( __DIR__ . "/../config/config.ini");
    }

    private function _validatePassword($email, $password) {
        $salt     = $this->config['salt'];
        $password = crypt($password, $salt);

        $user_model = new Users();

        $user = $user_model->getUser($email, $password);
        return $user;
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
                    return Misc::getError('IncorrectPassword');
                }

                return $result;
            } else{
                return Misc::getError('UserNotFound');
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

    public function isAdmin($id){
        $user_model = new Users();
        return $user_model->isAdmin($id)?true:false;
    }
}