'use strict';

// CONTENUTI MODIFICABILI: questo oggetto è l'unica fonte dei dati della pagina.
// null significa dato mancante: non sostituirlo con un valore ipotizzato.
const SITE_DATA = {
  name: 'Forno Trigo',
  title: 'Forno Trigo — Proposta di sito, Torino',
  description: 'Proposta indipendente di sito per Forno Trigo, forno contemporaneo in via Giulia di Barolo 25/A, Torino. Dati e identità da confermare.',
  address: { street: 'Via Giulia di Barolo 25/A', area: 'Vanchiglia · Torino' },
  social: { handle: '@fornotrigo', url: 'https://www.instagram.com/fornotrigo/' },
  maps: 'https://www.google.com/maps/search/?api=1&query=Forno+Trigo+Via+Giulia+di+Barolo+25A+Torino',
  hours: null, phone: null, email: null, officialMenu: null,
  officialLogo: { src: 'img/trigo-logo.svg', alt: 'TRIGO' },
  navigation: [ { label: 'Il forno', href: '#il-forno' }, { label: 'La proposta', href: '#la-proposta' }, { label: 'Dove siamo', href: '#dove' } ],
  actions: { maps: 'Come arrivare', discover: 'Scopri il forno', instagram: 'Segui il forno su Instagram' },
  hero: {
    eyebrow: 'Forno contemporaneo · Torino',
    title: ['Pane, dolci.', 'Una finestrella.'],
    description: 'Forno Trigo, in via Giulia di Barolo. Pane e dolci da forno, affacciati sul quartiere Vanchiglia.',
    caption: 'Illustrazione concettuale, non una foto del locale.'
  },
  story: {
    index: '01 / Il forno', title: ['Il grano,', 'l’inizio di tutto.'],
    intro: 'TRIGO. Perché in spagnolo significa grano. E il grano è l’inizio di tutto quello che facciamo.',
    description: 'Siamo partiti per scoprire il mondo, siamo tornati per ritrovare noi stessi. Viaggiando abbiamo imparato che esiste un altro modo di vivere: più consapevole, più lento.',
    note: 'Dal post di presentazione di @fornotrigo, firmato Lisa | Ale.'
  },
  offer: {
    index: '02 / La proposta', title: 'Dal forno.',
    note: 'Due categorie raccontate dalle fonti. La selezione attuale va verificata con il forno.',
    menuNote: 'Assortimento, prezzi, ingredienti e allergeni. Questa sezione non è un menu ufficiale.',
    products: [
      { number: '01', title: 'Pane', subtitle: 'Grani antichi e lievitazione naturale', type: 'pane', text: 'Il pane è al centro della proposta descritta dalle fonti. Tipologie, pezzature, ingredienti, allergeni, prezzi e disponibilità attuale sono [DA CONFERMARE].' },
      { number: '02', title: 'Dolci da forno', subtitle: 'Lievitati dolci', type: 'dolci', text: 'Le fonti parlano di pani e lievitati dolci di ispirazione internazionale. Ricette, ingredienti, allergeni, prezzi e selezione attuale sono [DA CONFERMARE].' }
    ]
  },
  contact: {
    index: '03 / Vieni a trovarci', title: ['Ci vediamo', 'in Vanchiglia.'],
    hoursTitle: 'Orari', hoursNote: 'Non sono stati verificati. Controllali con il forno prima di passare.',
    socialTitle: 'Il profilo del forno', socialNote: 'Per consultare il profilo Instagram può essere richiesto l’accesso.',
    ordersTitle: 'Ordini e contatti', ordersNote: 'Telefono, email e modalità di prenotazione non sono ancora verificati.'
  },
  faq: {
    index: 'Prima di passare', title: 'Le cose utili.',
    items: [
      { question: 'Dove si trova Forno Trigo?', answer: 'In via Giulia di Barolo 25/A, nel quartiere Vanchiglia di Torino, secondo le fonti pubbliche. Il pulsante “Come arrivare” apre la ricerca dell’indirizzo su Google Maps.' },
      { question: 'Dove posso vedere il menu e gli orari?', answer: 'Menu e orari aggiornati sono [DA CONFERMARE]. Consulta il profilo @fornotrigo e verifica direttamente con il forno; questa demo non mostra un listino o uno stato di apertura in tempo reale.' },
      { question: 'Si può ordinare da questo sito?', answer: 'Le modalità di ordine, prenotazione e ritiro sono [DA CONFERMARE]. Questa proposta di sito non raccoglie ordini né pagamenti.' }
    ]
  },
  demo: {
    banner: 'Proposta di sito · demo indipendente', detail: 'Identità e dati da confermare',
    footer: 'Demo indipendente · 2026 · Dati e identità da confermare',
    notesButton: 'Note sulla demo', notesTitle: 'Una proposta, da confermare.',
    notesBody: 'Questa è una proposta indipendente per Forno Trigo. Non è il sito ufficiale del locale e non risulta approvata dai gestori. Indirizzo e categorie provengono da fonti pubbliche e vanno riconfermati prima dell’uso commerciale. Orari, menu, prezzi, ingredienti, allergeni e contatti diretti sono [DA CONFERMARE].',
    brandNote: 'Il logo e il racconto del forno provengono dal post Instagram fornito dall’utente. Il marchio è mostrato com’è; la palette riprende avorio, marrone e arancione del post. I codici colore campionati e i font del sito non sono un manuale ufficiale del marchio. Le fotografie dei prodotti devono ancora essere inserite. L’illustrazione è concettuale e non rappresenta il locale reale.',
    privacyNote: 'La pagina non incorpora mappe, social, analytics o moduli e non imposta cookie applicativi. I collegamenti esterni aprono servizi di terzi, che gestiscono i dati secondo le proprie informative.'
  },
  sources: [
    { label: 'Eat Piemonte · 20 maggio 2026', url: 'https://www.eatpiemonte.com/p/forno-trigo-torino' },
    { label: 'Pianeta Pane / TorinoToday · 20 maggio 2026', url: 'https://www.pianetapane.it/torinotoday-it-il-nuovo-panificio-di-qualita-da-provare-a-torino-vende-dolci-e-pane-tramite-una-finestrella/' },
    { label: 'Instagram · @fornotrigo', url: 'https://www.instagram.com/fornotrigo/' }
  ]
};

const resolveCopy = (path) => path.split('.').reduce((value, key) => value?.[key], SITE_DATA);
const make = (tag, className, text) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
};
function externalLink(anchor, url) {
  anchor.href = url;
  anchor.target = '_blank';
  anchor.rel = 'noopener noreferrer';
}
function fillLines(id, lines) {
  const heading = document.getElementById(id);
  lines.forEach((line) => heading.append(make('span', '', line)));
}

document.documentElement.classList.add('js');
document.title = SITE_DATA.title;
document.querySelector('meta[name="description"]').content = SITE_DATA.description;
document.querySelectorAll('[data-brand-logo]').forEach((image) => {
  image.src = SITE_DATA.officialLogo.src;
  image.alt = SITE_DATA.officialLogo.alt;
});
document.querySelectorAll('[data-copy]').forEach((element) => {
  const copy = resolveCopy(element.dataset.copy);
  if (typeof copy === 'string') element.textContent = copy;
});
document.querySelectorAll('[data-link]').forEach((anchor) => {
  externalLink(anchor, anchor.dataset.link === 'maps' ? SITE_DATA.maps : SITE_DATA.social.url);
});
fillLines('hero-title', SITE_DATA.hero.title);
fillLines('story-title', SITE_DATA.story.title);
fillLines('visit-title', SITE_DATA.contact.title);

const navigation = document.querySelector('.primary-nav');
SITE_DATA.navigation.forEach(({ label, href }) => {
  const anchor = make('a', '', label);
  anchor.href = href;
  navigation.append(anchor);
});
const menuButton = document.querySelector('.menu-toggle');
menuButton.hidden = false;
function closeMenu(returnFocus = false) {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const next = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(next));
  navigation.classList.toggle('is-open', next);
});
navigation.addEventListener('click', (event) => {
  const anchor = event.target.closest('a');
  if (!anchor) return;
  closeMenu();
  const target = document.querySelector(anchor.getAttribute('href'));
  if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 900px)').addEventListener('change', () => closeMenu());

SITE_DATA.offer.products.forEach((product) => {
  const details = make('details', 'product');
  const summary = make('summary', 'product-summary');
  summary.append(make('span', 'product-number', product.number));
  const copy = make('span', 'product-copy');
  copy.append(make('span', 'product-title', product.title), make('span', 'product-subtitle', product.subtitle));
  const symbol = make('span', `product-symbol symbol-${product.type}`);
  symbol.setAttribute('aria-hidden', 'true');
  const plus = make('span', 'details-plus', '+');
  plus.setAttribute('aria-hidden', 'true');
  summary.append(copy, symbol, plus);
  details.append(summary, make('p', 'product-description', product.text));
  document.getElementById('prodotti').append(details);
});
SITE_DATA.faq.items.forEach(({ question, answer }) => {
  const details = make('details', 'faq-item');
  const summary = make('summary');
  summary.append(make('span', '', question));
  const plus = make('span', 'details-plus', '+');
  plus.setAttribute('aria-hidden', 'true');
  summary.append(plus);
  details.append(summary, make('p', '', answer));
  document.getElementById('domande').append(details);
});
SITE_DATA.sources.forEach(({ label, url }) => {
  const item = make('li');
  const anchor = make('a', '', label);
  externalLink(anchor, url);
  item.append(anchor);
  document.getElementById('fonti').append(item);
});
const notes = document.getElementById('demo-notes');
document.getElementById('open-notes').addEventListener('click', () => notes.showModal());
notes.querySelector('.close-dialog').addEventListener('click', () => notes.close());
notes.addEventListener('click', (event) => { if (event.target === notes) notes.close(); });
