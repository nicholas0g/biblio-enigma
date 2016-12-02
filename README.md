# Biblio-Enigma-client
This repo contains the project for " Linguaggi e tecnologie per il Web" - Sapienza Univ. of Rome ay2016/2017

ENGLISH
Specs:
The purpose is to build an user-interface for an automatic system for the live monitoring of empty seats in the lecture rooms of "La Sapienza" campus in Rome.

Front-end:
The home-page of the website will show all libraries in the campus and the number of free seats available.
Also the site will have a collection of pages, one for each library, in which the library will be presented by these informations:
Library's Name
Historic description
Technical description (Opening and closing time,total number of seats,free wifi presence, borrowing service active or not, 24h opening or not)
Database of borrowed and available books 
How to came there (public transport, google maps)

If any student would like to have for statistical analysis purpose the weekly / monthly data of the site,
it can take on a dedicated page and through a specific form containing name, registration number and institutional email
and he must click on a checkbox to a "declaration of non-commercial use of data" (read in full through a dedicated page link).


This part of the project will use: HTML5, JavaScript, CSS3 and JQuery.

Back-end:
TTD

ITALIAN
Specifiche:

L’idea è quella di creare un sito che funga da interfaccia per un sistema di monitorizzazione dei posti nelle aule studio
delle biblioteche della Sapienza. 


Front-end:
La home del sito web conterrà un elenco / visuale di tutte le biblioteche della sapienza e del relativo numero di posti disponibili in quel momento. Tale numero viene ottenuto mediante una chiamata API REST ( una GET nella fattispecie) al server centrale .


All’interno del sito vi saranno inoltre altre pagine di informazioni sul progetto e sulle biblioteche, ove in ognuna delle quali ci saranno:
Nome della biblioteca
Descrizione storica 
Descrizione tecnica (numero di posti disponibili, presenza di wifi sapienza / eduroam , possibilità di prendere in prestito i libri, orari di apertura e chiusura (è h24?))
Descrizione di libri presenti e disponibili per la consultazione
Collegamento e modi di arrivare (minimappa google ?)


Se qualche studente volesse avere a scopo di studio statistico o di qualsiasi altro genere la disponibilità di avere le API dell'infrastruttura del servizio , può richiedere in una pagina dedicata e mediante un’apposita form contenente nome, cognome, matricola, email istituzionale e una casella di spunta di una “dichiarazione di uso non commerciale dei dati” (leggibile per intero tramite link a pagina dedicata) una chiave personale da utilizare per le chiamate REST al servizio esposto in questo progetto.

In un qualsiasi momento sarà inoltre posibile accedere alla lista delle ultime richieste/ricerche fatte con relativi risultati (in modo tale da controllare eventuali modifiche/aggiornamenti dello status delle biblioteche) mediante un sistema noSQL di LocalStorage.

Back-end:
Sarà inoltre disponibile un'area visuale raggiungibile tramite web che permetterà ad uno o più ipotetici amministratori di segnalare eventuali studenti in entrata o uscita dalle biblioteche in modo tale da aggiornare eventuali posti disponibili.
In futuro si immagina di automatizzare il processo di ingreso/uscita dalle biblioteche.

L'insieme dei dati viene sempre rilasciato sotto forma di JSON che viene poi elaborato. Le API per cui un qualsiasi studente può fare richiesta rilasciano oggetti di tipo JSON.

Il progetto lato client impiega le seguenti tecnologie: HTML5, JavaScript, CSS3, JSON.
