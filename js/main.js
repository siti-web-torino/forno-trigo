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
  navigation: [ { label: 'Il forno', href: '#il-forno' }, { label: 'Calendario del pane', href: '#la-proposta' }, { label: 'Dove siamo', href: '#dove' } ],
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
    index: '02 / Dal forno', title: 'Calendario del pane.',
    note: 'Ogni giorno ha la sua lievitazione, i suoi profumi e la sua farina.',
    source: 'Dal calendario di @fornotrigo pubblicato il 15 settembre.',
    menuNote: 'Conferma con il forno il calendario attuale, la disponibilità, i prezzi e gli allergeni. Le descrizioni sono sintesi del post, non un elenco completo degli ingredienti.',
    days: [
      { id: 'pane-ogni-giorno', label: 'Ogni giorno', breads: [
        { name: 'Pane di casa', photo: { src: 'img-originali/calendario-pane/IMG_8808.jpeg', alt: 'Pane di casa aperto, con mollica e crosta in vista', source: [709, 1536], crop: [8, 865, 290, 377] }, description: 'Lievito madre vivo e farro monococco del Mulino Sobrino. Mollica aperta e crosta croccante al sesamo tostato.' },
        { name: 'Integrale', photo: null, description: 'Farina tipo 1 del Mulino Fagioli e integrale del Mulino Sobrino. Lievitazione naturale di 19 ore, mollica densa e umida.' }
      ] },
      { id: 'pane-mercoledi-domenica', label: 'Da mercoledì a domenica', breads: [
        { name: 'Rugbrød', photo: { src: 'img-originali/calendario-pane/IMG_8809.jpeg', alt: 'Rugbrød rettangolare ricoperto di semi', source: [709, 1536], crop: [399, 578, 288, 476] }, description: 'Pane nordico con 100% farina di segale del Mulino Sobrino, lievito madre e semi. Compatto, da gustare a fette sottili.' }
      ] },
      { id: 'pane-martedi', label: 'Martedì', breads: [
        { name: 'Saragolla', photo: { src: 'img-originali/calendario-pane/IMG_8810.jpeg', alt: 'Pagnotta di Saragolla dalla crosta scura', source: [709, 1536], crop: [465, 523, 244, 258] }, description: 'Grano duro antico e lievito madre vivo. Mollica dorata e setosa, crosta con note di mandorla tostata.' }
      ] },
      { id: 'pane-mercoledi', label: 'Mercoledì', breads: [
        { name: 'Amarillo', photo: { src: 'img-originali/calendario-pane/IMG_8810.jpeg', alt: 'Amarillo tagliato, con la mollica gialla', source: [709, 1536], crop: [0, 914, 308, 328] }, description: 'Farina tipo 1 del Mulino Fagioli, lievito madre vivo, curcuma e pepe nero. Mollica aperta e dorata, crosta scrocchiarella.' }
      ] },
      { id: 'pane-giovedi', label: 'Giovedì', breads: [
        { name: 'Cacao', photo: { src: 'img-originali/calendario-pane/IMG_8811.jpeg', alt: 'Pane Cacao tagliato, con mollica scura', source: [709, 1536], crop: [0, 747, 310, 389] }, description: 'Farina tipo 1 del Mulino Fagioli, lievito madre vivo e cacao extra dark, con amarene semicandite Agrimontana e nocciole IGP di Roero Vero. Mollica soffice.' }
      ] },
      { id: 'pane-venerdi', label: 'Venerdì', breads: [
        { name: 'Campero', photo: { src: 'img-originali/calendario-pane/IMG_8812.jpeg', alt: 'Pagnotta Campero dalla crosta dorata', source: [709, 1536], crop: [400, 635, 309, 500] }, description: 'Impasto semi-integrale con farina del Mulino Fagioli e lievito madre vivo. Patate arrosto, cipolla e rosmarino, crosta rustica e mollica soffice.' }
      ] },
      { id: 'pane-sabato', label: 'Sabato', breads: [
        { name: 'Venere', photo: { src: 'img-originali/calendario-pane/IMG_8813.jpeg', alt: 'Bauletto Venere dalla crosta scura', source: [709, 1536], crop: [0, 635, 309, 430] }, description: 'Bauletto con farina di riso Venere e farina di mais, a lievitazione naturale. Spirale interna e mollica soffice, ideale da tostare.' }
      ] },
      { id: 'pane-domenica', label: 'Domenica', breads: [
        { name: 'Shokupan', photo: { src: 'img-originali/calendario-pane/IMG_8814.jpeg', alt: 'Shokupan aperto, con la mollica chiara', source: [709, 1536], crop: [379, 675, 317, 540] }, description: 'Pane in cassetta giapponese con farina tipo 1 e metodo Tangzhong. Mollica molto soffice, ideale per i classici sando.' }
      ] }
    ],
    sweets: {
      title: 'Anche dolci da forno.',
      description: 'La proposta comprende anche lievitati dolci. La selezione attuale, i prezzi e gli allergeni sono [DA CONFERMARE] con il forno.',
      action: 'Scopri la proposta su Instagram'
    }
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
      { question: 'Dove trovo il pane della settimana e gli orari?', answer: 'Il Calendario del pane riporta varietà e giorni dal post di @fornotrigo del 15 settembre. Calendario attuale, disponibilità, prezzi e allergeni sono [DA CONFERMARE] con il forno. Anche orari e giorni di apertura vanno verificati prima di passare.' },
      { question: 'Si può ordinare da questo sito?', answer: 'Le modalità di ordine, prenotazione e ritiro sono [DA CONFERMARE]. Questa proposta di sito non raccoglie ordini né pagamenti.' }
    ]
  },
  demo: {
    banner: 'Proposta di sito · demo indipendente', detail: 'Identità e dati da confermare',
    footer: 'Demo indipendente · 2026 · Dati e identità da confermare',
    notesButton: 'Note sulla demo', notesTitle: 'Una proposta, da confermare.',
    notesBody: 'Questa è una proposta indipendente per Forno Trigo. Non è il sito ufficiale del locale e non risulta approvata dai gestori. Il Calendario del pane segue il post Instagram del 15 settembre fornito dall’utente, con descrizioni abbreviate. Calendario attuale, disponibilità, prezzi, ingredienti completi e allergeni sono [DA CONFERMARE] con il forno, così come indirizzo, orari e contatti diretti.',
    brandNote: 'Il logo, il racconto del forno e il calendario provengono dai post Instagram forniti dall’utente. Il marchio è mostrato com’è; la palette riprende avorio, marrone e arancione del post. I codici colore campionati e i font del sito non sono un manuale ufficiale del marchio. L’illustrazione è concettuale e non rappresenta il locale reale.',
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

SITE_DATA.offer.days.forEach((day) => {
  const section = make('section', 'bread-day');
  const label = make('h3', 'bread-day-label', day.label);
  label.id = day.id;
  section.setAttribute('aria-labelledby', day.id);
  const breads = make('div', 'day-breads');
  day.breads.forEach((bread) => {
    const entry = make('article', 'bread-entry');
    if (bread.photo) {
      const { src, alt, source, crop } = bread.photo;
      const [x, y, width, height] = crop;
      const photo = make('figure', 'bread-photo');
      photo.style.aspectRatio = `${width} / ${height}`;
      photo.style.setProperty('--photo-width', `${source[0] / width * 100}%`);
      photo.style.setProperty('--photo-left', `${-x / width * 100}%`);
      photo.style.setProperty('--photo-top', `${-y / height * 100}%`);
      const image = make('img');
      image.src = src;
      image.alt = alt;
      image.width = source[0];
      image.height = source[1];
      image.loading = 'lazy';
      image.decoding = 'async';
      photo.append(image);
      entry.append(photo);
    } else {
      entry.classList.add('bread-entry--text-only');
    }
    const copy = make('div', 'bread-copy');
    copy.append(make('h4', 'bread-name', bread.name), make('p', 'bread-description', bread.description));
    entry.append(copy);
    breads.append(entry);
  });
  section.append(label, breads);
  document.getElementById('calendario-pane').append(section);
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

// Entrate lente, una sola volta: il contenuto resta visibile anche senza animazioni.
function setupGentleMotion() {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const targets = [...document.querySelectorAll('.hero-copy, .hero-art, .story, .bread-day, .visit-grid, .faq')];
  const played = new Set();
  const running = new Set();
  let observer;

  function syncMotion() {
    if (observer) observer.disconnect();
    if (preference.matches) {
      running.forEach((animation) => animation.cancel());
      running.clear();
      return;
    }
    if (!('IntersectionObserver' in window)) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        observer.unobserve(target);
        if (played.has(target) || preference.matches) return;
        played.add(target);
        target.classList.add('has-entered');
        if (typeof target.animate !== 'function') return;
        const animation = target.animate([
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 760, easing: 'cubic-bezier(.2,.65,.3,1)' });
        running.add(animation);
        animation.onfinish = animation.oncancel = () => running.delete(animation);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px 24px 0px' });
    targets.forEach((target) => { if (!played.has(target)) observer.observe(target); });
  }

  syncMotion();
  preference.addEventListener('change', syncMotion);
}
setupGentleMotion();
