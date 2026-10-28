# Rapporto — Forno Trigo

Verifica del 28 ottobre 2026. **Proposta indipendente pronta da rivedere; identità ufficiale ancora da completare.**

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

Confermare per primi **logo, palette, fotografie e tono di voce**; poi indirizzo, racconto, menu, ingredienti/allergeni, prezzi, orari e contatti. I dati da giornali non equivalgono all'approvazione dei gestori. L'accesso al profilo Instagram era limitato: non è stato eseguito login e non sono stati aggirati i limiti.

L'IA conosce gli schemi che funzionano ma non misura la clientela reale di questo locale: il risultato va fatto vedere a **2–3 persone vere e al cliente** prima di considerarlo giusto. Contatto con i gestori e proposta commerciale restano all'utente.
