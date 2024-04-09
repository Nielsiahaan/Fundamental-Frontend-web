import './blog-list.js';
import './blog-item.js';

const blogs = [
  {
    id: 1,
    title: 'Cara Memulai Belajar Pemrograman',
    shortDescription: 'Panduan untuk pemula yang ingin memulai belajar pemrograman.',
  },
  {
    id: 2,
    title: 'Tips Efektif dalam Pengembangan Web',
    shortDescription: 'Tips dan trik untuk menjadi pengembang web yang lebih baik.',
  },
  {
    id: 3,
    title: 'Mengenal Konsep Web Component',
    shortDescription:
      'Pengenalan singkat tentang Web Component dan komponen-komponennya.',
  },
  {
    id: 4,
    title: 'Mengenal Konsep React.js',
    shortDescription: 'Pengenalan singkat tentang React.js dan komponen-komponennya.',
  },
  {
    id: 5,
    title: 'Panduan Penggunaan Vue.js',
    shortDescription: 'Pengenalan singkat tentang Vue.js dan komponen-komponennya.',
  },
  {
    id: 6,
    title: 'Belajar Bahasa Pemrograman Python',
    shortDescription: 'Cara mudah memulai belajar bahasa pemrograman Python.',
  },
];

const blogListEl = document.querySelector('blog-list');
blogListEl.setBlogList(blogs);
