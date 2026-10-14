export type Language = 'en' | 'id' | 'jp';

export interface Translations {
  [key: string]: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    "hero-badge": "Pioneering Future Technical Innovations",
    "hero-sub1": "Information Technology Student",
    "hero-sub2": "Network Enthusiast",
    "hero-sub3": "Language Learner",
    "hero-desc": "Deeply passionate about technology, computer networking systems, web frontend construction, and multilingual intercultural bridge-building.",
    "hero-cta1": "Explore Journey",
    "hero-cta2": "View Projects",
    "hero-cta3": "Contact Directly",
    "card-status": "Status",
    "card-status-val": "Vocational Student",
    "card-interests": "Interests",
    "card-int-val": "Networking • Tech • Languages",
    "card-loc": "Location",
    "card-avail": "Availability",
    "card-avail-val": "Open to Projects",
    "bento-title": "Bento Grid Experience",
    "bento-sub": "High-fidelity structural competence cards making up my professional technology ecosystem.",
    "b1-t": "Information Technology",
    "b1-d": "Mastering computer hardware maintenance, seamless system integration, and reliable multi-OS configurations.",
    "b2-t": "Computer Networking",
    "b2-d": "Designing address schemes, dynamic routing, enterprise-grade switching, and protocol optimization models.",
    "b3-t": "Programming & Web",
    "b3-d": "Building high-performance interfaces, semantic styling, and beautiful client layouts with modern practices.",
    "b4-t": "Communication Languages",
    "b4-d": "Dissolving limits with fluency in Indonesian (Native), technical English, and active Japanese learning.",
    "b5-t": "Ecosystem Tooling",
    "b5-d": "Streamlining clean code with Git, GitHub, VS Code workspace, and Linux command-line environments.",
    "b6-t": "Future Professional Vision",
    "b6-d": "Evolving into a globally competent Network Engineer and Technology Architect communicating fluently across boards.",
    "galaxy-title": "Skill Galaxy Orbit System",
    "galaxy-sub": "Visual simulation tracking key technical domains rotating around a central core.",
    "core-label": "CORE",
    "g1": "Networking",
    "g2": "Windows",
    "g3": "Linux",
    "g4": "Japanese",
    "g5": "English",
    "g6": "Web Dev",
    "g7": "Hardware",
    "g8": "GitHub",
    "story-title": "Personal Storytelling",
    "sq1-t": "Who Am I",
    "sq1-d": "I am a dedicated vocational student focused on system architecture, computing structures, and reliable communications across platforms.",
    "sq2-t": "My Passion",
    "sq2-d": "My absolute drive lies in building modular, fast modern web interfaces, streamlining automation tasks, and securing communication protocols.",
    "sq3-t": "Why Networking",
    "sq3-d": "Networking represents the vital veins of the internet. Orchestrating fluid data delivery provides unparalleled puzzle satisfaction.",
    "sq4-t": "Why Languages",
    "sq4-d": "Fluency unlocks technical papers, early tool documentations, and enables global team alignment without barriers.",
    "eco-title": "Technology Ecosystem Wall",
    "eco-sub": "An overview of active environments, tools, and languages forming my production routine.",
    "proj-title": "Project Showcase",
    "proj-sub": "Real deployments, structural configurations, and simulations representing my hands-on knowledge.",
    "p1-t": "Multi-Area OSPF Dynamic Routing Simulation",
    "p1-d": "Engineered subnets, dynamic metrics, and redundant backup networks in enterprise-scale environments.",
    "p2-t": "Premium Interactive Portfolio Web",
    "p2-d": "This portfolio using high-fidelity layout techniques, translation controllers, and 3D particle systems.",
    "p3-t": "Linux Server Administration Debian Homelab",
    "p3-d": "Configured user environments, network protocols, SSH bindings, and basic diagnostic script files.",
    "lang-title": "Language Showcase",
    "lang-sub": "I believe communication and precise code syntax combine perfectly for modern system architectures.",
    "journey-title": "Learning Journey Roadmap",
    "journey-sub": "Step by step progression building solid technical foundations.",
    "j24-t": "Technology Foundation",
    "j24-d": "Mastered PC builds, operating system architectures (Linux/Windows), and basic HTML layouts.",
    "j25-t": "Networking & Languages",
    "j25-d": "Focused on subnets, OSPF dynamic protocol, core switches, and technical English conversations.",
    "j26-t": "Project Development",
    "j26-d": "Deploying active OSPF topologies, building beautiful vanilla JS templates, and basic homelab server maintenance.",
    "jfut-t": "IT Professional & Network Engineer",
    "jfut-d": "Transforming into a systems network expert spearheading enterprise cloud systems and smart communications globally.",
    "stat-p": "Projects Completed",
    "stat-t": "Technologies Learned",
    "stat-l": "Languages Studied",
    "stat-h": "Learning Hours",
    "stat-c": "Certifications",
    "cont-title": "Connect With Hanif",
    "cont-sub": "Get in touch to collaborate on technical tasks, network planning, or global web development.",
    "foot-copy": "© 2026 Hanif Daffa Dzulfahmi. Built with extreme precision and premium fluidity.",
    "m-cat": "Category",
    "m-tech": "Tech Stack",
    "m-out": "Learning Outcome",
    "m-chal": "Challenge & Problem Statement",
    "m-sol": "Solution & Implementation"
  },
  id: {
    "hero-badge": "Merintis Inovasi Teknologi Masa Depan",
    "hero-sub1": "Siswa Teknologi Informasi",
    "hero-sub2": "Penggemar Jaringan Komputer",
    "hero-sub3": "Pembelajar Bahasa",
    "hero-desc": "Sangat antusias dengan dunia teknologi, rekayasa jaringan komputer, rekayasa perangkat lunak web, dan jembatan komunikasi multibahasa lintas batas.",
    "hero-cta1": "Jelajahi Perjalanan",
    "hero-cta2": "Lihat Proyek",
    "hero-cta3": "Hubungi Langsung",
    "card-status": "Status",
    "card-status-val": "Siswa SMK",
    "card-interests": "Minat",
    "card-int-val": "Jaringan • Teknologi • Bahasa",
    "card-loc": "Lokasi",
    "card-avail": "Ketersediaan",
    "card-avail-val": "Buka untuk Proyek",
    "bento-title": "Bento Grid Kompetensi",
    "bento-sub": "Kartu kompetensi berpresisi tinggi yang menyusun ekosistem teknologi profesional saya.",
    "b1-t": "Teknologi Informasi",
    "b1-d": "Menguasai pemeliharaan perangkat keras, integrasi perangkat lunak sistem, dan konfigurasi multi-OS yang andal.",
    "b2-t": "Jaringan Komputer",
    "b2-d": "Merancang skema IP, routing dinamis, switching kelas perusahaan, dan model optimasi protokol jaringan.",
    "b3-t": "Pemrograman & Web",
    "b3-d": "Membangun antarmuka berkinerja tinggi, penataan semantik, dan tata letak klien modern yang indah.",
    "b4-t": "Bahasa Komunikasi",
    "b4-d": "Menghapus batas dengan kemahiran bahasa Indonesia (Native), Inggris teknis, dan belajar Jepang aktif.",
    "b5-t": "Ekosistem Kerja",
    "b5-d": "Menyederhanakan kode bersih dengan Git, GitHub, ruang kerja VS Code, dan shell Linux.",
    "b6-t": "Visi Profesional Masa Depan",
    "b6-d": "Berkembang menjadi Network Engineer kompeten global dan Arsitek Teknologi yang fasih berkomunikasi di berbagai forum.",
    "galaxy-title": "Sistem Orbit Galaksi Keahlian",
    "galaxy-sub": "Simulasi visual domain teknis utama yang berputar di sekitar inti pusat.",
    "core-label": "INTI",
    "g1": "Jaringan",
    "g2": "Windows",
    "g3": "Linux",
    "g4": "B. Jepang",
    "g5": "B. Inggris",
    "g6": "Web Dev",
    "g7": "Hardware",
    "g8": "GitHub",
    "story-title": "Cerita Pribadi",
    "sq1-t": "Siapa Saya",
    "sq1-d": "Saya adalah siswa SMK berdedikasi yang fokus pada arsitektur sistem, struktur komputasi, dan komunikasi yang andal.",
    "sq2-t": "Passion Saya",
    "sq2-d": "Dorongan saya terletak pada membangun antarmuka web modern yang cepat, menyederhanakan tugas otomasi, dan mengamankan protokol.",
    "sq3-t": "Mengapa Jaringan",
    "sq3-d": "Jaringan mewakili pembuluh darah vital internet. Mengatur pengiriman data yang lancar memberikan kepuasan logika tak tertandingi.",
    "sq4-t": "Mengapa Bahasa",
    "sq4-d": "Kefasihan membuka dokumen teknis, akses awal dokumentasi alat, dan memungkinkan keselarasan tim global tanpa batasan.",
    "eco-title": "Dinding Ekosistem Teknologi",
    "eco-sub": "Gambaran lingkungan aktif, alat, dan bahasa yang membentuk rutinitas produksi saya.",
    "proj-title": "Galeri Proyek",
    "proj-sub": "Penerapan nyata, konfigurasi struktural, dan simulasi yang merepresentasikan pengetahuan praktis saya.",
    "p1-t": "Simulasi Routing Dinamis OSPF Multi-Area",
    "p1-d": "Merancang subnet, metrik dinamis, dan jaringan cadangan redundan dalam lingkungan berskala.",
    "p2-t": "Portofolio Interaktif Premium",
    "p2-d": "Situs portofolio interaktif dengan teknik tata letak berpresisi tinggi, pengontrol terjemahan, dan partikel 3D.",
    "p3-t": "Administrasi Server Linux Debian Homelab",
    "p3-d": "Mengonfigurasi lingkungan pengguna, protokol jaringan, SSH, dan file skrip diagnostik dasar.",
    "lang-title": "Showcase Bahasa",
    "lang-sub": "Saya percaya komunikasi dan sintaks kode yang tepat berpadu sempurna untuk arsitektur modern.",
    "journey-title": "Peta Jalan Belajar",
    "journey-sub": "Kemajuan langkah demi langkah dalam membangun fondasi teknis yang kokoh.",
    "j24-t": "Fondasi Teknologi",
    "j24-d": "Menguasai perakitan PC, arsitektur OS (Linux/Windows), dan tata letak HTML dasar.",
    "j25-t": "Jaringan & Bahasa",
    "j25-d": "Fokus pada subnetting, protokol dinamis OSPF, switch inti, dan percakapan bahasa Inggris teknis.",
    "j26-t": "Pengembangan Proyek",
    "j26-d": "Menerapkan topologi OSPF aktif, membangun templat JS vanilla indah, dan pemeliharaan server homelab Debian.",
    "jfut-t": "Profesional IT & Network Engineer",
    "jfut-d": "Bertransformasi menjadi ahli jaringan sistem yang memimpin sistem cloud perusahaan dan komunikasi cerdas global.",
    "stat-p": "Proyek Selesai",
    "stat-t": "Teknologi Dikuasai",
    "stat-l": "Bahasa Dipelajari",
    "stat-h": "Jam Belajar",
    "stat-c": "Sertifikasi",
    "cont-title": "Hubungi Hanif",
    "cont-sub": "Hubungi saya untuk kolaborasi tugas teknis, perencanaan jaringan, atau pengembangan web global.",
    "foot-copy": "© 2026 Hanif Daffa Dzulfahmi. Dibuat dengan presisi tinggi untuk performa puncak.",
    "m-cat": "Kategori",
    "m-tech": "Tech Stack",
    "m-out": "Hasil Belajar",
    "m-chal": "Tantangan & Masalah",
    "m-sol": "Solusi & Implementasi"
  },
  jp: {
    "hero-badge": "未来の技術革新を先導する",
    "hero-sub1": "情報技術の学生",
    "hero-sub2": "ネットワーク愛好家",
    "hero-sub3": "言語学習者",
    "hero-desc": "テクノロジー、コンピュータネットワーク、ウェブ開発、そしてグローバルな言語コミュニケーションの融合に強い情熱を持っています。",
    "hero-cta1": "歴史を探索する",
    "hero-cta2": "プロジェクトを見る",
    "hero-cta3": "直接連絡する",
    "card-status": "ステータス",
    "card-status-val": "職業高校生",
    "card-interests": "興味のある分野",
    "card-int-val": "ネットワーク • 技術 • 言語",
    "card-loc": "所在地",
    "card-avail": "利用可能な状態",
    "card-avail-val": "プロジェクト受付中",
    "bento-title": "弁当グリッド能力カード",
    "bento-sub": "私の高度な技術スキルを表現したプレミアムモジュールグリッド設計。",
    "b1-t": "情報技術 (IT)",
    "b1-d": "コンピュータハードウェアのメンテナンス、OSの確実な統合、および高度なトラブルシューティングの習得。",
    "b2-t": "ネットワーク設計",
    "b2-d": "IPアドレス設計、動的ルーティング制御、エンタープライズスイッチ、およびTCP/IPパケット分析。",
    "b3-t": "ウェブ開発",
    "b3-d": "HTML5、CSS3、JavaScriptを使用した応答性と速度に優れたプレミアムフロントエンド構築。",
    "b4-t": "グローバル言語",
    "b4-d": "インドネシア語（母国語）、実用英語、そして現在継続中の日本語学習の融合。",
    "b5-t": "作業システム",
    "b5-d": "Gitバージョン管理、GitHub、VS CodeワークスペースおよびLinuxサーバーCLIの円滑な運用。",
    "b6-t": "将来のグローバルビジョン",
    "b6-d": "世界で活躍するシステムネットワークエンジニアとして、最先端インフラ構築と多言語対応を同時実現します。",
    "galaxy-title": "スキル銀河オービットシステム",
    "galaxy-sub": "コアスキルが継続的に軌道上を回転するインタラクティブビジュアルシミュレーション。",
    "core-label": "コア",
    "g1": "ネットワーク",
    "g2": "Windows",
    "g3": "Linux",
    "g4": "日本語",
    "g5": "英語",
    "g6": "ウェブ開発",
    "g7": "ハードウェア",
    "g8": "GitHub",
    "story-title": "ストーリーテリング",
    "sq1-t": "私は誰ですか",
    "sq1-d": "インフラ構築、効率的なシステム、そして円滑な国境なき通信を追求する情熱的な学生です。",
    "sq2-t": "私の情熱",
    "sq2-d": "高速かつクリーンなフロントエンドコード、自動化スクリプト、および安定したサーバーアーキテクチャの展開が原動力です。",
    "sq3-t": "なぜネットワークなのか",
    "sq3-d": "ネットワークは現代インターネットの血液そのものです。世界中にデータが届くシステムを設計することに強い喜びを感じます。",
    "sq4-t": "なぜ言語なのか",
    "sq4-d": "言語能力は最新ドキュメントへのアクセスと国際チームとの協力関係を築くための強力なパスポートです。",
    "eco-title": "開発エコシステム",
    "eco-sub": "開発プロセスと日々の作業で使用する主要ツールやシステム。",
    "proj-title": "プロジェクト実績",
    "proj-sub": "実際の技術実装、シミュレーション、および解決してきた課題実績一覧。",
    "p1-t": "OSPFマルチエリア動的ルーティング検証",
    "p1-d": "IPアドレス構造の再設計と、動的フォールトトレラントトポロジのテスト検証実績。",
    "p2-t": "プレミアムポートフォリオサイト構築",
    "p2-d": "多言語切替機能と3D背景レンダリングを統合したインタラクティブポートフォリオ。",
    "p3-t": "Linux Debian サーバー構築",
    "p3-d": "ユーザー管理、ネットワーク結合、安全なSSH環境の設定、および基本スクリプト管理。",
    "lang-title": "言語展示エリア",
    "lang-sub": "プログラミング言語と人間間の対話スキルが合わさることで、真に価値あるシステム設計が可能になります。",
    "journey-title": "学習進捗タイムライン",
    "journey-sub": "技術力強化のこれまでの道のりと未来の目標。",
    "j24-t": "基本構造の習得",
    "j24-d": "PC自作、基本OS（Debian/Windows）の環境設定、およびHTML5基本学習の完了。",
    "j25-t": "ネットワーク本格学習",
    "j25-d": "サブネット、OSPFダイナミックルーティングプロトコル、および実用技術英語スキルの統合。",
    "j26-t": "応用開発と実践",
    "j26-d": "仮想ネットワーク構築、Vanilla JSによるプレミアムコード、サーバー自作homelab運用管理。",
    "jfut-t": "システムネットワーク専門家",
    "jfut-d": "グローバル企業のクラウドインフラや大規模通信網の再設計を主導する、世界水準のITスペシャリストへ進化します。",
    "stat-p": "完成プロジェクト",
    "stat-t": "習得テクノロジー",
    "stat-l": "学習言語数",
    "stat-h": "累積学習時間",
    "stat-c": "証明実績",
    "cont-title": "お問合せ先",
    "cont-sub": "ネットワーク計画、技術案件、またはウェブ開発における多言語共同開発についてのご相談はこちらから。",
    "foot-copy": "© 2026 Hanif Daffa Dzulfahmi. 最大の安定性と美学に基づき設計。",
    "m-cat": "カテゴリ",
    "m-tech": "使用スタック",
    "m-out": "主な学び",
    "m-chal": "直面した技術的課題",
    "m-sol": "施策と解決アプローチ"
  }
};

export interface ProjectLocalization {
  title: string;
  category: string;
  challenge: string;
  solution: string;
}

export interface ProjectItem {
  id: string;
  category: 'networking' | 'web' | 'it';
  tag: string;
  badgeClass?: string;
  tech: string;
  outcome: string;
  year: string;
  bigTitle: string;
  gradient: string;
  chips: string[];
  en: ProjectLocalization;
  id_lang: ProjectLocalization;
  jp: ProjectLocalization;
}

export const projects: Record<string, ProjectItem> = {
  p1: {
    id: "p1",
    category: "networking",
    tag: "NETWORKING",
    badgeClass: "badge-primary",
    tech: "Cisco Packet Tracer, OSPF, IPv4 Subnetting",
    outcome: "Deep Network Redundancy Skills",
    year: "2026",
    bigTitle: "OSPF NET\nROUTER",
    gradient: "linear-gradient(135deg, rgba(59, 107, 255, 0.3), rgba(3, 5, 15, 0.8))",
    chips: ["Cisco Packet Tracer", "OSPF Route"],
    en: {
      title: "Multi-Area OSPF Dynamic Routing Simulation",
      category: "Network Engineering",
      challenge: "Designing dynamic metrics for a multi-floor department company while guaranteeing zero single-point of failure on gateway connections.",
      solution: "Applied hierarchical VLSM IPv4 address blocks. Configured dynamic link costs, redundant route maps, and priority timers on OSPF areas to implement smooth switchover speeds."
    },
    id_lang: {
      title: "Simulasi Routing Dinamis OSPF Multi-Area",
      category: "Teknik Jaringan Komputer",
      challenge: "Merancang metrik dinamis untuk departemen perusahaan bertingkat sambil memastikan tidak adanya kegagalan titik tunggal pada sambungan gateway.",
      solution: "Menerapkan pembagian alamat VLSM IPv4 berjenjang. Mengkonfigurasi biaya tautan dinamis, peta rute cadangan, dan timer prioritas pada area OSPF guna mewujudkan pemindahan rute yang cepat."
    },
    jp: {
      title: "OSPFマルチエリア動的ルーティング検証",
      category: "ネットワークエンジニアリング",
      challenge: "複数階層に分かれた部門企業向けの動的アドレス設定。万が一回線が切断されてもゲートウェイの冗長化を確保する。",
      solution: "VLSM IPv4階層型設計の適用。OSPFのリンクコスト設定とプライオリティタイマー調整を施し、回線障害時の自動ルート切り替えを最適化。"
    }
  },
  p2: {
    id: "p2",
    category: "web",
    tag: "WEB PROJECT",
    badgeClass: "badge-secondary",
    tech: "HTML5, CSS3, Vanilla ES6 JavaScript, Three.js",
    outcome: "Premium Responsive Interface Architect",
    year: "2026",
    bigTitle: "TRANS-\nCENDENCE",
    gradient: "linear-gradient(135deg, rgba(139, 70, 255, 0.3), rgba(3, 5, 15, 0.8))",
    chips: ["HTML5 / CSS3", "Three.js"],
    en: {
      title: "Premium Interactive Portfolio Web",
      category: "Frontend Web Development",
      challenge: "Constructing a rich interactive platform with complex multilingual rendering and 3D background systems without slowing user access.",
      solution: "Wrote cleanly-optimized vanilla JS listeners. Consolidated state controls into simplified function hooks and rendered a micro-geometry point field in Three.js with zero dependency bloat."
    },
    id_lang: {
      title: "Portofolio Interaktif Premium",
      category: "Rekayasa Web Frontend",
      challenge: "Membangun platform interaktif kaya grafis dengan perenderan multibahasa kompleks dan sistem latar belakang 3D tanpa membebani browser klien.",
      solution: "Menulis pendengar vanilla JS yang dioptimalkan. Mengkonsolidasikan manajemen status dan merender formasi partikel ringan pada Three.js untuk performa puncak."
    },
    jp: {
      title: "プレミアムポートフォリオサイト構築",
      category: "フロントエンド開発",
      challenge: "多言語切替と3D描画背景を備えた、軽量でありながら視覚的にリッチなウェブ表示性能の両立。",
      solution: "余計な外部ライブラリを排除し、最適化された純粋なVanilla JSとThree.jsによるパーティクルシステムを自作。ロード速度向上を実現。"
    }
  },
  p3: {
    id: "p3",
    category: "it",
    tag: "IT PROJECT",
    badgeClass: "badge-accent",
    tech: "Debian Linux Server, SSH, System Tools",
    outcome: "Reliable System Administration Foundation",
    year: "2025",
    bigTitle: "LINUX\nHOMELAB",
    gradient: "linear-gradient(135deg, rgba(0, 212, 200, 0.2), rgba(3, 5, 15, 0.8))",
    chips: ["Debian Linux", "SysAdmin"],
    en: {
      title: "Linux Server Administration Debian Homelab",
      category: "IT Administration & Systems",
      challenge: "Ensuring secure remote access privileges, dynamic network configurations, and basic diagnostic protocols on local test deployments.",
      solution: "Configured SSH keys, set restrictive user groupings, managed basic system firewalls, and composed clear diagnostic script log pipelines."
    },
    id_lang: {
      title: "Administrasi Server Linux Debian Homelab",
      category: "Sistem Administrasi TI",
      challenge: "Memastikan hak akses jarak jauh yang aman, konfigurasi protokol jaringan lokal dinamis, serta pengujian berkala pada server lokal.",
      solution: "Mengkonfigurasi sertifikat kunci SSH, menetapkan pembagian grup pengguna yang ketat, mengaktifkan firewall dasar, serta merancang skrip pendeteksi log kesalahan otomatis."
    },
    jp: {
      title: "Linux Debian サーバー構築",
      category: "ITインフラ管理",
      challenge: "安全なリモート接続設定、テスト環境用サーバーのネットワークバインディング、および不正アクセス制限の設計。",
      solution: "SSH鍵暗号認証の導入、管理者グループの権限最小化、Linux内部ファイアウォール設定、およびログ追跡自動プログラムの作成。"
    }
  }
};

export interface LangShowcaseItem {
  id: Language;
  flag: string;
  name: string;
  text: string;
  level: string;
}

export const langShowcaseData: Record<Language, LangShowcaseItem> = {
  id: {
    id: 'id',
    flag: '🇮🇩',
    name: 'Bahasa Indonesia',
    text: 'Bahasa ibu saya yang utama. Saya menggunakannya secara profesional untuk analisis teknis sistem, presentasi rancangan topologi, serta penyusunan panduan pengguna yang berpresisi tinggi.',
    level: 'Penutur Asli / Native Communication'
  },
  en: {
    id: 'en',
    flag: '🇬🇧',
    name: 'English (Professional)',
    text: 'Utilized actively for researching up-to-date IT documentation, parsing developer APIs, composing clean diagnostic reports, and aligning in international developer communities efficiently.',
    level: 'Advanced C1 Technical Reading & Communication'
  },
  jp: {
    id: 'jp',
    flag: '🇯🇵',
    name: 'Japanese (日本語)',
    text: 'Saat ini aktif mempelajari dasar-dasar tata bahasa Jepang formal/informal, pemahaman kalimat kanji harian, serta melatih pelafalan kosakata dasar guna mempersiapkan diri berjejaring global.',
    level: 'Dynamic Learning Stage / Basic Technical Vocab'
  }
};
