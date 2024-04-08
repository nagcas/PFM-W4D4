// Javascript
// Gianluca Chiaravalloti
// Data 08.04.2024

// Verifico se il mio script è collegato correttamente al document html
// console.log("It's working...");

// Inizializzo le opzioni per lo scroll e ne assegno il valore
const options = {
    root: null,
    rootMargin: '20px',
    threshold: 1
}

// Inizializzo e assegno alla variabile cards la classe del contenitore delle cards
const cards = document.querySelectorAll(".section-cards");

// Gestisco la chiamata alla funzione per eseguire lo scroll
const callback = (entries, observer) => {
    // Stampo su console i miei inserimenti
    // console.log(entries);
    // Eseguo un ciclo for su tutti gli inserimenti presenti nel document html
    entries.forEach(entry => {
        // Assegno alla variabile card l'oggetto target
        const card = entry.target;
        // Verifico la condizione di esistenza dell'intersezione
        if (entry.isIntersecting) {
            // Se la condizione è soddisfatta l'elemento è entrato nella viewport
            setTimeout(() => {
                // Aggiungo la classe per eseguire l'animazione nel document html
                card.classList.add("animationCard");
            }, 200);
        } else {
            // Condizione in cui si esce dalla viewport
            // Rimuovo la classe creata dal document html
            card.classList.remove("animationCard");
        }
    });
};

// Assegno alla costante observer il valore della nuova Iserction Observer con la callback e le opzioni definite
const observer = new IntersectionObserver(callback, options);

// Osserva ciascun elemento
cards.forEach(card => {
    observer.observe(card);
});
