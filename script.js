const movieCatalog = [
  { title: 'El origen', year: 2010, genres: ['Ciencia ficción', 'Acción'], rating: '8.8', duration: '2h 28min', description: 'Un ladrón especializado en extraer secretos de los sueños recibe una última misión: implantar una idea.', image: '', poster: 'EL ORIGEN', justWatch: 'https://www.justwatch.com/es/buscar?q=El%20origen', trailer: 'El origen tráiler oficial español' },
  { title: 'Interstellar', year: 2014, genres: ['Ciencia ficción', 'Drama', 'Aventura'], rating: '8.7', duration: '2h 49min', description: 'Un grupo de exploradores viaja más allá de nuestra galaxia para asegurar el futuro de la humanidad.', image: '', poster: 'INTERSTELLAR', justWatch: 'https://www.justwatch.com/es/buscar?q=Interstellar', trailer: 'Interstellar tráiler oficial español' },
  { title: 'Mad Max: Furia en la carretera', year: 2015, genres: ['Acción', 'Aventura'], rating: '8.1', duration: '2h 00min', description: 'En un desierto sin ley, Max se une a Furiosa en una huida explosiva hacia la libertad.', image: '', poster: 'MAD MAX', justWatch: 'https://www.justwatch.com/es/buscar?q=Mad%20Max%20Furia%20en%20la%20carretera', trailer: 'Mad Max Furia en la carretera tráiler oficial español' },
  { title: 'El gran hotel Budapest', year: 2014, genres: ['Comedia', 'Aventura'], rating: '8.1', duration: '1h 40min', description: 'Un conserje legendario y su joven protegido quedan envueltos en una aventura elegante y absurda.', image: '', poster: 'HOTEL BUDAPEST', justWatch: 'https://www.justwatch.com/es/buscar?q=El%20gran%20hotel%20Budapest', trailer: 'El gran hotel Budapest tráiler oficial español' },
  { title: 'Parásitos', year: 2019, genres: ['Drama', 'Suspenso'], rating: '8.5', duration: '2h 12min', description: 'Una familia sin recursos se infiltra poco a poco en la casa de una familia rica.', image: '', poster: 'PARÁSITOS', justWatch: 'https://www.justwatch.com/es/buscar?q=Par%C3%A1sitos', trailer: 'Parásitos tráiler oficial español' },
  { title: 'Avengers: Infinity War', year: 2018, genres: ['Acción', 'Ciencia ficción', 'Aventura'], rating: '8.4', duration: '2h 29min', description: 'Los Vengadores se enfrentan a Thanos en una batalla por el destino del universo.', image: '', poster: 'INFINITY WAR', justWatch: 'https://www.justwatch.com/es/buscar?q=Avengers%20Infinity%20War', trailer: 'Avengers Infinity War tráiler oficial español' },
  { title: 'La llegada', year: 2016, genres: ['Ciencia ficción', 'Drama', 'Suspenso'], rating: '7.9', duration: '1h 56min', description: 'Una lingüista intenta descifrar el mensaje de visitantes que llegan a la Tierra.', image: '', poster: 'LA LLEGADA', justWatch: 'https://www.justwatch.com/es/buscar?q=La%20llegada', trailer: 'La llegada tráiler oficial español' },
  { title: 'Jojo Rabbit', year: 2019, genres: ['Comedia', 'Drama'], rating: '7.9', duration: '1h 48min', description: 'Un niño descubre que su madre esconde a una joven judía en su casa.', image: '', poster: 'JOJO RABBIT', justWatch: 'https://www.justwatch.com/es/buscar?q=Jojo%20Rabbit', trailer: 'Jojo Rabbit tráiler oficial español' },
  { title: 'El laberinto del fauno', year: 2006, genres: ['Drama', 'Aventura', 'Suspenso'], rating: '8.2', duration: '1h 58min', description: 'Una niña descubre un mundo fantástico en la España de la posguerra.', image: '', poster: 'EL LABERINTO DEL FAUNO', justWatch: 'https://www.justwatch.com/es/buscar?q=El%20laberinto%20del%20fauno', trailer: 'El laberinto del fauno tráiler oficial español' },
  { title: 'Distrito 9', year: 2009, genres: ['Ciencia ficción', 'Acción', 'Suspenso'], rating: '7.9', duration: '1h 52min', description: 'Un funcionario queda atrapado en el conflicto entre humanos y visitantes alienígenas.', image: '', poster: 'DISTRITO 9', justWatch: 'https://www.justwatch.com/es/buscar?q=Distrito%209', trailer: 'Distrito 9 tráiler oficial español' },
  { title: 'El caballero oscuro', year: 2008, genres: ['Acción', 'Drama', 'Suspenso'], rating: '9.0', duration: '2h 32min', description: 'Batman se enfrenta a un enemigo que convierte Gotham en un juego de caos.', image: '', poster: 'EL CABALLERO OSCURO', justWatch: 'https://www.justwatch.com/es/buscar?q=El%20caballero%20oscuro', trailer: 'El caballero oscuro tráiler oficial español' },
  { title: 'Scott Pilgrim contra el mundo', year: 2010, genres: ['Comedia', 'Acción', 'Animación'], rating: '7.5', duration: '1h 52min', description: 'Un músico debe derrotar a los siete ex de la persona que ama.', image: '', poster: 'SCOTT PILGRIM', justWatch: 'https://www.justwatch.com/es/buscar?q=Scott%20Pilgrim%20contra%20el%20mundo', trailer: 'Scott Pilgrim contra el mundo tráiler oficial español' },
  { title: 'El prestigio', year: 2006, genres: ['Drama', 'Suspenso'], rating: '8.5', duration: '2h 10min', description: 'Dos ilusionistas rivales llevan su obsesión hasta límites peligrosos para superar al otro.', image: '', poster: 'EL PRESTIGIO', justWatch: 'https://www.justwatch.com/es/buscar?q=El%20prestigio', trailer: 'El prestigio película tráiler oficial español' },
  { title: 'Shutter Island', year: 2010, genres: ['Misterio', 'Suspenso', 'Drama'], rating: '8.2', duration: '2h 18min', description: 'Un agente investiga la desaparición de una paciente en un hospital aislado y lleno de secretos.', image: '', poster: 'SHUTTER ISLAND', justWatch: 'https://www.justwatch.com/es/buscar?q=Shutter%20Island', trailer: 'Shutter Island tráiler oficial español' },
  { title: 'Coraline', year: 2009, genres: ['Animación', 'Aventura', 'Terror'], rating: '7.7', duration: '1h 40min', description: 'Una niña encuentra una puerta secreta hacia una versión aparentemente perfecta de su vida.', image: '', poster: 'CORALINE', justWatch: 'https://www.justwatch.com/es/buscar?q=Coraline', trailer: 'Coraline tráiler oficial español' },
  { title: 'La red social', year: 2010, genres: ['Drama'], rating: '7.8', duration: '2h 00min', description: 'La creación de una red social transforma la vida de sus fundadores y cambia la forma de conectarnos.', image: '', poster: 'LA RED SOCIAL', justWatch: 'https://www.justwatch.com/es/buscar?q=La%20red%20social', trailer: 'La red social tráiler oficial español' }
];

const MAX_MOVIES = 20;

const extraMovies = [
  ['El padrino', 1972, 'Drama|Crimen'],
  ['Pulp Fiction', 1994, 'Crimen|Drama'],
  ['Cadena perpetua', 1994, 'Drama'],
  ['Forrest Gump', 1994, 'Drama|Romance'],
  ['Matrix', 1999, 'Ciencia ficción|Acción'],
  ['El señor de los anillos: La comunidad del anillo', 2001, 'Aventura|Fantasía'],
  ['El señor de los anillos: Las dos torres', 2002, 'Aventura|Fantasía'],
  ['El señor de los anillos: El retorno del rey', 2003, 'Aventura|Fantasía'],
  ['Gladiator', 2000, 'Acción|Drama'],
  ['Memento', 2000, 'Misterio|Suspenso'],
  ['Réquiem por un sueño', 2000, 'Drama'],
  ['Amélie', 2001, 'Comedia|Romance'],
  ['Donnie Darko', 2001, 'Misterio|Ciencia ficción'],
  ['El viaje de Chihiro', 2001, 'Animación|Fantasía'],
  ['Ciudad de Dios', 2002, 'Crimen|Drama'],
  ['Atrápame si puedes', 2002, 'Drama|Crimen'],
  ['El pianista', 2002, 'Drama'],
  ['Kill Bill: Volumen 1', 2003, 'Acción|Crimen'],
  ['Buscando a Nemo', 2003, 'Animación|Aventura'],
  ['Piratas del Caribe', 2003, 'Aventura|Acción'],
  ['Eterno resplandor de una mente sin recuerdos', 2004, 'Romance|Ciencia ficción'],
  ['Los increíbles', 2004, 'Animación|Acción'],
  ['Million Dollar Baby', 2004, 'Drama'],
  ['Batman Begins', 2005, 'Acción|Drama'],
  ['V de Vendetta', 2005, 'Acción|Drama'],
  ['Orgullo y prejuicio', 2005, 'Romance|Drama'],
  ['Brokeback Mountain', 2005, 'Drama|Romance'],
  ['Casino Royale', 2006, 'Acción|Aventura'],
  ['Pequeña Miss Sunshine', 2006, 'Comedia|Drama'],
  ['Ratatouille', 2007, 'Animación|Comedia'],
  ['Zodiac', 2007, 'Crimen|Suspenso'],
  ['No es país para viejos', 2007, 'Crimen|Drama'],
  ['WALL-E', 2008, 'Animación|Ciencia ficción'],
  ['Slumdog Millionaire', 2008, 'Drama|Romance'],
  ['Iron Man', 2008, 'Acción|Ciencia ficción'],
  ['Gran Torino', 2008, 'Drama|Crimen'],
  ['Up', 2009, 'Animación|Aventura'],
  ['Avatar', 2009, 'Ciencia ficción|Aventura'],
  ['Bastardos sin gloria', 2009, 'Drama|Acción'],
  ['500 días con ella', 2009, 'Romance|Comedia'],
  ['Toy Story 3', 2010, 'Animación|Aventura'],
  ['Cisne negro', 2010, 'Drama|Suspenso'],
  ['Inception', 2010, 'Ciencia ficción|Acción'],
  ['Drive', 2011, 'Acción|Drama'],
  ['The Wolf of Wall Street', 2013, 'Drama|Crimen'],
  ['Whiplash', 2014, 'Drama|Música'],
  ['Ex Machina', 2015, 'Ciencia ficción|Drama'],
  ['Arrival', 2016, 'Ciencia ficción|Drama'],
  ['Dunkirk', 2017, 'Acción|Drama'],
  ['Blade Runner 2049', 2017, 'Ciencia ficción|Drama'],
  ['Get Out', 2017, 'Terror|Suspenso'],
  ['Parasite', 2019, 'Drama|Suspenso']
];

function posterData(title, genre = 'Drama') {
  const safeTitle = String(title)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const hash = Array.from(String(title)).reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const palette = [
    ['#0d1020', '#7c3aed', '#22d3ee'],
    ['#12090d', '#ff4d6d', '#f9b24e'],
    ['#061b1f', '#0ea5e9', '#6ee7b7'],
    ['#120b1a', '#a855f7', '#f472b6'],
    ['#0e1728', '#3b82f6', '#67e8f9'],
    ['#1a0f1d', '#f43f5e', '#f59e0b'],
    ['#0b1021', '#38bdf8', '#34d399'],
    ['#120e0b', '#f97316', '#facc15']
  ];

  const [c1, c2, c3] = palette[Math.abs(hash) % palette.length];
  const label = String(genre).toUpperCase();
  const titleLines = safeTitle.length > 18 ? safeTitle.match(/.{1,18}/g).slice(0, 2).join('\n') : safeTitle;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 900">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop stop-color="${c1}"/>
          <stop offset="0.52" stop-color="${c2}"/>
          <stop offset="1" stop-color="${c3}"/>
        </linearGradient>
        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
          <stop stop-color="#ffffff" stop-opacity="0.15"/>
          <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <rect width="600" height="900" fill="url(#bg)"/>
      <rect x="0" y="0" width="600" height="900" fill="url(#glow)"/>
      <circle cx="470" cy="150" r="180" fill="#ffffff" opacity="0.08"/>
      <circle cx="120" cy="780" r="220" fill="#000000" opacity="0.18"/>
      <path d="M0 700 Q220 620 600 710 V900 H0Z" fill="#090b14" opacity="0.72"/>
      <path d="M65 585 L365 585" stroke="#ffffff" stroke-opacity="0.18" stroke-width="2"/>
      <path d="M65 615 L310 615" stroke="#ffffff" stroke-opacity="0.1" stroke-width="2"/>
      <text x="42" y="82" fill="#eef7ff" font-family="Arial" font-size="20" letter-spacing="5">VELTRIX</text>
      <text x="42" y="715" fill="#f5d0f2" font-family="Arial" font-size="16" letter-spacing="4">${label}</text>
      <text x="42" y="770" fill="white" font-family="Arial" font-size="34" font-weight="700">${titleLines}</text>
      <text x="42" y="820" fill="#dbeafe" font-family="Arial" font-size="12" letter-spacing="3">HISTORIAS QUE SE QUEDAN</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const generatedMovies = extraMovies.filter(([title]) => !movieCatalog.some((movie) => movie.title === title)).slice(0, Math.max(0, MAX_MOVIES - movieCatalog.length)).map(([title, year, genreText], index) => {
  const genres = genreText.split('|');
  return {
    title,
    year,
    genres,
    rating: (7.1 + (index % 19) / 10).toFixed(1),
    duration: `${1 + (index % 2)}h ${35 + (index * 7) % 25}min`,
    description: `Una historia ${genres[0].toLowerCase()} que sigue a personajes enfrentados a una decisión imposible.`,
    image: posterData(title, genres[0]),
    poster: title.toUpperCase(),
    justWatch: `https://www.justwatch.com/es/buscar?q=${encodeURIComponent(title)}`,
    trailer: `${title} tráiler oficial español`
  };
});

movieCatalog.push(...generatedMovies);
movieCatalog.splice(MAX_MOVIES);

movieCatalog.forEach((movie, index) => {
  movie.id = movie.id || `veltrix-${String(index + 1).padStart(3, '0')}`;
  movie.image = movie.image || posterData(movie.title, movie.genres[0] || 'Drama');
  movie.poster = movie.poster || movie.title.toUpperCase();
  movie.platforms = {
    netflix: `https://www.netflix.com/search?q=${encodeURIComponent(movie.title)}`,
    disney: `https://www.disneyplus.com/search?q=${encodeURIComponent(movie.title)}`,
    max: `https://www.max.com/search?q=${encodeURIComponent(movie.title)}`
  };
});

const catalogGrid = document.querySelector('.movie-grid');
const searchPanel = document.querySelector('#searchPanel');
const searchInput = document.querySelector('#searchInput');
const yearFilter = document.querySelector('#yearFilter');
const emptyState = document.querySelector('#emptyState');
const modal = document.querySelector('#watchModal');
const modalTitle = document.querySelector('#modalTitle');
const modalMeta = document.querySelector('#modalMeta');
const modalDescription = document.querySelector('#modalDescription');
const modalScreen = document.querySelector('#modalScreen');
const watchExternal = document.querySelector('#watchExternal');
const providerActions = document.querySelector('#providerActions');
const sidePanel = document.querySelector('#sidePanel');
const sideScrim = document.querySelector('#sideScrim');
const music = document.querySelector('#veltrixMusic');
const musicToggle = document.querySelector('#musicToggle');
const sideNowPlaying = document.querySelector('#sideNowPlaying');
const sideNowMeta = document.querySelector('#sideNowMeta');
const musicTrackName = document.querySelector('#musicTrackName');
const themeToggle = document.querySelector('#themeToggle');
const themeLabel = document.querySelector('#themeLabel');
const themeIcon = document.querySelector('#themeIcon');

const musicTracks = [
  { name: 'Neon Drift', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { name: 'Midnight Pulse', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { name: 'Electric Cinema', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { name: 'Afterglow', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' }
];

let currentTrack = 0;
let activeGenre = 'Todos';
let toastTimer;

const featuredMovies = movieCatalog.slice(0, 4);
const gridMovies = movieCatalog.slice(4);

while (catalogGrid.children.length < gridMovies.length) {
  catalogGrid.insertAdjacentHTML('beforeend', '<article class="grid-card"></article>');
}

const cards = [...document.querySelectorAll('.grid-card')];
const featuredCards = [...document.querySelectorAll('.movie-card.large-card')];

function fallbackPoster(posterElement, movie) {
  posterElement.classList.add('poster-fallback');
  posterElement.style.background = 'linear-gradient(135deg, #171447, #390c46 55%, #0c7782)';
  const image = posterElement.querySelector('.poster-image');
  if (image) {
    image.style.opacity = '1';
    image.src = posterData(movie.title, movie.genres[0]);
  }
}

function setPoster(posterElement, movie) {
  if (!posterElement) return;
  const image = posterElement.querySelector('.poster-image');
  if (!image) return;

  image.src = movie.image || posterData(movie.title, movie.genres[0]);
  image.loading = 'lazy';
  image.decoding = 'async';
  image.alt = `Carátula de ${movie.title}`;
  image.style.opacity = '1';
  image.onerror = () => fallbackPoster(posterElement, movie);
  image.onload = () => {
    image.style.opacity = '1';
    posterElement.classList.remove('poster-fallback');
    posterElement.style.background = 'transparent';
  };
}

function movieControls(movie) {
  return `<div class="movie-controls"><button class="watch-trigger" data-title="${movie.title}">▶ Reproducir</button><button class="trailer-trigger" data-title="${movie.title}">Ver detalles</button></div>`;
}

function renderFeaturedCards() {
  featuredCards.forEach((card, index) => {
    const movie = featuredMovies[index];
    if (!movie) return;
    card.dataset.title = movie.title;
    card.dataset.id = movie.id;
    card.dataset.category = movie.genres.join('|');
    card.dataset.year = String(movie.year);
    card.dataset.search = `${movie.title} ${movie.genres.join(' ')} ${movie.year} ${movie.description}`.toLowerCase();
    card.innerHTML = `
      <div class="poster catalog-poster">
        <img class="poster-image" loading="lazy" decoding="async" alt="Carátula de ${movie.title}" style="opacity: 0;">
        <span class="poster-label">${movie.genres[0].toUpperCase()} · ${movie.year}</span>
        <strong>${movie.poster}</strong>
        <small>${movie.rating} ★</small>
      </div>
      <div class="movie-info">
        <div>
          <h3>${movie.title}</h3>
          <p>${movie.genres.join(' · ')} · ${movie.duration}</p>
          <p class="movie-description">${movie.description}</p>
          ${movieControls(movie)}
        </div>
        <button class="small-add add-trigger" data-title="${movie.title}" aria-label="Añadir ${movie.title} a Mi lista">＋</button>
      </div>
    `;
    setPoster(card.querySelector('.catalog-poster'), movie);
  });
}

function renderCard(card, movie, index) {
  card.dataset.title = movie.title;
  card.dataset.id = movie.id;
  card.dataset.category = movie.genres.join('|');
  card.dataset.year = String(movie.year);
  card.dataset.search = `${movie.title} ${movie.genres.join(' ')} ${movie.year} ${movie.description}`.toLowerCase();
  card.innerHTML = `
    <div class="grid-poster catalog-poster">
      <img class="poster-image" loading="lazy" decoding="async" alt="Carátula de ${movie.title}" style="opacity: 0;">
      <span class="poster-label">${movie.genres[0].toUpperCase()} · ${movie.year}</span>
      <strong>${movie.poster}</strong>
      <small>${movie.rating} ★</small>
    </div>
    <div class="movie-info">
      <div>
        <h3>${movie.title}</h3>
        <p>${movie.genres.join(' · ')} · ${movie.duration}</p>
        <p class="movie-description">${movie.description}</p>
        ${movieControls(movie)}
      </div>
      <button class="small-add add-trigger" data-title="${movie.title}" aria-label="Añadir ${movie.title} a Mi lista">＋</button>
    </div>
  `;
  setPoster(card.querySelector('.catalog-poster'), movie);
  card.style.setProperty('--delay', `${Math.min(index * 55, 500)}ms`);
  card.classList.add('reveal-card');
}

cards.forEach((card, index) => renderCard(card, gridMovies[index], index));
renderFeaturedCards();

function providerSearch(provider, title) {
  const query = encodeURIComponent(title);
  const urls = {
    Netflix: `https://www.netflix.com/search?q=${query}`,
    'Disney+': `https://www.disneyplus.com/search?q=${query}`,
    Max: `https://www.max.com/search?q=${query}`
  };
  return urls[provider];
}

function openMovie(title, trailerOnly = false) {
  const movie = movieCatalog.find((item) => item.title === title);
  if (!movie) return;

  sideNowPlaying.textContent = movie.title;
  sideNowMeta.textContent = `${movie.year} · ${movie.genres[0]} · ${movie.rating} ★`;
  modalTitle.textContent = movie.title;
  modalMeta.textContent = `${movie.year} · ${movie.genres.join(' · ')} · ${movie.duration} · ${movie.rating} ★`;
  modalDescription.textContent = movie.description;
  providerActions.innerHTML = [{ key: 'Netflix', label: 'Netflix' }, { key: 'Disney+', label: 'Disney+' }, { key: 'Max', label: 'Max / HBO' }].map(({ key, label }) => `<a class="provider-chip provider-${key.toLowerCase().replace('+', '')}" href="${providerSearch(key, movie.title)}" target="_blank" rel="noopener">${label} ↗</a>`).join('');
  modalScreen.innerHTML = `<div class="modal-poster"><span>${movie.poster}</span></div><div class="player-status"><span class="play-orb">▶</span><strong>${trailerOnly ? 'Tráiler oficial' : 'Fuente legal disponible fuera del reproductor'}</strong><small>Para evitar reproductores rotos o Error 153, el contenido se abre directamente en la plataforma autorizada.</small></div>`;
  watchExternal.href = movie.justWatch;
  watchExternal.textContent = trailerOnly ? 'Abrir ficha legal ↗' : 'Ver película / buscar fuente legal ↗';

  providerActions.querySelectorAll('.provider-chip').forEach((provider) => {
    provider.addEventListener('click', () => {
      providerActions.querySelectorAll('.provider-chip').forEach((item) => item.classList.remove('selected'));
      provider.classList.add('selected');
    });
  });

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalScreen.replaceChildren();
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
  if (event.key === 'Escape' && sidePanel.classList.contains('open')) setSidebar(false);
  if (event.key === 'Escape' && searchPanel.classList.contains('open')) searchPanel.classList.remove('open');
});

function setSidebar(open) {
  sidePanel.classList.toggle('open', open);
  sideScrim.classList.toggle('open', open);
  document.body.classList.toggle('sidebar-open', open);
}

document.querySelector('#searchToggle').addEventListener('click', () => {
  searchPanel.classList.toggle('open');
  if (searchPanel.classList.contains('open')) searchInput.focus();
});

document.querySelector('#sidebarToggle').addEventListener('click', () => setSidebar(true));
document.querySelector('#sidebarClose').addEventListener('click', () => setSidebar(false));
sideScrim.addEventListener('click', () => setSidebar(false));
document.querySelector('#sideSearch').addEventListener('click', () => {
  setSidebar(false);
  searchPanel.classList.add('open');
  searchInput.focus();
});
document.querySelector('.side-link').addEventListener('click', () => setSidebar(false));

function loadTrack(index, autoplay = false) {
  currentTrack = (index + musicTracks.length) % musicTracks.length;
  const track = musicTracks[currentTrack];
  music.src = track.url;
  musicTrackName.textContent = track.name;
  document.querySelector('.music-fallback').href = track.url;

  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.name,
      artist: 'Veltrix D.S.',
      album: 'Veltrix Mix 01'
    });
  }

  if (autoplay) music.play().catch(() => showToast('Pulsa reproducir para iniciar la pista'));
}

function bindBackgroundPlayback() {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.setActionHandler('play', () => {
      music.play().catch(() => {});
      musicToggle.classList.add('playing');
      musicToggle.querySelector('strong').textContent = 'Pausar música';
    });

    navigator.mediaSession.setActionHandler('pause', () => {
      music.pause();
      musicToggle.classList.remove('playing');
      musicToggle.querySelector('strong').textContent = 'Reproducir música';
    });

    navigator.mediaSession.setActionHandler('nexttrack', () => loadTrack(currentTrack + 1, true));
    navigator.mediaSession.setActionHandler('previoustrack', () => loadTrack(currentTrack - 1, true));
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && music.src && !music.paused) {
      music.play().catch(() => {});
    }
  });

  window.addEventListener('blur', () => {
    if (music.src && !music.paused) {
      music.play().catch(() => {});
    }
  });
}

musicToggle.addEventListener('click', async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.classList.add('playing');
      musicToggle.querySelector('strong').textContent = 'Pausar música';
      showToast('Música ambiente activada');
    } catch {
      showToast('Pulsa de nuevo para iniciar la música');
    }
  } else {
    music.pause();
    musicToggle.classList.remove('playing');
    musicToggle.querySelector('strong').textContent = 'Reproducir música';
  }
});

music.addEventListener('play', () => {
  musicToggle.classList.add('playing');
  musicToggle.querySelector('strong').textContent = 'Pausar música';
});

music.addEventListener('pause', () => {
  musicToggle.classList.remove('playing');
  musicToggle.querySelector('strong').textContent = 'Reproducir música';
});

document.querySelector('#musicPrevious').addEventListener('click', () => loadTrack(currentTrack - 1, !music.paused));
document.querySelector('#musicNext').addEventListener('click', () => loadTrack(currentTrack + 1, !music.paused));
document.querySelector('#musicVolume').addEventListener('input', (event) => {
  music.volume = Number(event.target.value);
});

function setTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  themeLabel.textContent = isLight ? 'Modo oscuro' : 'Modo claro';
  themeIcon.textContent = isLight ? '☾' : '☼';
  themeToggle.setAttribute('aria-label', isLight ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro');
  localStorage.setItem('veltrix-theme', theme);
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
}

setTheme(localStorage.getItem('veltrix-theme') || 'dark');
loadTrack(0);
bindBackgroundPlayback();

document.querySelector('.profile-button').addEventListener('click', () => {
  showToast('Perfil de JR · Mi lista está lista para ti');
});

document.querySelectorAll('.filter').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    activeGenre = button.dataset.filter;
    applyFilters();
  });
});

yearFilter.addEventListener('change', applyFilters);
searchInput.addEventListener('input', applyFilters);

document.querySelector('.text-button').addEventListener('click', () => {
  document.querySelector('#mi-lista').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('#openMusicPanel').addEventListener('click', () => setSidebar(true));

function applyFilters() {
  const normalize = (value) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();
  const query = normalize(searchInput.value);
  const yearRange = yearFilter.value;
  let visibleCount = 0;

  cards.forEach((card) => {
    const genres = card.dataset.category.split('|');
    const year = Number(card.dataset.year);
    const inGenre = activeGenre === 'Todos' || genres.includes(activeGenre);
    const inYear = yearRange === 'Todos' || (yearRange === '2000-2009' ? year < 2010 : year >= 2010);
    const matchesSearch = !query || normalize(card.dataset.search).includes(query);
    const visible = inGenre && inYear && matchesSearch;
    card.hidden = !visible;
    if (visible) visibleCount += 1;
  });

  emptyState.hidden = visibleCount !== 0;
}

document.addEventListener('click', (event) => {
  const watchButton = event.target.closest('.watch-trigger');
  if (watchButton) {
    openMovie(watchButton.dataset.title, false);
    return;
  }

  const trailerButton = event.target.closest('.trailer-trigger');
  if (trailerButton) {
    openMovie(trailerButton.dataset.title, true);
    return;
  }

  const addButton = event.target.closest('.add-trigger');
  if (addButton) {
    addButton.classList.add('saved');
    addButton.textContent = '✓';
    showToast(`${addButton.dataset.title} se añadió a tu lista`);
    return;
  }

  const card = event.target.closest('.grid-card, .movie-card');
  if (card && card.dataset.title && !event.target.closest('button, a')) {
    openMovie(card.dataset.title);
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.content-section, .catalog-section, .section-heading, .reveal-card').forEach((element) => revealObserver.observe(element));
applyFilters();
