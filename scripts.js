
// Adivinanza
var contadorR = 0;    
var respuesta = 0;
var respuestaCorrecta = 9; 
var intentosRestantes = 4;

function contadorRestantes(){
    var html = "";
    intentosRestantes--;
    console.log(intentosRestantes)
    html+=`<h3>${intentosRestantes}</h3>`;
    document.getElementById("intentosMostrar").innerHTML = html;

    
}
function contadorDeIntentos(){
    contadorRestantes();
    contadorR++;
    respuesta = parseInt(document.getElementById("respuestaObtenida").value) ;
    if(respuesta === this.respuestaCorrecta){
        var html ="";
        document.getElementById("botonIntento").disabled="true";
        document.getElementById("respuestaObtenida").disabled="true";
        html+=`<h5>¡Felicitaciones, es correcto!</h5> <h5>`;
        document.getElementById("pistasDar").innerHTML = html;


    }
    else{
    this.darPistas();
    }
};

function darPistas(){
    var html ="";
    if(this.contadorR === 1) {
        html+=`<h5>Te quedan 3 intentos</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR === 2) {
        html+=`<h5>Ayuda:</h5> <h5>Primer pista  </h5><h5>Es una estrella de pop</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR === 3 ) {
        html+=`<h5>Ayuda:</h5> <h5>Segunda pista  </h5><h5>Tiene mas de 3 colas</h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    }
    else if(this.contadorR <= 4) {
        document.getElementById("botonIntento").disabled="true";
        document.getElementById("respuestaObtenida").disabled="true";
        html+=`<h5> Lo siento, La estrella de hoy es Ahri. Conocela aqui <a href="https://euw.leagueoflegends.com/es-es/champions/ahri/">aqui</a> </h5>`;
        document.getElementById("pistasDar").innerHTML = html;
    };

};

