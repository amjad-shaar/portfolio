/* =========================================================
   Portfolio — Laravel × Flutter
   Vanilla JS: i18n (EN/AR), theme, animations, rendering
   ========================================================= */
'use strict';

/* ---------------------------------------------------------
   1. SITE DATA — edit this block to customize the portfolio.
   Text that changes per language lives in { en, ar } pairs.
   Tech names, code and brand names stay in English.
   --------------------------------------------------------- */
const SITE = {
  name: { en: 'Amjad', ar: 'أمجد' },
  url: 'https://amjad-shaar.github.io/portfolio/',
  github: 'amjad-shaar',
  email: 'amgdshar4@gmail.com', // contact form opens a mailto: to this address
  socials: [
    { label: '+963 932 113 766', icon: 'message-circle', url: 'https://wa.me/963932113766' }, // WhatsApp
    { label: 'GitHub', icon: 'github', url: 'https://github.com/amjad-shaar' },
    { label: '@amjad.shaar.dev', icon: 'instagram', url: 'https://www.instagram.com/amjad.shaar.dev/' },
  ],

  // About → stat counters, all counted from the repositories on GitHub.
  stats: [
    { value: 4, suffix: '', label: { en: 'Laravel platforms', ar: 'منصات Laravel' } },
    { value: 150, suffix: '+', label: { en: 'Eloquent models designed', ar: 'نموذج Eloquent مصمَّم' } },
    { value: 238, suffix: '', label: { en: 'Dart files in the Flutter app', ar: 'ملف Dart في تطبيق Flutter' } },
    { value: 54, suffix: '', label: { en: 'Documented API endpoints', ar: 'نقطة API موثّقة' } },
  ],

  // Skills → two columns. "used: true" marks tech seen in the real repos.
  skills: {
    laravel: [
      { name: 'Laravel 9 → 13', used: true }, { name: 'PHP 8', used: true }, { name: 'MySQL', used: true },
      { name: 'Eloquent ORM', used: true }, { name: 'REST APIs', used: true }, { name: 'Sanctum', used: true },
      { name: 'Spatie Permission', used: true }, { name: 'Blade', used: true }, { name: 'Tailwind CSS', used: true },
      { name: 'Alpine.js', used: true }, { name: 'Bootstrap', used: true }, { name: 'Vite', used: true },
      { name: 'Postman', used: true },
    ],
    flutter: [
      { name: 'Flutter', used: true }, { name: 'Dart', used: true }, { name: 'GetX', used: true },
      { name: 'Firebase Messaging', used: true }, { name: 'Cloud Firestore', used: true },
      { name: 'Google Maps', used: true }, { name: 'Geolocator', used: true }, { name: 'SQLite', used: true },
      { name: 'Shared Preferences', used: true }, { name: 'Google Sign-In', used: true },
      { name: 'QR / Scanner', used: true }, { name: 'Android', used: true }, { name: 'iOS', used: true },
    ],
  },

  // Projects → only real repositories. The first item with featured: true is shown large.
  // private: true hides the source link (visitors can't open private repos).
  projects: [
    {
      name: 'Syria Zon — Marketplace Platform',
      repo: 'https://github.com/amjad-shaar/store',
      private: true,
      icon: 'store',
      images: [
        { src: 'images/syria-zon-dashboard.webp', alt: { en: 'Syria Zon store owner dashboard with sales charts', ar: 'لوحة تحكّم صاحب المتجر في Syria Zon مع مخططات المبيعات' } },
        { src: 'images/syria-zon-store.webp', alt: { en: 'Syria Zon storefront with product cards', ar: 'واجهة متجر Syria Zon مع بطاقات المنتجات' } },
      ],
      stack: ['Laravel 12', 'PHP 8.2', 'Sanctum', 'Spatie Permission', 'Tailwind CSS', 'Alpine.js'],
      featured: true,
      tag: { en: 'Multi-vendor e-commerce', ar: 'تجارة إلكترونية متعددة المتاجر' },
      desc: {
        en: 'A multi-vendor marketplace back end with four separate panels (admin, store owner, delivery and customer) plus a REST API for the mobile app. It covers orders, carts, offers, occasions, commissions, shipping rates, reviews, complaints with live chat, and store analytics, across 59 Eloquent models.',
        ar: 'خادم متكامل لسوق إلكتروني متعدد المتاجر، يضمّ أربع لوحات منفصلة (للإدارة، وأصحاب المتاجر، والتوصيل، والعملاء) إلى جانب واجهة REST لتطبيق الجوّال. يشمل الطلبات والسلال والعروض والمناسبات والعمولات وأسعار الشحن والتقييمات والشكاوى مع محادثة مباشرة وتحليلات المتاجر، عبر 59 نموذج Eloquent.',
      },
    },
    {
      name: 'Syria Zon — Mobile App',
      repo: 'https://github.com/amjad-shaar/store-app',
      private: true,
      icon: 'smartphone',
      stack: ['Flutter', 'Dart', 'GetX', 'Firebase', 'Google Maps', 'SQLite'],
      tag: { en: 'Flutter shopping app', ar: 'تطبيق تسوّق بـ Flutter' },
      desc: {
        en: 'The customer app for the Syria Zon marketplace: browsing stores and products, cart and checkout, order tracking on a map, wishlists, followed stores, complaints chat, push notifications, and phone verification.',
        ar: 'تطبيق العملاء لسوق Syria Zon: تصفّح المتاجر والمنتجات، والسلة وإتمام الشراء، وتتبّع الطلبات على الخريطة، وقوائم الأمنيات، ومتابعة المتاجر، ومحادثة الشكاوى، والإشعارات الفورية، والتحقق برقم الهاتف.',
      },
    },
    {
      name: 'SNC — Wallet & Transfers System',
      repo: 'https://github.com/amjad-shaar/snc',
      private: true,
      icon: 'wallet',
      images: [
        { src: 'images/snc.webp', alt: { en: 'SNC home page hero', ar: 'الواجهة الرئيسية لمنظومة SNC' } },
      ],
      stack: ['Laravel 13', 'PHP 8.3', 'Bootstrap', 'OTP'],
      tag: { en: 'Fintech platform', ar: 'منصة مالية' },
      desc: {
        en: 'A financial system with user wallets, local and international transfers, offices and agents, a treasury, currency exchange, prepaid cards, and tiered subscription plans, secured with OTP verification and an admin approval queue.',
        ar: 'منظومة مالية تضمّ محافظ المستخدمين، والحوالات المحلية والدولية، والمكاتب والوكلاء، والخزينة، وتحويل العملات، والبطاقات مسبقة الدفع، وخطط اشتراك متدرّجة، مع حماية بالتحقق عبر OTP وقائمة موافقات للإدارة.',
      },
    },
    {
      name: 'E-Learning Platform',
      repo: 'https://github.com/amjad-shaar/hellolaravel',
      private: true,
      icon: 'graduation-cap',
      stack: ['Laravel 9', 'MySQL', 'Laravel Localization', 'Sitemap', 'Schema.org', 'CKEditor'],
      tag: { en: 'Education platform', ar: 'منصة تعليمية' },
      desc: {
        en: 'A multilingual learning site with courses, lesson groups, exams and a question bank, book and article libraries, "try it" code examples, subscription plans, and comments, with an auto-generated sitemap and structured data for SEO.',
        ar: 'موقع تعليمي متعدد اللغات يضمّ الدورات ومجموعات الدروس والاختبارات وبنك الأسئلة ومكتبات الكتب والمقالات وأمثلة برمجية تفاعلية وخطط الاشتراك والتعليقات، مع خريطة موقع تُولَّد تلقائيًا وبيانات منظَّمة لتحسين الظهور في محركات البحث.',
      },
    },
    {
      name: 'Voluntary Association',
      repo: 'https://github.com/amjad-shaar/Voluntary-Association',
      icon: 'heart-handshake',
      stack: ['Laravel 12', 'MySQL', 'Spatie Permission', 'Tailwind CSS', 'Bootstrap'],
      tag: { en: 'Community platform', ar: 'منصة مجتمعية' },
      desc: {
        en: 'A volunteering platform where organizers publish campaigns and tasks, volunteers join tasks and submit reports, and admins manage everything from a role-based dashboard.',
        ar: 'منصة للعمل التطوعي ينشر فيها المنظّمون الحملات والمهام، وينضمّ المتطوعون إلى المهام ويرفعون تقاريرهم، فيما تدير الإدارة كل ذلك من لوحة تحكّم قائمة على الأدوار.',
      },
    },
    {
      name: 'Syria Zon — API Collection',
      repo: 'https://github.com/amjad-shaar/syria_zon_api',
      private: true,
      icon: 'plug-zap',
      stack: ['REST API', 'Postman'],
      tag: { en: 'API documentation', ar: 'توثيق واجهة برمجية' },
      desc: {
        en: 'A Postman collection documenting 54 endpoints of the Syria Zon API: auth, products, stores, offers, cart, orders and checkout, comments and votes, reports, and the full user profile.',
        ar: 'مجموعة Postman توثّق 54 نقطة نهاية في واجهة Syria Zon: المصادقة، والمنتجات، والمتاجر، والعروض، والسلة، والطلبات وإتمام الشراء، والتعليقات والتصويت، والبلاغات، والملف الشخصي كاملًا.',
      },
    },
  ],

  // Experience timeline (newest first), dated from repository history.
  timeline: [
    {
      date: '2026',
      title: { en: 'Syria Zon: marketplace + Flutter app', ar: 'Syria Zon: سوق إلكتروني وتطبيق Flutter' },
      desc: { en: 'Built a multi-vendor Laravel 12 back end with a REST API, and the Flutter app that runs on it.', ar: 'بناء خادم Laravel 12 لسوق متعدد المتاجر مع واجهة REST، وتطبيق Flutter الذي يعمل عليها.' },
    },
    {
      date: '2026',
      title: { en: 'SNC financial system', ar: 'منظومة SNC المالية' },
      desc: { en: 'Wallets, transfers, treasury and currency exchange on Laravel 13.', ar: 'محافظ وحوالات وخزينة وتحويل عملات على Laravel 13.' },
    },
    {
      date: '2025',
      title: { en: 'Voluntary Association platform', ar: 'منصة الجمعية التطوعية' },
      desc: { en: 'Campaigns, tasks and volunteer reports with role-based access.', ar: 'حملات ومهام وتقارير للمتطوعين مع صلاحيات قائمة على الأدوار.' },
    },
    {
      date: '2025',
      title: { en: 'Multilingual e-learning platform', ar: 'منصة تعليمية متعددة اللغات' },
      desc: { en: 'Courses, exams, libraries and SEO tooling on Laravel.', ar: 'دورات واختبارات ومكتبات وأدوات لتحسين الظهور في محركات البحث على Laravel.' },
    },
  ],

  services: [
    { icon: 'layout-dashboard', key: 'svc_web' },
    { icon: 'plug-zap', key: 'svc_api' },
    { icon: 'smartphone', key: 'svc_mobile' },
    { icon: 'shield-check', key: 'svc_admin' },
    { icon: 'gauge', key: 'svc_perf' },
    { icon: 'wrench', key: 'svc_maint' },
  ],
};

/* ---------------------------------------------------------
   2. TRANSLATIONS — every UI string, in both languages.
   --------------------------------------------------------- */
const translations = {
  en: {
    meta_title: 'Amjad | Laravel Full-Stack & Flutter Developer',
    meta_desc: 'Portfolio of Amjad, a Laravel full-stack developer and Flutter mobile developer building fast web platforms and cross-platform apps.',
    skip_link: 'Skip to content',
    nav_label: 'Primary',
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_experience: 'Journey',
    nav_services: 'Services',
    nav_contact: 'Contact',
    lang_toggle_label: 'Switch language to Arabic',
    theme_toggle_label: 'Toggle light and dark theme',
    menu_label: 'Open menu',
    menu_label_close: 'Close menu',
    scroll_cue: 'Scroll to About',

    hero_eyebrow: "Hello, I'm",
    hero_name: 'Amjad',
    hero_roles: ['Full-Stack Web Developer', 'Mobile App Developer', 'API Architect', 'Problem Solver'],
    hero_lead: 'I build fast, secure web platforms with Laravel and smooth cross-platform apps with Flutter, from database schema to the last pixel.',
    cta_projects: 'View my work',
    cta_contact: "Let's talk",

    about_title: 'About me',
    about_p1: 'I am a full-stack developer who builds both sides of a product: Laravel on the server and Flutter on the phone. My recent work is Syria Zon, a multi-vendor marketplace with four management panels, a documented REST API, and the Flutter app that runs on it.',
    about_p2: 'Before that I built a wallet and transfers system, a multilingual e-learning platform, and a volunteering platform. I enjoy designing data models, role-based dashboards, and clean APIs that mobile apps can rely on.',
    about_github_cta: 'See everything on GitHub',

    skills_title: 'Two stacks, one craft',
    skills_sub: 'Back end and mobile, built to work together.',
    skills_laravel_desc: 'Web platforms, APIs, dashboards',
    skills_flutter_desc: 'Cross-platform mobile apps',
    skills_used_hint: 'Used in my public repositories',

    projects_title: 'Selected work',
    projects_sub: 'Real projects, straight from my GitHub.',
    projects_featured: 'Featured',
    projects_code: 'Source code',
    projects_demo: 'Live demo',
    projects_stars: 'stars',
    projects_forks: 'forks',
    projects_empty: 'Projects are being pulled from GitHub. They will appear here shortly.',
    projects_private: 'Private repository',

    exp_title: 'The journey',
    exp_sub: 'Milestones along the way.',
    exp_empty: 'Timeline coming soon.',

    services_title: 'What I can build for you',
    svc_web_t: 'Web applications',
    svc_web_d: 'Full Laravel platforms, from authentication and roles to payments and notifications.',
    svc_api_t: 'APIs & integrations',
    svc_api_d: 'Clean, documented REST APIs that power mobile apps and third-party services.',
    svc_mobile_t: 'Mobile apps',
    svc_mobile_d: 'Cross-platform Flutter apps for Android and iOS from a single, maintainable codebase.',
    svc_admin_t: 'Admin dashboards',
    svc_admin_d: 'Secure control panels with reports, permissions, and real-time data.',
    svc_perf_t: 'Performance tuning',
    svc_perf_d: 'Faster queries, caching, and smoother screens for apps that already exist.',
    svc_maint_t: 'Maintenance & support',
    svc_maint_d: 'Bug fixes, upgrades to the latest Laravel and Flutter versions, and new features.',

    contact_title: "Let's build something",
    contact_sub: "Have a project, an idea, or a role in mind? Send a message and I'll get back to you.",
    form_name: 'Your name',
    form_email: 'Email address',
    form_message: 'Tell me about your project',
    form_send: 'Send message',
    form_invalid: 'Please fill in every field with a valid email.',
    form_ok: 'Opening your email app. Thank you!',
    form_no_email: 'Thanks! Please reach me through the links on this page.',

    footer_rights: 'Built by hand with HTML, CSS and vanilla JS.',
    back_to_top: 'Back to top',
  },

  ar: {
    meta_title: 'أمجد | مطوّر Laravel متكامل ومطوّر تطبيقات Flutter',
    meta_desc: 'معرض أعمال أمجد، مطوّر ويب متكامل بإطار Laravel ومطوّر تطبيقات جوّال بإطار Flutter، يبني منصات ويب سريعة وتطبيقات متعددة المنصات.',
    skip_link: 'انتقل إلى المحتوى',
    nav_label: 'التنقّل الرئيسي',
    nav_home: 'الرئيسية',
    nav_about: 'نبذة',
    nav_skills: 'المهارات',
    nav_projects: 'المشاريع',
    nav_experience: 'المسيرة',
    nav_services: 'الخدمات',
    nav_contact: 'تواصل',
    lang_toggle_label: 'التبديل إلى اللغة الإنجليزية',
    theme_toggle_label: 'التبديل بين الوضع الفاتح والداكن',
    menu_label: 'فتح القائمة',
    menu_label_close: 'إغلاق القائمة',
    scroll_cue: 'انتقل إلى النبذة',

    hero_eyebrow: 'مرحبًا، أنا',
    hero_name: 'أمجد',
    hero_roles: ['مطوّر ويب متكامل', 'مطوّر تطبيقات جوّال', 'مصمّم واجهات برمجية', 'صانع حلول'],
    hero_lead: 'أبني منصات ويب سريعة وآمنة باستخدام Laravel، وتطبيقات سلسة متعددة المنصات باستخدام Flutter، بدءًا من تصميم قاعدة البيانات وحتى آخر تفصيلة في الواجهة.',
    cta_projects: 'استعرض أعمالي',
    cta_contact: 'لنتحدّث',

    about_title: 'نبذة عنّي',
    about_p1: 'مطوّر برمجيات متكامل أبني طرفَي المنتج: Laravel على الخادم، وFlutter على الهاتف. أحدث أعمالي Syria Zon، وهو سوق إلكتروني متعدد المتاجر يضمّ أربع لوحات إدارة وواجهة REST موثّقة وتطبيق Flutter يعمل عليها.',
    about_p2: 'وقبل ذلك بنيتُ منظومة للمحافظ والحوالات، ومنصة تعليمية متعددة اللغات، ومنصة للعمل التطوعي. أستمتع بتصميم نماذج البيانات، ولوحات التحكّم القائمة على الأدوار، والواجهات البرمجية النظيفة التي تعتمد عليها تطبيقات الجوّال.',
    about_github_cta: 'اطّلع على أعمالي كاملة في GitHub',

    skills_title: 'تقنيتان، وحِرفة واحدة',
    skills_sub: 'الخادم والجوّال، مصمَّمان ليعملا معًا.',
    skills_laravel_desc: 'منصات ويب وواجهات برمجية ولوحات تحكّم',
    skills_flutter_desc: 'تطبيقات جوّال متعددة المنصات',
    skills_used_hint: 'مستخدَمة في مستودعاتي العامة',

    projects_title: 'أعمال مختارة',
    projects_sub: 'مشاريع حقيقية، مأخوذة مباشرةً من GitHub.',
    projects_featured: 'مشروع مميّز',
    projects_code: 'الشيفرة المصدرية',
    projects_demo: 'معاينة حيّة',
    projects_stars: 'نجمة',
    projects_forks: 'نسخة',
    projects_empty: 'يجري جلب المشاريع من GitHub، وستظهر هنا قريبًا.',
    projects_private: 'مستودع خاص',

    exp_title: 'المسيرة',
    exp_sub: 'محطات بارزة على الطريق.',
    exp_empty: 'سيُضاف الخط الزمني قريبًا.',

    services_title: 'ما يمكنني بناؤه لك',
    svc_web_t: 'تطبيقات الويب',
    svc_web_d: 'منصات Laravel متكاملة، من المصادقة والصلاحيات إلى المدفوعات والإشعارات.',
    svc_api_t: 'الواجهات البرمجية والتكامل',
    svc_api_d: 'واجهات REST نظيفة وموثّقة تُشغّل تطبيقات الجوّال والخدمات الخارجية.',
    svc_mobile_t: 'تطبيقات الجوّال',
    svc_mobile_d: 'تطبيقات Flutter لنظامَي Android وiOS انطلاقًا من شيفرة واحدة سهلة الصيانة.',
    svc_admin_t: 'لوحات التحكّم',
    svc_admin_d: 'لوحات إدارة آمنة تتضمّن التقارير والصلاحيات والبيانات اللحظية.',
    svc_perf_t: 'تحسين الأداء',
    svc_perf_d: 'استعلامات أسرع، وتخزين مؤقت، وشاشات أكثر سلاسة للتطبيقات القائمة.',
    svc_maint_t: 'الصيانة والدعم',
    svc_maint_d: 'إصلاح الأخطاء، والترقية إلى أحدث إصدارات Laravel وFlutter، وإضافة ميزات جديدة.',

    contact_title: 'لنبنِ شيئًا معًا',
    contact_sub: 'لديك مشروع أو فكرة أو فرصة عمل؟ أرسل رسالتك وسأردّ عليك في أقرب وقت.',
    form_name: 'الاسم',
    form_email: 'البريد الإلكتروني',
    form_message: 'حدّثني عن مشروعك',
    form_send: 'إرسال الرسالة',
    form_invalid: 'يُرجى تعبئة جميع الحقول وإدخال بريد إلكتروني صحيح.',
    form_ok: 'جارٍ فتح تطبيق البريد. شكرًا لتواصلك!',
    form_no_email: 'شكرًا لك! يمكنك التواصل معي عبر الروابط في هذه الصفحة.',

    footer_rights: 'صُمّم يدويًا باستخدام HTML وCSS وJavaScript.',
    back_to_top: 'العودة إلى الأعلى',
  },
};

/* ---------------------------------------------------------
   3. Helpers
   --------------------------------------------------------- */
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => [...root.querySelectorAll(s)];
const root = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};
const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

let lang = root.lang === 'ar' ? 'ar' : 'en';
const t = (key) => translations[lang][key] ?? translations.en[key] ?? '';
const pick = (obj) => (obj && typeof obj === 'object' ? obj[lang] ?? obj.en : obj ?? '');
const icons = () => window.lucide?.createIcons({ attrs: { 'stroke-width': 1.75 } });

/* ---------------------------------------------------------
   4. Rendering of data-driven sections
   --------------------------------------------------------- */
function renderStats() {
  const el = $('#stats');
  el.hidden = SITE.stats.length === 0;
  el.innerHTML = SITE.stats.map((s) => `
    <li class="stat glass reveal is-visible">
      <div class="stat__num gradient-text"><span data-count="${s.value}">0</span>${esc(s.suffix || '')}</div>
      <div class="stat__label">${esc(pick(s.label))}</div>
    </li>`).join('');
}

function renderSkills() {
  for (const side of ['laravel', 'flutter']) {
    $(`#skills-${side}-list`).innerHTML = SITE.skills[side].map((s) =>
      `<li class="skill" lang="en" dir="ltr"${s.used ? ` data-used title="${esc(t('skills_used_hint'))}"` : ''}>${esc(s.name)}</li>`
    ).join('');
  }
}

function renderProjects() {
  const grid = $('#projects-grid');
  if (!SITE.projects.length) {
    grid.innerHTML = `<p class="empty-state"><i data-lucide="github"></i>${esc(t('projects_empty'))}</p>`;
    return;
  }
  const list = [...SITE.projects].sort((a, b) => (b.featured === true) - (a.featured === true));
  grid.innerHTML = list.map((p, i) => {
    const featured = i === 0 && p.featured;
    return `
    <article class="project glass reveal${featured ? ' project--featured' : ''}" style="--delay:${(i % 3) * 0.08}s">
      ${p.images?.length ? `<div class="project__media${p.images.length > 1 ? ' project__media--duo' : ''}">
        ${(featured ? p.images : p.images.slice(0, 1)).map((img) =>
          `<img src="${esc(img.src)}" alt="${esc(pick(img.alt))}" loading="lazy" decoding="async" width="1200" height="750">`).join('')}
      </div>` : ''}
      <div class="project__top">
        <span class="project__icon" aria-hidden="true"><i data-lucide="${esc(p.icon || 'folder-git-2')}"></i></span>
        <div class="project__links">
          ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener" aria-label="${esc(t('projects_demo'))}: ${esc(p.name)}"><i data-lucide="external-link"></i></a>` : ''}
          ${p.private
            ? `<span class="project__private" title="${esc(t('projects_private'))}"><i data-lucide="lock" aria-hidden="true"></i><span class="sr-only">${esc(t('projects_private'))}</span></span>`
            : p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener" aria-label="${esc(t('projects_code'))}: ${esc(p.name)}"><i data-lucide="github"></i></a>` : ''}
        </div>
      </div>
      <span class="project__tag">${featured ? `★ ${esc(t('projects_featured'))} · ` : ''}${esc(pick(p.tag))}</span>
      <h3 class="project__title" lang="en" dir="ltr">${esc(p.name)}</h3>
      <p class="project__desc">${esc(pick(p.desc))}</p>
      <ul class="project__meta" role="list" lang="en" dir="ltr">${(p.stack || []).map((s) => `<li>${esc(s)}</li>`).join('')}</ul>
      ${(p.stars || p.forks) ? `<div class="project__stats">
        <span><i data-lucide="star"></i>${p.stars || 0} ${esc(t('projects_stars'))}</span>
        <span><i data-lucide="git-fork"></i>${p.forks || 0} ${esc(t('projects_forks'))}</span>
      </div>` : ''}
    </article>`;
  }).join('');
}

function renderTimeline() {
  const el = $('#timeline');
  if (!SITE.timeline.length) {
    el.innerHTML = `<li class="tl-item glass reveal"><p class="tl-item__desc">${esc(t('exp_empty'))}</p></li>`;
    return;
  }
  el.innerHTML = SITE.timeline.map((item, i) => `
    <li class="tl-item glass reveal" style="--delay:${i * 0.06}s">
      <span class="tl-item__date" lang="en" dir="ltr">${esc(item.date)}</span>
      <h3 class="tl-item__title">${esc(pick(item.title))}</h3>
      <p class="tl-item__desc">${esc(pick(item.desc))}</p>
    </li>`).join('');
}

function renderServices() {
  $('#services-list').innerHTML = SITE.services.map((s, i) => `
    <li class="service glass reveal" style="--delay:${(i % 3) * 0.08}s">
      <span class="service__icon" aria-hidden="true"><i data-lucide="${s.icon}"></i></span>
      <h3>${esc(t(s.key + '_t'))}</h3>
      <p>${esc(t(s.key + '_d'))}</p>
    </li>`).join('');
}

function renderSocials() {
  const list = [...SITE.socials];
  if (SITE.email) list.unshift({ label: SITE.email, icon: 'mail', url: `mailto:${SITE.email}` });
  $('#socials').innerHTML = list.map((s) => `
    <li><a href="${esc(s.url)}" ${s.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} class="magnetic">
      <i data-lucide="${esc(s.icon)}" aria-hidden="true"></i><span lang="en" dir="ltr">${esc(s.label)}</span>
    </a></li>`).join('');
  const gh = $('#github-profile-link');
  gh.hidden = !SITE.github;
  if (SITE.github) gh.href = `https://github.com/${SITE.github}`;
}

function renderAll() {
  renderStats();
  renderSkills();
  renderProjects();
  renderTimeline();
  renderServices();
  renderSocials();
  icons();
  observeReveals();
  bindTilt();
  bindMagnetic();
}

/* ---------------------------------------------------------
   5. i18n
   --------------------------------------------------------- */
function applyTranslations() {
  $$('[data-i18n]').forEach((el) => {
    const v = t(el.dataset.i18n);
    el.textContent = v;
    if (el.hasAttribute('data-scramble')) el.dataset.final = v;
  });
  $$('[data-i18n-attr]').forEach((el) => {
    el.dataset.i18nAttr.split(';').forEach((pair) => {
      const [attr, key] = pair.split(':');
      el.setAttribute(attr.trim(), t(key.trim()));
    });
  });
  document.title = t('meta_title');
  $('meta[name="description"]').content = t('meta_desc');
  $('meta[property="og:title"]').content = t('meta_title');
  $('meta[property="og:description"]').content = t('meta_desc');
  $('meta[property="og:locale"]').content = lang === 'ar' ? 'ar_AR' : 'en_US';
  $('meta[name="twitter:title"]').content = t('meta_title');
  $('meta[name="twitter:description"]').content = t('meta_desc');
  updateJsonLd();
}

function updateJsonLd() {
  const sameAs = [SITE.github && `https://github.com/${SITE.github}`, ...SITE.socials.map((s) => s.url)].filter(Boolean);
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: pick(SITE.name),
    alternateName: lang === 'ar' ? SITE.name.en : SITE.name.ar,
    jobTitle: lang === 'ar'
      ? ['مطوّر Laravel متكامل', 'مطوّر تطبيقات Flutter']
      : ['Laravel Full-Stack Developer', 'Flutter Mobile Developer'],
    description: t('meta_desc'),
    url: SITE.url,
    inLanguage: lang,
    knowsLanguage: ['ar', 'en'],
    knowsAbout: ['Laravel', 'PHP', 'Flutter', 'Dart', 'REST API', 'MySQL'],
    ...(sameAs.length && { sameAs }),
    ...(SITE.email && { email: `mailto:${SITE.email}` }),
  };
  $('#ld-json').textContent = JSON.stringify(data);
}

function setLanguage(next, animate = true) {
  const commit = () => {
    lang = next;
    root.lang = next;
    root.dir = next === 'ar' ? 'rtl' : 'ltr';
    store.set('pf-lang', next);
    applyTranslations();
    renderAll();
    restartTyping();
  };
  if (!animate || reduceMotion) { commit(); return; }
  document.body.classList.add('lang-out');
  setTimeout(() => {
    commit();
    requestAnimationFrame(() => document.body.classList.remove('lang-out'));
    $$('[data-scramble]').forEach((el) => scramble(el));
  }, 360);
}

/* ---------------------------------------------------------
   6. Theme
   --------------------------------------------------------- */
function setTheme(next) {
  root.dataset.theme = next;
  $('meta[name="theme-color"]').content = next === 'light' ? '#F6F6FA' : '#0A0A0F';
  store.set('pf-theme', next);
}

/* ---------------------------------------------------------
   7. Animations
   --------------------------------------------------------- */
// Text scramble — uses glyphs from the current script
function scramble(el) {
  const final = el.dataset.final || el.textContent;
  if (reduceMotion || !final) { el.textContent = final; return; }
  const glyphs = lang === 'ar' ? 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ<>/{}=+*#';
  const dur = 700;
  const start = performance.now();
  cancelAnimationFrame(el._scr);
  const tick = (now = start) => {
    const p = Math.min((now - start) / dur, 1);
    const done = Math.floor(p * final.length);
    el.textContent = p >= 1 ? final : [...final].map((ch, i) =>
      i < done || ch === ' ' ? ch : glyphs[Math.floor(Math.random() * glyphs.length)]
    ).join('');
    if (p < 1) el._scr = requestAnimationFrame(tick);
  };
  tick();
}

// Counter
function countUp(el) {
  const end = Number(el.dataset.count) || 0;
  if (reduceMotion) { el.textContent = end.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US'); return; }
  const dur = 1600;
  const start = performance.now();
  const step = (now) => {
    const p = Math.min((now - start) / dur, 1);
    const eased = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.round(end * eased).toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Intersection Observer reveals
let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-visible');
        if (e.target.matches('[data-scramble]')) scramble(e.target);
        $$('[data-scramble]', e.target).forEach(scramble);
        $$('[data-count]', e.target).forEach(countUp);
        revealObserver.unobserve(e.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  }
  $$('.reveal:not(.is-visible), #stats').forEach((el) => revealObserver.observe(el));
}

// Typing animation for roles
let typingTimer;
function restartTyping() {
  clearTimeout(typingTimer);
  const target = $('#typed');
  const roles = t('hero_roles');
  if (reduceMotion) { target.textContent = roles[0]; return; }
  let r = 0, c = 0, deleting = false;
  const loop = () => {
    const word = roles[r];
    c += deleting ? -1 : 1;
    target.textContent = word.slice(0, c);
    let delay = deleting ? 35 : 75;
    if (!deleting && c === word.length) { deleting = true; delay = 1800; }
    else if (deleting && c === 0) { deleting = false; r = (r + 1) % roles.length; delay = 350; }
    typingTimer = setTimeout(loop, delay);
  };
  target.textContent = '';
  loop();
}

// Canvas particles in the hero
function initParticles() {
  const canvas = $('#particles');
  if (!canvas || reduceMotion) return;
  const ctx = canvas.getContext('2d');
  const colors = ['154,154,174', '154,154,174'];
  const mouse = { x: -9999, y: -9999 };
  let w, h, dpr, parts = [], running = true, raf;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.offsetWidth; h = canvas.offsetHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(Math.floor((w * h) / 14000), 110);
    parts = Array.from({ length: count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.6, c: colors[Math.random() < 0.5 ? 0 : 1],
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, w, h);
    const light = root.dataset.theme === 'light';
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i];
      const dx = p.x - mouse.x, dy = p.y - mouse.y, dist = Math.hypot(dx, dy);
      if (dist < 120) { p.x += (dx / dist) * 1.2; p.y += (dy / dist) * 1.2; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.c},${light ? 0.45 : 0.5})`;
      ctx.fill();
      for (let j = i + 1; j < parts.length; j++) {
        const q = parts[j];
        const d = Math.hypot(p.x - q.x, p.y - q.y);
        if (d < 120) {
          ctx.strokeStyle = `rgba(${p.c},${(1 - d / 120) * (light ? 0.12 : 0.14)})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
    }
    if (running) raf = requestAnimationFrame(draw);
  };

  canvas.parentElement.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
  });
  canvas.parentElement.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  new IntersectionObserver(([e]) => {
    running = e.isIntersecting;
    if (running) { cancelAnimationFrame(raf); draw(); }
  }).observe(canvas);
  let rt; window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
  resize(); draw();
}

// Parallax hero + nav state + scroll progress
function initScroll() {
  const nav = $('.nav');
  const hero = $('[data-parallax]');
  const progress = $('.scroll-progress');
  let ticking = false;
  const update = () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 20);
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.setProperty('--progress', max > 0 ? y / max : 0);
    if (!reduceMotion && y < innerHeight) {
      hero.style.transform = `translate3d(0, ${y * 0.35}px, 0)`;
      hero.style.opacity = String(1 - y / (innerHeight * 0.9));
    }
    ticking = false;
  };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  update();

  // Active nav link
  const links = $$('.nav__links a');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((a) => a.classList.toggle('is-active', a.hash === `#${e.target.id}`));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach((s) => io.observe(s));
}

// Magnetic buttons
function bindMagnetic() {
  if (reduceMotion || !finePointer) return;
  $$('.magnetic:not([data-mag])').forEach((el) => {
    el.dataset.mag = '1';
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}

// 3D tilt on project cards
function bindTilt() {
  $$('.project:not([data-tilt])').forEach((card) => {
    card.dataset.tilt = '1';
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      if (reduceMotion || !finePointer) return;
      card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 10}deg) rotateY(${(px - 0.5) * 12}deg) translateY(-4px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

/* ---------------------------------------------------------
   8. UI controls
   --------------------------------------------------------- */
function initControls() {
  $('#lang-toggle').addEventListener('click', () => setLanguage(lang === 'en' ? 'ar' : 'en'));
  $('#theme-toggle').addEventListener('click', () => setTheme(root.dataset.theme === 'light' ? 'dark' : 'light'));

  const menuBtn = $('#menu-toggle'), menu = $('#nav-menu');
  const setMenu = (open) => {
    menu.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', t(open ? 'menu_label_close' : 'menu_label'));
  };
  menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('is-open')));
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) { setMenu(false); menuBtn.focus(); }
  });

  $('#back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    $('.nav__logo').focus({ preventScroll: true });
  });

  // Contact form → validates, then opens a pre-filled email (no backend needed)
  const form = $('#contact-form'), status = $('#form-status');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    $$('input, textarea', form).forEach((f) => {
      const ok = f.value.trim() !== '' && f.checkValidity();
      f.classList.toggle('is-invalid', !ok);
      f.setAttribute('aria-invalid', String(!ok));
      if (!ok) valid = false;
    });
    status.className = 'form__status';
    if (!valid) { status.textContent = t('form_invalid'); status.classList.add('is-error'); return; }
    const d = Object.fromEntries(new FormData(form));
    if (SITE.email) {
      const body = encodeURIComponent(`${d.message}\n\n— ${d.name} <${d.email}>`);
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Portfolio — ' + d.name)}&body=${body}`;
      status.textContent = t('form_ok');
    } else {
      status.textContent = t('form_no_email');
    }
    status.classList.add('is-ok');
    form.reset();
  });
  $$('input, textarea', form).forEach((f) => f.addEventListener('input', () => {
    f.classList.remove('is-invalid'); f.removeAttribute('aria-invalid');
  }));
}

/* ---------------------------------------------------------
   9. Boot
   --------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  $('#year').textContent = new Date().getFullYear();
  const urlLang = new URLSearchParams(location.search).get('lang');
  const saved = urlLang || store.get('pf-lang');
  setLanguage(saved === 'ar' ? 'ar' : 'en', false);
  const theme = store.get('pf-theme');
  if (theme) setTheme(theme);
  initControls();
  initScroll();
  initParticles();
});
// Lucide loads with defer after this file may run; re-render icons once it's ready
window.addEventListener('load', icons);
