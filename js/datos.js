var cantidad = "";
var sumatoria = false;
var sumar = false;
var restar = false;
var multiplicar = false;
var dividir = false;
var porcentar = false;
var potenciar = false;
var raizr = false;
var contador= false;

function mostrar_numeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value;
}

function suma() {
    if(contador == 0){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }else if (contador >=1){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }
    else{
        sumatoria = document.getElementById("display").value;
    }

    document.getElementById("display").value = sumatoria;
    cantidad = "";
    sumar = true;
    contador ++;
}

function resta() {

    if(contador == 0){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    restar = true;
    contador++;

}

function multiplicacion() {
    if(contador == 0){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    multiplicar = true;
    contador++
}

function division() {
    if(contador == 0){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    dividir = true;
    contador++
}

function porcentaje() {
    if(contador == 0){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    porcentar = true;
    contador++
}

function potencia() {
    if(contador == 0){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    potenciar = true;
    contador++
}

function raiz() {
    if(contador == 0){
        sumatoria = (sumatoria) + (parseInt(cantidad));
    }else{
        sumatoria = document.getElementById("display").value;
    }
    document.getElementById("display").value = sumatoria;
    cantidad = "";
    raizr = true;
    contador++
}

function igual() {
    if (sumar == true) {
        document.getElementById("display").value = sumatoria + parseInt(cantidad);

    } else if (restar == true) {
        document.getElementById("display").value = (sumatoria) - (parseInt(cantidad));

    } else if (multiplicar == true) {
        document.getElementById("display").value = sumatoria * parseInt(cantidad);

    } else if (dividir == true) {
        document.getElementById("display").value = sumatoria / parseInt(cantidad);

    } else if (porcentar == true) {
        document.getElementById("display").value = (sumatoria * parseInt(cantidad)) / 100;

    } else if (potenciar == true) {
        document.getElementById("display").value = (sumatoria ** parseInt(cantidad));

    } else if (raizr == true) {
        document.getElementById("display").value = (Math.sqrt(parseInt(cantidad + sumatoria)) );

    }
}

function AC() {
    document.getElementById('display').value = ("0");
    (cantidad = "");
    sumatoria = 0
}