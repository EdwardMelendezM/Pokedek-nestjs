<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejercutar en desarrollo
1. Clone this repository
2. Ejecute 

````
yarn install
````

3. You should have Nest CLI installed

````
yarn add -g @nestjs/cli
````
4. Lift the database

````
docker-compose up -d
````
5. Clone the file __.env.template__ and rename to 

````
.env
````
6. Complete the variable in the define environment in the 

````
.env
````
7. Ejecute with

````
yarn start:dev
````
8. Rebuild the database with a seed

````
http://localhost:3000/api/v2/seed
````

# Production Build

1. Create the file

````
.env.prod
````

2. Completed the production variables

3. Create the image
````
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
````

## Stack used
* Mongo
* Nestjs