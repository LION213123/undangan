<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Wedding Invitation – Rafi & Syifa</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Cinzel:wght@400;600&family=Dancing+Script:wght@400;600&family=Lato:wght@300;400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/style.css" />
</head>
<body>

  <!-- ═══════════════════════════════════════════ -->
  <!--  CANVAS: petals + sparkles + particles     -->
  <!-- ═══════════════════════════════════════════ -->
  <canvas id="particleCanvas"></canvas>

  <!-- ═══════════════════════════════════════════ -->
  <!--  MUSIC PLAYER (fixed)                      -->
  <!-- ═══════════════════════════════════════════ -->
  <div class="music-player" id="musicPlayer">
    <div class="music-disc" id="musicDisc">
      <div class="disc-inner">♪</div>
    </div>
    <div class="music-info">
      <span class="music-title">Beautiful In White</span>
      <span class="music-artist">Shane Filan</span>
    </div>
    <button class="play-btn" id="playBtn" onclick="toggleMusic()">
      <span id="playIcon">▶</span>
    </button>
    <audio id="bgMusic" loop>
      <source src="assets/audio/beautiful-in-white.mp3" type="audio/mpeg" />
    </audio>
  </div>

  <!-- ═══════════════════════════════════════════ -->
  <!--  SECTION 1 – COVER / OPENING               -->
  <!-- ═══════════════════════════════════════════ -->
  <section class="section section--cover" id="sectionCover">
    <div class="cover-bg"></div>
    <div class="cover-overlay"></div>

    <!-- Floral corner decorations -->
    <div class="floral floral--tl"></div>
    <div class="floral floral--tr"></div>
    <div class="floral floral--bl"></div>
    <div class="floral floral--br"></div>

    <div class="cover-content">
      <p class="cover-eyebrow fade-in-up" style="animation-delay:.2s">— The Wedding of —</p>

      <h1 class="cover-names fade-in-up" style="animation-delay:.6s">
        Rafi<span class="ampersand"> &amp; </span>Syifa
      </h1>

      <div class="cover-divider fade-in-up" style="animation-delay:1s">
        <span class="divider-line"></span>
        <span class="divider-ring">💍</span>
        <span class="divider-line"></span>
      </div>

      <p class="cover-date fade-in-up" style="animation-delay:1.2s">
        03 &bull; 03 &bull; 2030
      </p>

      <p class="cover-quote fade-in-up" style="animation-delay:1.6s">
        "Two hearts, one promise,<br>a love that lasts forever."
      </p>

      <button class="scroll-btn fade-in-up" style="animation-delay:2s" onclick="scrollToSection('sectionStory')">
        <span>Open Invitation</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </button>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════ -->
  <!--  SECTION 2 – LOVE STORY / QUOTE            -->
  <!-- ═══════════════════════════════════════════ -->
  <section class="section section--story" id="sectionStory">
    <div class="story-bg"></div>

    <div class="story-content reveal">
      <div class="infinity-symbol">∞</div>
      <h2 class="story-heading">A Love for Eternity</h2>
      <p class="story-text">
        In the quiet beauty of this moment, two souls find each other —<br>
        bound not by time, but by the infinite warmth of love.<br>
        Today, they begin forever.
      </p>

      <div class="hearts-row">
        <span class="heart heart--beat">❤</span>
        <span class="story-sub">Rafi &amp; Syifa</span>
        <span class="heart heart--beat" style="animation-delay:.3s">❤</span>
      </div>
    </div>
  </section>

  <!-- ═══════════════════════════════════════════ -->
  <!--  SECTION 3 – EVENT DETAILS                 -->
  <!-- ═══════════════════════════════════════════ -->
  <section class="section section--details" id="sectionDetails">
    <div class="details-bg"></div>

    <div class="details-wrapper">
      <!-- Header -->
      <div class="details-header reveal">
        <div class="details-ornament">✦ ✦ ✦</div>
        <h2 class="details-title">Wedding Details</h2>
        <p class="details-subtitle">Join us as we celebrate our union</p>
      </div>

      <!-- Cards -->
      <div class="details-cards">

        <div class="detail-card reveal" style="--delay:.1s">
          <div class="card-icon">💍</div>
          <h3 class="card-label">The Couple</h3>
          <p class="card-value">Rafi &amp; Syifa</p>
          <p class="card-desc">Two hearts, one forever</p>
        </div>

        <div class="detail-card reveal" style="--delay:.25s">
          <div class="card-icon">📅</div>
          <h3 class="card-label">Date</h3>
          <p class="card-value">03 Maret 2030</p>
          <p class="card-desc">Sunday — a blessed day</p>
        </div>

        <div class="detail-card reveal" style="--delay:.4s">
          <div class="card-icon">📍</div>
          <h3 class="card-label">Venue</h3>
          <p class="card-value">GSG Universitas<br>Sangga Buana</p>
          <p class="card-desc">Bandung, West Java</p>
        </div>

        <div class="detail-card reveal" style="--delay:.55s">
          <div class="card-icon">🕊️</div>
          <h3 class="card-label">Event</h3>
          <p class="card-value">Ceremony &amp;<br>Reception</p>
          <p class="card-desc">Wedding celebration</p>
        </div>

      </div>

      <!-- Timeline -->
      <div class="timeline reveal" style="--delay:.7s">
        <div class="timeline-item">
          <span class="tl-time">09.00</span>
          <span class="tl-dot"></span>
          <span class="tl-label">Wedding Ceremony</span>
        </div>
        <div class="timeline-line"></div>
        <div class="timeline-item">
          <span class="tl-time">11.00</span>
          <span class="tl-dot"></span>
          <span class="tl-label">Wedding Reception</span>
        </div>
        <div class="timeline-line"></div>
        <div class="timeline-item">
          <span class="tl-time">13.00</span>
          <span class="tl-dot"></span>
          <span class="tl-label">Dinner & Celebration</span>
        </div>
      </div>

    </div>
  </section>

  <!-- ═══════════════════════════════════════════ -->
  <!--  SECTION 4 – CLOSING / BLESSING            -->
  <!-- ═══════════════════════════════════════════ -->
  <section class="section section--closing" id="sectionClosing">
    <div class="closing-bg"></div>
    <div class="floral floral--tl" style="opacity:.4"></div>
    <div class="floral floral--br" style="opacity:.4"></div>

    <div class="closing-content">
      <div class="closing-ring reveal">
        <svg viewBox="0 0 120 120" class="ring-svg">
          <circle cx="60" cy="60" r="50" fill="none" stroke="url(#ringGrad)" stroke-width="3"/>
          <circle cx="60" cy="60" r="38" fill="none" stroke="url(#ringGrad)" stroke-width="1.5" stroke-dasharray="4 6"/>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#d4af37"/>
              <stop offset="50%" stop-color="#f5e6c8"/>
              <stop offset="100%" stop-color="#c9956c"/>
            </linearGradient>
          </defs>
        </svg>
        <span class="ring-heart">♥</span>
      </div>

      <h2 class="closing-heading reveal">We Humbly Request<br>Your Blessings</h2>
      <p class="closing-text reveal">
        Your presence and prayers mean the world to us.<br>
        With love and gratitude,
      </p>
      <p class="closing-names reveal">Rafi &amp; Syifa</p>
      <p class="closing-date reveal">03 · 03 · 2030</p>

      <div class="closing-ornament reveal">
        <span>✦</span><span>∞</span><span>✦</span>
      </div>
    </div>
  </section>

  <script src="assets/js/script.js"></script>
</body>
</html>
