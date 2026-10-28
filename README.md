# Forno Trigo — proposta di sito

Demo indipendente per Forno Trigo, via Giulia di Barolo 25/A, Vanchiglia, Torino.
Repository **pubblica**, creata da `siti-web-torino/template-vetrina`. Le regole originali rimangono in `CLAUDE.md`.

Il sito non è approvato dal locale. Il deploy su Vercel è lasciato all'utente e non è stato eseguito.

## File

- `index.html`, `css/style.css`, `js/main.js`: pagina senza framework, dipendenze o build.
- `img/`: grafica vettoriale concettuale originale. Nessuna fotografia del locale.
- `fonts/`: Fraunces e DM Sans, ospitati localmente con licenze OFL.
- `STUDIO.md`: fonti, dati disponibili e confronto di sei siti di panifici.
- `DECISIONI.md`: tre direzioni considerate e motivazione della scelta.
- `RAPPORTO.md`: verifiche, limiti e priorità prima dell'uso commerciale.
- `docs/anteprime/`: screenshot di telefono, tablet e desktop.
- `docs/verifiche.json`: controlli locali e rapporto di contrasto dei colori usati.

## Modificare il sito

I dati, i testi e i link della pagina sono in **`SITE_DATA` all'inizio di `js/main.js`**. I campi `null` sono dati mancanti: non compilarli con valori ipotetici. Le informazioni modificabili non richiedono di intervenire nel resto della logica JavaScript.

Colori, font e scale sono nelle variabili all'inizio di `css/style.css`. La palette crema, bordeaux, oliva e grano è **una proposta grafica**, non una palette ufficiale verificata. Il nome in intestazione è testo, non un logo ricostruito.

Il titolo e la descrizione vengono applicati anche dal JavaScript. Il documento HTML contiene il fallback iniziale di questi metadati e un riepilogo `noscript`: aggiornare anche questi se cambiano nome o indirizzo. La fascia tipografica decorativa in HTML ripete soltanto le due categorie e la città.

Per una verifica locale è sufficiente un server di file statici nella radice del progetto. Non esiste un comando di build e i file del sito da servire sono nella radice. La cartella `dist/`, se presente in un ambiente di lavoro, è soltanto una copia temporanea per le verifiche Sites ed è ignorata da Git. Nessun account, form, carrello o servizio di prenotazione è configurato.

## Dati e materiali da confermare

- Logo originale, palette ufficiale, font e fotografie autorizzate del forno.
- Indirizzo e racconto dell'attività, attualmente derivati da fonti pubbliche.
- Orari e giorni di chiusura.
- Menu, prezzi, assortimento attuale, ingredienti e allergeni.
- Telefono, email, modalità di ordine, prenotazione e ritiro.
- Eventuali informazioni societarie e documenti da inserire nella versione ufficiale.

Nel sito i dati mancanti sono indicati con `[DA CONFERMARE]`. Il profilo Instagram richiede l'accesso per vedere i contenuti soggetti a restrizioni: non sono stati consultati mediante un account.

## Demo e pubblicazione

`meta robots`, `robots.txt` e l'header `X-Robots-Tag` in `vercel.json` mantengono la demo esclusa dall'indicizzazione. Il codice pubblico rimane visibile su GitHub: `noindex` non è una protezione di accesso.

Nessun progetto o deploy Vercel è stato creato. Il sito è predisposto come pagina statica per l'importazione dalla stessa repository; l'eventuale link pubblico di produzione e le sue autorizzazioni andranno verificati dopo il deploy dell'utente. Non rimuovere i segnali della demo o noindex finché dati, materiali e identità non sono approvati.

Le fotografie future devono essere fornite e autorizzate. Conservare gli originali in `img-originali/` e inserire versioni WebP ottimizzate in `img/`; non usare persone riconoscibili senza consenso.
