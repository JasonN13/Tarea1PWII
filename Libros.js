
//Clase

class Libros{
    titulo = ''
    genero = ''
    publicacion = ''
    autor=''

    constructor(titulo,genero,publicacion,autor){
        this.titulo=titulo
        this.genero=genero
        this.publicacion=publicacion
        this.autor=autor
    }
}
//creacion de Libros para luego agregarlas al arreglo
const libro1 = new Libros("Pinocho  ","Ficcion",1883,"Carlos Collodi")
const libro2 = new Libros("Alicia en el pais de las maravillas","Ficcion",1865,"Lewis Carrol")
const libro3 = new Libros("Don Quijote de la Mancha","Novela",1605,"Miguel de Cervantes")
const libro4 = new Libros("Hamlet","Drama",1603,"William Shakespeare")

const arreglo=[]

//Ingresando Libros

arreglo.push(libro1)
arreglo.push(libro2)
arreglo.push(libro3)
arreglo.push(libro4)

//update arreglo

const tomo1 =arreglo.find(elemento =>{
    return elemento.autor === "William Shakespeare"
})

tomo1.publicacion = "1599 y 1602"

console.log(tomo1)

console.log(arreglo)

//select
arreglo.map(tomo1 => console.log(tomo1.genero))
