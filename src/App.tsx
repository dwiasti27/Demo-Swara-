import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Menu, 
  Mic2, 
  X,
  Calendar,
  UserCheck,
  Send,
  ChevronRight,
  PhoneCall,
  ShieldCheck
} from 'lucide-react';
import { MC_DATA } from './data/mcData';
import type { MCProfile } from './data/mcData';
import { NEWS_DATA } from './data/newsData';
import type { NewsItem } from './data/newsData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedMC, setSelectedMC] = useState<MCProfile | null>(null);
  const [bookingMC, setBookingMC] = useState<MCProfile | null>(null);
  const [showMemberRegister, setShowMemberRegister] = useState<boolean>(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);

  // Form States for Booking
  const [bookingForm, setBookingForm] = useState({
    clientName: '',
    clientPhone: '',
    eventType: 'Protokoler / Kedinasan',
    eventDate: '',
    eventLocation: '',
    notes: ''
  });

  // Form States for Member Registration
  const [memberForm, setMemberForm] = useState({
    fullName: '',
    stageName: '',
    phone: '',
    category: 'Protokoler',
    experienceYears: '1-3 Tahun',
    instagram: '',
    domisili: 'Batam Kota',
    motivation: ''
  });

  const categories = ['Semua', 'Protokoler', 'Wedding', 'Gala & Corporate', 'Entertainment'];

  const filteredMCs = selectedCategory === 'Semua' 
    ? MC_DATA 
    : MC_DATA.filter(mc => mc.category === selectedCategory);

  // Ketua SWARA (Maharani Purba) is featured
  const featuredMC = MC_DATA.find(mc => mc.isKetua) || MC_DATA[0];

  // Admin WhatsApp Number (dapat disesuaikan)
  const ADMIN_WA = '6281234567890';

  // Handle WhatsApp Booking Direct Integration
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mcName = bookingMC?.name || 'MC SWARA';
    const waText = 
      `*PERMOHONAN BOOKING MC — SWARA BATAM*%0A%0A` +
      `📌 *MC Dituju:* ${mcName}%0A` +
      `👤 *Nama Pemesan/Instansi:* ${bookingForm.clientName}%0A` +
      `📱 *No. WhatsApp:* ${bookingForm.clientPhone}%0A` +
      `🎉 *Jenis Acara:* ${bookingForm.eventType}%0A` +
      `📅 *Tanggal Acara:* ${bookingForm.eventDate}%0A` +
      `📍 *Lokasi Acara:* ${bookingForm.eventLocation}%0A` +
      `📝 *Catatan Khusus:* ${bookingForm.notes || '-'}`;

    window.open(`https://wa.me/${ADMIN_WA}?text=${waText}`, '_blank');
    setBookingMC(null);
  };

  // Handle WhatsApp Member Registration Integration
  const handleMemberRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waText = 
      `*PENDAFTARAN ANGGOTA BARU — SWARA BATAM*%0A%0A` +
      `👤 *Nama Lengkap:* ${memberForm.fullName}%0A` +
      `🎙️ *Nama Panggung:* ${memberForm.stageName || '-'}` + `%0A` +
      `📱 *No. WhatsApp:* ${memberForm.phone}%0A` +
      `⭐ *Spesialisasi Utama:* ${memberForm.category}%0A` +
      `⏱️ *Pengalaman:* ${memberForm.experienceYears}%0A` +
      `📸 *Instagram / Portofolio:* ${memberForm.instagram || '-'}` + `%0A` +
      `📍 *Domisili Batam:* ${memberForm.domisili}%0A` +
      `💬 *Motivasi:* ${memberForm.motivation || '-'}`;

    window.open(`https://wa.me/${ADMIN_WA}?text=${waText}`, '_blank');
    setShowMemberRegister(false);
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
          
          {/* Logo Cyan Soundwave + teks "SWARA." */}
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
                KOTA BATAM
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { label: 'BERANDA', href: '#beranda' },
              { label: 'KETUA & SOROTAN', href: '#sorotan' },
              { label: 'DIREKTORI MC', href: '#direktori' },
              { label: 'BERITA & AGENDA', href: '#berita' },
              { label: 'TENTANG', href: '#tentang' },
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

          {/* Action Buttons: Daftar Anggota + Book MC */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => setShowMemberRegister(true)}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400 hover:text-white border border-cyan-500/30 hover:border-cyan-400 bg-cyan-950/20 transition-all duration-300"
            >
              DAFTAR ANGGOTA
            </button>
            <button
              onClick={() => setBookingMC(featuredMC)}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] border border-cyan-400 text-black bg-[#00D2FF] hover:bg-cyan-300 shadow-[0_0_15px_rgba(0,210,255,0.4)] transition-all duration-300 active:scale-95"
            >
              BOOK MC
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
          <div className="md:hidden bg-black/95 border-b border-cyan-500/20 px-6 py-8 flex flex-col space-y-5 backdrop-blur-xl animate-fadeIn">
            {[
              { label: 'BERANDA', href: '#beranda' },
              { label: 'KETUA & SOROTAN', href: '#sorotan' },
              { label: 'DIREKTORI MC', href: '#direktori' },
              { label: 'BERITA & AGENDA', href: '#berita' },
              { label: 'TENTANG SWARA', href: '#tentang' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-semibold tracking-[0.2em] text-[#D1D5DB] hover:text-[#00D2FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowMemberRegister(true);
                }}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-[0.15em] border border-cyan-500/40 text-cyan-400 bg-cyan-950/20"
              >
                DAFTAR ANGGOTA BARU
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setBookingMC(featuredMC);
                }}
                className="w-full text-center py-3 text-xs font-semibold uppercase tracking-[0.15em] border border-cyan-400 text-black bg-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.4)]"
              >
                PESAN / BOOK MC
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="beranda" className="relative pt-24 pb-28 md:pt-36 md:pb-40 px-6 sm:px-8 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        
        {/* Badge Slogan Resmi */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-cyan-500/40 bg-cyan-950/30 backdrop-blur-md mb-8 sm:mb-10">
          <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse"></span>
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-[#00D2FF]">
            SOLIDARITAS PEMBAWA ACARA BATAM
          </span>
        </div>

        {/* Main Headline */}
        <div className="relative mb-8">
          <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-normal leading-none tracking-tight text-white select-none">
            Suara
          </h1>
          <div className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-light italic leading-none tracking-tight text-[#00D2FF] sm:text-white sm:hover:text-[#00D2FF] transition-colors duration-500">
            Utama.
          </div>
        </div>

        {/* Tagline/Deskripsi */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#9CA3AF] font-light leading-relaxed mb-12 tracking-wide">
          Menghidupkan setiap perhelatan. Direktori resmi master of ceremony profesional berstandar protokoler kenegaraan dan perayaan mewah di Kota Batam.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#direktori"
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-full border border-cyan-400 text-white font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:bg-[#00D2FF] hover:text-black hover:shadow-[0_0_30px_rgba(0,210,255,0.5)] transition-all duration-300"
          >
            <span>EKSPLORASI DIREKTORI MC</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            onClick={() => setShowMemberRegister(true)}
            className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-white/20 text-[#D1D5DB] font-medium text-xs sm:text-sm tracking-[0.2em] uppercase hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            <UserCheck size={16} />
            <span>GABUNG ANGGOTA SWARA</span>
          </button>
        </div>

        {/* Ornamental Hairlines */}
        <div className="w-full max-w-4xl mt-24 border-t border-white/10 flex justify-between items-center pt-4 text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
          <span>ORGANISASI RESMI MC BATAM</span>
          <span className="hidden sm:inline">SK WALI KOTA BATAM • KEMENKUMHAM</span>
          <span>EST. 2020</span>
        </div>
      </section>

      {/* 3. SECTION: PROFIL KETUA & SOROTAN BULAN INI */}
      <section id="sorotan" className="py-24 border-t border-white/10 bg-[#070707] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#00D2FF] block mb-2">
                PROFIL KETUA & TALENTA UTAMA
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
                Sorotan <span className="text-[#00D2FF] italic font-light">Ketua SWARA.</span>
              </h2>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#9CA3AF] border border-white/20 px-3 py-1.5 self-start sm:self-auto flex items-center gap-2">
              <ShieldCheck size={14} className="text-[#00D2FF]" />
              PERIODE 2025–2030
            </div>
          </div>

          {/* Grid 2 Kolom Profil Ketua */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Foto Ketua (Maharani Purba) */}
            <div className="lg:col-span-5 relative group">
              <div className="relative overflow-hidden border border-cyan-500/30 aspect-[4/5] bg-neutral-900 shadow-[0_0_30px_rgba(0,210,255,0.15)]">
                <img
                  src={featuredMC.image}
                  alt={featuredMC.name}
                  className="w-full h-full object-cover grayscale contrast-125 brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none"></div>
                
                {/* Badge Jabatan */}
                <div className="absolute bottom-4 left-4 text-[10px] font-mono tracking-widest text-[#00D2FF] bg-black/90 backdrop-blur-md px-3 py-1.5 border border-cyan-500/40">
                  👑 {featuredMC.title?.toUpperCase()}
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00D2FF]/30 to-transparent -z-10 blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Detail & Editorial Bio Maharani Purba */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredMC.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`text-[11px] font-mono tracking-widest px-3 py-1 uppercase border ${
                      tag.includes('KETUA') 
                        ? 'text-black bg-[#00D2FF] border-[#00D2FF] font-bold' 
                        : 'text-[#D1D5DB] border-white/20 bg-white/5'
                    }`}
                  >
                    [{tag}]
                  </span>
                ))}
              </div>

              {/* Nama & Nama Panggung */}
              <div>
                <h3 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-normal tracking-tight">
                  {featuredMC.name}
                </h3>
                {featuredMC.stageName && (
                  <p className="text-base text-[#00D2FF] font-mono tracking-wider mt-1">
                    Known as: "{featuredMC.stageName}"
                  </p>
                )}
              </div>

              {/* Experience Subtitle */}
              <p className="text-xs uppercase tracking-[0.2em] text-[#A1A1AA] font-medium">
                {featuredMC.experience} • {featuredMC.eventsCount}
              </p>

              {/* Bio */}
              <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-light">
                {featuredMC.bio}
              </p>

              {/* Highlights & Languages */}
              <div className="pt-2 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#6B7280] block mb-1">
                    PERHELATAN UNGGULAN
                  </span>
                  <ul className="text-xs text-[#D1D5DB] space-y-1">
                    {featuredMC.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#00D2FF] rounded-full"></span>
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
                        <span className="w-1.5 h-1.5 bg-[#00D2FF] rounded-full"></span>
                        {l}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedMC(featuredMC)}
                  className="px-5 py-3 text-xs uppercase tracking-[0.2em] border border-white/30 text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-300 font-semibold"
                >
                  Detail Profil Ketua
                </button>

                <button
                  onClick={() => setBookingMC(featuredMC)}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] border border-cyan-400 text-black bg-[#00D2FF] hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all"
                >
                  Undang Ketua SWARA ke Acara
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SECTION: DIREKTORI MC */}
      <section id="direktori" className="py-28 max-w-7xl mx-auto px-6 sm:px-8 z-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-white/10 gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block mb-2">
              DIREKTORI RESMI ANGGOTA
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
              Para Profesional <span className="italic font-light">Panggung.</span>
            </h2>
          </div>

          <p className="text-xs uppercase tracking-[0.15em] text-[#9CA3AF] max-w-xs">
            Standarisasi etika panggung, tata bahasa lugas, dan kredensial teruji di Kota Batam & Kepri.
          </p>
        </div>

        {/* Filter bar */}
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

        {/* Grid Kartu MC */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMCs.map((mc) => (
            <div
              key={mc.id}
              className={`group bg-[#09090b] border ${mc.isKetua ? 'border-cyan-500/60 shadow-[0_0_20px_rgba(0,210,255,0.15)]' : 'border-white/10'} hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between relative overflow-hidden`}
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

                {mc.isKetua && (
                  <div className="absolute top-4 left-4 bg-[#00D2FF] text-black font-bold px-2.5 py-0.5 text-[9px] font-mono tracking-widest uppercase">
                    KETUA SWARA
                  </div>
                )}

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

                  {/* Nama MC */}
                  <h3 className="font-serif text-2xl text-white font-normal group-hover:text-[#00D2FF] transition-colors">
                    {mc.name}
                  </h3>
                  {mc.stageName && (
                    <span className="text-xs text-[#00D2FF] font-mono block">({mc.stageName})</span>
                  )}

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
                    Detail Profil
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

      {/* 5. SECTION: BERITA & AGENDA SWARA */}
      <section id="berita" className="py-28 border-t border-white/10 bg-[#060608] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-12 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block mb-2">
                INFORMASI RESMI ORGANISASI
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white font-normal">
                Berita & <span className="italic text-[#00D2FF] font-light">Agenda Kegiatan.</span>
              </h2>
            </div>
            <span className="text-[10px] font-mono tracking-widest text-[#6B7280]">
              PUBLIKASI SWARA BATAM 2025/2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {NEWS_DATA.map((item) => (
              <div 
                key={item.id}
                className="bg-[#0a0a0d] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm border border-cyan-500/30 text-[9px] font-mono tracking-widest text-[#00D2FF] px-2.5 py-1">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-mono text-[#6B7280] block mb-2 flex items-center gap-1">
                      <Calendar size={12} className="text-[#00D2FF]" />
                      {item.date}
                    </span>
                    <h3 className="font-serif text-lg text-white font-normal group-hover:text-[#00D2FF] transition-colors leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#9CA3AF] font-light mt-2 line-clamp-3 leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedNews(item)}
                    className="pt-4 border-t border-white/10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#00D2FF] font-medium hover:text-white transition-colors"
                  >
                    <span>Baca Selengkapnya</span>
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. SECTION: TENTANG SWARA (MANIFESTO) */}
      <section id="tentang" className="py-28 border-t border-white/10 bg-[#080808] relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Statement & Vision */}
            <div className="lg:col-span-7 space-y-8">
              <span className="text-xs uppercase tracking-[0.25em] text-[#00D2FF] font-semibold block">
                MANIFESTO ORGANISASI
              </span>

              <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal leading-snug">
                “Sebuah acara megah bukanlah sekadar susunan agenda, melainkan resonansi emosional yang diikat oleh <span className="italic text-[#00D2FF]">artikulasi yang berwibawa.</span>”
              </blockquote>

              <p className="text-base text-[#9CA3AF] leading-relaxed font-light">
                SWARA Batam (Solidaritas Pembawa Acara Batam) didirikan sebagai wadah resmi profesi MC berbadan hukum di Kota Batam. Kami menjaga ketat standar etiket diplomasi, fleksibilitas bilingual, serta ketangguhan improvisasi agar setiap perhelatan Anda berlangsung dengan khidmat dan bereputasi tinggi.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <div className="w-12 h-12 border border-cyan-400/50 flex items-center justify-center text-[#00D2FF] bg-cyan-950/20">
                  <Mic2 size={22} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wider uppercase text-white">DEWAN STANDARISASI PROFESI</h4>
                  <p className="text-xs text-[#9CA3AF]">Badan Pembina Sertifikasi & Protokoler SWARA Batam</p>
                </div>
              </div>
            </div>

            {/* Right: Angka statistik */}
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
                    500+
                  </div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-white mt-2">
                    Acara Resmi Pemko & Swasta
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    Dari pelantikan resmi, forum investasi internasional, hingga perayaan ballroom megah.
                  </p>
                </div>

                <div className="pt-8">
                  <div className="font-serif text-4xl sm:text-5xl text-[#00D2FF] font-light">
                    Mitra Strategis
                  </div>
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-white mt-2">
                    Pemerintah Kota Batam & Disbudpar
                  </div>
                  <p className="text-xs text-[#9CA3AF] mt-1">
                    Di bawah pembinaan Dinas Kebudayaan dan Pariwisata Kota Batam.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="border-t border-white/10 bg-[#030303] py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/10">
            
            {/* Brand & Info */}
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
                Solidaritas Pembawa Acara Kota Batam
              </p>
              <p className="text-xs text-[#9CA3AF] max-w-md leading-relaxed">
                Wadah resmi independen pembawa acara profesional berbadan hukum dari Kemenkumham & SK Wali Kota Batam. Berdedikasi menjaga martabat panggung dan suksesnya seremonial di Kepulauan Riau.
              </p>
            </div>

            {/* Sekretariat */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B7280] block">
                SEKRETARIAT RESMI
              </span>
              <p className="text-xs text-[#D1D5DB] leading-relaxed">
                Batam Centre, Kota Batam<br />
                Kepulauan Riau 29461<br />
                Indonesia
              </p>
              <p className="text-xs text-[#00D2FF] flex items-center gap-1.5 pt-1">
                <PhoneCall size={12} />
                +62 812-3456-7890
              </p>
            </div>

            {/* Navigasi & Action */}
            <div className="md:col-span-3 space-y-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#6B7280] block">
                AKSES KEANGGOTAAN
              </span>
              <button
                onClick={() => setShowMemberRegister(true)}
                className="w-full text-left py-2 px-3 text-xs uppercase tracking-wider text-cyan-400 border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 transition-colors"
              >
                + Form Pendaftaran Anggota
              </button>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6B7280] tracking-wider">
            <p>© 2026 SWARA KOTA BATAM. ALL RIGHTS RESERVED.</p>
            <p className="mt-2 sm:mt-0">KEPULAUAN RIAU • INDONESIA</p>
          </div>

        </div>
      </footer>

      {/* --- MODAL 1: DETAIL PROFIL MC --- */}
      {selectedMC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0c0c0f] border border-cyan-500/40 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-[0_0_50px_rgba(0,210,255,0.2)]">
            <button
              onClick={() => setSelectedMC(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
            >
              <X size={22} />
            </button>

            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={selectedMC.image}
                alt={selectedMC.name}
                className="w-full sm:w-44 aspect-[4/5] object-cover border border-cyan-500/30 grayscale contrast-125"
              />
              <div className="space-y-3 flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {selectedMC.tags.map(t => (
                    <span key={t} className="text-[9px] font-mono px-2 py-0.5 border border-white/20 text-[#00D2FF]">
                      [{t}]
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-3xl text-white font-normal">{selectedMC.name}</h3>
                {selectedMC.stageName && (
                  <p className="text-xs text-[#00D2FF] font-mono">Nama Panggung: {selectedMC.stageName}</p>
                )}
                <p className="text-xs text-[#9CA3AF] uppercase font-mono">{selectedMC.experience} • {selectedMC.eventsCount}</p>
                <p className="text-sm text-[#D1D5DB] leading-relaxed font-light pt-2">{selectedMC.bio}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-[10px] uppercase font-mono text-[#6B7280] block mb-1">HIGHLIGHT PANGGUNG</span>
                <ul className="space-y-1 text-[#D1D5DB]">
                  {selectedMC.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#00D2FF] rounded-full"></span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono text-[#6B7280] block mb-1">BAHASA</span>
                <ul className="space-y-1 text-[#D1D5DB]">
                  {selectedMC.languages.map((l, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#00D2FF] rounded-full"></span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setSelectedMC(null)}
                className="px-5 py-2.5 text-xs uppercase tracking-widest border border-white/20 text-gray-300 hover:text-white"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  const mc = selectedMC;
                  setSelectedMC(null);
                  setBookingMC(mc);
                }}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-widest border border-cyan-400 text-black bg-[#00D2FF] shadow-[0_0_15px_rgba(0,210,255,0.4)]"
              >
                Pesan MC Ini via WA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MODAL 2: BOOKING FORM (INTEGRASI WHATSAPP DIRECT) --- */}
      {bookingMC && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0b0b0e] border border-cyan-500/50 max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-[0_0_60px_rgba(0,210,255,0.25)]">
            <button
              onClick={() => setBookingMC(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
            >
              <X size={22} />
            </button>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <Send size={20} className="text-[#00D2FF]" />
              <div>
                <h3 className="font-serif text-2xl text-white font-normal">Formulir Undangan MC</h3>
                <p className="text-xs text-[#00D2FF]">MC Dipilih: <span className="font-bold text-white">{bookingMC.name}</span></p>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Nama Pemesan / Instansi *</label>
                <input
                  type="text"
                  required
                  placeholder="Misal: PT Batam Industrial / Dinas Pariwisata"
                  value={bookingForm.clientName}
                  onChange={(e) => setBookingForm({ ...bookingForm, clientName: e.target.value })}
                  className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">No. WhatsApp Pemesan *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxx"
                    value={bookingForm.clientPhone}
                    onChange={(e) => setBookingForm({ ...bookingForm, clientPhone: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Tanggal Acara *</label>
                  <input
                    type="date"
                    required
                    value={bookingForm.eventDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, eventDate: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Kategori Acara *</label>
                  <select
                    value={bookingForm.eventType}
                    onChange={(e) => setBookingForm({ ...bookingForm, eventType: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  >
                    <option value="Protokoler / Kedinasan">Protokoler / Kedinasan</option>
                    <option value="Pernikahan / Wedding Gala">Pernikahan / Wedding Gala</option>
                    <option value="Corporate / Launching">Corporate / Launching</option>
                    <option value="Festival / Konser / Musik">Festival / Konser / Musik</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Lokasi Acara (Batam) *</label>
                  <input
                    type="text"
                    required
                    placeholder="Misal: Radisson Hotel / Montigo"
                    value={bookingForm.eventLocation}
                    onChange={(e) => setBookingForm({ ...bookingForm, eventLocation: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Catatan Tambahan (Opsional)</label>
                <textarea
                  rows={3}
                  placeholder="Bahasa yang dibutuhkan, jumlah tamu, dsb."
                  value={bookingForm.notes}
                  onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                  className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] border border-cyan-400 text-black bg-[#00D2FF] hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.4)] flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Kirim Pemesanan via WhatsApp</span>
                </button>
                <p className="text-[10px] text-center text-[#6B7280]">
                  Pesan akan diteruskan otomatis ke Admin Booking SWARA Kota Batam
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 3: PENDAFTARAN ANGGOTA BARU SWARA --- */}
      {showMemberRegister && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0b0b0e] border border-cyan-500/50 max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-[0_0_60px_rgba(0,210,255,0.25)]">
            <button
              onClick={() => setShowMemberRegister(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
            >
              <X size={22} />
            </button>

            <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
              <UserCheck size={22} className="text-[#00D2FF]" />
              <div>
                <h3 className="font-serif text-2xl text-white font-normal">Form Pendaftaran Anggota</h3>
                <p className="text-xs text-[#00D2FF]">Solidaritas Pembawa Acara (SWARA) Kota Batam</p>
              </div>
            </div>

            <form onSubmit={handleMemberRegisterSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Nama Lengkap *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nama sesuai KTP"
                    value={memberForm.fullName}
                    onChange={(e) => setMemberForm({ ...memberForm, fullName: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Nama Panggung (Jika Ada)</label>
                  <input
                    type="text"
                    placeholder="Misal: MC Rancezzz"
                    value={memberForm.stageName}
                    onChange={(e) => setMemberForm({ ...memberForm, stageName: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">No. WhatsApp Aktif *</label>
                  <input
                    type="tel"
                    required
                    placeholder="08xxxxxxxxxx"
                    value={memberForm.phone}
                    onChange={(e) => setMemberForm({ ...memberForm, phone: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  />
                </div>
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Kecamatan Domisili *</label>
                  <select
                    value={memberForm.domisili}
                    onChange={(e) => setMemberForm({ ...memberForm, domisili: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  >
                    <option value="Batam Kota">Batam Kota</option>
                    <option value="Sekupang">Sekupang</option>
                    <option value="Lubuk Baja / Nagoya">Lubuk Baja / Nagoya</option>
                    <option value="Batu Ampar">Batu Ampar</option>
                    <option value="Nongsa">Nongsa</option>
                    <option value="Batu Aji">Batu Aji</option>
                    <option value="Sagulung">Sagulung</option>
                    <option value="Lainnya">Lainnya (Batam)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Spesialisasi Utama *</label>
                  <select
                    value={memberForm.category}
                    onChange={(e) => setMemberForm({ ...memberForm, category: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  >
                    <option value="Protokoler">Protokoler / Formal</option>
                    <option value="Wedding">Wedding / Pernikahan</option>
                    <option value="Gala & Corporate">Gala & Corporate</option>
                    <option value="Entertainment">Entertainment / Music Fest</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Pengalaman Panggung *</label>
                  <select
                    value={memberForm.experienceYears}
                    onChange={(e) => setMemberForm({ ...memberForm, experienceYears: e.target.value })}
                    className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                  >
                    <option value="< 1 Tahun (Pemula)">Pemula (&lt; 1 Tahun)</option>
                    <option value="1-3 Tahun">1 - 3 Tahun</option>
                    <option value="3-5 Tahun">3 - 5 Tahun</option>
                    <option value="5+ Tahun (Senior)">5+ Tahun (Senior)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Link Instagram / Portofolio</label>
                <input
                  type="text"
                  placeholder="@username / link portofolio"
                  value={memberForm.instagram}
                  onChange={(e) => setMemberForm({ ...memberForm, instagram: e.target.value })}
                  className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none"
                />
              </div>

              <div>
                <label className="block text-[#9CA3AF] uppercase font-mono mb-1">Motivasi Bergabung SWARA</label>
                <textarea
                  rows={2}
                  placeholder="Alasan ingin bergabung dengan SWARA Batam..."
                  value={memberForm.motivation}
                  onChange={(e) => setMemberForm({ ...memberForm, motivation: e.target.value })}
                  className="w-full bg-[#141419] border border-white/15 focus:border-[#00D2FF] p-3 text-white outline-none rounded-none resize-none"
                />
              </div>

              <div className="pt-4 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-[0.2em] border border-cyan-400 text-black bg-[#00D2FF] hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,210,255,0.4)] flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>Kirim Formulir Pendaftaran</span>
                </button>
                <p className="text-[10px] text-center text-[#6B7280]">
                  Data akan diverifikasi oleh Tim Keanggotaan SWARA Kota Batam
                </p>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* --- MODAL 4: DETAIL BERITA & AGENDA --- */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="bg-[#0c0c0f] border border-cyan-500/40 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-[0_0_50px_rgba(0,210,255,0.2)]">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-5 right-5 text-gray-400 hover:text-white p-1"
            >
              <X size={22} />
            </button>

            <span className="text-[10px] font-mono text-[#00D2FF] tracking-widest block mb-2">
              [{selectedNews.category}] • {selectedNews.date}
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal mb-4 leading-snug">
              {selectedNews.title}
            </h3>

            <img 
              src={selectedNews.image} 
              alt={selectedNews.title}
              className="w-full aspect-[16/9] object-cover border border-white/10 mb-6 grayscale contrast-125" 
            />

            <p className="text-sm text-[#D1D5DB] leading-relaxed font-light space-y-4">
              {selectedNews.content}
            </p>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
              <span className="text-[10px] font-mono text-[#6B7280]">DITERBITKAN OLEH HUMAS SWARA BATAM</span>
              <button
                onClick={() => setSelectedNews(null)}
                className="px-5 py-2 text-xs uppercase tracking-widest border border-white/20 text-gray-300 hover:text-white"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
