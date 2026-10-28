# Rapporto — Forno Trigo

Verifica del 28 ottobre 2026. **Proposta indipendente pronta da rivedere; logo e testo del post Instagram forniti dall’utente e inseriti; foto dei prodotti ancora attese.**

## Pronto

Pagina statica responsive con presentazione del forno, categorie pane e dolci, indirizzo, link Maps, profilo Instagram, note sulla demo e domande frequenti. Nessun prodotto specifico, prezzo, orario, telefono, recensione o sistema di ordine inventato. Repository pubblica creata prima del sito dal template; `CLAUDE.md` conservato. Deploy Vercel non eseguito, come richiesto.

## Controlli

- Browser Chrome, contenuti renderizzati a 390, 768 e 1280 px tramite iframe di verifica. Nessuno scorrimento orizzontale involontario nelle tre larghezze. Si tratta di controlli nel browser, non di prove su dispositivi fisici o Safari.
- Screenshot delle prime schermate salvati in `docs/anteprime/`. I ritagli eliminano esclusivamente lo sfondo dell'ambiente di verifica; non cambiano il sito. La cattura di pagina intera non era affidabile, quindi sono consegnate schermate di viewport.
- Menu mobile: apertura, Escape, chiusura dopo selezione e trasferimento del focus alla sezione.
- Dettagli del pane: apertura mediante Invio e stato `open` verificato. Note demo: dialogo modale, chiusura mediante Escape, ritorno del focus al pulsante.
- FAQ: apertura nativa mediante tastiera verificata. Link esterni controllati nel DOM per destinazione e `noopener noreferrer`; non è stata effettuata alcuna prenotazione o interazione coi gestori.
- Font e illustrazioni locali; nessuna risorsa CDN, mappa o social incorporato. Verificati sintassi JavaScript, JSON, riferimenti ai file, SVG e contrasto delle coppie testo/sfondo, riportato in `docs/verifiche.json`.
- I principali controlli hanno altezza minima di 44 px. In revisione è stata aumentata anche l'area dei link alle fonti nel dialogo.
- Nessun errore applicativo rilevato nella console osservata. Era presente un messaggio dell'estensione del browser, estraneo ai file del sito; non viene trattato come difetto del progetto.

## Critica ancorata alle anteprime

1. **A 390 px** nome, tipo di forno, indirizzo e azione Maps precedono l'illustrazione: il visitatore capisce cosa è e dove andare nella prima schermata. L'illustrazione continua oltre la piega; non nasconde informazioni necessarie alla visita.
2. **A 768 px** la composizione rimane su una colonna. La grafica comincia sotto il testo: è una scelta prudente per non stringere titolo e azioni, ma allunga il primo blocco rispetto al desktop.
3. **A 1280 px** testo e illustrazione sono affiancati, con azioni e indirizzo leggibili. La grafica è esplicitamente concettuale: non sostituisce la prova di identità che darebbero foto e logo reali.
4. **Tutte le larghezze:** la palette non è stata verificata sul marchio del forno. Questo è il limite principale: la demo non va descritta come una riproduzione fedele dell'identità visiva ufficiale.
5. Scenario venerdì sera, da telefono: l'indirizzo è raggiungibile con un tocco; non si può sapere se il forno sia aperto perché gli orari non sono disponibili. La pagina dichiara questo limite invece di mostrare uno stato di apertura fittizio.

Correzioni effettuate: rimosso un riferimento a “due” domande quando le FAQ sono tre; resi più grandi i link alle fonti nel dialogo. Non sono stati inventati altri difetti per riempire la revisione.

## Prima di presentarlo al forno

Completare per prime le **foto dei prodotti e del locale**, poi confermare con il cliente specifiche della palette, font, indirizzo, menu, ingredienti/allergeni, prezzi, orari e contatti. Logo e racconto del post sono stati forniti dall’utente e adottati su sua richiesta. I dati da giornali non equivalgono all'approvazione dei gestori. L'accesso al profilo Instagram era limitato: non è stato eseguito login e non sono stati aggirati i limiti.

L'IA conosce gli schemi che funzionano ma non misura la clientela reale di questo locale: il risultato va fatto vedere a **2–3 persone vere e al cliente** prima di considerarlo giusto. Contatto con i gestori e proposta commerciale restano all'utente.

## Aggiornamento: logo e racconto originali

Marchio TRIGO del post ricevuto inserito in intestazione e nel footer senza ridisegnare i pixel. Palette avorio, marrone e arancione campionata dallo screenshot: eliminato l’oliva. Sezione “Il forno” aggiornata con le parole originali del post. Le osservazioni precedenti sulla mancanza di marchio e sul colore oliva descrivono la prima versione e sono superate da questo aggiornamento. Foto dei prodotti attese; illustrazione ancora chiaramente segnata come concettuale.

Controllata la modifica nel browser a 390, 768 e 1280 px: nessun overflow orizzontale; logo caricato e leggibile, menu mobile apertura/Escape/chiusura dopo scelta verificati, racconto completo leggibile a 390 px. Nessun errore con origine applicativa nei log osservati. Contrasto testo/fondo AA verificato e salvato in `docs/verifiche.json`. Le nuove immagini `logo-*-browser.jpg` e `post-storia-mobile-browser.jpg` includono la cornice grigia del banco di prova; la larghezza del contenuto è dichiarata nel JSON. I vecchi screenshot documentano la prima versione. Nessun test su dispositivi fisici o Safari.

La pagina pubblica pubblicata dall’utente si apre senza login su https://forno-trigo.vercel.app/. Nessun deploy o modifica delle impostazioni Vercel eseguiti dall’assistente. Il salvataggio passa da `main` della repo esistente; il collegamento già predisposto dall’utente può avviare il suo deploy automatico.
