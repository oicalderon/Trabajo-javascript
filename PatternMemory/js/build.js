(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function validarPunto(id, cant) {
    var Contador = 0;
    if ($("#" + id).attr("marcado")) {
        $("#" + id).addClass("clic_background");
        Contador++;
    } else {
        $("#" + id).addClass("clic_error");
        setTimeout(function () {
            $("#" + id).removeClass("clic_error");
        }, 500);
    }
    return Contador;
}

function CreaTablero(cant) {

    var tablero = "<table>";
    var id = 0;
    //crear filas
    for (var i = 0; i < 4; i++) {
        tablero += "<tr>";
        //crea columnas
        for (var j = 0; j < 4; j++) {
            tablero += "<td id='" + id + "'>";
            tablero += "</td>";
            id++;
        };
        tablero += "</tr>";
    }

    tablero += "</table>";

    $("#tablero").html(tablero);

    var cant_clic = 0;
    var cant_clic2 = 0;
    //añadir evento clic al tablero

    var _loop = function _loop(_i) {
        document.getElementById(_i).addEventListener('click', function (event) {
            cant_clic = validarPunto(_i, cant_clic2);
            if (cant_clic == 1) {
                cant_clic2++;
            };

            if (cant_clic2 == cant) {
                alert("Ha ganado!!\n El juego será reiniciado");
                location.reload();
            };
        });
    };

    for (var _i = 0; _i < id; _i++) {
        _loop(_i);
    };

    MarcarPuntos(cant);
}

function MarcarPuntos(cant) {
    var valorMaximo = 15;
    var aleatorio = [];

    for (var i = 0; i < cant; i++) {
        //obtener aleatorio de 0 a  15  sin repetir
        if (i == 0) {
            aleatorio[i] = Math.floor(Math.random() * valorMaximo);
        } else {
            var nuevoAleatorio = Math.floor(Math.random() * valorMaximo);
            var temp = false;

            for (var j = 0; j < aleatorio.length; j++) {
                if (aleatorio[j] == nuevoAleatorio) {
                    temp = true;
                }
            }

            if (temp) {
                i--;
            } else {
                aleatorio[i] = nuevoAleatorio;
            }
        }
    }

    //cambiar clase a marcados
    for (var _j = 0; _j < aleatorio.length; _j++) {
        $("#" + aleatorio[_j]).addClass("clic_background");
        $("#" + aleatorio[_j]).attr("marcado", true);
    }

    //quita los puntos marcados en el tablero, el tiempo depende de la cantidad de puntos marcados (un seg por punto)
    setTimeout(OcultarPuntos, cant * 1000, aleatorio);
}

function OcultarPuntos(Puntos) {
    for (var j = 0; j < Puntos.length; j++) {
        $("#" + Puntos[j]).removeClass("clic_background");
    }
}

$(document).ready(function () {
    //ejecuta la creación del tablero
    CreaTablero(3); // marca 3 puntos en el tablero
});

$('#Reiniciar').click(function () {
    location.reload();
});

},{}]},{},[1]);
