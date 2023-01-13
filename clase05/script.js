/* let cadena = "HOLA CODER";
//Propiedad de objeto String: Largo de la cadena.
console.log(cadena.length);
//Método de objeto String: Pasar a minúscula.
console.log(cadena.toLowerCase());
//Método de objeto String: Pasar a mayúscula.
console.log(cadena.toUpperCase()); */

/* function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad   = edad;
    this.calle  = calle;
    this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar(); */


/*-------------USO DE OBJETOS CORRECTO Y COMO CASI SIEMPRE SE USA---------------- */
/* let personaSimple = {
    nombre: "Homero",
    edad: 39,
    calle: "Av. Siempreviva 742",
    apellido: "puga",
    activo: true,
} */
/* ------------------------------------------- */

/* ----- Operador IN y FOR...IN --------- */

/* const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742"};
//devuelve true porque la clave "nombre" existe en el objeto persona1
console.log( "nombre" in persona1);
//devuelve false porque la clave "origen" no existe en el objeto persona1
console.log( "origen" in persona1);
//FOR IN nos muestra todas las propiedades de persona1
for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}
/* ------------------------------------------- */

/* LAS CLASES: es como un profesional armaria un objeto */
/* LA CLASE ES la plantilla para crear el objeto */

/* class television{
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad   = edad;
        this.calle  = calle;
        this.canal  = 5;
        this.activo = false;
        this.volumen = 0;
    }
    activar (){
        this.activo = true
        return this.activo
    }
    cambiarCanal (canal){
        this.canal = canal
        return this.canal
    }  
    subirVolumen (volumen){
        this.volumen = this.volumen+1
        return this.volumen
    }  
}
const tv = new television("LG", 39, "Av. Siempreviva 742");
const tv2 = new television("SAMSUNG", 39, "Av. Siempreviva 742"); */

/* const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
persona1.canal = 6
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742"); */

/* Beneficios del constructor: poder poner al objeto valores por defecto (caso tv) */

/* para crear un producto */
class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    vender() {
        this.vendido = true;
    }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();