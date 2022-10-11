class Articulo {


    constructor(nombre, marca, precioVenta, precioCompra, cantidad, id) {
        this.nombre = nombre;
        this.marca = marca;
        this.precioVenta = parseInt(precioVenta);
        this.precioCompra = parseInt(precioCompra);
        this.cantidad = parseInt(cantidad);
        this.id = parseInt(id);
    }
    asignarId(array) {
        this.id = array.length;


    }
}

const articulos = [
    new Articulo("Coca500", "CocaCola", 200, 120, 10, 1),
    new Articulo("Coca1500", "CocaCola", 400, 350, 10, 2),
    new Articulo("Coca2250", "CocaCola", 500, 380, 10, 3),
    new Articulo("Coca354", "CocaCola", 200, 120, 10, 4),
]

console.log(articulos);


//----Pedir que se ingresen los Articulos y sumarlos al array----// 

let continuar = true;

while (continuar) {
    let ingreso = prompt("Ingresa los datos del Articulo: Nombre, Marca, Precio de Venta, Precio de Compra, Cantidad, ID. Separados por una coma (,). Ingresa X para finalizar ");

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }

    let datos = ingreso.split(",");
    const articulo = new Articulo(datos[0], datos[1], datos[2], datos[3], datos[4]);
    articulos.push(articulo);
    articulo.asignarId(articulos);
    console.log(articulos);

}

//----Fin de pedir Articulos----// 
//----Comienzo a pedir orden de datos----// 

let criterio = prompt("Elegí el criterio Deseado:\n1- Articulo (A-Z) \n2- Articulo (Z-A) \n3-Mayor a menos Precio \n4-Menor a Mayor Precio");

function ordenar(criterio, array) {
    let arrayOrdenado = array.slice(0)

    switch (criterio) {

        case "1":
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.articulo));
            return nombreAscendente;
        case "2":
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.articulo));
            return nombreDescendente;
        case "3":
            return arrayOrdenado.sort((a, b) => b.precioVenta - b.precioVenta);
        case "4":
            return arrayOrdenado.sort((a, b) => a.precioVenta - a.precioVenta);
        default:
            alert("No es un criterio valido");
            break;
    }

}

//----Fin pedir orden de datos----// 

function crearStringresultado(array) {
    let info = "";
    array.forEach(elemento => {
        info += "Articulo:" + elemento.nombre + "\nMarca:" + elemento.marca + "\nPrcio Venta:" + elemento.precioVenta + "\nPrecio de Compra:" + elemento.precioCompra + "\nCantidad:" + elemento.cantidad + "\n"

    })

    return info;
}   

alert(crearStringresultado(ordenar(criterio, articulos)));


//--------------------------Filtrar producots de acuerdo a la marca-----------------------------//
let marcaElegida = prompt('Escribí el nombre de la marca para que te mostremos sus productos');

const filtrado = articulos.filter((articulo)=>articulo.marca.toLowerCase().includes(marcaElegida.toLowerCase()))
//----------------------Fin de filtrar libros de acuerdo al autor-------------------------//


//--------------------------Mostrar libros filtrado de acuerdo al autor-----------------------------//

if (filtrado.length==0){
    alert('Lo sentimos. No encontramos coincidencias.');
}else{
    const imprimible = filtrado.map((articulo)=>articulo.nombre);
    alert('Los artículos que se aproximan a su busqueda son:\n- ' + imprimible.join('\n- '));
}
//----------------------Fin de mostrar libros filtrado de acuerdo al autor-------------------------//


