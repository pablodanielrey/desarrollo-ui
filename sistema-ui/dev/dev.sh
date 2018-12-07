#!/bin/bash
#### script para ejecutar el entorno de desarrollo
#### se debe copiar a la par de la carepta src del sistema a desarrollar.
#### ajustar los puertos y el nombre del contenedor temporal
echo "corriendo en el puerto 80"
docker run --rm -ti --name sistema-ui -v $(pwd)/src:/src -p 8080:4200 desarrollo-ui
