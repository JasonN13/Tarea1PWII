//console.log("El RESULTADO ES:")
//const Resultado =(10 + 5);
//console.log(Resultado);


//Clase

class Pelicula{
    titulo = ''
    genero = ''
    duracion = ''
    estreno = ''

    constructor(titulo,genero,duracion,estreno){
        this.titulo=titulo
        this.genero=genero
        this.duracion=duracion
        this.estreno=estreno
    }
}
//creacion de peliculas para luego agregarlas al arreglo
const pelicula1 = new Pelicula("Iron Man","Accion","120 Minutos",2000)
const pelicula2 = new Pelicula("Iron Man 2","Accion","190 Minutos",2005)
const pelicula3 = new Pelicula("Iron Man 3","Accion","180 Minutos",2010)
const pelicula4 = new Pelicula("Iron Man 4","Accion","195 Minutos",2025)

const arreglo=[]

//Ingresando Peliculas

arreglo.push(pelicula1)
arreglo.push(pelicula2)
arreglo.push(pelicula3)
arreglo.push(pelicula4)

//update arreglo

const sinta1 =arreglo.find(elemento =>{
    return elemento.estreno === 2000
})

sinta1.titulo="Rocky 5"

console.log(sinta1)

console.log(arreglo)

//select
arreglo.map(sinta1 => console.log(sinta1.titulo))

