var opcion = prompt(" Elija opcion a = area circulo, b = area triangulo, c = area cuadrado: ");

switch(opcion)
{
	   case 'a':
       //area del circulo 
       var radio = prompt("ingrese el radio: ");
       var area = (3.1416 * (radio * radio));
       alert("El area del circulo es: " + area);

       document.write("radio ingresado: " + radio);
       document.write(" El area del circulo es: " + area);
       break;

       case 'b':
       //area del triangulo
       var base = prompt("ingrese la base: ");
       var altura = prompt("ingrese la altura: ");
       var area = (base * altura) / 2;
       alert("el area del triangulo es: " + area);

       document.write("la base ingresada es: " + base);
       document.write(" la altura ingresada es: " + altura);
       document.write(" El area del triangulo es: " + area);
       break;

       case 'c':
       //area del cuadrado
       var lado = prompt("ingrese lado: ");
       var area = (lado * lado);
       alert("el area del cuadrado es: " + area);

       document.write("lado ingresado: " + lado);
       document.write(" El area del cuadrado es: " + area);
}