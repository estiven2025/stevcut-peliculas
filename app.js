const genreOrder = [
  'Todas',
  'Acción',
  'Aventura',
  'Ciencia ficción',
  'Fantasía',
  'Comedia',
  'Drama',
  'Terror',
  'Animación',
  'Thriller',
  'Crimen'
];

const state = {
  activeSection: 'home',
  activeGenre: 'Todas',
  searchTerm: '',
  visibleCount: 8,
  heroIndex: 0,
  selectedMovie: null,
  selectedPlatform: null,
  songIndex: 0,
  audio: null,
  isPlaying: false,
  volume: 0.7,
  navOpen: false
};

const ui = {
  nav: document.querySelector('.nav'),
  links: document.querySelectorAll('.nav-link'),
  panels: document.querySelectorAll('.panel'),
  menuToggle: document.querySelector('.menu-toggle'),
  hero: document.getElementById('hero'),
  movieGrid: document.getElementById('movieGrid'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),
  genreFilter: document.getElementById('genreFilter'),
  genreOverview: document.getElementById('genreOverview'),
  movieSearch: document.getElementById('movieSearch'),
  modal: document.getElementById('movieModal'),
  modalPoster: document.getElementById('modalPoster'),
  modalMeta: document.getElementById('modalMeta'),
  modalRating: document.getElementById('modalRating'),
  modalTitle: document.getElementById('modalTitle'),
  modalYear: document.getElementById('modalYear'),
  modalDuration: document.getElementById('modalDuration'),
  modalGenre: document.getElementById('modalGenre'),
  modalDescription: document.getElementById('modalDescription'),
  modalPlatforms: document.getElementById('modalPlatforms'),
  watchButton: document.getElementById('watchButton'),
  musicList: document.getElementById('musicList'),
  musicState: document.getElementById('musicState'),
  miniPlayer: document.getElementById('miniPlayer'),
  miniTitle: document.getElementById('miniTitle'),
  miniArtist: document.getElementById('miniArtist'),
  miniCover: document.getElementById('miniCover'),
  currentTime: document.getElementById('currentTime'),
  totalTime: document.getElementById('totalTime'),
  progressBar: document.getElementById('progressBar'),
  volumeControl: document.getElementById('volumeControl'),
  playPauseBtn: document.getElementById('playPauseBtn'),
  prevTrackBtn: document.getElementById('prevTrackBtn'),
  nextTrackBtn: document.getElementById('nextTrackBtn')
};

function initApp() {
  state.audio = new Audio();
  state.audio.preload = 'none';
  state.audio.volume = state.volume;

  bindEvents();
  renderGenreFilter();
  renderGenresOverview();
  renderHero();
  renderMovieGrid();
  renderMusicSection();
  setActiveSection('home');
  setInterval(() => {
    state.heroIndex = (state.heroIndex + 1) % movies.length;
    renderHero();
  }, 5500);
}

function bindEvents() {
  ui.links.forEach((link) => {
    link.addEventListener('click', () => {
      const target = link.dataset.target;
      setActiveSection(target);
      if (target === 'music') {
        renderMusicSection();
      }
    });
  });

  ui.menuToggle.addEventListener('click', () => {
    state.navOpen = !state.navOpen;
    ui.nav.classList.toggle('open', state.navOpen);
  });

  ui.movieSearch.addEventListener('input', (event) => {
    state.searchTerm = event.target.value.trim().toLowerCase();
    state.visibleCount = 8;
    renderMovieGrid();
  });

  ui.loadMoreBtn.addEventListener('click', () => {
    const filtered = getFilteredMovies();
    state.visibleCount = Math.min(state.visibleCount + 8, filtered.length);
    renderMovieGrid();
  });

  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.querySelector('.modal-backdrop').addEventListener('click', (event) => {
    if (event.target.dataset.closeModal === 'true') closeModal();
  });

  ui.playPauseBtn.addEventListener('click', togglePlayPause);
  ui.prevTrackBtn.addEventListener('click', () => changeSong(-1));
  ui.nextTrackBtn.addEventListener('click', () => changeSong(1));

  ui.progressBar.addEventListener('input', (event) => {
    if (!state.audio || Number.isNaN(state.audio.duration)) return;
    const value = Number(event.target.value);
    state.audio.currentTime = (value / 100) * state.audio.duration;
    updateProgressUI();
  });

  ui.volumeControl.addEventListener('input', (event) => {
    state.volume = Number(event.target.value);
    if (state.audio) {
      state.audio.volume = state.volume;
    }
  });

  state.audio.addEventListener('timeupdate', updateProgressUI);
  state.audio.addEventListener('loadedmetadata', updateProgressUI);
  state.audio.addEventListener('ended', () => changeSong(1));
  state.audio.addEventListener('play', () => {
    state.isPlaying = true;
    ui.playPauseBtn.textContent = '⏸';
    ui.playPauseBtn.setAttribute('aria-label', 'Pausar');
  });
  state.audio.addEventListener('pause', () => {
    state.isPlaying = false;
    ui.playPauseBtn.textContent = '▶';
    ui.playPauseBtn.setAttribute('aria-label', 'Reproducir');
  });
  state.audio.addEventListener('error', () => {
    const song = songs[state.songIndex];
    if (!song) return;
    state.isPlaying = false;
    ui.miniTitle.textContent = 'Archivo de audio no disponible';
    ui.miniArtist.textContent = 'Revisa /public/music/';
    ui.playPauseBtn.textContent = '▶';
    ui.progressBar.value = 0;
    ui.currentTime.textContent = '0:00';
    ui.totalTime.textContent = '0:00';
  });
}

function setActiveSection(sectionName) {
  state.activeSection = sectionName;
  ui.panels.forEach((panel) => {
    panel.classList.toggle('active', panel.id === sectionName);
  });

  ui.links.forEach((link) => {
    link.classList.toggle('active', link.dataset.target === sectionName);
  });

  state.navOpen = false;
  ui.nav.classList.remove('open');
}

function getFilteredMovies() {
  return movies.filter((movie) => {
    const matchesGenre = state.activeGenre === 'Todas' || movie.genre === state.activeGenre;
    const matchesSearch =
      !state.searchTerm ||
      movie.title.toLowerCase().includes(state.searchTerm) ||
      movie.genre.toLowerCase().includes(state.searchTerm) ||
      String(movie.year).includes(state.searchTerm);

    return matchesGenre && matchesSearch;
  });
}

function renderGenreFilter() {
  ui.genreFilter.innerHTML = genreOrder
    .map(
      (genre) => `
        <button class="genre-pill ${genre === state.activeGenre ? 'active' : ''}" data-genre="${genre}" type="button">
          ${genre}
        </button>
      `
    )
    .join('');

  ui.genreFilter.querySelectorAll('.genre-pill').forEach((button) => {
    button.addEventListener('click', () => {
      state.activeGenre = button.dataset.genre;
      state.visibleCount = 8;
      renderGenreFilter();
      renderMovieGrid();
      setActiveSection('movies');
    });
  });
}

function renderGenresOverview() {
  const genreCounts = genreOrder.slice(1).reduce((acc, genre) => {
    acc[genre] = movies.filter((movie) => movie.genre === genre).length;
    return acc;
  }, {});

  ui.genreOverview.innerHTML = genreOrder
    .slice(1)
    .map(
      (genre) => `
        <button class="genre-card" data-genre="${genre}" type="button">
          <strong>${genre}</strong>
          <span>${genreCounts[genre]} títulos</span>
        </button>
      `
    )
    .join('');

  ui.genreOverview.querySelectorAll('.genre-card').forEach((card) => {
    card.addEventListener('click', () => {
      state.activeGenre = card.dataset.genre;
      state.visibleCount = 8;
      renderGenreFilter();
      renderMovieGrid();
      setActiveSection('movies');
    });
  });
}

function renderHero() {
  const movie = movies[state.heroIndex] || movies[0];
  const backdrop = movie.backdrop || movie.poster;

  ui.hero.style.setProperty('--hero-bg', `url("${backdrop}")`);
  ui.hero.innerHTML = `
    <div class="hero-content">
      <div class="hero-caption">
        <p class="hero-kicker">Destacada</p>
        <h1 class="hero-title">${movie.title}</h1>
        <div class="hero-meta">
          <span>${movie.year}</span>
          <span>${movie.genre}</span>
          <span>⭐ ${movie.rating.toFixed(1)}</span>
        </div>
        <p class="hero-description">${movie.description}</p>
        <div class="hero-actions">
          <button class="primary-btn" type="button" data-movie-id="${movie.id}">VER DETALLES</button>
          <button class="secondary-btn" type="button" data-movie-id="${movie.id}">REPRODUCIR</button>
        </div>
      </div>
    </div>
  `;

  ui.hero.querySelectorAll('[data-movie-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const selected = movies.find((item) => item.id === Number(button.dataset.movieId));
      if (selected) {
        if (button.textContent.includes('DETALLES')) {
          openModal(selected);
        } else {
          openModal(selected);
        }
      }
    });
  });
}

function renderMovieGrid() {
  const filtered = getFilteredMovies();
  const visible = filtered.slice(0, state.visibleCount);

  if (!filtered.length) {
    ui.movieGrid.innerHTML = `
      <div class="music-empty" style="grid-column: 1 / -1;">
        No encontramos películas con esa búsqueda.
      </div>
    `;
    ui.loadMoreBtn.classList.add('hidden');
    return;
  }

  ui.movieGrid.innerHTML = visible
    .map(
      (movie) => `
        <article class="movie-card" data-movie-id="${movie.id}" tabindex="0">
          <div class="poster-wrap">
            <div class="img-skeleton">CARGANDO</div>
            <img
              src="${movie.poster}"
              alt="Poster de ${movie.title}"
              loading="lazy"
              onerror="this.style.display='none'; this.parentElement.querySelector('.poster-fallback').style.display='grid'; this.parentElement.querySelector('.img-skeleton').style.display='none';"
            />
            <div class="poster-fallback" style="display:none; position:absolute; inset:0; z-index:1;">Imagen no disponible</div>
            <div class="poster-overlay">
              <span class="card-year">${movie.year}</span>
              <span class="play-badge">▶</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-topline">
              <h3 class="card-title">${movie.title}</h3>
              <span class="card-rating">⭐ ${movie.rating.toFixed(1)}</span>
            </div>
            <div class="card-bottomline">
              <span class="card-genre">${movie.genre}</span>
              <span class="card-year">${movie.duration}</span>
            </div>
          </div>
        </article>
      `
    )
    .join('');

  ui.movieGrid.querySelectorAll('.movie-card').forEach((card) => {
    const movieId = Number(card.dataset.movieId);
    const movie = movies.find((item) => item.id === movieId);

    card.addEventListener('click', () => openModal(movie));
    card.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(movie);
      }
    });

    const img = card.querySelector('img');
    if (img) {
      img.addEventListener('load', () => {
        const skeleton = card.querySelector('.img-skeleton');
        const fallback = card.querySelector('.poster-fallback');
        if (skeleton) skeleton.style.display = 'none';
        if (fallback) fallback.style.display = 'none';
        img.style.opacity = '1';
      });
      img.style.opacity = '0';
      img.style.transition = 'opacity 220ms ease';
    }
  });

  const hasMore = filtered.length > state.visibleCount;
  ui.loadMoreBtn.classList.toggle('hidden', !hasMore);
  ui.loadMoreBtn.textContent = filtered.length - state.visibleCount > 8 ? 'VER MÁS' : 'VER MÁS';
}

function openModal(movie) {
  state.selectedMovie = movie;
  state.selectedPlatform = Object.keys(movie.platforms).find((key) => movie.platforms[key]) || null;
  ui.modal.classList.remove('hidden');
  ui.modal.setAttribute('aria-hidden', 'false');
  ui.modalPoster.src = movie.poster;
  ui.modalPoster.alt = `Poster de ${movie.title}`;
  ui.modalMeta.textContent = 'Cine en streaming';
  ui.modalRating.textContent = `⭐ ${movie.rating.toFixed(1)}`;
  ui.modalTitle.textContent = movie.title;
  ui.modalYear.textContent = movie.year;
  ui.modalDuration.textContent = movie.duration;
  ui.modalGenre.textContent = movie.genre;
  ui.modalDescription.textContent = movie.description;

  const options = Object.entries(movie.platforms || {})
    .filter(([, value]) => value)
    .map(([platform, url]) => {
      const label = platform === 'netflix' ? 'NETFLIX' : platform === 'disney' ? 'DISNEY+' : 'MAX';
      const isSelected = platform === state.selectedPlatform;
      return `
        <button
          class="platform-button ${isSelected ? 'selected' : ''}"
          type="button"
          data-platform="${platform}"
          data-url="${url}"
        >
          ${label}${isSelected ? ' ✓' : ''}
        </button>
      `;
    })
    .join('');

  ui.modalPlatforms.innerHTML = options || '<span class="card-genre">Sin plataformas disponibles.</span>';

  ui.modalPlatforms.querySelectorAll('.platform-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedPlatform = button.dataset.platform;
      renderModalPlatforms();
      const url = button.dataset.url;
      ui.watchButton.href = url || '#';
      ui.watchButton.setAttribute('aria-label', `Ver ${movie.title} en ${button.textContent.replace(' ✓', '')}`);
    });
  });

  const firstUrl = movie.platforms[state.selectedPlatform] || Object.values(movie.platforms)[0] || '#';
  ui.watchButton.href = firstUrl;
  ui.watchButton.textContent = 'VER PELÍCULA';
}

function renderModalPlatforms() {
  const movie = state.selectedMovie;
  if (!movie) return;

  const buttons = Object.entries(movie.platforms || {})
    .filter(([, value]) => value)
    .map(([platform, url]) => {
      const label = platform === 'netflix' ? 'NETFLIX' : platform === 'disney' ? 'DISNEY+' : 'MAX';
      const isSelected = platform === state.selectedPlatform;
      return `
        <button
          class="platform-button ${isSelected ? 'selected' : ''}"
          type="button"
          data-platform="${platform}"
          data-url="${url}"
        >
          ${label}${isSelected ? ' ✓' : ''}
        </button>
      `;
    })
    .join('');

  ui.modalPlatforms.innerHTML = buttons;
  ui.modalPlatforms.querySelectorAll('.platform-button').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedPlatform = button.dataset.platform;
      renderModalPlatforms();
      ui.watchButton.href = button.dataset.url || '#';
    });
  });
}

function closeModal() {
  ui.modal.classList.add('hidden');
  ui.modal.setAttribute('aria-hidden', 'true');
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

function updateProgressUI() {
  if (!state.audio) return;
  const current = Number.isFinite(state.audio.currentTime) ? state.audio.currentTime : 0;
  const duration = Number.isFinite(state.audio.duration) ? state.audio.duration : 0;

  ui.currentTime.textContent = formatTime(current);
  ui.totalTime.textContent = formatTime(duration);
  ui.progressBar.value = duration ? (current / duration) * 100 : 0;
}

function renderMusicSection() {
  const hasSongs = Array.isArray(songs) && songs.some((song) => song && song.audio && song.audio.trim());

  if (!hasSongs) {
    ui.musicState.innerHTML = '<div class="music-empty">Agrega tus archivos de música a /public/music/</div>';
    ui.musicList.innerHTML = '';
    return;
  }

  ui.musicState.innerHTML = '<div class="music-empty">Se ha preparado la estructura local para tus archivos MP3. Agrega tus canciones a /public/music/.</div>';

  ui.musicList.innerHTML = songs
    .filter((song) => song && song.audio && song.audio.trim())
    .map(
      (song, index) => `
        <div class="music-item ${index === state.songIndex ? 'active' : ''}">
          <button type="button" data-song-index="${index}">
            <div class="music-cover">
              <img src="${song.cover}" alt="Portada de ${song.title}" loading="lazy" onerror="this.style.display='none'; this.parentElement.appendChild(Object.assign(document.createElement('div'), {className:'music-fallback'})).textContent='Imagen no disponible';" />
            </div>
            <div class="music-info">
              <strong>${song.title}</strong>
              <span>${song.artist}</span>
            </div>
            ${index === state.songIndex ? '<span class="now-playing-indicator" aria-label="Reproduciendo"></span>' : ''}
          </button>
        </div>
      `
    )
    .join('');

  ui.musicList.querySelectorAll('[data-song-index]').forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.songIndex);
      state.songIndex = index;
      playSong(index);
    });
  });
}

function playSong(index) {
  if (!songs.length) return;

  const song = songs[index];
  if (!song || !song.audio || !song.audio.trim()) {
    ui.miniPlayer.classList.remove('hidden');
    ui.miniTitle.textContent = 'Archivo de audio no disponible';
    ui.miniArtist.textContent = 'Revisa /public/music/';
    ui.playPauseBtn.textContent = '▶';
    return;
  }

  state.songIndex = index;
  renderMusicSection();

  const safeAudio = song.audio || '';
  ui.miniPlayer.classList.remove('hidden');
  ui.miniTitle.textContent = song.title;
  ui.miniArtist.textContent = song.artist;
  ui.miniCover.src = song.cover || '/music/covers/placeholder-cover.svg';

  state.audio.src = safeAudio;
  state.audio.load();
  const playPromise = state.audio.play();

  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {
      ui.miniTitle.textContent = 'Archivo de audio no disponible';
      ui.miniArtist.textContent = 'Revisa /public/music/';
      state.isPlaying = false;
      ui.playPauseBtn.textContent = '▶';
    });
  }

  state.isPlaying = true;
  ui.playPauseBtn.textContent = '⏸';
}

function togglePlayPause() {
  if (!songs.length) return;
  if (!state.audio.src) {
    playSong(state.songIndex);
    return;
  }

  if (state.isPlaying) {
    state.audio.pause();
  } else {
    const playPromise = state.audio.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        ui.miniTitle.textContent = 'Archivo de audio no disponible';
        ui.miniArtist.textContent = 'Revisa /public/music/';
      });
    }
  }
}

function changeSong(direction) {
  if (!songs.length) return;
  const nextIndex = (state.songIndex + direction + songs.length) % songs.length;
  playSong(nextIndex);
}

document.addEventListener('DOMContentLoaded', initApp);
