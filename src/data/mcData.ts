export interface MCProfile {
  id: string;
  name: string;
  stageName?: string;
  title?: string;
  category: 'Protokoler' | 'Wedding' | 'Gala & Corporate' | 'Entertainment';
  tags: string[];
  image: string;
  experience: string;
  bio: string;
  highlights: string[];
  languages: string[];
  eventsCount: string;
  isKetua?: boolean;
}

export const MC_DATA: MCProfile[] = [
  {
    id: 'maharani-purba',
    name: 'Maharani Purba',
    stageName: 'MC Rancezzz',
    title: 'Ketua SWARA Kota Batam 2025–2030',
    category: 'Protokoler',
    tags: ['KETUA SWARA', 'PROTOKOLER NEGARA', 'LUXURY WEDDING'],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
    experience: '15+ Tahun Pengalaman',
    bio: 'Ketua Umum SWARA Kota Batam periode 2025–2030 (Dilantik Wali Kota Batam, Amsakar Achmad). Pembawa acara senior spesialis protokoler kenegaraan, perhelatan akbar Pemko Batam, forum diplomatik, serta perayaan pernikahan mewah di Kepulauan Riau.',
    highlights: [
      'Pelantikan Kepengurusan SWARA Batam oleh Wali Kota RI',
      'Batam International Investment & Trade Summit',
      'Royal Grand Ballroom Montigo Resort Wedding'
    ],
    languages: ['Bahasa Indonesia (Resmi/Protokoler)', 'English (Fluent / Professional)'],
    eventsCount: '500+ Acara Resmi & High-End',
    isKetua: true
  },
  {
    id: 'bramantya-widjaya',
    name: 'Bramantya Widjaya',
    category: 'Gala & Corporate',
    tags: ['CORPORATE', 'BILINGUAL', 'MODERATOR'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
    experience: '12+ Tahun Pengalaman',
    bio: 'Kurator panggung berbobot dengan gaya tutur diplomatik dan artikulatif. Dipercaya memandu puluhan simposium antarbangsa, forum ekonomi bilateral Indonesia-Singapura, serta peluncuran produk korporasi multinasional di Batam.',
    highlights: [
      'Indonesia-Singapore Bilateral Trade Forum',
      'Batam Investment Summit',
      'Global Tech Expo Marina'
    ],
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
    bio: 'Menghadirkan kehangatan ritmis dan kekhidmatan puitis dalam setiap perayaan cinta bertaraf high-end. Terbiasa memimpin resepsi adat nusantara kontemporer maupun pesta modern internasional di ballroom hotel bintang 5.',
    highlights: [
      'Royal Heritage Wedding Montigo',
      'Harbour Bay Luxury Gala',
      'Sunset Soiree Nongsa Point'
    ],
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
    highlights: [
      'Kunjungan Kerja Kepresidenan RI Batam',
      'HUT Otorita Batam / BP Batam',
      'Rapat Koordinasi Forkopimda Kepri'
    ],
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
    bio: 'Energi panggung eksplosif dan adaptasi improvisasi cepat. Menjadi magnet panggung puluhan festival musik akbar pantai, festival budaya maritime, dan siaran langsung penyiaran swasta di Kepulauan Riau.',
    highlights: [
      'Batam Soundwave Beachfest',
      'Kepri Fest of Rhythm',
      'New Year Grand Countdown'
    ],
    languages: ['Bahasa Indonesia', 'English (Colloquial & Youth Culture)'],
    eventsCount: '210+ Panggung Hiburan'
  },
  {
    id: 'clarissa-wijaya',
    name: 'Clarissa Wijaya',
    category: 'Wedding',
    tags: ['TRILINGUAL', 'ORIENTAL WEDDING'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
    experience: '8+ Tahun Pengalaman',
    bio: 'Spesialis perayaan pernikahan Chinese-Indonesian tradisional dan kontemporer. Fasih memandu ritus Tea Pai dengan tata krama luhur serta memandu resepsi megah ratusan meja tamu.',
    highlights: [
      'Grand Ballroom Radisson Celebration',
      'Tea Pai Ceremony Pacific Palace',
      'Marriott Waterfront Soiree'
    ],
    languages: ['Bahasa Indonesia', 'Mandarin (Fluent)', 'English'],
    eventsCount: '180+ Pesta Resepsi'
  }
];
