# Actividad Pattern Memory Oscar Calderon

Desarrollado con ES6 y jquery.

El juego presenta cuadros marcados de azul oscuro sobre un tablero, luego de un determinado tiempo se desaparecen y el jugador debe seleccionar los recuadros marcados previamante, si se selecciona todos los recuadros, el jugador ganará.

# Proceso de desarrollo

Instalación de NodeJS y de browserify y watchify globalmente.

```
npm install -g browserify
npm install -g watchify
```

Instalación de los paquetes de desarrollo localmente que están ubicados en el archivo package.json

```
npm install
```

# Funciones.

### El juego emplea las siguientes funciones:

* CreaTablero: se ejecuta cuando la pagina carga por completo por medio de la siguiente función de jquery:
```
$( document ).ready(function() {
    //ejecuta la creación del tablero
    CreaTablero(3);
});
```
 Esta función permite por medio de ciclos se generar un tablero de 4x4, se añade listener "click" a cada elemento del tablero y se imprime en una division del HTML llamada tablero.

* MarcarPuntos: Una vez creado el tablero, se marcan 3 puntos aleatorios dentro del tablero cambiando el fondo de azul claro a azul oscuro

* OcultarPuntos: Despues de marcar puntos aleatorios, estos se ocultan ofreciendo tiempo suficiente al jugador para memorizarlos.

* validarPunto: Se ejecuta cuando el jugador hace clic en un elemento del tablero e identifica cuando un elemento es correcto marcandolo con azul oscuro, de lo contrario, lo marca con color rojo. Si se selecciona 3 veces un elemento correcto el jugador ganará el juego.

# Interfaz Gráfica

Creada con html se compone de 3 secciones:

* Título: ubicado en la parte superior central de la ventana
* Botón de reinicio: Ubicado en la parte izquierda de la pantalla, se le ha añadido un evento click que recarga la pagina en su totalidad por medio del siguiente código desde javascript (usando jquery):
```
$('#Reiniciar').click(function()
{
    location.reload();
});
```
* División de tablero: donde se imprime el tablero para jugar


