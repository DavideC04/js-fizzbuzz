/* 
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. La stampa può essere fatta ovviamente in console.

Prima di partire a scrivere codice poniamoci qualche domanda:
    -Come faccio a sapere se un numero è divisibile per?
    -Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
    1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare passo dopo passo   
    2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" anche su un foglietto 
    
COME BONUS:
BONUS 1
    -Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta, così come fatto in classe questa mattina.

BONUS 2
    -Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5. */



//scrivo un programma per stampare i numeri da 1 a 100, utilizzo un ciclo for

for (let i = 1; i <= 100; i++) {

    // se i numeri sono sia multipli di 3 che multpli di 5 stampa "FizzBuzz"

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");

        //se i numeri sono solo multipli di 3, stampa "Fizz"

    } else if (i % 3 == 0) {
        console.log("Fizz");

        // se i numeri sono solo multipli di 5, stampa "Buzz"

    } else if (i % 5 == 0) {
        console.log("Buzz");

        // se i numeri non sono multipli di 3, e nemmeno di 5, stampa i

    } else {
        console.log(i);
    }
}


// Stampo i quadrati con colori diversi nell'HTML, usando un altro ciclo for

for (j = 1; j <= 100; j++) {

    if (j % 3 == 0 && j % 5 == 0) {
        document.getElementById("squareContainer").innerHTML += `
      <div class="square">
                <p class="text-center bg-danger text-light fs-5 fw-3 vertical-align-square">FrizzBuzz</p>
            </div>`
    } else if (j % 3 == 0) {
        document.getElementById("squareContainer").innerHTML += `
      <div class="square bg_multiple3">
                <p class="text-center text-light fs-5 fw-3 vertical-align-square">Frizz</p>
            </div>`
    } else if (j % 5 == 0) {
        document.getElementById("squareContainer").innerHTML += `
      <div class="square bg_multiple5">
                <p class="text-center text-light fs-5 fw-3 vertical-align-square">Buzz</p>
            </div>`
    } else {
        document.getElementById("squareContainer").innerHTML += `
      <div class="square bg_otherNumbers">
                <p class="text-center text-light fs-5 fw-3 vertical-align-square">${j}</p>
            </div>`
    }
}

