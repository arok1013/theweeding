export const weddingConfig = {
  groom: {
    name: 'Arga',
    fullName: 'Arga Pratama',
    parentName: 'Putra Bapak Surya & Ibu Melati',
    birthInfo: 'Lahir di Jakarta, 12 Juni 2000',
    photo:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=700&q=82',
    instagram: 'https://instagram.com/'
  },
  bride: {
    name: 'Nadia',
    fullName: 'Nadia Maharani',
    parentName: 'Putri Bapak Hasan & Ibu Kirana',
    birthInfo: 'Lahir di Bandung, 18 Februari 2001',
    photo:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=82',
    instagram: 'https://instagram.com/'
  },
  weddingDate: '2026-06-08T09:00:00+07:00',
  akad: {
    label: 'Akad Nikah',
    date: '2026-06-08',
    time: '09.00 - 11.00 WIB',
    location: 'Masjid Raya Al-Mahabbah',
    address: 'Jl. Kemang Raya No. 21, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=Masjid+Raya+Al-Mahabbah',
    embedUrl: 'https://www.google.com/maps?q=Jakarta%20Selatan&output=embed'
  },
  resepsi: {
    label: 'Resepsi Pernikahan',
    date: '2026-06-08',
    time: '12.30 - 15.00 WIB',
    location: 'The Garden Hall',
    address: 'Jl. Pangeran Antasari No. 88, Jakarta Selatan',
    mapsUrl: 'https://maps.google.com/?q=The+Garden+Hall+Jakarta',
    embedUrl: 'https://www.google.com/maps?q=Antasari%20Jakarta%20Selatan&output=embed'
  },
  photos: [
    {
      src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
      caption: 'Awal cerita yang sederhana'
    },
    {
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      caption: 'Berjalan bersama'
    },
    {
      src: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hari yang dinanti'
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
      caption: 'Janji untuk pulang'
    },
    {
      src: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Doa keluarga'
    },
    {
      src: 'https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21e?auto=format&fit=crop&w=1200&q=80',
      caption: 'Sampai nanti'
    }
  ],
  loveStory: [
    {
      title: 'First Meeting',
      date: '20 September 2021',
      description:
        'Pertemuan pertama yang sederhana menjadi awal dari obrolan panjang dan cerita yang tumbuh perlahan.',
      image:
        'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Started Dating',
      date: '4 Juni 2022',
      description:
        'Dari saling mengenal, kami belajar saling menjaga dan memilih berjalan bersama.',
      image:
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Engagement',
      date: '10 September 2024',
      description:
        'Dengan restu keluarga, kami mengikat niat untuk melangkah ke babak yang lebih serius.',
      image:
        'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Wedding Day',
      date: '8 Juni 2026',
      description:
        'Hari saat doa, keluarga, dan cinta menjadi satu dalam janji untuk saling pulang.',
      image:
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=500&q=80'
    }
  ],
  preweddingVideo: {
    title: 'Video Prewedding',
    description: 'Sepenggal cerita kami sebelum hari bahagia.',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  quote:
    'Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup agar kamu merasa tenteram kepadanya.',
  quoteSource: 'QS. Ar-Rum: 21',
  sheetsEndpoint: import.meta.env.VITE_SHEETS_ENDPOINT || import.meta.env.REACT_APP_SHEETS_ENDPOINT || ''
};

export const formatDate = (date) =>
  new Intl.DateTimeFormat('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
