/* ═══════════════════════════════════════════════════════
   RAFI & SYIFA – WEDDING INVITATION
   script.js | Animations · Particles · Music · Scroll
   ═══════════════════════════════════════════════════════ */

'use strict';

/* ─── Music Player ──────────────────────────────────── */
const audio   = document.getElementById('bgMusic');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const disc    = document.getElementById('musicDisc');
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    playIcon.textContent = '▶';
    disc.classList.remove('spinning');
    isPlaying = false;
  } else {
    audio.play()
      .then(() => {
        playIcon.textContent = '⏸';
        disc.classList.add('spinning');
        isPlaying = true;
      })
      .catch(() => {
        /* browser blocked autoplay — user must press play */
        playIcon.textContent = '▶';
      });
  }
}

/* Try autoplay on first user interaction */
function tryAutoplay() {
  if (!isPlaying) {
    audio.play()
      .then(() => {
        playIcon.textContent = '⏸';
        disc.classList.add('spinning');
        isPlaying = true;
      })
      .catch(() => { /* silently fail */ });
  }
  document.removeEventListener('click', tryAutoplay);
  document.removeEventListener('touchstart', tryAutoplay);
}

document.addEventListener('click', tryAutoplay, { once: true });
document.addEventListener('touchstart', tryAutoplay, { once: true });

/* ─── Scroll to Section ─────────────────────────────── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ─── Scroll Reveal ─────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══════════════════════════════════════════════════════
   CANVAS – PARTICLES · PETALS · SPARKLES
   ═══════════════════════════════════════════════════════ */
const canvas = document.getElementById('particleCanvas');
const ctx    = canvas.getContext('2d');

let W, H;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

/* ─── Colour helpers ────────────────────────────────── */
const GOLD        = 'rgba(212,175,55,';
const CHAMPAGNE   = 'rgba(245,230,200,';
const DUSTY_PINK  = 'rgba(232,180,184,';
const ROSE_GOLD   = 'rgba(201,149,108,';
const WHITE       = 'rgba(255,255,255,';

/* ─── Petal particle ────────────────────────────────── */
class Petal {
  constructor() { this.reset(true); }

  reset(initial = false) {
    this.x     = Math.random() * W;
    this.y     = initial ? Math.random() * H : -20;
    this.size  = 4 + Math.random() * 8;
    this.speedY = 0.4 + Math.random() * 0.8;
    this.speedX = (Math.random() - 0.5) * 0.6;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.04;
    this.opacity  = 0.15 + Math.random() * 0.45;
    this.sway     = Math.random() * Math.PI * 2;
    this.swaySpeed= 0.01 + Math.random() * 0.015;
    this.swayAmp  = 0.5 + Math.random() * 1;

    /* colour: pink, champagne, or rose */
    const r = Math.random();
    this.color = r < 0.45 ? DUSTY_PINK
               : r < 0.75 ? CHAMPAGNE
               : ROSE_GOLD;
  }

  update() {
    this.sway     += this.swaySpeed;
    this.x        += this.speedX + Math.sin(this.sway) * this.swayAmp;
    this.y        += this.speedY;
    this.rotation += this.rotSpeed;
    if (this.y > H + 30) this.reset();
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;

    /* Soft ellipse petal */
    const g = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
    g.addColorStop(0,   this.color + '1)');
    g.addColorStop(0.6, this.color + '0.6)');
    g.addColorStop(1,   this.color + '0)');
    ctx.fillStyle = g;

    ctx.beginPath();
    ctx.ellipse(0, 0, this.size, this.size * 1.6, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

/* ─── Gold sparkle particle ─────────────────────────── */
class Sparkle {
  constructor() { this.reset(true); }

  reset(initial = false) {
    this.x       = Math.random() * W;
    this.y       = initial ? Math.random() * H : Math.random() * H;
    this.size    = 1 + Math.random() * 2.5;
    this.opacity = 0;
    this.maxOp   = 0.3 + Math.random() * 0.7;
    this.life    = 0;
    this.maxLife = 80 + Math.random() * 120;
    this.phase   = 'in'; /* in / out */
    this.drift   = (Math.random() - 0.5) * 0.3;
    this.rise    = -(0.1 + Math.random() * 0.3);
    const r = Math.random();
    this.color = r < 0.6 ? GOLD : r < 0.85 ? CHAMPAGNE : WHITE;
  }

  update() {
    this.life++;
    this.x += this.drift;
    this.y += this.rise;

    const half = this.maxLife / 2;
    if (this.life < half) {
      this.opacity = (this.life / half) * this.maxOp;
    } else {
      this.opacity = ((this.maxLife - this.life) / half) * this.maxOp;
    }

    if (this.life >= this.maxLife) this.reset();
  }

  draw() {
    ctx.save();
    ctx.globalAlpha = Math.max(0, this.opacity);

    /* Cross sparkle */
    ctx.strokeStyle = this.color + '1)';
    ctx.lineWidth   = this.size * 0.6;
    ctx.lineCap     = 'round';

    const arms = this.size * 2.5;
    ctx.beginPath();
    ctx.moveTo(this.x - arms, this.y);
    ctx.lineTo(this.x + arms, this.y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x, this.y - arms);
    ctx.lineTo(this.x, this.y + arms);
    ctx.stroke();

    /* Diagonal arms (smaller) */
    const diag = arms * 0.55;
    ctx.lineWidth = this.size * 0.4;
    ctx.beginPath();
    ctx.moveTo(this.x - diag, this.y - diag);
    ctx.lineTo(this.x + diag, this.y + diag);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(this.x + diag, this.y - diag);
    ctx.lineTo(this.x - diag, this.y + diag);
    ctx.stroke();

    /* Centre glow */
    const glow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 3);
    glow.addColorStop(0,   this.color + '0.8)');
    glow.addColorStop(1,   this.color + '0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

/* ─── Ambient glow orb ──────────────────────────────── */
class GlowOrb {
  constructor() { this.reset(true); }

  reset(initial = false) {
    this.x     = Math.random() * W;
    this.y     = initial ? Math.random() * H : Math.random() * H;
    this.size  = 30 + Math.random() * 80;
    this.speedX = (Math.random() - 0.5) * 0.15;
    this.speedY = (Math.random() - 0.5) * 0.15;
    this.opacity = 0.02 + Math.random() * 0.05;
    const r = Math.random();
    this.color = r < 0.5 ? GOLD : r < 0.75 ? ROSE_GOLD : DUSTY_PINK;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < -this.size*2 || this.x > W+this.size*2 ||
        this.y < -this.size*2 || this.y > H+this.size*2) this.reset();
  }

  draw() {
    const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    g.addColorStop(0,   this.color + this.opacity + ')');
    g.addColorStop(1,   this.color + '0)');
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* ─── Create particle pools ─────────────────────────── */
const PETAL_COUNT   = 38;
const SPARKLE_COUNT = 55;
const ORB_COUNT     = 10;

const petals   = Array.from({ length: PETAL_COUNT   }, () => new Petal());
const sparkles = Array.from({ length: SPARKLE_COUNT }, () => new Sparkle());
const orbs     = Array.from({ length: ORB_COUNT     }, () => new GlowOrb());

/* ─── Render loop ───────────────────────────────────── */
function render() {
  ctx.clearRect(0, 0, W, H);

  orbs.forEach(o => { o.update(); o.draw(); });
  sparkles.forEach(s => { s.update(); s.draw(); });
  petals.forEach(p => { p.update(); p.draw(); });

  requestAnimationFrame(render);
}

render();

/* ─── Subtle parallax on scroll ─────────────────────── */
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const sy = window.scrollY;
      const coverBg = document.querySelector('.cover-bg');
      if (coverBg) {
        coverBg.style.transform = `translateY(${sy * 0.3}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});

/* ─── Stagger sparkle birth rate ────────────────────── */
/* Offset initial life values so sparkles don't all peak together */
sparkles.forEach((s, i) => {
  s.life = Math.floor((i / sparkles.length) * s.maxLife);
});
