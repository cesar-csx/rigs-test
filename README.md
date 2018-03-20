# RIGS E-commerce API Test Development

## Instalación

Para instalar la aplicación en un ambiente local (o servidor remoto) se deben seguir los siguientes pasos:
- Clonar el repositorio
- Habilitar el mod_rewrite en Apache el correcto funcionamiento de los endpoints  constryendo la URL dinámicamente (para una referencia rápida de cómo hacerlo ir a http://www.galisteocantero.com/activar-modulo-mod_rewrite-de-apache-en-linux-y-windows/ )
- Hacer el volcado de la base de datos. Se añadió un script SQL para restaurar la estuctura de la base de datos en la carpeta "db", el archivo se llama "backup.sql". La base de datos contiene dos usuarios, un administrador y un usuario registrado, para hacer la prueba con los roles descritos en los requerimientos. Este es el acceso con el usuario administrador:
 + email: cesar@rigs.io
 + password: Rigsdev2018
Para el usuario registrado, estos son los datos:
 + email: guillermo@rigs.io
 + password: Rigsdev2018
- Configurar la base de datos a la que se va a acceder. Esto se logra creando el archivo "config.ini" dentro de la carpeta "config". Ahí dentro, se puede tomar como base el archivo "config.ini.example" cambiando los parámetros del archivo. Estos son:
 + root: Sustituirlo por la url base o directorio raíz de la aplicación (como se muestra en el valor de ejemplo).
 + host: Ubicación de la base de datos, ya sea local o en otro servidor remoto.
 + user: Usuario de la base de datos.
 + password: Password de la base de datos
 + port: Puerto por el que se accede a la base de datos (el valor de ejemplo puesto es el puerto default para MySQL)
 + db: Nombre de la base de datos
- Configurar el archivo .htaccess del directorio raíz. En dicho archivo, en la línea 6 está puesto un valor de ejemplo como directorio raíz de la aplicación. Sustituir ese valor por el nombre del directorio raíz. Por ejemplo, si el directorio raíz se llama "api-test", la línea 6 del .htaccess debería quedar como:
```
RewriteRule ^ api-test/index.php [QSA,L]
```
- Instalar las librerías y dependencias de la aplicación, con composer. Ejecutar el siguiente comando:
```
composer install
```
o bien:
```
composer update
```
- Finalmente, probar la aplicación. Esto se logra accediendo a la url base o directorio raíz. Si está configurado correctamente el directiorio base debe redirigir a la documentación de la API.