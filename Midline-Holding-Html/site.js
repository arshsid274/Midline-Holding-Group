function renderCompanyCard(company){
  return `<div class="company-card">
    <div class="company-name">${company.name}</div>
    <div class="company-meta">
      ${company.tags.map((tag)=>`<span class="company-tag">${tag}</span>`).join('')}
      <span class="company-tag type">${company.type}</span>
    </div>
    <div class="company-desc">${company.desc}</div>
    ${company.link ? `<a href="${company.link}" target="_blank" rel="noopener" class="company-link">↗ ${company.link.replace(/https?:\/\//,'')}</a>` : ''}
  </div>`;
}

function renderSectorCard(key, sector, mode){
  const pageUrl = MIDLINE_SECTOR_PAGES[key];
  const action = mode === 'preview'
    ? `<a href="${pageUrl}" class="inline-link">View sector</a>`
    : `<a href="${pageUrl}" class="sector-arrow sector-arrow-link" aria-label="Open ${sector.title.replace(/<[^>]*>/g,'')} page">→</a>`;
  const clickAttr = mode === 'full' ? ` onclick="window.location.href='${pageUrl}'"` : '';
  return `<div class="sector-card"${clickAttr}>
    <div class="sector-icon">${sector.icon}</div>
    <div class="sector-name">${sector.title.replace(/<[^>]*>/g,'')}</div>
    <div class="sector-desc">${sector.blurb}</div>
    <div class="sector-count">${sector.companies.length} ${sector.companies.length === 1 ? 'Company' : 'Companies'}</div>
    ${action}
  </div>`;
}

function renderSectorSections(){
  const container = document.getElementById('sector-details');
  if(!container) return;
  container.innerHTML = Object.entries(MIDLINE_SECTORS).map(([key, sector]) => `
    <article class="detail-panel" id="sector-${key}" data-reveal>
      <div class="detail-head">
        <div>
          <div class="detail-eyebrow">${sector.label}</div>
          <h3 class="detail-title">${sector.icon} ${sector.title}</h3>
          <p class="detail-intro">${sector.intro}</p>
        </div>
        <div class="detail-stat">
          <span>Companies</span>
          <strong>${sector.companies.length}</strong>
        </div>
      </div>
      <div class="company-list">
        ${sector.companies.map(renderCompanyCard).join('')}
      </div>
    </article>
  `).join('');
}

function renderSectorPage(){
  const key = document.body.dataset.sector;
  if(!key || !MIDLINE_SECTORS[key]) return;
  const sector = MIDLINE_SECTORS[key];
  const hero = document.getElementById('sectorPageHero');
  const list = document.getElementById('sectorPageList');
  const stat = document.getElementById('sectorPageStat');
  const intro = document.getElementById('sectorPageIntro');
  const breadcrumb = document.getElementById('sectorPageLabel');

  if(hero){
    hero.innerHTML = `
      <div class="section-label section-label-static">${sector.label}</div>
      <h1 class="subhero-title">${sector.icon} ${sector.title}</h1>
      <p class="subhero-copy">${sector.blurb}</p>
    `;
  }
  if(intro) intro.textContent = sector.intro;
  if(stat) stat.textContent = `${sector.companies.length}`;
  if(breadcrumb) breadcrumb.textContent = sector.title.replace(/<[^>]*>/g,'');
  if(list) list.innerHTML = sector.companies.map(renderCompanyCard).join('');
}

function renderStructureTree(){
  const tree = document.getElementById('treeGrid');
  if(!tree) return;
  tree.innerHTML = MIDLINE_STRUCTURE.map((branch) => `
    <article class="tree-branch" data-reveal>
      <div class="tree-branch-head">
        <h3>${branch.name}</h3>
        <div class="tree-branch-badge">${branch.companies.length} entities</div>
      </div>
      <ul class="tree-list">
        ${branch.companies.map((name)=>`<li><strong>${name}</strong><span>${branch.markets}</span></li>`).join('')}
      </ul>
    </article>
  `).join('');
}

function renderSectorLists(){
  const fullContainer = document.getElementById('sectorCards');
  if(fullContainer){
    fullContainer.innerHTML = Object.entries(MIDLINE_SECTORS).map(([key, sector]) => renderSectorCard(key, sector, 'full')).join('');
  }

  const previewContainer = document.getElementById('sectorPreview');
  if(previewContainer){
    previewContainer.innerHTML = Object.entries(MIDLINE_SECTORS).map(([key, sector]) => renderSectorCard(key, sector, 'preview')).join('');
  }
}

function goToSector(key){
  const target = document.getElementById(`sector-${key}`);
  if(target){
    const top = target.getBoundingClientRect().top + window.scrollY - 110;
    window.scrollTo({ top, behavior:'smooth' });
  }
}

function setActiveNav(){
  const page = document.body.dataset.page;
  document.querySelectorAll('nav a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    if(
      (page === 'home' && href === 'index.html') ||
      (page === 'companies' && href === 'companies.html') ||
      (page === 'about' && href === 'about.html') ||
      (page === 'global' && href === 'global.html') ||
      (page === 'contact' && href === 'contact.html')
    ){
      link.classList.add('active');
    }
  });
}

function initCursor(){
  const cursor = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');
  if(!cursor || !trail || window.innerWidth <= 960) return;

  let mx = 0;
  let my = 0;
  window.addEventListener('mousemove', (event) => {
    mx = event.clientX;
    my = event.clientY;
    cursor.style.left = `${mx}px`;
    cursor.style.top = `${my}px`;
    setTimeout(() => {
      trail.style.left = `${mx}px`;
      trail.style.top = `${my}px`;
    }, 80);
  });

  document.querySelectorAll('a,button,.sector-card,.company-card,.preview-card,.presence-card').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(2.5)';
      cursor.style.background = 'var(--bright)';
      trail.style.width = '60px';
      trail.style.height = '60px';
      trail.style.borderColor = 'rgba(80,207,254,.34)';
    });
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%,-50%) scale(1)';
      cursor.style.background = 'var(--sky)';
      trail.style.width = '40px';
      trail.style.height = '40px';
      trail.style.borderColor = 'rgba(47,184,238,.4)';
    });
  });
}

function initParticles(){
  const canvas = document.getElementById('particles');
  if(!canvas) return;
  const context = canvas.getContext('2d');
  let width;
  let height;
  let particles = [];
  const colors = ['rgba(47,184,238,','rgba(80,207,254,','rgba(10,99,168,','rgba(168,228,249,'];

  function resize(){
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function Particle(){
    this.reset = () => {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 2 + 0.5;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.alpha = Math.random() * 0.28 + 0.04;
      this.life = 0;
      this.maxLife = Math.random() * 300 + 200;
    };
    this.reset();
    this.life = Math.random() * this.maxLife;
    this.update = () => {
      this.x += this.vx;
      this.y += this.vy;
      this.life += 1;
      if(this.life > this.maxLife) this.reset();
      if(this.x < 0 || this.x > width) this.vx *= -1;
      if(this.y < 0 || this.y > height) this.vy *= -1;
      this.currentAlpha = this.alpha * Math.sin((this.life / this.maxLife) * Math.PI);
    };
    this.draw = () => {
      context.beginPath();
      context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      context.fillStyle = `${this.color}${this.currentAlpha})`;
      context.fill();
    };
  }

  resize();
  window.addEventListener('resize', resize);
  for(let i = 0; i < 60; i += 1) particles.push(new Particle());
  (function animate(){
    context.clearRect(0, 0, width, height);
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  })();
}

function initProgressBar(){
  const progress = document.getElementById('progress');
  if(!progress) return;
  window.addEventListener('scroll', () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const value = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    progress.style.width = `${value}%`;
  });
}

function observe(selector){
  const elements = document.querySelectorAll(selector);
  if(!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        const element = entry.target;
        const siblings = element.parentNode ? Array.from(element.parentNode.children) : [];
        const index = siblings.indexOf(element);
        if(index >= 0) element.style.transitionDelay = `${index * 0.07}s`;
        element.classList.add('revealed');
        observer.unobserve(element);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  elements.forEach((element) => observer.observe(element));
}

function initTilt(){
  document.querySelectorAll('.sector-card,.presence-card,.preview-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      if(window.innerWidth <= 960) return;
      const rect = card.getBoundingClientRect();
      const rotateX = ((event.clientY - rect.top - rect.height / 2) / rect.height * 2) * -6;
      const rotateY = ((event.clientX - rect.left - rect.width / 2) / rect.width * 2) * 6;
      card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      card.style.transition = 'transform .1s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .5s cubic-bezier(.34,1.56,.64,1),opacity .7s ease,box-shadow .3s ease';
    });
  });
}

function initCountUp(){
  const stats = document.querySelector('.hero-stats');
  if(!stats) return;
  function countUp(element, target){
    const start = Date.now();
    (function tick(){
      const progress = Math.min((Date.now() - start) / 1500, 1);
      element.textContent = Math.round((1 - Math.pow(1 - progress, 3)) * target);
      if(progress < 1) requestAnimationFrame(tick);
    })();
  }
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.querySelectorAll('[data-target]').forEach((item) => countUp(item, Number(item.dataset.target)));
      }
    });
  }, { threshold: 0.5 }).observe(stats);
}

document.addEventListener('DOMContentLoaded', () => {
  renderStructureTree();
  renderSectorLists();
  renderSectorSections();
  renderSectorPage();
  setActiveNav();
  initCursor();
  initParticles();
  initProgressBar();
  observe('.section-label');
  observe('.section-title');
  observe('.section-body');
  observe('.sector-card');
  observe('.presence-card');
  observe('.tree-branch');
  observe('.detail-panel');
  observe('.preview-card');
  observe('[data-reveal]');
  initTilt();
  initCountUp();
});
