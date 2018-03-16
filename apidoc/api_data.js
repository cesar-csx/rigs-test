define({ "api": [
  {
    "type": "get",
    "url": "/admin/avisos/{pag}/{instalacion}",
    "title": "Avisos get",
    "name": "AvisosGet",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "arr",
            "optional": false,
            "field": "array",
            "description": "<p>of roles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GET /admin/avisos/1/null",
          "content": "{\n   \"avisos\": [\n       {\n           \"texto_aviso\": \"Verificar lectura\",\n           \"numero_aviso\": \"30070952\",\n\t\t\t\t\t\t\"respuesta_aviso\" \"casa sola 5570\",\n\t\t\t\t\t\t\"punto_suministro\" : \"0400160226\",\n\t\t\t\t\t\t\"instalacion\" : \"0500115674\",\n\t\t\t\t\t\t\"digito_control\" : \"0000022118\"\n\t\t\t\t\t\t\"fecha_respuesta\" : \"NULL\"\n\t\t\t\t\t\t\n       },\n       {\n           \"texto_aviso\": \"Verificar lectura\",\n           \"numero_aviso\": \"30070952\",\n\t\t\t\t\t\t\"respuesta_aviso\" \"\tlectura es 300\",\n\t\t\t\t\t\t\"punto_suministro\" : \"0400160226\",\n\t\t\t\t\t\t\"instalacion\" : \"0500339764\",\n\t\t\t\t\t\t\"digito_control\" : \"0000025685\"\n\t\t\t\t\t\t\"fecha_respuesta\" : \"NULL\"\n\t\t\t\t\t\t\n       },\n       \n   ],\n   \"count\": 2,\n   \"total_pages\": 1,\n   \"actual_page\": \"1\"\n}",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "delete",
    "url": "/admin/roles/{id}",
    "title": "Roles delete",
    "name": "RolesDelete",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
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
            "field": "null",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del rol HTTP/1.1 200 OK null</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/admin/roles?page=1&rol=1",
    "title": "Roles get",
    "name": "RolesGet",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "arr",
            "optional": false,
            "field": "array",
            "description": "<p>of roles</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GET /admin/user/1/null/null/null/null",
          "content": "{\n   \"roless\": [\n       {\n           \"id\": 4,\n           \"nombre\": \"rol de prueba editado\"\n       },\n       {\n           \"id\": 3,\n           \"nombre\": \"Ejecutivo de medicion\"\n       },\n       {\n           \"id\": 2,\n           \"nombre\": \"Programador de area\"\n       },\n       {\n           \"id\": 1,\n           \"nombre\": \"Administrador\"\n       }\n   ],\n   \"count\": 4,\n   \"total_pages\": 1,\n   \"actual_page\": \"1\"\n}",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/admin/roles/{id}",
    "title": "Roles post",
    "name": "RolesPost",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
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
            "field": "nombre",
            "description": "<p>nombre del rol</p>"
          },
          {
            "group": "Parameter",
            "type": "arr",
            "optional": false,
            "field": "permisos",
            "description": "<p>Array de keys permisos</p>"
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
            "description": "<p>rol ID</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nombre",
            "description": "<p>nombre del rol HTTP/1.1 200 OK { &quot;id&quot;: &quot;1&quot;, &quot;name&quot;: &quot;Aministrador&quot;, }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "delete",
    "url": "/administrator/admin/ruta/{id}",
    "title": "Ruta delete",
    "name": "RutaDelete",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token of the user (This token get it from successful login)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 ok\n{\n}",
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
            "field": "Notfound",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<pre><code>HTTP/1.1 500 Internal server error \t {   &quot;error&quot;: &quot;InternalServerError&quot; }</code></pre>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingField-Response",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"Notfound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/admin/user/{pag}/{co}/{n_archivo}/{id_user}/{id_ruta}",
    "title": "Ruta get",
    "name": "RutaGet",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "arr",
            "optional": false,
            "field": "array",
            "description": "<p>of user-rutas</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GET /admin/user/1/null/null/null/null",
          "content": " [\n    {\n        \"id\": \"1\",\n        \"usuario_id\": \"Administrator\",\n        \"ruta_id\": \"mail@rallyaroundus.com\",\n        \"fecha_hora\": null\n    },\n    {\n        \"id\": \"1\",\n        \"usuario_id\": \"Administrator\",\n        \"ruta_id\": \"mail@rallyaroundus.com\",\n        \"fecha_hora\": null\n    },\n    \n ]\n*",
          "type": "json"
        },
        {
          "title": "GET /admin/user/null/null/null/ejecutivo/null",
          "content": "[\n   {\n       \"id\": \"1\",\n       \"usuario_id\": \"Administrator\",\n       \"ruta_id\": \"mail@rallyaroundus.com\",\n       \"fecha_hora\": null\n   },\n   {\n       \"id\": \"1\",\n       \"usuario_id\": \"Administrator\",\n       \"ruta_id\": \"mail@rallyaroundus.com\",\n       \"fecha_hora\": null\n   },\n   \n]",
          "type": "json"
        },
        {
          "title": "GET /administrator/admin/null/null/null/1",
          "content": "  [\n\t\t  {\n         \"id\": \"1\",\n         \"usuario_id\": \"Administrator\",\n         \"ruta_id\": \"mail@rallyaroundus.com\",\n         \"fecha_hora\": null\n     },\n  ]",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/administrator/admin/ruta/{id}",
    "title": "Ruta create-edit",
    "name": "RutaPost",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token of the user (This token get it from successful login)</p>"
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
            "field": "usuario_id",
            "description": "<p>User id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "n_archivo",
            "description": "<p>Numero de archivo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "co",
            "description": "<p>centro operativo</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 201 Created\n    {\n      \"message\" : \"Asignacion correcta\",\n\t\t\t \"status\": 201\"\n    }",
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
            "field": "MissingField",
            "description": ""
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalServerError",
            "description": "<pre><code>HTTP/1.1 500 Internal server error \t {   &quot;error&quot;: &quot;MissingField&quot; }</code></pre>"
          }
        ]
      },
      "examples": [
        {
          "title": "MissingField-Response",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"MissingField\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/admin/rutas/reporte",
    "title": "Ruta reporte post",
    "name": "RutaPost",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>fecha planificada</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status Ruta</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "co",
            "description": "<p>centro operativo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "porcion",
            "description": "<p>porcion de archivo</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "GET /admin/user/26012017/2",
          "content": "[\n   {\n       \"id\": \"1\",\n       \"usuario_id\": \"Administrator\",\n       \"ruta_id\": \"mail@rallyaroundus.com\",\n       \"fecha_hora\": null\n   },\n   {\n       \"id\": \"1\",\n       \"usuario_id\": \"Administrator\",\n       \"ruta_id\": \"mail@rallyaroundus.com\",\n       \"fecha_hora\": null\n   },\n   \n]",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "post",
    "url": "/admin/rutas/ejecutada?page=1&ul=000001&ejecutivo=123",
    "title": "Ruta ejecutada post",
    "name": "RutasEjecutadasReportePost",
    "group": "Administrator",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "date",
            "description": "<p>fecha planificada</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "status",
            "description": "<p>status Ruta</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "co",
            "description": "<p>centro operativo</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "porcion",
            "description": "<p>porcion de archivo</p>"
          }
        ]
      }
    },
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "GET ",
          "content": "[\n   {\n       \"id\": \"1\",\n       \"unidad_lectora\": \"000001\",\n       \"ejecutivo\": \"mail@rallyaroundus.com\",\n       \"fecha\": 01/01/2018\n   {\n       \"id\": \"1\",\n       \"unidad_lectora\": \"000001\",\n       \"ejecutivo\": \"mail@rallyaroundus.com\",\n       \"fecha\": 01/01/2018\n   }\n   \n]",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/admin/secciones",
    "title": "Secciones get",
    "name": "SeccionesGet",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "arr",
            "optional": false,
            "field": "array",
            "description": "<p>of secciones</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GET /admin/user/1/null/null/null/null",
          "content": " [\n    {\n        \"id\": \"7\",\n        \"key\": \"rts_c\",\n        \"descripcion\": \"Crear rutas\"\n    },\n    {\n        \"id\": \"8\",\n        \"key\": \"rts_e\",\n        \"descripcion\": \"Editar rutas\",\n        \"fecha_hora\": null\n    },\n    \n ]\n*",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "get",
    "url": "/admin/user/{pag}/{name}/{n_emplaedo}/{rol}/{id}",
    "title": "Admin get",
    "name": "UaerGet",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Token de acceso</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "arr",
            "optional": false,
            "field": "array",
            "description": "<p>of users</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "GET /admin/user/1/null/null/null/null",
          "content": " [\n    {\n        \"id\": \"1\",\n        \"name\": \"Administrator\",\n        \"email\": \"mail@rallyaroundus.com\",\n        \"birthdate\": null,\n        \"last_name\": \"Rallyaround us\",\n        \"phone\": \"\",\n        \"state\": \"Usa\",\n        \"role\": \"superuser\",\n        \"image_url\": null,\n    },\n    {\n        \"id\": \"13\",\n        \"name\": \"Brett\",\n        \"email\": \"mail@rallyaroundus.com\",\n        \"birthdate\": null,\n        \"last_name\": \"Thompson\",\n        \"phone\": \"3337214334\",\n        \"state\": \"\",\n        \"role\": \"superuser\",\n        \"image_url\": null,\n    }\n ]\n*",
          "type": "json"
        },
        {
          "title": "GET /admin/user/null/null/null/ejecutivo/null",
          "content": "[\n   {\n       \"id\": \"1\",\n       \"name\": \"Administrator\",\n       \"email\": \"mail@rallyaroundus.com\",\n       \"birthdate\": null,\n       \"last_name\": \"Rallyaround us\",\n       \"phone\": \"\",\n       \"state\": \"Usa\",\n       \"role\": \"ejecutivo\",\n       \"image_url\": null,\n   },\n   {\n       \"id\": \"13\",\n       \"name\": \"Brett\",\n       \"email\": \"mail@rallyaroundus.com\",\n       \"birthdate\": null,\n       \"last_name\": \"Thompson\",\n       \"phone\": \"3337214334\",\n       \"state\": \"\",\n       \"role\": \"ejecutivo\",\n       \"image_url\": null,\n   }\n]",
          "type": "json"
        },
        {
          "title": "GET /administrator/admin/null/null/null/1",
          "content": "[\n   {\n       \"id\": \"1\",\n       \"name\": \"Administrator\",\n       \"email\": \"mail@rallyaroundus.com\",\n       \"birthdate\": null,\n       \"last_name\": \"Rallyaround us\",\n       \"phone\": \"\",\n       \"state\": \"Usa\",\n       \"role\": \"superuser\",\n       \"image_url\": null,\n   }\n]",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
  {
    "type": "delete",
    "url": "/administrator/admin/{id}",
    "title": "User delete",
    "name": "UserDelete",
    "group": "Administrator",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Access token of the user (This token get it from successful login)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "null",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nnull the item was deleted",
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
            "description": "<p>The email reigster is duplicated in the system</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "UserNotFound-Response",
          "content": "HTTP/1.1 400 Bad request\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Administrator"
  },
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
    "url": "/users/login",
    "title": "Inicio de sesión del usuario en móvil",
    "name": "LoginUsers",
    "group": "Usuarios",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "integer",
            "optional": true,
            "field": "number",
            "description": "<p>Número de ejecutivo. Nota, es obligatorio si no se captura el email.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "email",
            "description": "<p>email del usuario. Nota, es obligatorio si no se captura el número de ejecutivo.</p>"
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
          "content": "{\n  \"number\": \"123\"\n  \"password\": \"123456\",\n  \"sistema\" : \"rep_fall_app\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"1\",\n  \"name\": \"César Sánchez de Tagle\",\n  \"email\": \"gsanchez@syesoftware.com\",\n  \"numero_ejecutivo\": \"123456\",\n  \"token\": \"G4Dab26745pd485bPhuvXuL4E2oEAt4k15ZA5Vk51dIl0qZLowzCa\"\n}",
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
          "content": "HTTP/1.1 404 Bad Request\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "IncorrectPassword-Response",
          "content": "HTTP/1.1 400 Bad Request\n{\n  \"error\": \"IncorrectPassword\"\n}",
          "type": "json"
        },
        {
          "title": "UserHasNotAccess-Response",
          "content": "HTTP/1.1 401 Bad Request\n{\n  \"error\": \"UserHasNotAccess\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/users.php",
    "groupTitle": "Usuarios"
  },
  {
    "type": "get",
    "url": "/user/userCanAccess/{key}",
    "title": "User Can Access",
    "name": "UserCanAccess",
    "group": "Usuarios",
    "success": {
      "examples": [
        {
          "title": "GET /admin/userCanAccess/rls_d",
          "content": "\nHTTP/1.1 200 OK\n{\n\ttrue\n}",
          "type": "json"
        },
        {
          "title": "GET /admin/userCanAccess/rls_e",
          "content": "\nHTTP/1.1 200 OK\n{\n\tfalse\n}",
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
            "field": "unauthorised",
            "description": "<p>no header</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "unauthorised",
          "content": "{\n  \"error\": \"Missing, invalid or expired token present in request. Include an Authorization header\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/admin.php",
    "groupTitle": "Usuarios"
  }
] });
