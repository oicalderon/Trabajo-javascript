frase = prompt("ingrese una frase ");
var b=0;
for(var a = 0; a < frase.length; a++)
{
        switch(frase[a])
        {
              case 'a': b++;
              break;
              case 'e': b++;
              break;
              case 'i': b++;
              break;
              case 'o': b++;
              break;
              case 'u': b++;
              break;
        }
} 
alert("La frase ingresa da es: " + frase + " El numero de vocales en la frase es: " + b);
document.write(" La frase ingresa da es: " + frase + " El numero de vocales en la frase es: " + b);
