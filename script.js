
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
}

// emissione del prezzo in forma umana


// prompt per chiedere chiedere i dati


// calcolo per il prezzo finale del biglietto


// allert per mostrare il messaggio con il risultato finale

