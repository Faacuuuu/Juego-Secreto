let listaNumerosSorteados = [];
let nuemeroSecreto = 0;
let nuemeroIntentos = 0;
let numeroMax = 10;

console.log(nuemeroSecreto);

function asignarTextoAElemento(eLemento,texto){
    let elemnentoHTML = document.querySelector(eLemento); //es un encabezado prinicipal del html
    elemnentoHTML.innerHTML = texto;
    return;
}


function VerificarEvento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    if(numeroUsuario === nuemeroSecreto){
        asignarTextoAElemento('p',`Acertaste el número en ${nuemeroIntentos} en ${(nuemeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //con este comando desbalido el comando disabled en htlm 
    }else{
        if(numeroUsuario > nuemeroSecreto){
            asignarTextoAElemento('p','El numero es menor');
        }else{ 
            asignarTextoAElemento('p','El numero es mayor');
            limpiarCaja ();
        }
    }
    
   nuemeroIntentos++;


    return;
}

function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMax){
        asignarTextoAElemento('p','Ya se sortearon todos los numeros')
    }else{
        
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

   
}

function CondicionesIniciales(){
    asignarTextoAElemento('h1','Juego del numero secreto!');
    asignarTextoAElemento('p','indica un numero del 1 al ' +numeroMax+ '.');
    nuemeroSecreto = generarNumeroAleatorio();
    nuemeroIntentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de inicio 
    CondicionesIniciales();
    //generar el numero aleatorio
    //inicializar el numero de intentos
    //deshabilitar el boton de nuevo juegos;
    document.getElementById('reiniciar').setAttribute('disabled',true); //seteo nuevamento el boton deshabilitado
    
    
}

function limpiarCaja (){
    let Valorcaja = document.querySelector('#valorUsuario').value = ''
}

CondicionesIniciales();






   
/*
function Saludo(){
    console.log("Hola mundo");
    return;
}

Saludo();


function Saludo2(nombre){
    console.log("Hola " +nombre+ ".");
    return;
}

Saludo2("Facundo");

function doble(numero){
    return numero *2;
}

let resultado = doble(4);

console.log(resultado);

function promedio(numero1, numero2, numero3){
    let promedio = (numero1 + numero2 + numero3) / 3
    return promedio;
}

let promedioNotas = promedio(4,5,7);

console.log(promedioNotas);

function mayor(n1, n2) {
    if(n1 > n2){
        return n1;
    }else{
        return n2;
    }
    
}

let NumeroMayor = mayor(10,8);

console.log(NumeroMayor);

function Multiplicar(Numeros){
    return Numeros * Numeros;
}

let N = Multiplicar(10);

console.log(N);
*/
/*
function MasaCorporal(peso, alt){
    return Math.floor(peso/alt);
}

let IMC = MasaCorporal(78,1.79);
console.log(IMC);

function Factorial (numero){
let Fac = 1;
    if(numero == 0){
        return console.log("No se puede calcular");
    }else{
        while (numero != 0){
            Fac*= numero;
            numero--;
    }
    return Fac;
    }
    
}

let Fac = Factorial(4);
console.log(Fac);

function DolaAReal(dolar){
    return 4.80*dolar;
}

let Real = DolaAReal(100);
console.log(Real);

function perimetroRectangulo(alto, ancho){
    return (alto*ancho);
}

let Rectangulo = perimetroRectangulo(100,50);
console.log("El perimetro del rectangulo es " +Rectangulo+ ".");

function AreaCirculoyPerimetro(radio){
    console.log(`Area ${3.14 * (radio * radio)}`);
    console.log(`Perimetro ${2 * 3.14 * radio}`);

}

let circulo = AreaCirculoyPerimetro(3);

function TablaMultiplicar(numero){

    let resultado = 0;
    for(let i=1; i<=10; i++){
        resultado = i*numero;
        console.log(+i+ ' x ' +numero+ ' = ' +resultado+ ".");
        
    }
}

let num = TablaMultiplicar(5);
*/

/*
let listaGenerica = [];

let LenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python'];

LenguajesDeProgramacion.push('Java');
LenguajesDeProgramacion.push('Ruby');
LenguajesDeProgramacion.push('GoLang');

function mostrar(){
    for(let i=0; i<LenguajesDeProgramacion.length;i++){
        console.log(LenguajesDeProgramacion[i]);
    }
}

mostrar();

function mostrarInverso(){
    for(let i=LenguajesDeProgramacion.length-1; i >= 0; i--){
        console.log(LenguajesDeProgramacion[i]);
    }
}

mostrarInverso();

let listaNumeros = [3,2,10,12];

function promedio(){
    let acumulador = 0;
    for (let i=0; i<listaNumeros.length; i++){
        acumulador +=listaNumeros[i];
    }
    return acumulador / listaNumeros.length
}

let prom = promedio();
console.log(prom);

function MayorYMenor (){

    let mayor = -99999999999999;
    let menor = 9999999999999;

    for(let i= 0; i<listaNumeros.length; i++){
        if(listaNumeros[i] > mayor){
            mayor = listaNumeros[i];
        }else{
            if(listaNumeros[i] < menor){
                menor = listaNumeros[i];
            }
        }
    }

    console.log("El numero mas grande es: " +mayor+ ".");
    console.log("El numero mas chico es: " +menor+ ".");
}

MayorYMenor();

function Suma(){
    let acumulador = 0;
    for(let i = 0; i<listaNumeros.length; i++){
        acumulador += listaNumeros[i];
    }
    console.log("La suma de todos los numero es " +acumulador+ ".")
}

Suma();

function buscar(numero){
    for(let i = 0; i<listaNumeros.length; i++){
        if(listaNumeros[i] == numero){
            return i;
        }
            
    }
    return -1;
}

let numero = 12;
let pos = buscar(numero);
console.log(`${pos == -1 ? 'No se encontro' : 'Se encontro el numero'} ${numero} ${pos != -1 ? 'en la posicion ' +pos : ''}`);
*/
