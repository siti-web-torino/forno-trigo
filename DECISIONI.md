# Decisioni di progetto

## Tre direzioni considerate

### 1. La finestrella — scelta

- Concetto: una pagina editoriale che usa la finestra come cornice grafica per un forno di quartiere.
- Palette **proposta, non ufficiale**: carta `#F4EEDD` per i fondi, vino `#542C26` per testo e cornici, oliva `#485038` per la sezione visita, grano `#DBB15D` per accenti e illustrazione.
- Font: Fraunces per titoli dal carattere morbido, DM Sans per informazioni e azioni. File locali con licenza OFL.
- Foto e logo: non disponibili; nessuna foto sostitutiva, nome scritto come testo semplice. Illustrazione vettoriale concettuale originale, non marchio.
- Dettaglio: cornice ad arco con scaffali e sagome astratte; non descrive la forma reale della vetrina.
- Rischio: sembrare un'identità già approvata. Contenuto mitigato dal banner demo, dalla nota sull'illustrazione e dalla dichiarazione dei materiali mancanti.
- Giustificazione: le fonti sulla finestrella e i criteri 1, 2, 5 e 6 di STUDIO.md.

### 2. Il quaderno del pane

- Concetto: impaginazione da taccuino con colonne, note e righe tipografiche.
- Palette proposta: bianco caldo `#FAF7EE`, grafite `#282A26`, blu inchiostro `#304D67`.
- Font: Newsreader e Source Sans 3, OFL.
- Foto e logo: assenti; struttura pensata per futuri appunti di laboratorio e menu originali.
- Dettaglio: indice numerato e margini da quaderno.
- Rischio: troppo editoriale e poco riconoscibile senza storie o ricette ricevute.
- Giustificazione: chiarezza informativa, ma mancano i contenuti necessari al concept.

### 3. Il manifesto di quartiere

- Concetto: grandi scritte, composizione verticale e blocchi cromatici da manifesto.
- Palette proposta: avorio `#F5F1DF`, mattone `#A6402D`, nero caldo `#28231D`.
- Font: Archivo Black e Manrope, OFL.
- Foto e logo: nome in testo; nessun elemento che pretenda di essere un logo.
- Dettaglio: civico 25/A come elemento di orientamento.
- Rischio: tono troppo rumoroso rispetto a un'attività la cui grafica ufficiale non è verificabile.
- Giustificazione: indirizzo immediato, ma minore aderenza al gesto della finestrella.

## Scelte operative

- Repository **pubblica** `siti-web-torino/forno-trigo`, creata con l'interfaccia GitHub da `template-vetrina` prima di scrivere il sito. Conservato `CLAUDE.md` originale.
- Nessun deploy, progetto o collegamento Vercel: lo gestisce l'utente.
- Uso Sites come flusso di sviluppo e verifica locale, senza registrazione o pubblicazione su un hosting alternativo.
- Dati e testi modificabili raccolti in `SITE_DATA`, all'inizio di `js/main.js`.
- Informazioni mancanti visibili e nessun finto stato “aperto”, listino, modulo o conferma ordine.
- Le fotografie possono essere aggiunte solo da materiale fornito e autorizzato. L'illustrazione è grafica vettoriale originale, non una foto o una ricostruzione del locale.
- Noindex nel documento, robots.txt chiuso e header `X-Robots-Tag` in configurazione Vercel. Il codice pubblico non implica che sia una versione ufficiale del forno.
- Font inclusi con la rispettiva licenza OFL. Nessuna dipendenza remota durante la visita.

## Aggiornamento del 28 ottobre — post originale ricevuto

Il post fornito dall’utente sostituisce le ipotesi sulla palette: avorio, marrone e un solo accento arancione. Eliminato l’oliva della sezione visita; anche l’illustrazione concettuale usa ora i tre colori campionati. Le direzioni iniziali restano documentate sopra come studio precedente, non come identità corrente. Il marchio ricevuto compare in header e footer senza ricostruzioni: un SVG mostra soltanto l’area del logo del raster originale. Testo di presentazione ripreso dal post, senza inventare storia o dichiarazioni dei fondatori. Font del corpo e titoli restano scelte di progetto. Le foto dei prodotti sono attese dall’utente e saranno integrate in un passaggio successivo. Il sito pubblico esistente è gestito dall’utente su Vercel; l’assistente aggiorna solo la repo.
