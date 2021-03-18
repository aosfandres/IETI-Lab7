# LEER PARA CALIFICAR 
- Mi API esta implemntada en AWS ya que no contaba con creditos para hacerlo en azure.
- Se implemente con AWS Lambda y AWS API Gatwey.
- En la carpeta ADDorLIST-TASK esta la implemtentacion de la API (para GET y POST).
- Se conecto funcionalmente la API con el FRONT de TaskPlanner como se muestra en las siguientes imagenes.

## Evidencia AWS Lambda y API Gateway

![](https://github.com/aosfandres/IETI-Lab7/blob/main/images/1.PNG)

## Prueba de ejeucion con POSTMAN para GET

![](https://github.com/aosfandres/IETI-Lab7/blob/main/images/2.PNG)

## Prueba de funcionalidad con POSTMAN para POST

- se hace el POST

![](https://github.com/aosfandres/IETI-Lab7/blob/main/images/3.PNG)

- se hace el GET para comprobar su correcto funcionamiento

![](https://github.com/aosfandres/IETI-Lab7/blob/main/images/4.PNG)

## Prueba de conexion con el Front de TaskPlanner 

- se evidencia que trajo la tarea que se ingreso en POSTMAN ademas de las que ya tenia en la API

![](https://github.com/aosfandres/IETI-Lab7/blob/main/images/5.PNG)

## Prueba para la creacion de una nueva tarea y POST al API

- se crea una nueva tarea 

![](https://github.com/aosfandres/IETI-Lab7/blob/main/images/6.PNG)

- se evidencia que hizo el POST correctamente

![](https://github.com/aosfandres/IETI-Lab7/blob/main/images/7.PNG)


# USO 

Si desea probar la app localmente haga:

- clone el repositorio
- ingrese a la carpte FRONT
- ejecute ```npm install```
- ejecute ```npm start```
- visite http://localhost:3000/

USER: andres
PASS: sotelo




