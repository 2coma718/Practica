//! Buscador de numeros primos 

//! muy importante fijarse si estas redefiniendo las variables en ciclos de bucles que no queremos 
//! tambien podes poner alerts a las variables para saber que pasa con ellas, durante el proceso
//! para hacer un codigo más optimizado, ahorrarse los problemas. Como 1 y 0 no son primos se 
//! empieza desde 2 y queda más optimizado y chico 

let number = [2];     //* divisores
let piDenumeros = 1;  //* cantida de numeros primos
let ciclos = 2;       //* al coincidir con i to show results
let elevaciones = 1;  //* cada cuanto muestra los resultados (elevaciones de 2)


     for (var i = 2; true; i = i + 1){//todo CON ESTO RECORRE LOS NATURALES 

    let pidescubierto = true;//todo CONFIRMACIÓN QUE NO SE ENCONTRO UN DIVISOR, IMPORTANTE QUE SE RENUEVE SU VALOR PARA CADA DIVIDENDO
    


        l: for(n of number){ //todo SE DIVIDE EL NUMERO EN CUESTION, POR OBVIAS RAZONES SOLO SON N PRIMOS LOS DIVISORES 


        if(i % n === 0) {//todo POR SI SE ENCUENTRA UN DIVISOR
            pidescubierto = false;
            break l
        }


        if (n == number[number.length - 1] && pidescubierto == true){//todo SI NO SE ENCUENTRA ES UN NUMERO PRIMO
            piDenumeros =  piDenumeros + 1;
            number[number.length] = i; 
            break l
        }
    }


    if(i === ciclos){ //todo ALERT CADA ELEVACION DE 2
        alert(`Elevación numero: ${elevaciones}, cantidad de primos: ${piDenumeros}, numeros: ${number.reverse()}`)
        ciclos = i*2; elevaciones = elevaciones + 1}
}



//! muy importante fijarse si estas redefiniendo las variables en cada ciclo de un bucle
//! tambien podes poner alerts a las variables para saber que pasa con ellas, durante el proceso 