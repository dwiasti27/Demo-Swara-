import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Mail, 
  Menu, 
  Mic2, 
  X 
} from 'lucide-react';

interface MCProfile {
  id: string;
  name: string;
  category: 'Protokoler' | 'Wedding' | 'Gala & Corporate' | 'Entertainment';
  tags: string[];
  image: string;
  experience: string;
  bio: string;
  highlights: string[];
  languages: string[];
  eventsCount: string;
}

const MC_DATA: MCProfile[] = [
  {
    id: 'bramantya-widjaya',
    name: 'Bramantya Widjaya',
    category: 'Gala & Corporate',
    tags: ['CORPORATE', 'BILINGUAL'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    experience: '12+ Tahun Pengalaman',
    bio: 'Kurator panggung berbobot dengan gaya tutur diplomatik dan artikulatif. Dipercaya memandu puluhan simposium antarbangsa, forum ekonomi bilateral Indonesia-Singapura, serta peluncuran produk korporasi multinasional di Batam.',
    highlights: ['Indonesia-Singapore Bilateral Trade Forum', 'Batam Investment Summit', 'Global Tech Expo Marina'],
    languages: ['Bahasa Indonesia (Native)', 'English (Fluent / Accent-neutral)'],
    eventsCount: '150+ Panggung Internasional'
  },
  {
    id: 'natasya-amanda',
    name: 'Natasya Amanda',
    category: 'Wedding',
    tags: ['LUXURY WEDDING', 'BILINGUAL'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    experience: '9+ Tahun Pengalaman',
    bio: 'Menghadirkan kehangatan ritmis dan kekhidmatan puitis dalam setiap perayaan cinta bertaraf high-end. Terbiasa memimpin resepsi adat nusantara kontemporer maupun pesta modern internasional.',
    highlights: ['Royal Heritage Wedding Montigo', 'Harbour Bay Luxury Gala', 'Sunset Soiree Nongsa Point'],
    languages: ['Bahasa Indonesia', 'English', 'Basic Mandarin'],
    eventsCount: '320+ Pernikahan Eksklusif'
  },
  {
    id: 'rendy-alamsyah',
    name: 'Rendy Alamsyah',
    category: 'Protokoler',
    tags: ['PROTOKOLER NEGARA', 'FORMAL'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
    experience: '14+ Tahun Pengalaman',
    bio: 'Presisi diksi, kesantunan panggung tinggi, dan penguasaan aturan protokoler kenegaraan. Rekam jejak memandu upacara agung peresmian mega-proyek nasional dan gala dinner bersama pimpinan kementerian.',
    highlights: ['Kunjungan Kerja Kepresidenan RI Batam', 'HUT Otorita Batam / BP Batam', 'Rapat Koordinasi Forkopimda Kepri'],
    languages: ['Bahasa Indonesia (Baku Resmi)', 'English'],
    eventsCount: '450+ Acara Kedinasan'
  },
  {
    id: 'zahra-qistina',
    name: 'Zahra Qistina',
    category: 'Entertainment',
    tags: ['MUSIC FESTIVAL', 'LIVE HOST'],
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop',
    experience: '7+ Tahun Pengalaman',
    bio: 'Energi panggung eksplosif dan adaptasi improvisasi cepat. Menjadi magnet panggung puluhan festival musik akbar pantai, festival budaya maritim, dan siaran langsung penyiaran swasta.',
    highlights: ['Batam Soundwave Beachfest', 'Kepri Fest of Rhythm', 'New Year Grand Countdown'],
    languages: ['Bahasa Indonesia', 'English (Colloquial & Youth Culture)'],
    eventsCount: '210+ Panggung Hiburan'
  },
  {
    id: 'farhan-daniswara',
    name: 'Farhan Daniswara',
    category: 'Gala & Corporate',
    tags: ['ANNUAL GALA', 'MODERATOR'],
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1000&auto=format&fit=crop',
    experience: '10+ Tahun Pengalaman',
    bio: 'Memadukan ketajaman intelektual seorang moderator panel dengan karisma pembawa acara malam penganugerahan. Solusi terpercaya untuk korporasi industri galangan kapal, teknologi, dan perbankan.',
    highlights: ['Maritime Industry Awards Night', 'Fintech Synergy Congress', 'Batam Eco-Industrial Launch'],
    languages: ['Bahasa Indonesia', 'English'],
    eventsCount: '190+ Corporate Nights'
  },
  {
    id: 'clarissa-wijaya',
    name: 'Clarissa Wijaya',
    category: 'Wedding',
    tags: ['TRILINGUAL', 'ORIENTAL WEDDING'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    experience: '8+ Tahun Pengalaman',
    bio: 'Spesialis perayaan pernikahan Chinese-Indonesian tradisional dan kontemporer. Fasih memandu ritus Tea Pai dengan tata krama luhur serta memandu resepsi megah ratusan meja tamu.',
    highlights: ['Grand Ballroom Radisson Celebration', 'Tea Pai Ceremony Pasific Palace', 'Marriott Waterfront Soiree'],
    languages: ['Bahasa Indonesia', 'Mandarin (Fluent)', 'English'],
    eventsCount: '180+ Pesta Resepsi'
  }
];

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedMC, setSelectedMC] = useState<MCProfile | null>(null);
  const [bookingMC, setBookingMC] = useState<MCProfile | null>(null);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  const categories = ['Semua', 'Protokoler', 'Wedding', 'Gala & Corporate', 'Entertainment'];

  const filteredMCs = selectedCategory === 'Semua' 
    ? MC_DATA 
    : MC_DATA.filter(mc => mc.category === selectedCategory);

  const featuredMC = MC_DATA[0];

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingMC(null);
    }, 2800);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#00D2FF] selection:text-black font-sans relative overflow-x-hidden">
      
      {/* Background Subtle Noise & Gradient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#00D2FF]/8 via-transparent to-transparent blur-3xl opacity-70"></div>
        <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] bg-[#00D2FF]/4 blur-[140px] rounded-full"></div>
      </div>

      {/* 1. NAVBAR (Sticky & Minimalist Dark) */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between">
          
          {/* Kiri: Logo SVG Cyan Soundwave + teks "SWARA." */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center">
              <svg 
                className="w-7 h-7 text-[#00D2FF] drop-shadow-[0_0_8px_rgba(0,210,255,0.8)] group-hover:scale-110 transition-transform duration-300" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round"
              >
                <path d="M2 12h2l2-7 3 15 3-11 2 6 2-4 2 5 2-4h4" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-[0.15em] text-white font-sans">
                SWARA<span className="text-[#00D2FF]">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#9CA3AF] -mt-1 hidden sm:block">
                BATAM
              </span>
            </div>
          </a>

          {/* Tengah: Menu uppercase */}
          <nav className="hidden md:flex items-center space-x-10">
            {[
              { label: 'BERANDA', href: '#beranda' },
              { label: 'DIREKTORI', href: '#direktori' },
              { label: 'TENTANG', href: '#tentang' },
              { label: 'GALERI', href: '#galeri' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-[#A1A1AA] hover:text-[#00D2FF] transition-colors duration-300 relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00D2FF] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Kanan: Tombol CTA border kotak neon */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setBookingMC(featuredMC)}
              className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] border border-cyan-400 text-white hover:bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_22px_rgba(0,210,255,0.55)] transition-all duration-300 active:scale-95"
            >
              PESAN SEKARANG
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 focus:outline-none hover:text-[#00D2FF] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-b border-cyan-500/20 px-6 py-8 flex flex-col space-y-6 backdrop-blur-xl animate-fadeIn">
            {[
              { label: 'BERANDA', href: '#beranda' },
              { label: 'SOROTAN', href: '#sorotan' },
              { label: 'DIREKTORI', href: '#direktori' },
              { label: 'TENTANG', href: '#tentang' },
              { label: 'GALERI', href: '#galeri' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-[0.25em] text-[#D1D5DB] hover:text-[#00D2FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingMC(featuredMC);
                }}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-[0.2em] border border-cyan-400 text-white bg-cyan-950/20 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
              >
                PESAN SEKARANG
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="beranda" className="relative pt-24 pb-28 md:pt-36 md:pb-40 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Sub-label atas (Cyan, Uppercase, Tracking lebar) */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/40 bg-cyan-950/20 backdrop-blur-md mb-8 sm:mb-10">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse"></span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#00D2FF]">
            SOLIDARITAS PEMBAWA ACARA BATAM
          </span>
        </div>

        {/* Main Headline (Besar, Serif, Tengah) */}
        <div className="relative mb-8">
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-normal leading-none tracking-tight text-white select-none">
            Suara
          </h1>
          <div className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-light italic leading-none tracking-tight text-[#00D2FF] sm:text-white sm:hover:text-[#00D2FF] transition-colors duration-500">
            Utama.
          </div>
        </div>

        {/* Tagline/Deskripsi */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#9CA3AF] font-light leading-relaxed mb-12 tracking-wide">
          Menghidupkan setiap momen. Direktori eksklusif profesional acara terbaik di Kepulauan Riau.
        </p>

        {/* Tombol CTA: Rounded-full pill border button */}
        <a
          href="#direktori"
          className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full border border-cyan-400/80 text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#00D2FF] hover:text-black hover:border-[#00D2FF] hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all duration-300"
        >
          <span>EKSPLORASI PROFIL</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Subtle Ornamental Hairlines */}
        <div className="w-full max-w-4xl mt-24 border-t border-white/10 flex justify-between items-center pt-4 text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
          <span>INDEX NO. 01 — 2026/2027</span>
          <span className="hidden sm:inline">KEPULAUAN RIAU • INDONESIA</span>
          <span>EST. 2020</span>
        </div>
      </section>

      {/* 3. SECTION: "SOROTAN BULAN INI" (Featured MC of the Month) */}
      <section id="sorotan" className="py-24 border-t border-white/10 bg-[#070707] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-white/10 gap-4">
            <div>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
                Sorotan <span className="text-[#00D2FF] italic font-light">Bulan Ini.</span>
              </h2>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9CA3AF] border border-white/20 px-3 py-1.5 self-start sm:self-auto">
              RUBRIK PROFIL
            </div>
          </div>

          {/* Grid 2 Kolom */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Kolom Kiri: Foto potret profesional hitam-putih */}
            <div className="lg:col-span-5 relative group">
              <div className="relative overflow-hidden border border-white/15 aspect-[4/5] bg-neutral-900">
                <img
                  src={featuredMC.image}
                  alt={featuredMC.name}
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Accent Corner Badges */}
                <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-[#00D2FF] bg-black/80 backdrop-blur-sm px-2.5 py-1 border border-cyan-500/30">
                  FEATURED TALENT • BATAM
                </div>
              </div>
              {/* Cyan Accent Glowing Edge */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D2FF]/20 to-transparent -z-10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Kolom Kanan: Detail & Editorial Bio */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Tags: [CORPORATE], [BILINGUAL] */}
              <div className="flex flex-wrap gap-2">
                {featuredMC.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[11px] font-mono tracking-widest text-[#D1D5DB] border border-white/20 bg-white/5 px-3 py-1 uppercase"
                  >
                    [{tag}]
                  </span>
                ))}
              </div>

              {/* Nama MC (Serif besar) */}
              <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
                {featuredMC.name}
              </h3>

              {/* Experience Subtitle */}
              <p className="text-xs uppercase tracking-[0.2em] text-[#00D2FF] font-medium">
                {featuredMC.experience} • {featuredMC.eventsCount}
              </p>

              {/* Bio ringkas gaya majalah eksklusif */}
              <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-light">
                {featuredMC.bio}
              </p>

              {/* Curated Highlights */}
              <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#6B7280] block mb-1">
                    FORUM PILIHAN
                  </span>
                  <ul className="text-xs text-[#D1D5DB] space-y-1">
                    {featuredMC.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#00D2FF] rounded-full"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#6B7280] block mb-1">
                    KAPABILITAS BAHASA
                  </span>
                  <ul className="text-xs text-[#D1D5DB] space-y-1">
                    {featuredMC.languages.map((l, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 bg-[#00D2FF] rounded-full"></span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Link interaktif warna cyan & Tombol Book */}
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={() => setSelectedMC(featuredMC)}
                  className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-[#00D2FF] hover:text-white transition-colors duration-300 font-semibold"
                >
                  <span>Baca Profil Lengkap</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>

                <button
                  onClick={() => setBookingMC(featuredMC)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] border border-cyan-400 bg-cyan-950/30 text-white hover:bg-[#00D2FF] hover:text-black transition-all"
                >
                  Undang ke Acara
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION: DIREKTORI MC (Eksklusif Grid) */}
      <section id="direktori" className="py-28 max-w-7xl mx-auto px-6 sm:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block mb-2">
              DIREKTORI RESMI
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
              Para Profesional <span className="italic font-light">Panggung.</span>
            </h2>
          </div>

          <p className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF] max-w-xs">
            Standarisasi etika panggung, tata bahasa lugas, dan kredensial teruji di Kepulauan Riau.
          </p>
        </div>

        {/* Filter bar minimalis: [Semua] [Protokoler] [Wedding] [Gala & Corporate] [Entertainment] */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-white/5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 whitespace-nowrap border ${
                selectedCategory === category
                  ? 'border-cyan-400 text-black bg-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.4)]'
                  : 'border-white/15 text-[#9CA3AF] hover:text-white hover:border-white/40 bg-white/5'
              }`}
            >
              [{category}]
            </button>
          ))}
        </div>

        {/* 3-4 Kartu MC dengan gaya fotografi hitam-putih elegan */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMCs.map((mc) => (
            <div
              key={mc.id}
              className="group bg-[#09090b] border border-white/10 hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-neutral-900">
                <img
                  src={mc.image}
                  alt={mc.name}
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
                
                {/* Badge Category */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/20 text-[10px] font-mono tracking-widest text-[#00D2FF]">
                  {mc.category.toUpperCase()}
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-3 left-4 text-[10px] tracking-wider text-[#9CA3AF] uppercase">
                  {mc.experience}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {mc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono tracking-wider text-[#9CA3AF] bg-white/5 border border-white/10 px-2 py-0.5"
                      >
                        [{tag}]
                      </span>
                    ))}
                  </div>

                  {/* Nama MC (Serif) */}
                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#00D2FF] transition-colors">
                    {mc.name}
                  </h3>

                  <p className="text-xs text-[#9CA3AF] font-light mt-2 line-clamp-2 leading-relaxed">
                    {mc.bio}
                  </p>
                </div>

                {/* Direct Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedMC(mc)}
                    className="text-xs uppercase tracking-widest text-[#D1D5DB] hover:text-[#00D2FF] font-medium transition-colors"
                  >
                    Detail
                  </button>

                  <button
                    onClick={() => setBookingMC(mc)}
                    className="px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] border border-cyan-400 text-white hover:bg-[#00D2FF] hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_16px_rgba(0,210,255,0.4)]"
                  >
                    Book MC
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* 5. SECTION: TENTANG SWARA (Editorial Style) */}
      <section id="tentang" className="py-28 border-t border-white/10 bg-[#080808] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Statement & Vision */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block">
                MANIFESTO ORGANISASI
              </span>

              {/* Kutipan/Statement visi organisasi dengan tipografi besar berbobot */}
              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-snug">
                “Sebuah acara megah bukanlah sekadar susunan agenda, melainkan resonansi emosional yang diikat oleh <span className="italic text-[#00D2FF]">artikulasi yang berwibawa.</span>”
              </blockquote>

              <p className="text-base text-[#9CA3AF] leading-relaxed font-light">
                SWARA Batam (Solidaritas Pembawa Acara Batam) didirikan sebagai payung kurasi talenta master of ceremony terbaik di Kepulauan Riau. Kami menjaga ketat standar etiket diplomasi, fleksibilitas bilingual, serta ketangguhan improvisasi agar setiap perhelatan Anda dikenang dengan prestise tinggi.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <div className="w-10 h-10 border border-cyan-400/50 flex items-center justify-center text-[#00D2FF]">
                  <Mic2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-white">DEWAN STANDARISASI PROFESI</h4>
                  <p className="text-xs text-[#9CA3AF]">Badan Pembina Sertifikasi & Protokoler SWARA Batam</p>
                </div>
              </div>
            </div>

            {/* Right: Angka statistik minimalis */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-10">
              <div className="space-y-8 divide-y divide-white/10">
                
                <div className="pt-4 first:pt-0">
                  <div className="font-serif text-5xl sm:text-6xl text-[#00D2FF] font-light">
                    50+
                  </div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-white mt-2">
                    Anggota Terverifikasi
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    Melalui uji kelaikan panggung, etika formal, dan rekam jejak profesional bebas cacat panggung.
                  </p>
                </div>

                <div className="pt-8">
                  <div className="font-serif text-5xl sm:text-6xl text-white font-light">
                    100+
                  </div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-white mt-2">
                    Acara Resmi Pemkot & Swasta
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    Dari pertemuan G2C bilateral, forum investasi, hingga resepsi pernikahan ballroom megah.
                  </p>
                </div>

                <div className="pt-8">
                  <div className="font-serif text-4xl sm:text-5xl text-[#00D2FF] font-light">
                    Mitra Resmi
                  </div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-white mt-2">
                    Kota Batam & Industri MICE
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    Rujukan utama instansi perhotelan bintang 5, EO internasional, dan badan pengelola kawasan.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* GALERI RINGKAS (MOMEN PANGGUNG) */}
      <section id="galeri" className="py-24 border-t border-white/10 bg-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block mb-2">
                DOKUMENTASI
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Panggung & <span className="italic font-light">Momen.</span>
              </h2>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#6B7280]">
              ARSIP VISUAL 2024—2026
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                title: 'Batam International Maritime Summit',
                year: '2025',
                img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop'
              },
              {
                title: 'Governor Royal Gala Dinner',
                year: '2025',
                img: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=800&auto=format&fit=crop'
              },
              {
                title: 'Marina Waterfront Wedding Celebration',
                year: '2026',
                img: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop'
              },
              {
                title: 'Kepri Sound & Light Festival',
                year: '2026',
                img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop'
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden border border-white/10 bg-neutral-900">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[9px] font-mono text-[#00D2FF] tracking-widest block">
                    {item.year}
                  </span>
                  <h4 className="text-xs font-serif text-white mt-1 leading-snug">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FOOTER (Ultra Minimalist Dark) */}
      <footer className="border-t border-white/10 bg-[#030303] py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
            
            {/* Brand & Solidaritas */}
            <div className="md:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <svg 
                  className="w-6 h-6 text-[#00D2FF]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round"
                >
                  <path d="M2 12h2l2-7 3 15 3-11 2 6 2-4 2 5 2-4h4" />
                </svg>
                <span className="font-extrabold text-xl tracking-[0.15em] text-white">
                  SWARA<span className="text-[#00D2FF]">.</span>
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D1D5DB]">
                Solidaritas Pembawa Acara Batam
              </p>
              <p className="text-xs text-[#9CA3AF] max-w-md leading-relaxed">
                Wadah independen pembawa acara profesional berlisensi, berdedikasi menjaga martabat panggung dan suksesnya gelaran seremonial di Kota Batam.
              </p>
            </div>

            {/* Alamat Ringkas */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B7280] block">
                SEKRETARIAT
              </span>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Batam Centre, Kota Batam<br />
                Kepulauan Riau 29461<br />
                Indonesia
              </p>
              <p className="text-xs text-[#00D2FF]">
                kontak@swarabatam.org
              </p>
            </div>

            {/* Social Links Minimalis */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B7280] block">
                JARINGAN SOSIAL
              </span>
              <div className="flex flex-col space-y-2 text-xs">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#9CA3AF] hover:text-[#00D2FF] tracking-wider transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>INSTAGRAM</span>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[#9CA3AF] hover:text-[#00D2FF] tracking-wider transition-colors flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <span>LINKEDIN</span>
                </a>
                <a 
                  href="mailto:kontak@swarabatam.org" 
                  className="text-[#9CA3AF] hover:text-[#00D2FF] tracking-wider transition-colors flex items-center gap-2"
                >
                  <Mail size={14} /> <span>EMAIL RESMI</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright Notice */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B7280] uppercase tracking-widest gap-4">
            <div>
              © {new Date().getFullYear()} SWARA BATAM. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-6">
              <a href="#beranda" className="hover:text-white transition-colors">PRIVASI</a>
              <a href="#beranda" className="hover:text-white transition-colors">KETENTUAN KODE ETIK</a>
              <a href="#beranda" className="hover:text-[#00D2FF] transition-colors">KEMBALI KE ATAS ↑</a>
            </div>
          </div>

        </div>
      </footer>

      {/* MODAL: DETAIL PROFIL LENGKAP */}
      {selectedMC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#09090b] border border-cyan-500/50 p-6 sm:p-8 shadow-[0_0_40px_rgba(0,210,255,0.2)]">
            
            <button
              onClick={() => setSelectedMC(null)}
              className="absolute top-5 right-5 text-[#9CA3AF] hover:text-white transition-colors p-1"
            >
              <X size={22} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={selectedMC.image}
                alt={selectedMC.name}
                className="w-28 h-36 sm:w-36 sm:h-44 object-cover border border-white/20 grayscale contrast-125"
              />
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {selectedMC.tags.map((t) => (
                    <span key={t} className="text-[9px] font-mono text-[#00D2FF] border border-cyan-500/30 px-2 py-0.5">
                      [{t}]
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-3xl text-white font-normal">
                  {selectedMC.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#9CA3AF]">
                  Spesialisasi: {selectedMC.category}
                </p>
                <p className="text-xs text-[#00D2FF]">
                  {selectedMC.experience}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-xs text-[#D1D5DB] leading-relaxed border-t border-white/10 pt-4">
              <p>{selectedMC.bio}</p>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-[#6B7280] mb-2 font-semibold">
                  PORTOFOLIO PANGGUNG PRESTISIUS
                </h4>
                <div className="space-y-1">
                  {selectedMC.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={12} className="text-[#00D2FF]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-[#6B7280] mb-2 font-semibold">
                  PENGUASAAN BAHASA
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedMC.languages.map((l, i) => (
                    <span key={i} className="bg-white/5 border border-white/10 px-2.5 py-1 text-[11px]">
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-end gap-3">
              <button
                onClick={() => setSelectedMC(null)}
                className="px-5 py-2 text-xs uppercase tracking-wider text-[#9CA3AF] hover:text-white"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  const target = selectedMC;
                  setSelectedMC(null);
                  setBookingMC(target);
                }}
                className="px-6 py-2 text-xs font-semibold uppercase tracking-widest border border-cyan-400 bg-[#00D2FF] text-black shadow-[0_0_15px_rgba(0,210,255,0.4)]"
              >
                Lanjut Pesan MC Ini
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MODAL: FORM PEMESANAN / PESAN SEKARANG */}
      {bookingMC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#09090b] border border-cyan-500/60 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,210,255,0.25)]">
            
            <button
              onClick={() => {
                setBookingMC(null);
                setBookingSubmitted(false);
              }}
              className="absolute top-5 right-5 text-[#9CA3AF] hover:text-white transition-colors p-1"
            >
              <X size={22} />
            </button>

            {bookingSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full border border-cyan-400 flex items-center justify-center text-[#00D2FF] shadow-[0_0_20px_#00D2FF]">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-serif text-2xl text-white">
                  Permintaan Terkirim
                </h3>
                <p className="text-xs text-[#9CA3AF] max-w-sm mx-auto leading-relaxed">
                  Liaison officer SWARA Batam akan segera menghubungi Anda via WhatsApp dalam waktu maksimal 2 jam untuk ketersediaan jadwal {bookingMC.name}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#00D2FF] uppercase">
                    PEMESANAN RESMI SWARA
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal mt-1">
                    Booking: <span className="italic text-[#00D2FF]">{bookingMC.name}</span>
                  </h3>
                  <p className="text-xs text-[#9CA3AF]">
                    Kategori: {bookingMC.category} • {bookingMC.experience}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#9CA3AF] block mb-1">
                      Nama Penyelenggara / Perusahaan *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Contoh: PT Batam Digital Marina / Keluarga Wijaya"
                      className="w-full bg-white/5 border border-white/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#9CA3AF] block mb-1">
                        Nomor WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        placeholder="0812-xxxx-xxxx"
                        className="w-full bg-white/5 border border-white/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#9CA3AF] block mb-1">
                        Tanggal Acara *
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full bg-white/5 border border-white/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#9CA3AF] block mb-1">
                      Jenis & Lokasi Acara
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Gala Dinner di Marriott Harbour Bay Batam"
                      className="w-full bg-white/5 border border-white/20 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setBookingMC(null)}
                    className="px-4 py-2 text-xs uppercase tracking-wider text-[#9CA3AF] hover:text-white"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] border border-cyan-400 bg-cyan-950/40 text-white hover:bg-[#00D2FF] hover:text-black hover:shadow-[0_0_20px_rgba(0,210,255,0.5)] transition-all"
                  >
                    KIRIM PERMINTAAN BOOKING
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
