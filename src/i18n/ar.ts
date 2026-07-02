import type { Content } from './content';
import { IDENTITY, SOCIALS, LINKS } from '../data/site';

export const ar: Content = {
  meta: {
    title: 'أحمد جمعة زبادنة، مطوّر برمجيات متكامل',
    description:
      'مطوّر برمجيات متكامل من دمشق، أبني منصّات إنتاجية في التجارة الإلكترونية والاتصالات والموبايل من البداية للنهاية. NestJS وSpring Boot وFlutter وReact وPostgreSQL وDevOps.',
    ogAlt: 'أحمد جمعة زبادنة، مطوّر برمجيات متكامل',
  },
  nav: {
    work: 'أعمالي',
    about: 'نبذة',
    skills: 'المهارات',
    experience: 'الخبرة',
    community: 'المجتمع',
    contact: 'تواصل',
  },
  a11y: {
    skip: 'تخطَّ إلى المحتوى',
    motionOn: 'إيقاف الحركة',
    motionOff: 'تشغيل الحركة',
    switchLang: 'Switch to English',
  },
  hero: {
    status: 'أبني Nabta، متجر نباتات إلكتروني، بمفردي',
    greeting: 'مرحبًا، أنا',
    name: IDENTITY.nameAr,
    roles: ['مطوّر متكامل', 'مطوّر خلفيات ومنصّات', 'مطوّر Flutter وويب', 'مطوّر بعقلية DevOps'],
    headline: 'أصمّم وأُطلق تطبيقات إنتاجية',
    headlineAccent: 'من قاعدة البيانات إلى واجهة المتجر.',
    valueProp:
      'مطوّر متكامل من دمشق، أبني البرمجيات منذ 2019 في مجالات الاتصالات والتجارة الإلكترونية والاتصالات الآمنة والموبايل. آخرها متجر نباتات إلكتروني بثمانية مستودعات، من قاعدة البيانات حتى واجهة المتجر، بمفردي.',
    ctaWork: 'شاهد أعمالي',
    ctaCv: 'تحميل السيرة الذاتية',
    scrollHint: 'مرّر',
  },
  work: {
    eyebrow: 'أعمال مختارة',
    title: 'أشياء بنيتها',
    intro:
      'بعض المشاريع التي تُظهر المدى: منصّة متكاملة بنيتها بمفردي، ومنصّة تحكّم لشركة اتصالات، وتطبيق سوق كبير، ومتجر منشور. معظم شيفرة العملاء خاصّة، لذا أعرضها كدراسات حالة موجزة.',
    viewLive: 'الموقع المباشر',
    viewCode: 'الشيفرة',
    viewApp: 'Google Play',
    viewCompany: 'الشركة',
    privateNote: 'عمل خاص لعميل',
    buildingLabel: 'قيد التطوير',
    architectureTitle: 'مهندس واحد، ثمانية مستودعات',
    architectureNote:
      'أملك النظام بالكامل: الخلفية، وتطبيقَي موبايل، ولوحة إدارة ويب، وموقعًا تعريفيًّا، والبنية التحتية على الخادم. مواصفة OpenAPI تولّد عملاء الموبايل والويب المُنمّطين.',
    projects: [
      {
        id: 'nabta',
        name: 'Nabta',
        tagline: 'منصّة تجارة إلكترونية للنباتات، بنيتها بمفردي عبر 8 مستودعات.',
        problem:
          'احتاج عميل إلى سوق نباتات متكامل: واجهة متجر عربية أولًا، ولوحة إدارة خلفية، والبنية التحتية لتشغيله، دون فريق قائم.',
        approach:
          'صمّمت وبنيت المنظومة كاملة: خلفية بـNestJS وPrisma وPostgreSQL، وتطبيقَي Flutter فوق حزمة مشتركة، ولوحة إدارة React، وموقعًا تعريفيًّا بـAstro، ونشرًا على خادم واحد عبر Docker Compose وAnsible. مواصفة Swagger/OpenAPI تولّد عملاء الموبايل والويب المُنمّطين.',
        impact:
          'النسخة الأولى من الكتالوج منشورة ومختبَرة من الطرف إلى الطرف: تصفّح، وبحث متعدّد الأسماء، ومُقترِح ذكي، وتسعير من الدولار إلى الليرة. السلّة والدفع والدفع الإلكتروني وتدفّق «طبيب النبات» بالذكاء الاصطناعي قيد التطوير.',
        tech: ['NestJS 11', 'Prisma 6', 'PostgreSQL 16', 'Flutter', 'React 19', 'Astro', 'Docker', 'Ansible', 'Redis', 'MinIO'],
        metrics: [
          { value: 8, label: 'مستودعات' },
          { value: 59, label: 'نقطة REST' },
          { value: 25, label: 'وحدة خلفية' },
        ],
        links: { live: LINKS.nabtaLive },
        status: 'building',
        year: '2026',
        role: 'مطوّر متكامل وبنية تحتية (بمفردي)',
        featured: true,
        anchor: true,
      },
      {
        id: 'cellusys',
        name: 'Cellusys OTA',
        tagline: 'منصّة إدارة اتصالات وبوّابة تشفير HSM، بنيتها من الصفر.',
        problem:
          'احتاجت شركة اتصالات إلى منصّة إدارة عبر الأثير مع طبقة تشفير محصّنة وأدوات بمستوى المشغّلين.',
        approach:
          'بنيت واجهة Nuxt 4 وواجهة Spring Boot معًا، إضافةً إلى بوّابة HSM مستقلّة تدمج SoftHSM عبر PKCS#11. تعمل المنصّة كاملةً كـ14 خدمة Docker خلف خطّ GitLab بـ19 مهمة.',
        impact:
          'أطلقت 42 نقطة REST، وأكثر من 30 مكوّن Vue، وجداول مُقسّمة من الخادم، واستيراد CSV دفعيًّا مع تحقّق، وعارض سجلّات لحظيًّا فوق فهرسَي Elasticsearch مع سكربتات Painless مخصّصة.',
        tech: ['Nuxt 4', 'Vue 3', 'Spring Boot', 'Java 21', 'Elasticsearch', 'HSM / PKCS#11', 'Docker', 'GitLab CI'],
        metrics: [
          { value: 42, label: 'نقطة REST' },
          { value: 14, label: 'خدمة Docker' },
          { value: 19, label: 'مهمة في خط CI' },
        ],
        links: { company: LINKS.cellusys },
        status: 'building',
        year: '2025',
        role: 'مطوّر متكامل',
        featured: true,
      },
      {
        id: 'pazarpro',
        name: 'PazarPro',
        tagline: 'تطبيق سوق متعدّد البائعين بتدفّقَي عميل وبائع.',
        problem:
          'احتاج عميل سعودي إلى تطبيق تجارة إلكترونية كبير متعدّد البائعين يدعم المتسوّقين والبائعين بثلاث لغات.',
        approach:
          'قدت معمارية Flutter: معمارية نظيفة بنمط BLoC، وbloc أساسية عامّة للتصفّح وجلب البيانات، وتكامل مُنمّط عبر Retrofit/Dio، ودردشة لحظية برسائل صوتية عبر Pusher، ومدفوعات Stripe مع محفظة.',
        impact:
          'أنجزت 99 شاشة عبر 21 وحدة، و127 bloc، وأكثر من 180 نقطة REST مُستهلَكة، مع دعم الإنجليزية والعربية والتركية وواجهة من اليمين لليسار.',
        tech: ['Flutter', 'BLoC', 'Retrofit / Dio', 'Pusher', 'Stripe', 'easy_localization'],
        metrics: [
          { value: 99, label: 'شاشة' },
          { value: 127, label: 'bloc' },
          { value: 180, suffix: '+', label: 'نقطة REST' },
        ],
        links: { company: LINKS.iris },
        status: 'shipped',
        year: '2026',
        role: 'مطوّر Flutter رئيسي',
        featured: true,
      },
      {
        id: 'hatlakdeals',
        name: 'HatlakDeals',
        tagline: 'سوق إلكتروني من تطبيقين (مشترٍ وبائع)، منشور على Google Play.',
        problem:
          'احتاج سوق إعلانات مبوّبة إلى تطبيقَي Flutter للعميل والبائع يتشاركان معظم الشيفرة، مدعومَين بواجهة REST كبيرة وميزات لحظية.',
        approach:
          'كمطوّر Flutter في الفريق، بنيت الشاشات من Figma وربطتها بالواجهة عبر GetX وRetrofit/Dio، ضمن شيفرة معيارية مشتركة بنحو 80% بين تطبيقَي المشتري والبائع.',
        impact:
          'منشور وحيّ على Google Play، مع دردشة وإشعارات لحظية عبر socket.io، ودفع كضيف من 3 خطوات، ومصادقة OTP، وتكاملات خرائط Google والوسائط والإعلانات.',
        tech: ['Flutter', 'GetX', 'Retrofit / Dio', 'socket.io', 'Firebase', 'Google Maps'],
        metrics: [
          { value: 2, label: 'تطبيقان (مشترٍ + بائع)' },
          { value: 67, label: 'نقطة REST' },
          { value: 100, label: 'شاشة' },
        ],
        links: { play: LINKS.hatlakdeals },
        status: 'shipped',
        year: '2025',
        role: 'مطوّر Flutter',
        featured: true,
      },
      {
        id: 'eplanet',
        name: 'Eplanet',
        tagline: 'تطبيق تجارة إلكترونية متعدّد اللغات: تسوّق وسلّة ودفع وطلبات.',
        problem:
          'الحاجة إلى متجر إلكتروني عابر للمنصّات لـiOS وAndroid مع مدفوعات، ونظام محتوى منفصل، ودعم متعدّد اللغات.',
        approach:
          'كمطوّر Flutter رئيسي وأكثر المساهمين في فريق من 4 مطوّرين، بنيت التطبيق على معمارية نظيفة مع Riverpod، وDio وRetrofit لـREST إضافةً إلى طبقة GraphQL للمحتوى، وauto_route، ونماذج freezed، ونكهات dev/stage/prod.',
        impact:
          'أطلقت المنتجات والسلّة والدفع عبر Stripe وPayPal، والطلبات والفواتير والمفضّلة والتقييمات والمكافآت، مع إشعارات Firebase وروابط عميقة وأربع لغات (العربية والألمانية والإنكليزية والتركية).',
        tech: ['Flutter', 'Riverpod', 'Retrofit / Dio', 'GraphQL', 'Stripe', 'PayPal', 'Firebase'],
        metrics: [
          { value: 26, label: 'وحدة وظيفية' },
          { value: 68, label: 'نقطة REST' },
          { value: 4, label: 'لغات' },
        ],
        links: {},
        status: 'shipped',
        year: '2024',
        role: 'مطوّر Flutter رئيسي (أكثر المساهمين)',
        featured: true,
      },
      {
        id: 'minbar',
        name: 'Minbar',
        tagline: 'تطبيق تواصل اجتماعي بـFlutter وFirebase: نشر وإعجاب وتعليق واستكشاف.',
        problem: 'مشروع جامعي للسنة الرابعة لبناء تطبيق تدفّق اجتماعي كامل على خلفية بلا خادم.',
        approach:
          'Flutter مع Hooks وRiverpod فوق Firebase (Firestore وStorage والمصادقة): منشورات نصّية وصور وفيديو مع مصغّرات من طرف العميل، وإعجابات وتعليقات، وبحث بالكلمات، وملفّات شخصية، مع تسجيل دخول عبر Google وFacebook.',
        impact: 'تطبيق تفاعلي كامل يتدفّق حيًّا من Firestore، مع مفاتيح خصوصية لكل منشور وحذف يقتصر على المالك.',
        tech: ['Flutter', 'Riverpod', 'Firebase', 'OAuth'],
        metrics: [
          { value: 28, label: 'واجهة عرض' },
          { value: 15, label: 'مزوّد Riverpod' },
          { value: 4, label: 'مجموعة Firestore' },
        ],
        links: {},
        status: 'shipped',
        year: '2024',
        role: 'مطوّر موبايل (جامعي)',
        featured: false,
      },
      {
        id: 'datasphere',
        name: 'Data Sphere',
        tagline: 'حوّل ملفّ CSV إلى لوحة تقارير تفاعلية، دون كتابة شيفرة.',
        problem:
          'تمكين المستخدمين غير التقنيين من رفع بيانات CSV خام وبناء لوحات تحليلية قابلة للمشاركة في المتصفّح (مشروع تخرّج، فريق من 3).',
        approach:
          'React 18 وTypeScript على Vite فوق Firebase، مع لوحة تقارير بالسحب وتغيير الحجم (react-rnd) تجمع جداول محورية ورسوم Chart.js وصناديق نصّية؛ تُحلَّل ملفّات CSV بـPapaParse؛ مصادقة بمسارات محميّة؛ محزّمة بـDocker.',
        impact: 'يرفع المستخدمون ملفّات CSV، ويحرّرون جدول البيانات، ويُنشئون جداول محورية، ويؤلّفون لوحات برسوم أعمدة وخطوط ودوائر محفوظة في Firestore.',
        tech: ['React 18', 'TypeScript', 'Vite', 'Firebase', 'Chart.js', 'Docker'],
        metrics: [
          { value: 44, label: 'مكوّن React' },
          { value: 3, label: 'أنواع رسوم' },
          { value: 10, suffix: '.7K', label: 'سطر برمجي' },
        ],
        links: {},
        status: 'shipped',
        year: '2024',
        role: 'مطوّر متكامل (فريق من 3)',
        featured: false,
      },
    ],
  },
  about: {
    eyebrow: 'نبذة',
    title: 'متكامل، بعمقٍ حقيقيّ على الطرفين',
    paragraphs: [
      'أنا مطوّر أنظمة وبرمجيات مقيم في دمشق. على مدى السنوات الماضية أطلقت منتجات ويب وموبايل في مجالات الاتصالات والتجارة الإلكترونية ومستحضرات التجميل والاتصالات الآمنة، غالبًا بامتلاك ميزة أو منتج كامل من قاعدة البيانات إلى الواجهة.',
      'أعمل بارتياح عبر الحزمة كاملة: NestJS وSpring Boot وFastAPI في الخلفية؛ وNuxt وReact وAstro في الويب؛ وFlutter في الموبايل؛ وتحتها PostgreSQL وElasticsearch وRedis وDocker وAnsible. دمجت وحدات أمان عتادية عبر PKCS#11، وحصّنت TLS في الأنظمة المدمجة، وأجريت تمارين نسخ احتياطي واستعادة مشفّرة على خوادم إنتاجية.',
      'بدأت من الروبوتيك، أدرّب الطلّاب وأنافس في الأولمبياد العالمي للروبوت، وما زالت تلك العقلية المنهجية والتنافسية تشكّل طريقتي في البناء: موثوق، جيّد المعمارية، ومختبَر.',
    ],
    highlights: [
      { value: '2019', label: 'أبني منذ' },
      { value: '11', label: 'فرق وعملاء' },
      { value: '3', label: 'دول للعملاء' },
    ],
  },
  skills: {
    eyebrow: 'أدواتي',
    title: 'ما أعمل به',
    intro: 'مُجمّعة حسب موقعها في الحزمة. كل ما هنا من عمل حقيقي منشور.',
    groups: [
      { label: 'لغات البرمجة', items: ['Java', 'TypeScript', 'Python', 'Dart', 'C', 'JavaScript'] },
      { label: 'الواجهات والويب', items: ['Nuxt 4 (Vue 3)', 'React 19', 'Astro', 'Tailwind CSS', 'TanStack Query', 'Zustand'] },
      { label: 'الموبايل', items: ['Flutter', 'BLoC', 'GetX', 'Riverpod', 'Retrofit / Dio'] },
      { label: 'الخلفية', items: ['NestJS', 'Spring Boot', 'FastAPI', 'REST / OpenAPI', 'Prisma', 'BullMQ'] },
      { label: 'البيانات والبنية التحتية', items: ['PostgreSQL', 'Elasticsearch', 'Redis', 'Docker', 'Docker Swarm', 'Ansible', 'GitLab CI', 'GitHub Actions', 'MinIO / S3'] },
      { label: 'الأمن', items: ['HSM / PKCS#11', 'SoftHSM', 'TLS / SSL', 'AES (CBC / CMAC)'] },
    ],
  },
  experience: {
    eyebrow: 'المسيرة المهنية',
    title: 'أين عملت',
    intro: 'الأحدث أولًا. أعمل من دمشق في كل الأدوار، عن بُعد أو وجاهيًّا.',
    present: 'حتى الآن',
    roles: [
      {
        company: 'Solarya — Nabta',
        url: LINKS.nabtaLive,
        role: 'مطوّر متكامل وبنية تحتية (بمفردي)',
        dates: 'مايو 2026 — حتى الآن',
        type: 'عمل حر · عن بُعد',
        bullets: [
          'أصمّم وأبني منصّة تجارة نباتات من الطرف إلى الطرف كـ8 مستودعات: خلفية، وتطبيقَي موبايل، ولوحة إدارة ويب، وموقع تعريفي، وبنية تحتية على الخادم.',
          'خلفية بـNestJS 11 وPrisma 6 وPostgreSQL 16: 25 وحدة، و59 نقطة REST، ومصادقة OTP، وصلاحيات حسب الدور، وتخزين مؤقّت Redis، ومهامّ BullMQ، ووسائط MinIO.',
          'تطبيقا Flutter فوق حزمة مشتركة مع لوحة إدارة React 19، جميعها مُنمّطة على مواصفة Swagger/OpenAPI، منشورة على خادم واحد عبر Docker Compose وAnsible.',
        ],
        tags: ['NestJS', 'Prisma', 'Flutter', 'React', 'Docker', 'Ansible'],
      },
      {
        company: 'Cellusys',
        url: LINKS.cellusys,
        role: 'مطوّر متكامل',
        dates: 'ديسمبر 2025 — حتى الآن',
        type: 'دوام كامل · عن بُعد · أيرلندا',
        bullets: [
          'أبني منصّة OTA للاتصالات من الصفر: واجهة Nuxt 4 وواجهة Spring Boot (Java 21) بـ42 نقطة REST عبر 5 وحدات تحكّم.',
          'بنيت بوّابة HSM مستقلّة تدمج SoftHSM عبر PKCS#11، تُتيح عمليات AES-CBC وAES-CMAC وفق RFC 4493 إضافةً لإدارة المفاتيح.',
          'حوّلت المنصّة إلى 14 خدمة وأسهمت في خطّ GitLab CI/CD بـ19 مهمة؛ وأطلق حاليًّا دعم اللغات عبر الويب والواجهة.',
        ],
        tags: ['Nuxt 4', 'Spring Boot', 'Elasticsearch', 'HSM', 'Docker'],
      },
      {
        company: 'MasahTech',
        role: 'استشاري برمجيات (Flutter والمعمارية)',
        dates: 'أبريل 2026',
        type: 'عمل حر · وجاهي في المكتب · سوريا',
        bullets: [
          'قدت معمارية Flutter لتطبيق Awan، إعادة كتابة تطبيق محادثة: طبقات معمارية نظيفة، وإدارة حالة BLoC، ومعالجة أخطاء مُنمّطة.',
          'صمّمت الدردشة اللحظية والعاملة دون اتصال: أحداث Socket.IO وتخزين محلّي مع مزامنة متعدّدة الأجهزة.',
          'كتبت وثائق المعمارية والأعراف للفريق وراجعت طلبات الدمج بملاحظات مفصّلة.',
        ],
        tags: ['Flutter', 'Socket.IO', 'Clean Architecture'],
      },
      {
        company: 'IRIS',
        url: LINKS.iris,
        role: 'مطوّر Flutter رئيسي',
        dates: 'فبراير 2026 — مايو 2026',
        type: 'عمل حر · وجاهي في المكتب · السعودية',
        bullets: [
          'قدت PazarPro، تطبيق سوق متعدّد البائعين: 99 شاشة عبر 21 وحدة مع 127 bloc وأكثر من 180 نقطة REST.',
          'بنيت دردشة داخل التطبيق برسائل صوتية عبر Pusher، ومدفوعات ومحافظ Stripe، ودعم الإنجليزية والعربية والتركية مع RTL.',
          'صمّمت bloc أساسية قابلة لإعادة الاستخدام للتصفّح وجلب البيانات تدعم تدفّقَي العميل والبائع.',
        ],
        tags: ['Flutter', 'BLoC', 'Pusher', 'Stripe'],
      },
      {
        company: 'HatlakDeals',
        url: LINKS.hatlakdeals,
        role: 'مطوّر Flutter',
        dates: 'أغسطس 2025',
        type: 'عمل حر · عن بُعد · سوريا',
        bullets: [
          'نفّذت الواجهة من Figma ودمجت واجهات REST مع GetX، مع اتّباع المعمارية النظيفة.',
          'تعاونت ضمن فريق صغير لإطلاق تطبيق تجارة إلكترونية قابل للتوسّع والصيانة، منشور الآن على Google Play.',
        ],
        tags: ['Flutter', 'GetX', 'Figma'],
      },
      {
        company: 'Zariot',
        url: LINKS.zariot,
        role: 'مطوّر أنظمة مدمجة وFlutter',
        dates: 'أبريل 2023 — ديسمبر 2025',
        type: 'دوام كامل · عن بُعد · أيرلندا',
        bullets: [
          'تخصّصت في التعامل مع وحدات SIM والاتصالات الآمنة، باستخدام C للعمل منخفض المستوى وPython للاختبار والإعداد.',
          'بنيت واجهة Flutter للأنظمة المكتوبة بـC وحصّنت TLS/SSL عبر الأجهزة المدمجة والشبكات.',
          'بنيت وأدرت بيئات اختبار للاتصالات الآمنة مع تحليل عملي للبروتوكولات.',
        ],
        tags: ['C', 'Python', 'Flutter', 'TLS/SSL'],
      },
      {
        company: 'Annecto',
        url: LINKS.annecto,
        role: 'مطوّر متكامل',
        dates: 'مايو 2024 — أغسطس 2025',
        type: 'دوام جزئي · وجاهي في المكتب · المملكة المتحدة',
        bullets: [
          'بنيت خدمات خلفية بـFastAPI ونشرتها عبر Docker وDocker Swarm وAnsible.',
          'شغّلت Supabase مُستضافة ذاتيًّا على Docker: مُشغّلات PostgreSQL ودوالّ وإدارة أدوار ونسخ احتياطي واستعادة آليّة لترحيل الخوادم.',
          'بنيت تطبيقات Flutter ونفّذت GitLab CI/CD لأتمتة البناء والاختبار والنشر.',
        ],
        tags: ['FastAPI', 'Docker Swarm', 'Supabase', 'PostgreSQL'],
      },
      {
        company: 'Intelligent Solutions Planet',
        role: 'مطوّر Flutter رئيسي',
        dates: 'أبريل 2023 — مايو 2024',
        type: 'عمل حر · عن بُعد · ألمانيا',
        bullets: [
          'قدت تطوير Flutter لتطبيق Eplanet، متجر إلكتروني عابر للمنصّات لـiOS وAndroid، كأكثر المساهمين (203 من 297 عملية دفع) ضمن فريق من 4 مطوّرين.',
          'صمّمت 26 وحدة وظيفية على معمارية نظيفة مع Riverpod (82 مزوّداً)، وDio وRetrofit لـREST (19 عميلاً، 68 نقطة)، وطبقة GraphQL للمحتوى.',
          'أطلقت الدفع عبر Stripe وPayPal، وإشعارات Firebase، وروابط عميقة، وتعريباً بأربع لغات (العربية والألمانية والإنكليزية والتركية) عبر نكهات dev/stage/prod.',
        ],
        tags: ['Flutter', 'Riverpod', 'GraphQL', 'Stripe', 'PayPal'],
      },
      {
        company: 'Daoorli & EcoMundo',
        url: LINKS.ecomundo,
        role: 'مطوّر تطبيقات',
        dates: 'يوليو 2021 — نوفمبر 2022',
        type: 'دوام كامل · وجاهي في المكتب',
        bullets: [
          'قدت تطوير الموبايل بـFlutter بمعمارية نظيفة في Daoorli.',
          'أسهمت في تطبيق EcoMundo لمصانع مستحضرات التجميل كمطوّر React (TypeScript) بمعمارية Micro Frontend ضمن فريق Agile من 20 شخصًا.',
        ],
        tags: ['Flutter', 'React', 'TypeScript', 'Micro Frontend'],
      },
      {
        company: 'MySlide',
        url: LINKS.myslide,
        role: 'مصمّم عروض تقديمية ومدرّب',
        dates: 'سبتمبر 2019 — مارس 2021',
        type: 'دوام كامل · وجاهي في المكتب · السعودية',
        bullets: [
          'صمّمت أكثر من 1000 تقرير وإنفوغرافيك وعرض تقديمي.',
          'درّبت أكثر من 100 مشارك على مستويات مهارة متنوّعة.',
        ],
        tags: ['PowerPoint', 'تصميم', 'تدريب'],
      },
      {
        company: 'Syrian Computer Society & RoboLAT',
        role: 'مدرّب روبوتيك ومدرّب منافسات',
        dates: '2019 — 2021',
        type: 'وجاهي · دمشق',
        bullets: [
          'درّبت أكثر من 100 طالب على LEGO EV3 وArduino، معلّمًا أساسيات البرمجة والروبوتيك.',
          'درّبت فرقًا في 3 منافسات روبوتيك منها ARC5.',
        ],
        tags: ['LEGO EV3', 'Arduino', 'تعليم'],
      },
    ],
  },
  community: {
    eyebrow: 'خارج العمل',
    title: 'المجتمع والمنافسات والتعليم',
    items: [
      {
        org: 'Al-Tamayoz',
        dates: 'يناير 2019 — أبريل 2021',
        detail: 'حللت خامسًا على مستوى سوريا في الأولمبياد العالمي للروبوت 2019 (الفئة النظامية للكبار). وشاركت في فعاليات إغاثية إنسانية.',
      },
      {
        org: 'RBCS',
        dates: 'أكتوبر 2017 — أكتوبر 2021',
        detail: 'علّمت تقنية المعلومات والروبوتيك ومهارات العروض لزملاء الجامعة وطلّاب المدارس عبر ورشات وأيّام مفتوحة.',
      },
      {
        org: 'RoboTech Club',
        dates: 'أبريل 2018 — مايو 2019',
        detail: 'نافست في الأولمبياد العالمي للروبوت 2018 وعملت مدرّبًا مساعدًا في مقرّر أساسيات الروبوتيك.',
      },
    ],
    educationTitle: 'التعليم',
    school: 'الجامعة الافتراضية السورية',
    degree: 'هندسة المعلوماتية (هندسة البرمجيات)',
    dates: 'أغسطس 2019 — 2026 (متوقّع)',
    detail: 'معدّل 2.75 من 4.0 (جيّد جدًّا)، 288 ساعة معتمدة عبر أكثر من 50 مقرّرًا، أثناء العمل بدوام كامل.',
    projects: [
      { name: 'مشروع التخرّج', desc: 'منصّة تحليلات بيانات ويب: رفع CSV وبناء لوحات بجداول محورية ورسوم (React وTypeScript وFirebase).' },
      { name: 'مشروع السنة الرابعة', desc: 'Minbar، تطبيق تواصل عربي يراعي الخصوصية (Flutter وRiverpod وFirebase).' },
    ],
  },
  contact: {
    eyebrow: 'تواصل',
    title: 'لنبنِ شيئًا معًا',
    lead: 'أنا منفتح على أدوار Full-Stack وخلفيات وموبايل، عن بُعد أو وجاهيًّا. أسرع وسيلة للوصول إليّ هي البريد الإلكتروني.',
    ctaEmail: 'راسلني',
    ctaCv: 'تحميل السيرة (PDF)',
    links: [
      { label: 'GitHub', href: SOCIALS.github, kind: 'github' },
      { label: 'LinkedIn', href: SOCIALS.linkedin, kind: 'linkedin' },
      { label: IDENTITY.email, href: SOCIALS.email, kind: 'email' },
      { label: `‎${IDENTITY.phone}`, href: `tel:${IDENTITY.phone.replace(/\s/g, '')}`, kind: 'phone' },
    ],
  },
  footer: {
    builtWith: 'بُني بـAstro وReact وTailwind. منشور على GitHub Pages.',
    lastUpdated: 'آخر تحديث للسيرة',
    rights: 'أحمد جمعة زبادنة',
  },
};
