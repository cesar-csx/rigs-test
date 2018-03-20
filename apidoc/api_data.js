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
    "url": "/products/buy",
    "title": "Comprar un producto",
    "name": "BuyProducts",
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
            "field": "product_id",
            "description": "<p>ID del producto que se desea comprar.</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "quantity",
            "description": "<p>Cantidad de productos que se desea comprar.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Si la petición se realizó correctamente retornará &quot;success&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PUT /products/1:",
          "content": "{\n   \"price\": 75.50\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"result\": \"success\"\n}",
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
            "field": "NotRegularUser",
            "description": "<p>Error al intentar hacer la petición como usuario registrado. Solo los adminsitradores pueden modificar el precio a un producto.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoStockProduct",
            "description": "<p>Error cuando el stock del producto no logra satisfacer la cantidad de productos comprados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotRegularUser-Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"code\": \"NotRegularUser\",\n    \"message\": \"Error al intentar hacer la petición como administrador. Solo los usuarios registrados pueden dar like a un producto.\"\n  }\n}",
          "type": "json"
        },
        {
          "title": "NoStockProduct-Response",
          "content": "  HTTP/1.1 400 Bad Request\n{\n    \"error\": {\n       \"code\": \"NoStockProduct\",\n       \"message\": \"El producto se encuentra agotado por el momento.\"\n    }\n}",
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
    "type": "delete",
    "url": "/products/:id",
    "title": "Elimina un producto",
    "name": "DeleteProducts",
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
            "field": "id",
            "description": "<p>ID del producto al que se desea eliminar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Si la petición se realizó correctamente retornará &quot;success&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"result\": \"success\"\n}",
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
            "field": "Unauthorized",
            "description": "<p>Error al intentar hacer la petición como usuario registrado. Solo los adminsitradores pueden eliminar productos.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"code\": \"Unauthorized\",\n    \"message\": \"El usuario que intenta realizar la petición no es administrador.\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/products.php",
    "groupTitle": "Productos"
  },
  {
    "type": "put",
    "url": "/products/:id",
    "title": "Modifica el precio de un producto",
    "name": "EditProducts",
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
            "field": "id",
            "description": "<p>ID del producto al que se desea ediar el precio</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "price",
            "description": "<p>Nuevo precio que se desea establecer al producto. Este parámetro debe enviarse en la petición como un objeto JSON.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Si la petición se realizó correctamente retornará &quot;success&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "PUT /products/1:",
          "content": "{\n   \"price\": 75.50\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"result\": \"success\"\n}",
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
            "field": "Unauthorized",
            "description": "<p>Error al intentar hacer la petición como usuario registrado. Solo los adminsitradores pueden modificar el precio a un producto.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Unauthorized-Response",
          "content": "HTTP/1.1 403 Forbidden\n{\n  \"error\": {\n    \"code\": \"Unauthorized\",\n    \"message\": \"El usuario que intenta realizar la petición no es administrador.\"\n  }\n}",
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
    "type": "get",
    "url": "/products?page=:page&sort=:sort&search=:seach",
    "title": "Obtiene la lista de productos.",
    "name": "GetProducts",
    "group": "Productos",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>Página que se desea consultar (si no se recibe este parámetro, por defecto se regresará la primera página)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "sort",
            "description": "<p>Ordenamiento que se le desea dar (solo acepta dos posibles valores: &quot;name&quot; o &quot;likes&quot;). Si no se recibe este parámetro por defecto el ordenamiento es por nombre del producto.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "search",
            "description": "<p>Parámetro de búsqueda. Se buscará alguna coincidencia en el nombre del producto si es que se recibe este parámetro.</p>"
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
            "field": "products",
            "description": "<p>Listado de productos paginado, ordenado y con filtros (si es que se agregó a la petición)</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "products.id",
            "description": "<p>ID del producto.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "products.name",
            "description": "<p>Nombre del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "products.npc",
            "description": "<p>NPC del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "products.stock",
            "description": "<p>Existencia del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "products.price",
            "description": "<p>Precio del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "products.likes",
            "description": "<p>Número de &quot;Likes&quot; del producto</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "total_products",
            "description": "<p>Número total de productos encontrados en esta petición.</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "total_pages",
            "description": "<p>Número total de páginas de esta petición. Es un valor de referencia para saber el número máximo de páginas que se puede solicitar con los parámetros dados.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response GET /products:",
          "content": "HTTP/1.1 200 OK\n{\n   \"products\": [\n      {\n        \"id\": \"1\",\n        \"name\": \"Producto 1\",\n        \"npc\": \"CCC\",\n        \"stock\": \"53\",\n        \"price\": \"1200.00\",\n        \"likes\": \"27\",\n      },\n      {\n        \"id\": \"2\",\n        \"name\": \"Producto 2\",\n        \"npc\": \"AAA\",\n        \"stock\": \"20\",\n        \"price\": \"850.00\",\n        \"likes\": \"70\",\n      },\n      ...\n      {\n        \"id\": \"246\",\n        \"name\": \"Radiador Nuevo\",\n        \"npc\": \"RRR\",\n        \"stock\": \"15\",\n        \"price\": \"1000.00\",\n        \"likes\": \"120\",\n      },\n   ],\n   total_products: 235,\n   total_pages: 24\n}",
          "type": "json"
        },
        {
          "title": "Success-Response GET /products?page=2&sort=likes%search=pro",
          "content": "HTTP/1.1 200 OK\n{\n   \"products\": [\n      {\n        \"id\": \"1\",\n        \"name\": \"Producto 8\",\n        \"npc\": \"CCC\",\n        \"stock\": \"10\",\n        \"price\": \"1100.00\",\n        \"likes\": \"120\",\n      },\n      {\n        \"id\": \"2\",\n        \"name\": \"Producto 13\",\n        \"npc\": \"AAA\",\n        \"stock\": \"15\",\n        \"price\": \"200.00\",\n        \"likes\": \"70\",\n      },\n      ...\n      {\n        \"id\": \"246\",\n        \"name\": \"Radiador Profesional\",\n        \"npc\": \"RRR\",\n        \"stock\": \"15\",\n        \"price\": \"1000.00\",\n        \"likes\": \"35\",\n      },\n   ],\n   total_products: 17,\n   total_pages: 2\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/products.php",
    "groupTitle": "Productos"
  },
  {
    "type": "put",
    "url": "/products/like/:id",
    "title": "Like a un producto",
    "name": "LikeProducts",
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
            "field": "id",
            "description": "<p>ID del producto al que se desea hacer like</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "result",
            "description": "<p>Si la petición se realizó correctamente retornará &quot;success&quot;.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n   \"result\": \"success\"\n}",
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
            "field": "NotRegularUser",
            "description": "<p>Error al intentar hacer la petición como administrador. Solo los usuarios registrados pueden dar like a un producto.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "NotRegularUser-Response",
          "content": " HTTP/1.1 403 Forbidden\n {\n     \"error\": {\n       \"code\": \"NotRegularUser\",\n       \"message\": \"El usuario que intenta realizar la petición es administrador. Solo los usuarios registrados pueden realizar esta acción.\"\n     }\n}",
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
