/* 
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.

Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. La stampa può essere fatta ovviamente in console.

Prima di partire a scrivere codice poniamoci qualche domanda:
    -Come faccio a sapere se un numero è divisibile per?
    -Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
    1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare passo dopo passo   
    2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" anche su un foglietto */



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

