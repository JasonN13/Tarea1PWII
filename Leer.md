# Instrucciones 
Para ejecutar este programa debe tener instalada la version de node.js
20.11.0 y ejecutar el seguiente codigo para el funcionamiento 
~~~
npm start
~~~


# Funciones 
las funciones que contiene el codigo son las siguientes

# Update
Se utiliza para Actualizar el nombre de los libros que coincida con la condicion establecida 
~~~
const tomo1 =arreglo.find(elemento =>{
    return elemento.autor === "William Shakespeare"
})

tomo1.publicacion = "1599 y 1602"

console.log(tomo1)
~~~

# Select
para consultar informacion sobre los titulos de las peliculas
~~~
arreglo.map(tomo1 => console.log(tomo1.genero))
~~~

# Intruciones para ejecutar La clase peliculas
~~~
npm run start-index
~~~
# Funciones 
las funciones que contiene el codigo son las siguientes

# Update
Se utiliza para Actualizar el nombre de la pelicula que coincida con la condicion establecida 
~~~
const sinta1 =arreglo.find(elemento =>{
    return elemento.estreno === 2000
})

sinta1.titulo="Rocky 5"

console.log(sinta1)
~~~

# Select
para consultar informacion sobre los titulos de las peliculas
~~~
arreglo.map(sinta1 => console.log(sinta1.titulo))
~~~
