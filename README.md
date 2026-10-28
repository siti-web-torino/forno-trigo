# Forno Trigo — proposta di sito

Demo indipendente per Forno Trigo, via Giulia di Barolo 25/A, Vanchiglia, Torino.
Repository **pubblica**, creata da `siti-web-torino/template-vetrina`. Le regole originali rimangono in `CLAUDE.md`.

Il sito non è approvato dal locale. L’utente ha pubblicato la demo su https://forno-trigo.vercel.app/. Le modifiche vengono salvate nella stessa repo; il deploy e le impostazioni Vercel restano all’utente.

## File

- `index.html`, `css/style.css`, `js/main.js`: pagina senza framework, dipendenze o build.
- `img/`: marchio originale visualizzato dal post ricevuto e grafica vettoriale concettuale. Fotografie dei prodotti in attesa.
- `fonts/`: Fraunces e DM Sans, ospitati localmente con licenze OFL.
- `STUDIO.md`: fonti, dati disponibili e confronto di sei siti di panifici.
- `DECISIONI.md`: tre direzioni considerate e motivazione della scelta.
- `RAPPORTO.md`: verifiche, limiti e priorità prima dell'uso commerciale.
- `docs/anteprime/`: screenshot di telefono, tablet e desktop.
- `docs/verifiche.json`: controlli locali e rapporto di contrasto dei colori usati.

## Modificare il sito

I dati, i testi e i link della pagina sono in **`SITE_DATA` all'inizio di `js/main.js`**. I campi `null` sono dati mancanti: non compilarli con valori ipotetici. Le informazioni modificabili non richiedono di intervenire nel resto della logica JavaScript.

Colori, font e scale sono nelle variabili all'inizio di `css/style.css`. La palette avorio `#EBE6D9`, marrone `#3A2723` e arancione `#E27739` è campionata dallo screenshot del post Instagram fornito dall’utente. I valori non sono specifiche ufficiali del marchio. Il logo originale compare in intestazione e nel footer: `img/trigo-logo.svg` mostra una finestra dei pixel del post, senza ridisegnarli, deformarli o generarli. `img-originali/trigo-post-instagram.png` conserva il file ricevuto. I font dei testi sono ancora una scelta di progetto.

Il titolo e la descrizione vengono applicati anche dal JavaScript. Il documento HTML contiene il fallback iniziale di questi metadati e un riepilogo `noscript`: aggiornare anche questi se cambiano nome o indirizzo. La fascia tipografica decorativa in HTML ripete soltanto le due categorie e la città.

Per una verifica locale è sufficiente un server di file statici nella radice del progetto. Non esiste un comando di build e i file del sito da servire sono nella radice. La cartella `dist/`, se presente in un ambiente di lavoro, è soltanto una copia temporanea per le verifiche Sites ed è ignorata da Git. Nessun account, form, carrello o servizio di prenotazione è configurato.

## Dati e materiali da confermare

- Fotografia dell’Integrale identificata con certezza e fotografie del locale; font e specifiche cromatiche ufficiali. Otto fotografie dei pani sono già visibili dal materiale ricevuto.
- Logo e post ricevuti dall’utente il 28 ottobre 2026 e adottati per la demo; approvazione finale del locale ancora da ottenere.
- Indirizzo e racconto dell'attività, attualmente derivati da fonti pubbliche.
- Orari e giorni di chiusura.
- Conferma del calendario attuale, prezzi, disponibilità, ingredienti completi e allergeni. Il calendario del post del 15 settembre è stato ricevuto e trascritto.
- Telefono, email, modalità di ordine, prenotazione e ritiro.
- Eventuali informazioni societarie e documenti da inserire nella versione ufficiale.

Nel sito i dati mancanti sono indicati con `[DA CONFERMARE]`. Il profilo Instagram richiede l'accesso per vedere i contenuti soggetti a restrizioni: non sono stati consultati mediante un account.

## Demo e pubblicazione

`meta robots`, `robots.txt` e l'header `X-Robots-Tag` in `vercel.json` mantengono la demo esclusa dall'indicizzazione. Il codice pubblico rimane visibile su GitHub: `noindex` non è una protezione di accesso.

Il deploy Vercel è stato eseguito dall’utente. Il link https://forno-trigo.vercel.app/ è stato aperto senza schermata di accesso nel browser di verifica il 28 ottobre 2026. Le modifiche al codice passano da `main`; nessuna impostazione o operazione di deploy viene eseguita dall’assistente su Vercel. Non rimuovere i segnali della demo o noindex finché dati, materiali e identità non sono approvati.

Le fotografie future devono essere fornite e autorizzate. Conservare gli originali in `img-originali/` e inserire versioni WebP ottimizzate in `img/`; non usare persone riconoscibili senza consenso.

## Calendario del pane

I sette screenshot forniti dall’utente sono conservati invariati in `img-originali/calendario-pane/`. La pagina presenta tutti i nove pani con descrizioni abbreviate in testo HTML, organizzati per i giorni indicati nelle immagini. I contenuti si modificano in `SITE_DATA.offer.days` in `js/main.js`: `label` è il gruppo di giorni, `breads` contiene nomi e descrizioni. Il titolo e il richiamo in navigazione usano “Calendario del pane”.

Il post mostra “15 settembre”, senza anno visibile: non attribuire un anno. “Ogni giorno” descrive il calendario delle produzioni; non è prova di apertura quotidiana. La disponibilità attuale e le informazioni complete sugli ingredienti e sugli allergeni vanno confermate con il forno. Non sono stati aggiunti prezzi o indicazioni “senza glutine”, né promesse sulla conservazione.

## Foto dei pani e movimento

Otto immagini del calendario sono ora visibili accanto ai nomi. La foto in `IMG_8808.jpeg` è associata al **Pane di casa**, come identificato dall’utente. L’Integrale conserva la descrizione in attesa di una foto identificata con certezza. Gli altri abbinamenti sono Rugbrød → IMG_8809; Saragolla e Amarillo → due aree di IMG_8810; Cacao → IMG_8811; Campero → IMG_8812; Venere → IMG_8813; Shokupan → IMG_8814.

Ogni pane ha un campo `photo` in `SITE_DATA.offer.days[].breads[]`: `src`, `alt`, dimensioni `source` e rettangolo `crop` in pixel `[x, y, larghezza, altezza]`. Il valore `null` lascia il testo senza foto. Il CSS mostra la sola area fotografica del post; i file originali sono invariati e i testi/interfaccia Instagram restano fuori dal ritaglio. Le immagini hanno caricamento differito e spazio riservato; uno stesso file, come IMG_8810, viene riutilizzato dal browser per i due ritagli.

Le sezioni entrano una volta con una comparsa di 760 ms e spostamento di 14 px; i tratti arancioni si distendono in 1 s. Sui dispositivi con puntatore preciso le foto hanno un leggero ingrandimento al passaggio. `prefers-reduced-motion` disabilita il movimento e annulla le entrate in corso. Se le API di animazione non sono disponibili, il contenuto resta leggibile.
