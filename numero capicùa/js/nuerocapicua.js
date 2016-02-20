
     //Definimos un metodo para el tipo de datos "string", que lo unico que hace es devolver nuestra palabra en orden inverso.
    String.prototype.reverse=function()
    {
      return this.split("").reverse().join("");
    }

   function testCapCua(numero) {
    
    var numeroinvertido = numero.reverse();
    if (numero == numeroinvertido) { //Si la palabra es igual a la palabra girada.
     alert("El Numero "+numero+" SI es capicua");
     return(true); //Es capicua.
    }
    else {
     alert("El Numero "+numero+" NO es capicua: '"+numeroinvertido+"'");
     return(false); //NO es capicua.
    } 
   } 
