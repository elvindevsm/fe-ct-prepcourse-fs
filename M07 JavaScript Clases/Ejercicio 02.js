/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
   // Crea el constructor de la clase "Persona".
   // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
   // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
   // sus valores.
   constructor(nombre,apellido,edad,domicilio){
      this.nombre = nombre;
      this.apellido= apellido;
      this.edad = edad
      this.domicilio = domicilio;
   }
   detalle(){
     return {nombre:this.nombre,apellido:this.apellido,edad:this.edad,domicilio:this.domicilio};

   }
}

const yoMismo =new Persona('elvin','Simanca',22,'Cr 7 a sur #46');

yoMismo.detalle();



function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
   // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
   // Recibirás las propiedades por parámetro.
   // Retornar la instancia creada.
   // Tu código:
   const instanciaPersona = new Persona('Yulianis','cañas',22,'cr 25 sur #45');
   return instanciaPersona;

}

function agregarMetodo() {
   // La función agrega un método "datos" a la clase "Persona".
   // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
   // Ejemplo: "Juan, 22 años".
   // Tu código:
   class saludo extends Persona{
      constructor(nombre,edad){
         super(nombre,edad);
      }
      datos(){return `${this.nombre}+${this.edad} años.` }
   }
   return saludo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   crearInstanciaPersona,
   agregarMetodo,
   Persona,
};
