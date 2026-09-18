// main.js

// ──────────────────────────────────────────────
// TRANSLATIONS
// ──────────────────────────────────────────────
const translations = {
  it: {
    nav_about:       'Chi Sono',
    nav_exp:         'Esperienza',
    nav_proj:        'Progetti',
    nav_contact:     'Contatti',
    hero_pretitle:   'Ciao, sono',
    hero_subtitle:   'Smart in Digital Marketing<br>& Comunicazione Integrata',
    hero_desc:       'Dalla strategia aziendale alla creazione di contenuti, costruisco marchi e porto <em class="script-em">risultati</em> concreti con un approccio proattivo e innovativo.',
    hero_btn1:       'Vedi i Miei Lavori',
    hero_btn2:       'Parliamo',
    about_title:     'Chi',
    about_title2:    'Sono',
    about_p1:        'Sono una professionista completa con <em class="script-em">10 anni</em> di esperienza nel Digital Marketing e 16 anni nel mondo delle vendite. Nata in Brasile e oggi basata in Italia, porto una prospettiva <em class="script-em">multiculturale</em> e creativa in ogni progetto.',
    about_p2:        "Sono organizzata, smart e proattiva: compro l'idea dell'azienda e la faccio accadere. Traccio strategie efficaci sulle richieste, ottimizzando i tempi anche grazie all'<em class=\"script-em\">Intelligenza Artificiale</em>.",
    skills_title:    'Le Mie',
    exp_title:       'Le Mie',
    exp_title2:      'Esperienze',
    exp1_date:       '10 Anni di Esperienza',
    exp1_desc:       'Gestione strategie digitali, creazione di contenuti, campagne social e oltre <span class="script-em">50 brand</span> creati da zero — in Brasile e in Italia.',
    exp2_title:      'Sviluppo Web & E-commerce',
    exp2_date:       'Progetti Attivi',
    exp2_desc:       'Progettazione e sviluppo di siti web e piattaforme e-commerce (WordPress), unendo design creativo e performance.',
    exp3_title:      'Vendite & Relazioni Commerciali',
    exp3_date:       '16 Anni di Esperienza',
    exp3_desc:       'Solida esperienza nel settore delle vendite con capacità comprovate di costruire relazioni commerciali durature ed efficaci.',
    proj_title:      'I Miei',
    proj_title2:     'Lavori',
    proj_sub1:       'Siti Web & Piattaforme',
    proj_sub2:       'Competenze',
    proj_sub2b:      'creative',
    proj_video_title:'Produzione Audiovisiva',
    proj_video_desc: 'Portfolio video: riprese, montaggio e post-produzione in Portoghese e Italiano.',
    proj_brand_title:'Identità Visiva & Branding',
    proj_brand_desc: 'Portfolio loghi, palette colori e materiali per oltre <span class="script-em">50 brand</span> creati.',
    contact_title:   'Facciamo',
    contact_magic:   'magia',
    contact_title2:  'insieme!',
    contact_lead:    'Hai un progetto in mente? Vuoi un professionista che trasformi le idee in <em class="script-em">risultati</em>?',
    contact_desc:    'Sono disponibile per collaborazioni freelance, contratti aziendali e posizioni da remoto in tutta Italia o in Brasile.',
    contact_location:'📍 Roma (RM) — disponibile anche da remoto',
    contact_badge:   '🟢 Aperta a nuove opportunità',
  },
  pt: {
    nav_about:       'Quem Sou',
    nav_exp:         'Experiência',
    nav_proj:        'Projetos',
    nav_contact:     'Contato',
    hero_pretitle:   'Olá, sou a',
    hero_subtitle:   'Smart em Marketing Digital<br>& Comunicação Integrada',
    hero_desc:       'Da estratégia empresarial à criação de conteúdo, construo marcas e gero <em class="script-em">resultados</em> concretos com uma abordagem proativa e inovadora.',
    hero_btn1:       'Veja Meus Trabalhos',
    hero_btn2:       'Vamos Conversar',
    about_title:     'Quem',
    about_title2:    'Sou',
    about_p1:        'Sou uma profissional completa com <em class="script-em">10 anos</em> de experiência em Marketing Digital e 16 anos no mundo das vendas. Nascida no Brasil e hoje baseada na Itália, trago uma perspectiva <em class="script-em">multicultural</em> e criativa para cada projeto.',
    about_p2:        "Sou organizada, smart e proativa: abraço a ideia da empresa e faço acontecer. Traço estratégias eficazes sobre as demandas solicitadas, otimizando o tempo também com o apoio da <em class=\"script-em\">Inteligência Artificial</em>.",
    skills_title:    'Minhas',
    exp_title:       'Minhas',
    exp_title2:      'Experiências',
    exp1_date:       '10 Anos de Experiência',
    exp1_desc:       'Gestão de estratégias digitais, criação de conteúdo, campanhas sociais e mais de <em class="script-em">50 marcas</em> criadas do zero — no Brasil e na Itália.',
    exp2_title:      'Desenvolvimento Web & E-commerce',
    exp2_date:       'Projetos Ativos',
    exp2_desc:       'Criação e desenvolvimento de sites e plataformas de e-commerce (WordPress), unindo design criativo e performance.',
    exp3_title:      'Vendas & Relações Comerciais',
    exp3_date:       '16 Anos de Experiência',
    exp3_desc:       'Sólida experiência no setor de vendas, com comprovada capacidade de construir relações comerciais duradouras e eficazes.',
    proj_title:      'Meus',
    proj_title2:     'Trabalhos',
    proj_sub1:       'Sites & Plataformas',
    proj_sub2:       'Competências',
    proj_sub2b:      'criativas',
    proj_video_title:'Produção Audiovisual',
    proj_video_desc: 'Portfolio de vídeos: captação, edição e pós-produção em Português e Italiano.',
    proj_brand_title:'Identidade Visual & Branding',
    proj_brand_desc: 'Portfolio de logos, paletas de cores e materiais para mais de 50 marcas criadas.',
    contact_title:   'Vamos fazer',
    contact_magic:   'magia',
    contact_title2:  'juntos!',
    contact_lead:    'Tem um projeto em mente? Quer uma profissional que transforme ideias em <em class="script-em">resultados</em>?',
    contact_desc:    'Estou disponível para colaborações freelance, contratos corporativos e posições remotas em toda a Itália ou no Brasil.',
    contact_location:'📍 Roma (RM) — disponível também remotamente',
    contact_badge:   '🟢 Aberta a novas oportunidades',
  }
};

// ──────────────────────────────────────────────
// LANGUAGE TOGGLE STATE
// ──────────────────────────────────────────────
let currentLang = 'it';

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  // Swap flag: show the OTHER country's flag as the target
  const btn = document.getElementById('lang-toggle');
  if (btn) {
    if (lang === 'it') {
      btn.textContent = '🇧🇷';
      btn.title = 'Traduz para Português';
    } else {
      btn.textContent = '🇮🇹';
      btn.title = 'Traduci in Italiano';
    }
  }

  // Update html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'it';
}

// ──────────────────────────────────────────────
// INIT TOGGLE BUTTON
// ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'it' ? 'pt' : 'it';
      applyLanguage(currentLang);

      // Animate the button on click
      langBtn.classList.add('lang-spin');
      setTimeout(() => langBtn.classList.remove('lang-spin'), 400);
    });
  }

  // ── Navbar scroll effect ──────────────────────
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // ── Scroll-reveal sections ────────────────────
  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(s => {
    s.classList.add('fade-in-section');
    observer.observe(s);
  });
});
