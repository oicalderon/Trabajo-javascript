/********************** Desarrollado por Oscar Calderon ******************************/

var Tiempo = setInterval(function(){contartiempo()},1000); //crea intervalo que llama la funcion contartiempo cada segundo
var segundos = minutos = ayuda = 0; 
var NumBuscar = 1; //guarda el número siguiente despues de hacer click
tablero(); //llama funcion tablero

//permite calcular e imprimir el tiempo transcurrido desde el inicio del programa
function contartiempo()
{
	segundos++;
	TiempoTotal = llamarid("tiempo").innerHTML = "tiempo total: " + minutos + " Minuto(s) " + segundos + " Segundo(s)";
	if(segundos == 59) //si segundos llega a 59 se aumenta un minuto y segundos vuelve a 0
	{
		minutos++;
		segundos = 0;
	}
}

//permite capturar el valor del parrafo tiempo y pausar el intervalo
function tiempototal()
{
	clearInterval(Tiempo);
	return llamarid("tiempo").innerHTML;
}

//permite generar numeros del 1 al 121 y desordenarlos
function generarNumeros()
{
	//genera numeros del 1 al 121
	var numeros = [];
	for (var i = 0; i < 121; i++)
	{
		numeros [i] = i+1;
	}

	//desordena los numeros creados
	//.sort ordena valores de un arreglo, si es positiva la comparación, el elemento es mayor, si es negativa el elemento es menor
	//documentación en : http://www.w3schools.com/jsref/jsref_sort.asp
	numeros = numeros.sort
	(
		function() { return Math.random() - 0.5 } //genera aleatorios positivos y negativos lo que produce que los numeros se desordenen aleatoriamente
	);
	return numeros;
}

//permite crear el tablero de juego 
function tablero()
{
	var Numero = generarNumeros(); //llama función generar numeros y el resultado lo guarda en la varaible Numero
	var index = 0;
	var txt = "<table border = '0.5' solid black>";

	//el tablero debe ser de 11X11
	for(var i = 0; i < 11; i++)
	{
		txt += "<tr>";
		for(var j = 0; j < 11; j++)
		{			
			txt += "<td id = '"+i+"-"+j+"'> "+Numero[index]+" </td>";	
			index++;		
		}
		txt += "</tr>";
	}
	txt += "</table>";
	llamarid("tablero").innerHTML = txt;

	//añade evento clic a cada elemento del tablero
    for (var i = 0; i < 11; i++)
    {
    	for(var j = 0; j < 11; j++)
		{
			llamarid(i+"-"+j).addEventListener("click", function(event)
			{
				var id = event.target.id;//captura el id donde se hizo clic

				//compara si el valor es igual al numero que se busca
				if (llamarid(id).innerHTML == NumBuscar)
				{
					llamarid(id).className = "correcto"; //asigna al id seleccionado la clase correcto
					if (NumBuscar == 121) //si el número seleccionado es 121 el jugador ha ganado
					{						
						llamarid("ganador").innerHTML = "Ha ganado con un " + tiempototal();
						llamarid("siguiente").innerHTML = "";
					}else
					{
						//si no es 121 suma al numero obtenivo un 1 e imprime el numero que se desea buscar
						NumBuscar = NumBuscar+1;
						llamarid("siguiente").innerHTML = "Siguiente número: " + NumBuscar;
					}					
				}
			});
		}
    } 	
}

//añade evento click al boton de ayuda
llamarid("ayuda").addEventListener("click", function(event)
{	
	//ciclos para recorrer el tablero
	for (var i = 0; i < 11; i++)
    {
    	for(var j = 0; j < 11; j++)
		{
			//si el valor en un id es igual al numero que se esta buscando se añade la clase ayuda
			if (llamarid(i+"-"+j).innerHTML == NumBuscar)
			{
				var id = i+"-"+j;
				llamarid(id).className = "ayuda";

				//se quita la clase ayuda despues de medio segundo
				setTimeout(function(){ llamarid(id).className = ""; },500);
				ayuda++;
				//solo hay 3 ayudas
				if (ayuda > 2)
				{
					llamarid("ayuda").innerHTML = "No tienes mas ayudas";
					llamarid("ayuda").disabled = true; //desactivar boton
				}
			}
		}
	}
});

function llamarid(div)
{
	return document.getElementById(div);
}
