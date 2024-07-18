// Definimos el tipo de los objetos que estarán en la colección
interface Cosas {
    id: number;
    name: string;
    description: string;
  }
  
  // Creamos el módulo cosas
  const coleccion : Cosas[] = [
    // Creamos la colección de objetos
   
      //{ id: 1, name: "Objeto 1", description: "Descripción del objeto 1" },
      //{ id: 2, name: "Objeto 2", description: "Descripción del objeto 2" },
      //{ id: 3, name: "Objeto 3", description: "Descripción del objeto 3" },
    ];
    // Método para obtener la colección completa
      function getAll(): Cosas[] {
        return [];
      //return coleccion;
    }
    // Método para obtener un objeto por id
    function  getById(id: number): Cosas | undefined {
     return undefined;
    }
    export{getAll,getById};
  