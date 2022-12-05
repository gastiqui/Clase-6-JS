// 1) Necesito que instancien objetos con class constructor o con funcion. Este objeto tiene que tener los siguientes propiedades: nombre, apellido, edad, direccion, nDeCuenta, clientePreferencial, gastosDeTarjeta.

const cliente = [
    { 
        nombre: "Roberto",
        apellido: "Perez",
        edad: 50,   
        direccion: "calle falsa 1231",
        nDeCuenta: 132103242834234, 
        clienteBlack: false,
        gastosDeTarjeta: 50000
    },
    {
        nombre: "Silvia", 
        apellido: "Gonzalez",
        edad: 35,
        direccion: "calle falsita 587",
        nDeCuenta: 093493842934889,
        clienteBlack: true,
        gastosDeTarjeta: 16000
    }
]

console.log(cliente)

// 2) Crear una variable que contenga un array vacío ej: = []

const vacio = []


// 3) quiero que instancien 5 nuevos objetos a partir de esto y que pusheen esos nuevos objetos a un array vacío. El array tiene que estar creado antes de hacer el push.

vacio.push(15,30,50,40,80,7)

console.log(vacio) 

// 4) Quiero que visualicen en consola, con console.table, el array con los objetos que pushearon.

console.table(vacio) 


// 5) con un for, vamos a iterar sobre todos esos valores. Vamos a visualizar en consola cada uno de los nombres de los clientes.

for (let index = 0; index < cliente.length; index++){
    console.log( cliente[index] )
    console.log(`El nombre del cliente es:  ${cliente[index].nombre}`)
}


// 6) Si el cliente es preferencial, entonces tiene un 5% de descuento en sus gastos de tarjeta. DENTRO DE FOR

