/*
PARTE 1: 
Oggi analizzeremo un problema molto comune: realizzare algoritmi di ricerca.
Il tuo compito è creare una funzione che cercherà per posizione lavorativa E posizione geografica. Questi due valori verranno passati come parametri
Ti abbiamo fornito un array chiamato "jobs" in fondo al file, NON modificarlo in alcun modo.
L'algoritmo che devi realizzare cercherà SIA per posizione lavorativa che per posizione geografica.
Prendi queste tre inserzioni ad esempio:

      job1:  location: "NY, US",     title: "java dev"
      job2:  location: "Genoa, IT"   title: "web dev"
      job3:  location: "US"      title: "dev"

Cercando contemporaneamente come posizione lavorativa "dev" e posizione geografica "US", dovresti ottenere come risultato solamente job1 e job3,
in quanto job2 non soddisfa la condizione posta sulla posizione geografica.

REQUISITI:
- il tuo algoritmo deve tornare i risultati nella seguente forma:
{
  result: [], <-- inserisci qui le inserzioni che rispecchiano la posizione lavorativa e la posizione geografica richiesta
  count: 0 <-- inserisci qui il numero totale delle inserzioni trovate
}

- la tua ricerca deve essere "case insensitive" (non deve essere influenzata da lettere maiuscole o minuscole nelle parole cercate). Questo e' possibile trasformando tutto in lettere minuscole con .toLowerCase()


PARTE 2: 
Nella pagina HTML, inserisci 2 input di tipo testo (uno per la location e uno per il titolo lavorativo, ricordati di diversificarli con un id) e un bottone con valore “cerca”

Al click del bottone, il codice deve raccogliere i valori dei due input e darli in pasto alla funzione che hai creato nella parte 1. 

Dopo aver raccolto ed elaborato i dati, e’ il momento di mostrare i risultati sulla pagina: 
    Puoi scegliere tu se utilizzare un semplice ul / li oppure una tabella 
    Vai passo per passo e usa molti console.log per capire eventualmente dove sbagli
    SUGGERIMENTO: ti servira’ un ciclo for!

*/

// NON MODIFICARE QUESTO ARRAY!
const jobs = [
    { 
        title: "Marketing Intern", 
        location: "US, NY, New York" 
    },
    {
        title: "Customer Service - Cloud Video Production",
        location: "NZ, Auckland",
    },
    {
        title: "Commissioning Machinery Assistant (CMA)",
        location: "US, IA, Wever",
    },
    {
        title: "Account Executive - Washington DC",
        location: "US, DC, Washington",
    },
    { 
        title: "Bill Review Manager", 
        location: "US, FL, Fort Worth" 
    },
    { 
        title: "Accounting Clerk", 
        location: "US, MD," 
    },
    { 
        title: "Head of Content (m/f)", 
        location: "DE, BE, Berlin" 
    },
    {
        title: "Lead Guest Service Specialist",
        location: "US, CA, San Francisco",
    },
    { 
        title: "HP BSM SME", 
        location: "US, FL, Pensacola" 
    },
    {
        title: "Customer Service Associate - Part Time",
        location: "US, AZ, Phoenix",
    },
    {
        title: "ASP.net Developer Job opportunity at United States,New Jersey",
        location: "US, NJ, Jersey City",
    },
    {
        title: "Talent Sourcer (6 months fixed-term contract)",
        location: "GB, LND, London",
    },
    {
        title: "Applications Developer, Digital",
        location: "US, CT, Stamford",
    },
    { 
        title: "Installers", 
        location: "US, FL, Orlando" 
    },
    { 
        title: "Account Executive - Sydney", 
        location: "AU, NSW, Sydney" 
    },
    {
        title: "VP of Sales - Vault Dragon",
        location: "SG, 01, Singapore",
    },
    {     
        title: "Hands-On QA Leader", 
        location: "IL, Tel Aviv, Israel" 
    },
    {
        title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
        location: "GB, SOS, Southend-on-Sea",
    },
    { 
        title: "Visual Designer", 
        location: "US, NY, New York" 
    },
    {
        title: "Process Controls Engineer - DCS PLC MS Office - PA",
        location: "US, PA, USA Northeast",
    },
    { 
        title: "Marketing Assistant", 
        location: "US, TX, Austin" 
    },
    { 
        title: "Front End Developer", 
        location: "NZ, N, Auckland" 
    },
    { 
        title: "Engagement Manager", 
        location: "AE," 
    },
    {
        title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
        location: "US, CA, Carlsbad",
    },
    { 
        title: "Customer Service", 
        location: "GB, LND, London" 
    },
    { 
        title: "H1B SPONSOR FOR L1/L2/OPT", 
        location: "US, NY, New York" 
    },
    { 
        title: "Marketing Exec", 
        location: "SG," 
    },
    {
        title: "HAAD/DHA Licensed Doctors Opening in UAE",
        location: "AE, AZ, Abudhabi",
    },
    {
        title: "Talent Management Process Manager",
        location: "US, MO, St. Louis",
    },
    { 
        title: "Customer Service Associate", 
        location: "CA, ON, Toronto"
    },
    {
        title: "Customer Service Technical Specialist",
        location: "US, MA, Waltham",
    },
    { 
        title: "Software Applications Specialist", 
        location: "US, KS," 
    },
    { 
        title: "Craftsman Associate", 
        location: "US, WA, Everett" 
    },
    { 
        title: "Completion Engineer", 
        location: "US, CA, San Ramon" 
    },
    { 
        title: "I Want To Work At Karmarama", 
        location: "GB, LND," 
    },
    {
        title: "English Teacher Abroad",
        location: "US, NY, Saint Bonaventure",
    },
];


// Verifico se il nio script è collegato correttamente al document html
console.log("It's working...");

// Inizializzo e assegno due array con contenuto vuoto result e counts
// Vegono posizionate esterne in modo da avere una visibilità globale
let result = [];
let counts = [];

/*
    Funzione controlString (con due parametri): 
    Verifico se la stringa inserita da tastiera nelle caselle di input job e location abbiano una lunghezza corretta.
*/
function controlString(stringaJob, stringaLocation) {
    //  Verifica la condizione di lunghezza delle due stringhe
    if (stringaJob.length >= "3" && stringaLocation >= "2") {
        // Se la condizione è soddisfatta restituisco vero
        return true;
    }
    // Altrimenti in ogni caso restituisco il valore falso
    return false;
};

/*
    Funzione searchJobs (con due parametri):
    Ricerca la posizione di job e location e restituiesce un nuovo array con le posizioni degli indici trovate.
*/
function searchJobs(job, location) { 
    // Eseguo un ciclo for sull'oggetto jobs per tutta la sua lunghezza
    for (let i = 0; i < jobs.length; i++) {
        // Rendo i valori delle stringhe job e location in minuscolo
        let ijob = job.toLowerCase();
        let ilocation = location.toLowerCase();

        // Eseguo un controllo se il testo da cercare è presente in job o nella location dell'oggetto
        // e per ogni iterazione chiave valore li rendo minuscoli 
        if (jobs[i].title.toLowerCase().includes(ijob) && 
            jobs[i].location.toLowerCase().includes(ilocation)) {
            
            // Alla prima occorrenza trovata si memorizza il suo indice in un array counts    
            counts.push(i);

            // Stampa su console la posizione della ricerca nell'oggetto jobs 
            console.log("Trovato in posizione " + i);
        }
    }
    // Restituisco il contenuto degli indici trovati nell'array counts
    return counts;
};

/*
    Funzione resultJobs (un parametro):
    Restituisce un nuovo array di oggetti leggendo le posizioni degli indici dall'array counts.
*/
function resultJobs(listJobs) {
    // Eseguo un forEach sull'array contenente gli indici
    listJobs.forEach(function (indice) {
        // Assegno per ogni occorrenza titolo e location dall'oggetto principale jobs al nuovo array result
        result.push(jobs[indice]);
    });
    // Stampa su console il contenuto dell'array result con i risultati
    console.log(result);

    // Restituisco il contenuto dell'arrey con i risultati
    return result;
};

// Gestione principale degli eventi dei pulsanti presenti nel document html
document.addEventListener("DOMContentLoaded", function () {
    // Richiamo i puntatori degli id nel document html
    // Puntatore casella di input
    const jobInput = document.getElementById("jobInput");
    const locationInput = document.getElementById("locationInput");
    
    // puntatore casella button
    const searchBtn = document.getElementById("searchBtn");
    const resetBtn = document.getElementById("resetBtn");

    // Richiamo i puntatori contenuti nel document html per la gestione degli errori
    const errors = document.getElementById("errors");  
    const results = document.getElementById("results");

    // Richiamo i puntatori per la gestione dei risultati di ricerca
    const contentJobs = document.getElementById("contentJobs");
    const cont = document.getElementById("cont");
    const searchList = document.getElementById("searchList");
    
    // Gestisco l'evento click del button ricerca
    searchBtn.addEventListener("click", function() {
        // Richiamo la funzione restDocument per eseguire una pulizia 
        resetDocument();
        
        // Assegno alla variabile verify il valore ottenuto dalla funzione controlString
        let verify = controlString(jobInput.value, locationInput.value);

        // Verifica la condizione della stringa inserita se vera o falsa
        if (verify) {
            // Assegno alla variabile counts il risultato della funzione searchjobs
            let counts = searchJobs(jobInput.value, locationInput.value);

            // Verifica la condizione
            if (counts.length > 0) {
                // Assegno all'id contentJobs lo style display block rendendolo visibile sul document html
                contentJobs.style.display = "block";

                // Richiama la funzione nuova ricerca e la assegna alla variabile nuovi lavori           
                let newJobs = resultJobs(counts);

                // Stampa su console la stringa con il messaggio numero di offerte trovate
                console.log("Numero di offerte trovate: " + counts.length);
                // Assegna a al puntatore cont il valore della variabile conts da visualizzare su document html
                cont.textContent = "Numero di offerte trovate: " + counts.length;
                
                // Eseguo un ciclo for sull'array contenente i valori degli indici trovati
                for (let i = 0; i < newJobs.length; i++) {
                    // Assegno alla variabile la creazione del tag al document html 
                    const createElement = document.createElement("li");
                    // Assegno alla variabile il contenuto di jobs attraverso gli indici di result
                    createElement.textContent = "Job: " + result[i].title + " --- Location: " + result[i].location;
                    searchList.appendChild(createElement);
                }                                        
            } else {
                // Assegno all'id results lo style display block rendendolo visibile sul document html
                results.style.display = "block";

                // Stampa su console la stringa con il messaggio
                console.log("Nessun risultato trovato...");                             
            }
        } else {
            // Assegno all'id errors lo style display block rendendolo visibile sul document html
            errors.style.display = "block";
            
            // Stampa su console la stringa con il messaggio
            console.log("Dati inseriti non corretti...");
        }

        // Assegno agli input di job e locationla stringa vuota
        jobInput.value = "";
        locationInput.value = "";

        // Assegno il valore di vuoto agli array dei risultati e al contatore
        result = [];
        counts = [];
  });

    // Gestisco l'evento del click del button reset 
    resetBtn.addEventListener("click", function() {
        // Richiamo la funzione restDocument per eseguire una pulizia 
        resetDocument();

        // Assegno agli input di job e locationla stringa vuota
        jobInput.value = "";
        locationInput.value = "";
        
        // Assegno il valore di vuoto agli array dei risultati e al contatore
        result = [];
        counts = [];

        // Stampa su console la stringa con il messaggio
        console.log("Hai eseguito la pulizia della ricerca...");
  });

  /*
        funzione resetDocument:
        Esegue una pulizia del document html;
  */
  function resetDocument() {
    // Verifica se sono presenti nel document html eventuali errori e li rendo non visibili
    if (errors || results || contentJobs || cont) {
        // Assegno lo style display none al div errors nel document html
        errors.style.display = "none";

        // Assegno lo style display none al div results nel document html
        results.style.display = "none";
        
        // Assegno lo style display none al div contentJobs nel document html
        contentJobs.style.display = "none";

        // Eseguo una rimozione della lista nel div searchList del document html
        while (searchList.firstChild) {
            searchList.removeChild(searchList.firstChild);
        }
    }
}
});
