
// test per controllare la corretta importazione del file js
console.log('ciao');

// calcolare il prezzo del biglietto 

function calc_price(km, age) {
    
    const price_for_km = 0.21;
    let price = km * price_for_km;

    // applicare gli sconti
    
    if (age < 18) {
        
        price = price * 0.8;

    } else if (age >= 65){
        
        price = price * 0.6;
        
    }

    // emissione del prezzo in forma umana
    return price.toFixed (2);
}



// prompt per chiedere chiedere i dati

const km = prompt('Inserisci la distanza da percorrere');
const age = prompt('inserisci la tua età')

// calcolo per il prezzo finale del biglietto
const final_price = calc_price(km, age);


// allert per mostrare il messaggio con il risultato finale

