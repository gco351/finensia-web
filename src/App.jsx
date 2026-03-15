import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  BookOpen,
  FileText,
  Calculator, 
  Users,
  Award,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Rocket,
  Utensils,
  ShoppingBag,
  Briefcase,
  Target,
  RefreshCw, 
  PieChart,
  GraduationCap,
  Sparkles,
  Zap,
  ArrowUpRight,
  MousePointer2,
  Globe,
  Lock,
  Search,
  MessageSquare,
  Instagram,
  Linkedin,
  ShieldAlert,
  Fingerprint,
  HardDrive,
  LayoutGrid,
  Terminal,
  Settings,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Komponen Global UI ---

const Navbar = ({ activePage, setActivePage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', id: 'home' },
    { name: 'Layanan', id: 'services' },
    { name: 'Academy', id: 'academy' },
    { name: 'Profil Mentor', id: 'mentor' },
    { name: 'Kontak', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-[#001F3F]/80 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => setActivePage('home')}
        >
          <div className="relative">
            <img 
              src="https://i.postimg.cc/7L4GPZcq/Finensia-logo.jpg" /* EDIT LOGO NAVBAR DI SINI */
              alt="Finensia Logo" 
              className="w-10 h-10 object-contain bg-white rounded-xl shadow-lg shadow-orange-500/40 p-1"
            />
            <div className="absolute -inset-1 bg-orange-500 rounded-xl blur opacity-20"></div>
          </div>
          <span className="text-white font-black text-2xl tracking-[0.1em]">FINENSIA</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`relative text-xs font-bold uppercase tracking-widest transition-all hover:text-[#FF8C00] ${activePage === link.id ? 'text-[#FF8C00]' : 'text-white/70'}`}
            >
              {link.name}
              {activePage === link.id && (
                <motion.div layoutId="nav-underline" className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#FF8C00]" />
              )}
            </button>
          ))}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage('contact')}
            className="bg-[#FF8C00] text-white px-7 py-2.5 rounded-full font-bold text-sm hover:shadow-[0_0_25px_rgba(255,140,0,0.5)] transition-all flex items-center gap-2"
          >
            <Lock size={14} /> Mulai Konsultasi
          </motion.button>
        </div>

        <button className="md:hidden text-white p-2 bg-white/10 rounded-lg" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#001F3F] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => { setActivePage(link.id); setIsOpen(false); }}
                className={`text-left text-xl font-bold ${activePage === link.id ? 'text-[#FF8C00]' : 'text-white'}`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Komponen Keamanan ---

const SecurityTrustSection = () => {
  const securityFeatures = [
    {
      title: "Enkripsi Data Berlapis",
      desc: "Semua laporan keuangan dan data transaksi disimpan menggunakan standar enkripsi AES-256 tingkat perbankan.",
      icon: <Lock className="text-white" size={28} />
    },
    {
      title: "Kepatuhan Hukum & NDA",
      desc: "Setiap kerjasama dilengkapi kontrak kerahasiaan (Non-Disclosure Agreement) yang mengikat secara hukum.",
      icon: <ShieldCheck className="text-white" size={28} />
    },
    {
      title: "Penyimpanan Awan Aman",
      desc: "Infrastruktur cloud kami dipantau 24/7 dengan sistem firewall dan perlindungan ancaman siber proaktif.",
      icon: <HardDrive className="text-white" size={28} />
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4"
          >
            <ShieldAlert size={16} /> Keamanan Prioritas Utama
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] mb-6">Keamanan Data Anda Adalah <span className="text-[#FF8C00]">Janji Kami</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto italic">"Kami mengerti bahwa informasi finansial adalah aset paling berharga Anda. Kami melindunginya dengan teknologi dan integritas tertinggi."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {securityFeatures.map((feat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-[#001F3F] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF8C00] transition-colors shadow-lg">
                {feat.icon}
              </div>
              <h3 className="text-2xl font-black text-[#001F3F] mb-4">{feat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Komponen Halaman Profil Mentor ---

const MentorProfilePage = ({ setActivePage }) => {
  return (
    <div className="bg-[#001F3F] min-h-screen">
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/3"
            >
              <div className="relative">
                <div className="rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl aspect-[4/5]">
                  <img 
                    src="https://i.postimg.cc/xC5YYx2b/ttrseuasus.png" /* EDIT FOTO PROFIL MENTOR DI SINI */
                    alt="Adhwa Neisya" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#FF8C00] p-6 rounded-3xl shadow-xl">
                  <Star className="text-white fill-white" size={32} />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-2/3 text-white"
            >
              <span className="inline-block bg-orange-500/20 text-orange-400 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-6">Expert Accounting Consultant</span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">Hai, saya <span className="text-[#FF8C00]">Adhwa Neisya</span></h1>
              <p className="text-blue-100/70 text-xl leading-relaxed mb-8">
                Saya adalah seorang profesional akuntansi yang terbiasa membangun dan menata sistem keuangan dari nol, baik untuk bisnis kecil, startup, maupun perusahaan skala besar.
              </p>
              <div className="p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2.5rem] italic text-2xl font-medium leading-snug">
                “Bagi saya, akuntansi bukan cuma soal angka. Tapi soal sistem yang bikin bisnis bertahan & berkembang.”
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white rounded-t-[4rem]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-[#001F3F] mb-10 flex items-center gap-4">
              <div className="w-12 h-1 bg-[#FF8C00]"></div> Tentang Perjalanan Saya
            </h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-6">
              <p>
                Dalam karier saya, saya telah menangani banyak brand/perusahaan, membantu mereka menyusun alur keuangan yang efisien, akurat, dan sesuai regulasi.
              </p>
              <p>
                Saya tidak hanya berfokus pada laporan akhir, tetapi juga mendesain seluruh ekosistem keuangan, dari alur transaksi harian, integrasi software, sistem approval, hingga dokumentasi dan pelaporan pajak. Semua disesuaikan dengan kebutuhan spesifik tiap bisnis.
              </p>
            </div>

            <div className="mt-20 p-10 bg-gray-50 rounded-[3rem] border border-gray-100 flex flex-col md:flex-row gap-10 items-center">
              <div className="w-20 h-20 bg-[#001F3F] rounded-2xl flex items-center justify-center text-[#FF8C00] shrink-0">
                <Terminal size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#001F3F] mb-4">Application Development</h3>
                <p className="text-[#FF8C00] font-bold mb-2">Menguasai Software Akuntansi & ERP</p>
                <ul className="text-gray-500 space-y-2">
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Implementasi, konfigurasi awal, hingga migrasi data.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Pelatihan tim intensif untuk operasional harian.</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-green-500" /> Memastikan sistem efektif, efisien, dan scalable.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] mb-6">Professional Skills</h2>
            <p className="text-gray-500">Keahlian teknis yang mendukung transparansi dan efisiensi bisnis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-10 rounded-[3rem] bg-[#001F3F] text-white group hover:bg-[#FF8C00] transition-all duration-500">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white/20">
                <Settings size={28} className="text-[#FF8C00] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6">Sistem Keuangan & Setup</h3>
              <ul className="space-y-3 opacity-80 text-sm">
                <li>• Mendesain struktur akun (Chart of Accounts)</li>
                <li>• Merancang alur transaksi & sistem approval</li>
                <li>• Menyusun SOP keuangan terintegrasi</li>
                <li>• Membangun sistem lintas industri</li>
              </ul>
            </div>
            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 group hover:border-[#FF8C00] transition-all duration-500">
              <div className="w-14 h-14 bg-[#001F3F] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#FF8C00]">
                <BarChart3 size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#001F3F] mb-6">Laporan & Analisis</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li>• Pembuatan laporan lengkap (Laba Rugi, Neraca, Arus Kas)</li>
                <li>• Analisis varians & data-driven decision making</li>
                <li>• Konsolidasi multi-entitas dalam satu dashboard</li>
                <li>• Mahir Excel Advance, Power BI, & Google Sheets</li>
              </ul>
            </div>
            <div className="p-10 rounded-[3rem] bg-gray-50 border border-gray-100 group hover:border-[#FF8C00] transition-all duration-500">
              <div className="w-14 h-14 bg-[#001F3F] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#FF8C00]">
                <FileText size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#001F3F] mb-6">Perpajakan & Kepatuhan</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li>• Perhitungan & Pelaporan Pajak (PPN, Masa, Pribadi, Badan)</li>
                <li>• Expert: Coretax, e-Faktur & e-SPT</li>
                <li>• Menjaga kepatuhan dokumentasi sesuai ketentuan DJP</li>
              </ul>
            </div>
            <div className="p-10 rounded-[3rem] bg-[#001F3F] text-white group hover:bg-[#FF8C00] transition-all duration-500">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-white/20">
                <Search size={28} className="text-[#FF8C00] group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-black mb-6">Audit & Pengendalian</h3>
              <ul className="space-y-3 opacity-80 text-sm">
                <li>• Pengalaman audit internal & eksternal</li>
                <li>• Dokumentasi pelaporan menggunakan ATLAS tools</li>
                <li>• Evaluasi SOP untuk memperkuat kontrol internal</li>
                <li>• Mitigasi risiko berdasarkan temuan audit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#001F3F] p-12 md:p-20 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF8C00]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-3xl md:text-4xl font-black mb-12">Professional Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {[
                "Telah menangani banyak brand dari berbagai skala dan industri",
                "Mampu membangun sistem keuangan dari 0 hingga siap audit",
                "Menguasai tools digital modern yang digunakan di dunia kerja nyata",
                "Memiliki pola pikir sistematis dan berbasis solusi",
                "Terbiasa bekerja lintas tim: finance, pajak, operasional, dan management"
              ].map((exp, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1 bg-orange-500 p-1 rounded-md shrink-0">
                    <CheckCircle2 size={16} className="text-white" />
                  </div>
                  <p className="text-blue-100/60 text-sm leading-relaxed">{exp}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 pt-12 border-t border-white/10 flex flex-wrap gap-8 justify-center">
              <button 
                onClick={() => setActivePage('services')}
                className="bg-[#FF8C00] text-white px-10 py-5 rounded-2xl font-black hover:scale-105 transition-all shadow-xl shadow-orange-500/20 flex items-center gap-3"
              >
                Lihat Jasa & Pajak <ArrowRight size={20} />
              </button>
              <a 
                href="https://wa.me/message/4LTAXUDIFW75B1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black hover:bg-white/20 transition-all text-center flex items-center"
              >
                Konsultasi Privat
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- Komponen Halaman Beranda ---

const Hero = ({ setActivePage }) => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#001F3F]">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 rounded-full blur-[120px] -mr-96 -mt-96 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-blue-300 text-xs font-bold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></span>
            TRANSFORMASI DIGITAL AKUNTANSI
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
            Navigasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-orange-300">Angka</span> <br/>
            Untuk <span className="italic font-light">Growth</span> Bisnis
          </h1>
          <p className="text-blue-100/60 text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
            Finensia membantu bisnis bertumbuh dengan sistem keuangan terstruktur dan mencetak akuntan profesional melalui pelatihan berbasis praktik nyata.
          </p>
          <div className="flex flex-wrap gap-6">
            <motion.button 
              whileHover={{ y: -5 }}
              onClick={() => setActivePage('services')}
              className="bg-[#FF8C00] text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 flex items-center gap-3 group"
            >
              Layanan Bisnis <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button 
              whileHover={{ y: -5 }}
              onClick={() => setActivePage('academy')}
              className="bg-white/5 border border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white/10 transition-all backdrop-blur-md"
            >
              Cek Academy
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="https://i.postimg.cc/cCvzjX1P/pelajar-1.jpg" /* EDIT GAMBAR HERO DASHBOARD DI SINI */
              alt="Accounting Dashboard" 
              className="w-full h-auto" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent"></div>
          </div>
          
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl z-20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-2xl flex items-center justify-center text-white">
                <BarChart3 />
              </div>
              <div>
                <div className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Client Growth</div>
                <div className="text-white text-2xl font-black">+85%</div>
              </div>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 2, delay: 1 }}
                className="h-full bg-orange-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const AboutPreview = ({ setActivePage }) => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-20">
      <div className="lg:w-1/2 relative">
        <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-2xl">
          <img 
            src="https://i.postimg.cc/MGtrphv5/pelajar-2.jpg" /* EDIT GAMBAR VISI/ABOUT DI SINI */
            alt="Tim Finensia" 
            className="w-full h-auto" 
          />
        </div>
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>
      <div className="lg:w-1/2">
        <h4 className="text-[#FF8C00] font-black text-sm uppercase tracking-[0.2em] mb-6 underline decoration-2 underline-offset-8">Visi Finensia</h4>
        <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] mb-8 leading-tight">Menghubungkan <span className="italic">Data</span> Dengan <span className="text-[#FF8C00]">Pertumbuhan</span></h2>
        <p className="text-gray-500 text-lg mb-10 leading-relaxed italic border-l-4 border-gray-100 pl-6">
          "Kami tidak hanya mencatat transaksi, kami membantu Anda memahami bahasa angka untuk keberlanjutan bisnis jangka panjang."
        </p>
        <div className="grid grid-cols-2 gap-6 mb-12">
          {["Pajak Terukur", "Laporan Valid", "Mentor Praktisi", "Siap Kerja"].map((t, i) => (
            <div key={i} className="flex items-center gap-3 font-bold text-[#001F3F]">
              <div className="bg-orange-50 text-[#FF8C00] p-1.5 rounded-lg"><CheckCircle2 size={16}/></div>
              {t}
            </div>
          ))}
        </div>
        <button 
          onClick={() => setActivePage('services')}
          className="text-[#001F3F] font-black uppercase text-xs tracking-[0.2em] flex items-center gap-4 hover:gap-6 transition-all"
        >
          Pelajari Lebih Lanjut <ArrowRight size={20} className="text-[#FF8C00]" />
        </button>
      </div>
    </div>
  </section>
);

// --- Komponen Halaman Jasa & Pajak ---

const ServicesHero = () => (
  <section className="bg-[#001F3F] pt-48 pb-32 text-white relative">
    <div className="container mx-auto px-6 text-center">
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-5xl md:text-7xl font-black mb-8"
      >
        Tumbuh Bersama <br/> <span className="text-[#FF8C00]">Partner Keuangan</span> Anda
      </motion.h1>
      <p className="text-blue-100/60 text-xl max-w-2xl mx-auto mb-12">
        Kami memastikan operasional bisnis Startup, F&B, dan E-commerce tetap terstruktur dan profit terkendali.
      </p>
    </div>
  </section>
);

const QuoteSection = () => (
  <section className="py-24 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden text-center">
        <div className="absolute top-10 left-10 text-9xl font-black text-gray-50 opacity-10 select-none">“</div>
        <p className="text-2xl md:text-4xl font-black text-[#001F3F] mb-12 leading-tight italic relative z-10">
          Bisnis mau growth harus punya sistem dan laporan keuangan yang jelas. Tanpa itu, omset besar pun bisa tidak terlihat profit sebenarnya.
        </p>
        <div className="w-24 h-2 bg-[#FF8C00] mx-auto rounded-full"></div>
      </div>
    </div>
  </section>
);

const BentoServices = () => {
  const items = [
    { title: "Profit & Loss", icon: <PieChart />, color: "bg-orange-500", size: "lg:col-span-2" },
    { title: "Cash Flow", icon: <RefreshCw />, color: "bg-blue-600", size: "lg:col-span-1" },
    { title: "Tax Strategy", icon: <ShieldCheck />, color: "bg-emerald-500", size: "lg:col-span-1" },
    { title: "Business Audit", icon: <Search />, color: "bg-purple-600", size: "lg:col-span-2" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-black text-[#001F3F] mb-16 flex items-center gap-4">
          <div className="w-12 h-1 bg-[#FF8C00]"></div> Fokus Manfaat Untuk Owner
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:shadow-2xl transition-all ${item.size} group`}
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-[#001F3F] mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">Layanan mendalam untuk memastikan setiap aspek keuangan bisnis Anda terpantau dengan standar akuntansi global.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MentorSection = ({ setActivePage }) => (
  <section className="py-24 bg-gray-50 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 relative"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <div className="rounded-[3rem] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white aspect-[4/5] lg:aspect-auto cursor-pointer" onClick={() => setActivePage('mentor')}>
              <img 
                src="https://i.postimg.cc/xC5YYx2b/ttrseuasus.png" /* EDIT FOTO MENTOR (MINI) DI SINI */
                alt="Adhwa Neisya - Lead Mentor" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/10 p-3 rounded-2xl text-orange-500">
                  <Award size={24} />
                </div>
                <div>
                  <div className="text-[#001F3F] font-black text-lg">Adhwa Neisya</div>
                  <div className="text-gray-400 text-xs font-bold uppercase tracking-widest">Lead Consultant & Mentor</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <div className="inline-block bg-orange-500/10 text-orange-600 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase mb-6">
            Kenali Mentor Anda
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#001F3F] mb-8 leading-tight">
            Dibimbing Langsung Oleh <span className="text-orange-500 italic">Expert</span> di Bidangnya
          </h2>
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Adhwa neisya adalah Lead Consultant Finensia yang telah menangani lebih dari 50+ klien UMKM hingga korporasi. Beliau percaya bahwa akuntansi harus menjadi alat bantu pertumbuhan.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => setActivePage('mentor')} className="bg-[#001F3F] text-white px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-3 hover:bg-orange-500 transition-all shadow-xl">
               Lihat Profil Lengkap <ArrowUpRight size={18} />
            </button>
            <a 
              href="https://www.instagram.com/neisyanata?igsh=a2h0M3d2c3JyZWMz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#001F3F] px-8 py-4 rounded-2xl font-black text-sm border border-gray-200 flex items-center gap-3 hover:bg-gray-50 transition-all shadow-lg"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const ServiceDetails = () => {
  const list = [
    { title: "Penyusunan Laporan Keuangan", icon: <FileText /> },
    { title: "Pendampingan Pajak", icon: <ShieldCheck /> },
    { title: "Analisis Margin & Profit", icon: <TrendingUp /> },
    { title: "Rekonsiliasi Bank", icon: <Calculator /> }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-[#001F3F] mb-10 leading-tight">Detail <span className="text-[#FF8C00]">Eksekusi</span> Kami</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {list.map((item, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 bg-gray-50 rounded-[2rem] hover:bg-blue-50 transition-colors group">
                  <div className="text-[#FF8C00] group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-black text-[#001F3F] uppercase tracking-wider text-xs">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 bg-[#001F3F] p-12 md:p-20 rounded-[4rem] text-white relative">
            <h3 className="text-3xl font-black mb-10">Pendekatan <span className="text-[#FF8C00]">Kualitas</span></h3>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-[#FF8C00] font-black text-5xl opacity-20">01</div>
                <div>
                  <h4 className="font-black text-xl mb-2">Terstruktur</h4>
                  <p className="text-blue-100/40 text-sm">Setiap alur kerja sistematis dan teruji.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-[#FF8C00] font-black text-5xl opacity-20">02</div>
                <div>
                  <h4 className="font-black text-xl mb-2">Feedback Cepat</h4>
                  <p className="text-blue-100/40 text-sm">Respon solusi nyata dari mentor langsung.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Komponen Halaman Academy ---

const AcademyHeader = () => (
  <section className="bg-[#001F3F] pt-48 pb-20 relative">
    <div className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="inline-block bg-[#FF8C00] text-white px-6 py-2 rounded-full font-black text-xs tracking-widest uppercase mb-8"
      >
        FINENSIA ACADEMY
      </motion.div>
      <h2 className="text-5xl md:text-7xl font-black text-white mb-6">Investasi <span className="italic font-light">Masa Depan</span> Karier</h2>
      <p className="text-blue-100/50 text-xl max-w-3xl mx-auto">Dari nol hingga mahir. Kurikulum kami fokus pada praktik industri yang nyata.</p>
    </div>
  </section>
);

const ProgramIntro = () => (
  <section className="py-24 bg-white border-b border-gray-50">
    <div className="container mx-auto px-6 max-w-4xl text-center">
      <h3 className="text-3xl md:text-5xl font-black text-[#001F3F] mb-10 leading-tight">
        Lompatan <span className="text-[#FF8C00]">Karier</span> Dimulai Dari Praktik Yang <span className="italic underline decoration-orange-500/30">Nyata</span>
      </h3>
      <p className="text-gray-500 text-lg leading-relaxed">
        Lupakan hafalan rumus yang membosankan. Di Finensia, Anda akan bekerja dengan simulasi dokumen perusahaan asli, mengelola arus kas digital, dan memecahkan studi kasus yang sedang hangat di industri saat ini.
      </p>
    </div>
  </section>
);

const PriceCard = ({ title, type, price, discount, features, isPro }) => (
  <motion.div 
    whileHover={{ y: -15 }}
    className={`relative p-10 md:p-14 rounded-[3.5rem] overflow-hidden ${isPro ? 'bg-[#001F3F] text-white ring-4 ring-orange-500/20' : 'bg-white text-[#001F3F] border border-gray-100 shadow-xl'}`}
  >
    {isPro && (
      <div className="absolute top-0 right-0 bg-[#FF8C00] px-8 py-2 rounded-bl-3xl font-black text-[10px] uppercase tracking-widest">
        Paling Populer
      </div>
    )}
    
    <div className="mb-10">
      <span className={`text-xs font-black uppercase tracking-widest ${isPro ? 'text-orange-400' : 'text-gray-400'}`}>{type}</span>
      <h3 className="text-3xl font-black mt-2 mb-8">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-4xl font-black text-[#FF8C00]">Rp {price}</span>
        <span className="text-sm text-gray-500 line-through">Rp {discount}</span>
      </div>
    </div>

    <div className="space-y-5 mb-12">
      {features.map((f, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center ${isPro ? 'bg-orange-500/20 text-[#FF8C00]' : 'bg-blue-50 text-blue-600'}`}>
            <CheckCircle2 size={14} />
          </div>
          <span className={`text-sm ${isPro ? 'text-white/70' : 'text-gray-600'}`}>{f}</span>
        </div>
      ))}
    </div>

    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block text-center w-full py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${isPro ? 'bg-[#FF8C00] text-white shadow-xl shadow-orange-500/30' : 'bg-[#001F3F] text-white hover:bg-orange-500'}`}
    >
      Daftar Sekarang
    </a> 
  </motion.div>
);

const AcademySection = () => {
  const proFeatures = ["Semua Materi Intensive", "Pajak Dasar Aplikatif", "Laporan Keuangan Siap Pakai", "1x CV Mentoring Online", "1x Mock Interview 1-on-1", "Diskusi Mentor Personal"];
  const basicFeatures = ["Basic Accounting Dasar", "Accounting Plus Praktik", "Laporan Keuangan Dasar", "Studi Kasus & Latihan", "Akses Diskusi Mentor"];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* --- EDIT LINK DAFTAR PROFESIONAL DI SINI --- */}
          <PriceCard 
            title="Professional Accounting" 
            type="Lulusan Baru / Pencari Kerja"
            price="599.000" 
            discount="1.200.000"
            features={proFeatures}
            isPro={true}
            link="https://adhwaneisya-accounting.myr.id/bundling/professional-accounting-program-95899" 
          />
          {/* --------------------------------------------- */}

          {/* --- EDIT LINK DAFTAR INTENSIVE DI SINI --- */}
          <PriceCard 
            title="Accounting Intensive" 
            type="Mahasiswa / Tingkat Pemula"
            price="299.000" 
            discount="600.000"
            features={basicFeatures}
            isPro={false}
            link="https://adhwaneisya-accounting.myr.id/bundling/Accounting-Intensive-Program" 
          />
          {/* ------------------------------------------- */}
        </div>
      </div>
    </section>
  );
};

const AcademyCTA = () => (
  <section className="py-24 bg-[#001F3F] relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-orange-600/20 to-transparent"></div>
    <div className="container mx-auto px-6 text-center relative z-10">
      <h2 className="text-4xl md:text-6xl font-black text-white mb-10">Daftar Sekarang & <br/> <span className="text-[#FF8C00]">Amankan Slot</span> Anda.</h2>
      <p className="text-blue-100/50 mb-12 max-w-2xl mx-auto font-bold uppercase tracking-widest text-xs">Pendaftaran Terbatas Untuk Memastikan Kualitas Mentoring 1-on-1.</p>
      <div className="flex justify-center">
        <a 
          href="https://wa.me/message/4LTAXUDIFW75B1" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#001F3F] px-12 py-5 rounded-2xl font-black text-lg hover:bg-orange-500 hover:text-white transition-all shadow-2xl"
        >
          Tanya Jadwal Kelas
        </a>
      </div>
    </div>
  </section>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const faqs = [
    {
      q: "Bagaimana Finensia menjaga keamanan data bisnis klien?",
      a: "Kami menggunakan enkripsi end-to-end untuk setiap dokumen yang Anda berikan. Selain itu, setiap pengerjaan jasa akuntansi diawali dengan penandatanganan NDA (Non-Disclosure Agreement) yang menjamin data Anda tidak akan dibagikan ke pihak ketiga mana pun."
    },
    {
      q: "Apakah website ini aman untuk melakukan konsultasi?",
      a: "Tentu. Seluruh infrastruktur digital kami sudah dilengkapi dengan sertifikat SSL (HTTPS) 256-bit, memastikan bahwa semua pesan dan data yang Anda kirimkan terenkripsi dengan aman."
    },
    {
      q: "Apakah ada audit keamanan berkala?",
      a: "Ya, tim IT kami melakukan audit berkala terhadap sistem penyimpanan data awan (cloud) kami untuk mencegah akses yang tidak sah dan memastikan integritas data tetap terjaga."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4 text-center tracking-tight">Kerahasiaan & <span className="text-[#FF8C00]">Keamanan</span></h2>
          <p className="text-gray-500">Pertanyaan umum seputar perlindungan data Anda di Finensia.</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === i ? 'bg-orange-50/30 border-orange-200' : 'bg-white border-gray-100 hover:border-gray-200'}`}>
              <button onClick={() => setOpenIndex(openIndex === i ? -1 : i)} className="w-full px-8 py-6 flex justify-between items-center text-left">
                <span className={`font-bold text-lg ${openIndex === i ? 'text-[#FF8C00]' : 'text-[#001F3F]'}`}>{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-[#FF8C00]" /> : <ChevronDown className="text-gray-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 pb-8 text-gray-600">
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GoalsSection = () => (
  <section className="py-24 bg-gradient-to-br from-[#FF8C00] to-orange-400">
    <div className="container mx-auto px-6 text-center text-white">
      <h2 className="text-4xl md:text-6xl font-black mb-8">Profit Jelas. Pajak Aman. <br/> Bisnis <span className="italic">Sustainable</span>.</h2>
      <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto">Wujudkan impian bisnis yang terukur dan terkendali bersama tim ahli Finensia.</p>
      <a 
        href="https://wa.me/message/4LTAXUDIFW75B1" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#001F3F] text-white px-12 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl"
      >
        Mulai Langganan Jasa
      </a>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#001F3F] text-white pt-32 pb-12 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
    
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-20">
        <div className="max-w-md">
          <div className="flex items-center gap-3 mb-8">
            {/* Logo Footer diperbaiki dan ditandai untuk edit manual */}
            <img 
              src="https://i.postimg.cc/7L4GPZcq/Finensia-logo.jpg" /* EDIT LOGO FOOTER DI SINI */
              alt="Finensia Logo Footer" 
              className="w-12 h-12 object-contain bg-white rounded-2xl shadow-lg p-1"
            />
            <span className="font-black text-3xl tracking-widest uppercase">FINENSIA</span>
          </div>
          <p className="text-blue-100/40 leading-relaxed mb-10 text-lg">
            Membangun masa depan bisnis melalui transparansi data dan edukasi berkelanjutan. Akuntansi yang lebih aman, lebih cerdas.
          </p>
          <div className="flex gap-4">
            {[Globe, Users, Lock].map((Icon, i) => (
              <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-orange-500 transition-all cursor-pointer group">
                <Icon size={20} className="group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-32">
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-orange-500 mb-8">Layanan</h4>
            <ul className="space-y-4 text-blue-100/50 text-sm font-bold">
              <li className="hover:text-white cursor-pointer transition-colors">Audit Sistem</li>
              <li className="hover:text-white cursor-pointer transition-colors">Pajak Korporasi</li>
              <li className="hover:text-white cursor-pointer transition-colors">Academy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.2em] text-orange-500 mb-8">Lokasi</h4>
            <p className="text-blue-100/50 text-sm font-bold leading-relaxed">
              Cirebon (Cirebon city)<br/>Jawa Barat, Indonesia
            </p>
          </div>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-blue-100/20">
        <div className="flex items-center gap-2">
          <Lock size={12} className="text-green-500" /> © 2025 FINENSIA. SECURED PLATFORM.
        </div>
        <div className="flex gap-10">
          <span className="hover:text-white cursor-pointer">Kebijakan Privasi</span>
          <span className="hover:text-white cursor-pointer">Syarat & Ketentuan</span>
        </div>
      </div>
    </div>
  </footer>
);

// --- Aplikasi Utama ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-white font-sans text-[#001F3F] selection:bg-orange-100 selection:text-orange-900">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main>
        {activePage === 'home' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Hero setActivePage={setActivePage} />
            <section className="py-20 bg-white border-y border-gray-100">
              <div className="container mx-auto px-6 overflow-hidden">
                <motion.div 
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="flex whitespace-nowrap gap-24 items-center"
                >
                  {["ARABHASATA", "NAMMI FASHION", "BILIK KITA", "SERA COFFEE", "JAYA MOTOR", "CV. BERKARYA SATU", "MB CORP", "SENIMA PRINT"].map((c, i) => (
                    <span key={i} className="text-3xl font-black text-gray-200 uppercase italic tracking-tighter hover:text-orange-500 transition-colors">{c}</span>
                  ))}
                </motion.div>
              </div>
            </section>
            <AboutPreview setActivePage={setActivePage} />
            <SecurityTrustSection />
            <FAQSection />
          </motion.div>
        )}

        {activePage === 'services' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <ServicesHero />
            <QuoteSection />
            <BentoServices />
            <MentorSection setActivePage={setActivePage} />
            <SecurityTrustSection />
            <ServiceDetails />
            <GoalsSection />
          </motion.div>
        )}

        {activePage === 'academy' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <AcademyHeader />
            <ProgramIntro />
            <AcademySection />
            <SecurityTrustSection />
            <AcademyCTA />
          </motion.div>
        )}

        {activePage === 'mentor' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <MentorProfilePage setActivePage={setActivePage} />
          </motion.div>
        )}

        {activePage === 'contact' && (
          <div className="pt-48 pb-32 bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-6 max-w-2xl text-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-orange-300"></div>
                <div className="mb-8 flex justify-center">
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <ShieldCheck size={48} />
                  </div>
                </div>
                <h2 className="text-4xl font-black text-[#001F3F] mb-4">Saluran Konsultasi <span className="text-[#FF8C00]">Aman</span></h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">Hubungi kami melalui WhatsApp terenkripsi untuk mendiskusikan kebutuhan bisnis atau pendaftaran academy Anda secara rahasia.</p>
                <a 
                  href="https://wa.me/message/4LTAXUDIFW75B1" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#001F3F] text-white px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-[#FF8C00] shadow-2xl transition-all inline-flex items-center gap-4 group"
                >
                  Hubungi Via WhatsApp <MessageSquare className="group-hover:scale-110 transition-transform" />
                </a>
                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <Lock size={14} className="text-green-500" /> Secured by 256-bit Encryption
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </main>

      <Footer />

      {/* Floating Action Button */}
      <motion.a 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        href="https://wa.me/message/4LTAXUDIFW75B1" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] w-20 h-20 bg-gradient-to-tr from-[#FF8C00] to-orange-400 rounded-full flex items-center justify-center text-white shadow-[0_10px_40px_rgba(255,140,0,0.4)] hover:scale-110 active:scale-90 transition-all cursor-pointer group"
      >
        <MessageCircle size={36} />
        <span className="absolute right-full mr-4 bg-white text-[#001F3F] px-4 py-2 rounded-xl text-xs font-black shadow-xl opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap border border-gray-100 flex items-center gap-2">
          <Lock size={10} className="text-green-500" /> Chat Aman
        </span>
      </motion.a>
    </div>
  );
}