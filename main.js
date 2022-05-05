const ProductoDisponible = [];

class varitas {
  constructor (varita, escoba, bufanda, animal){
      this.varita=varita;
      this.escoba=escoba;
      this.bufanda=bufanda;
      this.animal=animal;
  }
}

//"base de datos"
  ProductoDisponible.push(new personaje("pelo de cola de unicornio","Barredora","gryffindor","buho"));
  ProductoDisponible.push(new personaje("pluma de fenix","Cometa","slytherin","rata"));
  ProductoDisponible.push(new personaje("corazon de dragon","Nimbus","hufflepuff","tortuga"));
  ProductoDisponible.push(new personaje("cuerno de basilisco","Nimbus","ravenclaw","gato"));

  //Funcion para ingresar personaje a detallar
  function personaje(){
  do {
   
    let producto = prompt('Ingrese su varita', "Opciones: pelo de cola unicornio, pluma de fenix , corazon de dragon, cuerno de basilisco")
    const resultado = ProductoDisponible.find(m=> m.producto == producto)
     
    if(resultado){
      let indice = ProductoDisponible.findIndex(m => m.producto == producto)
      let padre = document.getElementById("varita")
      let personajeencontrado = [ProductoDisponible[indice].varita, ProductoDisponible[indice]. escoba, ProductoDisponible[indice].bufanda, ProductoDisponible[indice].animal]
            
      for (const persona of personajeencontrado) {
          let li = document.createElement("li");
          li.innerHTML = persona; 
          padre.appendChild(li);
      }
      
    }
   
  } while (producto !="");
  }

  //Solicito funcion a ejecutar
  personaje();
