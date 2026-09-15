export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content: string;
}

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'pelantikan-pengurus-2025-2030',
    title: 'Pelantikan Kepengurusan SWARA Kota Batam Periode 2025–2030 oleh Wali Kota Amsakar Achmad',
    category: 'SEREMONIAL RESMI',
    date: '18 November 2025',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
    summary: 'Wali Kota Batam, Amsakar Achmad, secara resmi melantik kepengurusan SWARA Kota Batam di bawah kepemimpinan Maharani Purba (MC Rancezzz) sebagai mitra strategis pemerintah daerah.',
    content: 'SWARA (Solidaritas Pembawa Acara) Kota Batam secara resmi mengukuhkan kepengurusan baru periode 2025–2030. Pelantikan dipimpin langsung oleh Wali Kota Batam, Amsakar Achmad, dan dihadiri oleh Kepala Dinas Kebudayaan dan Pariwisata (Disbudpar) Kota Batam, Ardiwinata. Dalam sambutannya, Wali Kota menekankan peran vital MC sebagai juru bicara peradaban dan citra Kota Batam di mata dunia.'
  },
  {
    id: 'workshop-protokoler-2026',
    title: 'Workshop Standarisasi Etika Panggung & Protokoler Kenegaraan',
    category: 'PELATIHAN & KOMPETENSI',
    date: '15 Januari 2026',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
    summary: 'SWARA Batam menggelar pelatihan intensif penguatan kapasitas publik speaking dan etika protokoler formal untuk seluruh anggota terverifikasi.',
    content: 'Mengangkat tema "Presisi Diksi dan Keagungan Panggung", workshop ini menghadirkan narasumber dari protokoler kenegaraan dan akademisi komunikasi. Pelatihan difokuskan pada penguasaan skenario darurat, diksi bahasa resmi, serta tata cara menyambut tamu VVIP nasional dan internasional.'
  },
  {
    id: 'mice-expo-batam-2026',
    title: 'SWARA Batam Siap Sukseskan Perhelatan MICE & Pariwisata Kepri 2026',
    category: 'AGENDA MICE',
    date: '20 Februari 2026',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    summary: 'Sinergi SWARA Batam bersama asosiasi event organizer dan perhotelan bintang 5 dalam menyediakan MC bilingual untuk event internasional.',
    content: 'Menghadapi tingginya lonjakan event MICE dan gala dinner internasional di Batam & Bintan, SWARA menyyiapkan direktori MC bilingual berlisensi yang dapat diakses secara transparan oleh para penyelenggara acara.'
  }
];
