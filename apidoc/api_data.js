define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./apidoc/main.js",
    "group": "C__xampp_htdocs_rigs_apidoc_main_js",
    "groupTitle": "C__xampp_htdocs_rigs_apidoc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/products",
    "title": "Crea nuevos productos",
    "name": "CreateProducts",
    "group": "Productos",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso del usuario (Este token se obtiene al hacer login correctamente)</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "npc",
            "description": "<p>NPC del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "stock",
            "description": "<p>Existencia del producto</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "price",
            "description": "<p>Precio del producto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "product",
            "description": "<p>Objeto producto. Contiene la información del producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "product.id",
            "description": "<p>ID del producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.name",
            "description": "<p>Nombre del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.npc",
            "description": "<p>NPC del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.stock",
            "description": "<p>Existencia del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.price",
            "description": "<p>Existencia del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.likes",
            "description": "<p>Número de &quot;Likes&quot; del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.last_update",
            "description": "<p>Fecha de última actualización del producto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "POST /products:",
          "content": "{\n      \"name\": \"Producto 2\",\n      \"npc\": \"XX\",\n      \"stock\": \"53\",\n      \"price\": \"1000.00\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"product\": {\n      \"id\": \"3\",\n      \"name\": \"Producto 2\",\n      \"npc\": \"XX\",\n      \"stock\": \"53\",\n      \"price\": \"1000.00\",\n      \"likes\": \"0\",\n      \"last_update\": \"2018-03-16 12:03:40\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Errors",
            "description": "<p>Objeto que contiene el nombre del campo y mensaje que genera error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Errors-Response",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"errors\": {\n    \"name\": \"El nombre es un campo requerido\",\n    \"npc\": \"Este es un campo requerido\",\n    \"stock\": \"El stock es campo requerido\",\n    \"price\": \"El precio es un campo requerido\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/products.php",
    "groupTitle": "Productos"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Obtiene la información de un producto por ID",
    "name": "GetProduct",
    "group": "Productos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID del producto</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "product",
            "description": "<p>Objeto producto. Contiene la información del producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "product.id",
            "description": "<p>ID del producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.name",
            "description": "<p>Nombre del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.npc",
            "description": "<p>NPC del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.stock",
            "description": "<p>Existencia del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.price",
            "description": "<p>Existencia del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.likes",
            "description": "<p>Número de &quot;Likes&quot; del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "product.last_update",
            "description": "<p>Fecha de última actualización del producto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"product\": {\n      \"id\": \"3\",\n      \"name\": \"Producto 2\",\n      \"npc\": \"XX\",\n      \"stock\": \"53\",\n      \"price\": \"1000.00\",\n      \"likes\": \"0\",\n      \"last_update\": \"2018-03-16 12:03:40\"\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Errors",
            "description": "<p>Objeto que contiene el nombre del campo y mensaje que genera error</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Errors-Response",
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"errors\": {\n    \"name\": \"El nombre es un campo requerido\",\n    \"npc\": \"Este es un campo requerido\",\n    \"stock\": \"El stock es campo requerido\",\n    \"price\": \"El precio es un campo requerido\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/products.php",
    "groupTitle": "Productos"
  },
  {
    "type": "post",
    "url": "/users/login",
    "title": "Inicio de sesión del usuario",
    "name": "LoginUsers",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>e-mail del usuario. Nota, es obligatorio si no se captura el número de ejecutivo.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del usuario.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "id",
            "description": "<p>ID del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre(s) del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico del usuario.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "token",
            "description": "<p>Cadena hash aleatoria para realizar peticiones a la API, una vez logueado en el sistema.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "POST /users/login:",
          "content": "{\n  \"email\": \"usuario@rigs.com.mx\"\n  \"password\": \"password123\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"name\": \"César\",\n  \"last_name\": \"Sánchez de Tagle\",\n  \"email\": \"usuario@rigs.com.mx\",\n  \"token\": \"G4Dab26745pd485bPhuvXuL4E2oEAt4k15ZA5Vk51dIl0qZLowzCa\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>El email capturado no está registrado en el sistema.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectPassword",
            "description": "<p>El password capturado es incorrecto</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNotFound-Response",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "IncorrectPassword-Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"IncorrectPassword\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.php",
    "groupTitle": "Usuarios"
  }
] });
