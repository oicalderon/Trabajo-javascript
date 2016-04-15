function validarPunto(id, cant)
{
    let Contador = 0;
    if( $("#"+id).attr( "marcado" ) )
    {
        $("#"+id).addClass("clic_background");
        Contador++;
    }else
    {
        $("#"+id).addClass("clic_error"); 
        setTimeout(function()
        {
          $("#"+id).removeClass("clic_error")
        }, 500);    
    }
    return Contador;
} 

function CreaTablero(cant)
{

    let tablero = "<table>";
    let id = 0;
    //crear filas
    for (let i = 0; i < 4; i++)
    {
        tablero += "<tr>";
        //crea columnas
        for (let j = 0; j < 4; j++) {
            tablero += "<td id='"+id+"'>";
            tablero += "</td>";
            id++;
        };
        tablero += "</tr>";
    }

    tablero += "</table>";

    $("#tablero").html(tablero);


    let cant_clic = 0;
    let cant_clic2 = 0;
    //añadir evento clic al tablero
    for (let i = 0; i < id; i++)
    {
        document.getElementById(i).addEventListener('click', event =>
        {
            cant_clic = validarPunto(i, cant_clic2);
            if (cant_clic == 1)
            {
                cant_clic2++;
            };

            if (cant_clic2 == cant) 
            {
                alert("Ha ganado!!\n El juego será reiniciado");
                location.reload();
            };  
            
        });
    };  

    MarcarPuntos(cant); 
}

function MarcarPuntos(cant)
{
    let valorMaximo = 15;   
    let aleatorio = [];

    for (let i = 0; i < cant; i++)
    {
        //obtener aleatorio de 0 a  15  sin repetir
        if (i == 0)
        {
            aleatorio[i] = Math.floor(Math.random() * valorMaximo);
        }
        else
        {
            let nuevoAleatorio = Math.floor(Math.random() * valorMaximo);
            let temp = false;

            for (let j = 0; j < aleatorio.length; j++) 
            {
                if (aleatorio[j] == nuevoAleatorio) 
                {
                    temp = true;
                }
            }

            if (temp)
            {
                i--;
            }else
            {
              aleatorio[i] = nuevoAleatorio;  
            } 
        }
    } 

     //cambiar clase a marcados
    for (let j = 0; j < aleatorio.length; j++) 
    {
        $("#"+aleatorio[j]).addClass("clic_background");   
        $("#"+aleatorio[j]).attr("marcado", true)
    } 

    //quita los puntos marcados en el tablero, el tiempo depende de la cantidad de puntos marcados (un seg por punto)
    setTimeout(OcultarPuntos, (cant*1000), aleatorio);   
}

function OcultarPuntos(Puntos)
{
    for (let j = 0; j < Puntos.length; j++) 
    {
        $("#"+Puntos[j]).removeClass("clic_background");              
    } 
}

$( document ).ready(function() {
    //ejecuta la creación del tablero
    CreaTablero(3); // marca 3 puntos en el tablero
});

$('#Reiniciar').click(function()
{
    location.reload();
});