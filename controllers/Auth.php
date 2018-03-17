<?php
class Auth {
    public function authorize($key, $response) {
        $token = Doctrine_Core::getTable('Tokens')->findOneByToken($key);
        
        if ($token === false) {
            $this->_deny($response);
        }
        
        return $token->Users;
    }
    
    private function _deny($response) {
        http_response_code(401);
        header("Content-type: application/json");
        
        echo json_encode([
            'error' => 'Missing, invalid or expired token present in request. Include an Authorization header'
        ]);
        
        exit();
    }
}