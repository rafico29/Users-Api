# Users API Raf-Raf



https://user-images.githubusercontent.com/129292580/228558681-19401511-674e-4876-b691-35dff85dec11.mp4


La api de usuarios de Raf-Raf es una api que permite la creación de usuarios, la autenticación de usuarios y la recuperación de usuarios.
desarrollada usando Node.js + PostgreSQL + Redis + TypeORM y JWT Authentication

##  Instalación y despliegue de la aplicación en local
- Descargar el repositorio [aqui](https://github.com/rafico29/Users-Api.git)
- Abrir la carpeta del proyecto en el editor de tu preferencia
- Instalar yarn con el comando `npm install -g yarn`
- Ejectuar el comando `yarn install` para instalar las dependencias
- Las variables de entorno se encuentran en el archivo `.env.example` copiar el contenido del archivo y crear un archivo `.env` en la raiz del proyecto y pegar el contenido del archivo `.env.example`
- Desplegar la base de datos de Postgres y redis( para mantener sesiones de usuario) con el comando `docker-compose up -d`
- Ejecutar el comando `yarn db:push` para enviar el esquema de migración de TypeORM a la base de datos de Postgres.
- Ejecutar el comando `yarn start` para iniciar el servidor de desarrollo en el puerto 8000.

##  Prerequisitos
- Node.js
- Docker
- PostgreSQL
- Redis
- Yarn
- Postman

##  Endpoints
- [POST] /api/v1/users - Crear un usuario
  ```json
    {
        "first_name": "rafa",
        "last_name": "salgado",
        "date_birth": "29/05/1990",
        "address": "calle falsa 123",
        "mobile_phone": "3109109104",
        "email": "prueba@test.com",
        "password": "12345678",
        "passwordConfirm": "12345678"
    }
  ```
- [POST] /api/v1/users/login - Iniciar sesión
  ```json
  {
    "mobile_phone": "3109109104",
    "password": "12345678"
  }
  ```
- [GET] /api/v1/users/logout - Cerrar sesión (protegido, necesario autenticacion)
- [GET] /api/v1/users/me - Obtener el usuario autenticado (protegido, necesario autenticacion)
- [GET] /api/v1/users - Obtener todos los usuarios
- [GET] /api/v1/users/:id - Obtener un usuario (protegido, necesario autenticacion)
- [PUT] /api/v1/users/:id - Actualizar un usuario (protegido, necesario autenticacion)
- [DELETE] /api/v1/users/:id - Eliminar un usuario (protegido, necesario autenticacion)
- 
