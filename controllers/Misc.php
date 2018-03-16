<?php
class Misc {
    public static function cleanEntity($entity, $removeFields) {
        foreach ($removeFields as $field) {
            unset($entity[$field]);
        }
    
        return $entity;
    }
}