// Data contoh untuk demo tampilan — meniru data awal (seeder) aplikasi asli.
// Halaman ini statis: tidak ada server, database, atau proses booking sungguhan.

const CATEGORIES = [
    { slug: 'kamera', name: 'Kamera', icon: 'camera' },
    { slug: 'lensa', name: 'Lensa', icon: 'eye' },
    { slug: 'tripod-stabilizer', name: 'Tripod & Stabilizer', icon: 'cube' },
    { slug: 'iphone-ponsel', name: 'iPhone & Ponsel', icon: 'device-phone-mobile' },
    { slug: 'proyektor', name: 'Proyektor', icon: 'tv' },
    { slug: 'audio', name: 'Audio', icon: 'speaker-wave' },
    { slug: 'lighting', name: 'Lighting', icon: 'light-bulb' },
    { slug: 'drone', name: 'Drone', icon: 'signal' },
    { slug: 'aksesoris', name: 'Aksesoris', icon: 'cube' },
];

const CHECKLISTS = {
    kamera: [
        ['Body kamera', 1], ['Baterai', 2], ['Charger baterai', 1],
        ['Kabel data', 1], ['Strap', 1], ['Body cap', 1], ['Flash', 1],
    ],
    lensa: [
        ['Lensa', 1], ['Lens cap depan', 1], ['Lens cap belakang', 1],
        ['Lens hood', 1], ['Pouch lensa', 1],
    ],
    'tripod-stabilizer': [
        ['Tripod', 1], ['Kepala tripod (head)', 1], ['Quick release plate', 1], ['Tas tripod', 1],
    ],
    'iphone-ponsel': [
        ['Unit iPhone', 1], ['Kabel charger', 1], ['Adaptor charger', 1], ['Case pelindung', 1], ['Kotak', 1],
    ],
    proyektor: [
        ['Unit proyektor', 1], ['Kabel power', 1], ['Kabel HDMI', 1], ['Remote', 1], ['Tas proyektor', 1],
    ],
    audio: [
        ['Unit utama', 1], ['Kabel audio', 1], ['Baterai', 2], ['Windscreen', 1], ['Tas atau pouch', 1],
    ],
    lighting: [
        ['Lampu', 1], ['Adaptor power', 1], ['Stand lampu', 1], ['Softbox atau reflektor', 1], ['Tas lampu', 1],
    ],
    drone: [
        ['Drone', 1], ['Baterai', 3], ['Remote controller', 1], ['Charger', 1],
        ['Baling-baling cadangan', 4], ['Tas drone', 1],
    ],
};

const PRODUCTS = [
    {
        slug: 'canon-eos-m50-mark-ii', name: 'Canon EOS M50 Mark II', brand: 'Canon', category: 'kamera',
        price: 150000, readyUnits: 2, image: 'assets/img/canon-eos-m50-mark-ii.jpg',
        description: 'Mirrorless APS-C andalan untuk foto dan live streaming, layar bisa diputar ke depan, autofocus cepat untuk vlog maupun foto harian.',
    },
    {
        slug: 'sony-a6400-body', name: 'Sony A6400 Body', brand: 'Sony', category: 'kamera',
        price: 200000, readyUnits: 1, image: 'assets/img/sony-a6400-body.jpg',
        description: 'Mirrorless APS-C dengan autofocus real-time tracking, cocok untuk event, produk, dan konten cepat gerak.',
    },
    {
        slug: 'canon-ef-m-15-45mm', name: 'Canon EF-M 15-45mm f/3.5-6.3', brand: 'Canon', category: 'lensa',
        price: 50000, readyUnits: 2, image: 'assets/img/canon-ef-m-15-45mm.jpg',
        description: 'Lensa kit serbaguna untuk mount Canon EF-M, ringan dan cocok dipakai harian dari lanskap sampai potret.',
    },
    {
        slug: 'sigma-30mm-f14-dc-dn', name: 'Sigma 30mm f/1.4 DC DN', brand: 'Sigma', category: 'lensa',
        price: 80000, readyUnits: 1, image: 'assets/img/sigma-30mm-f14-dc-dn.jpg',
        description: 'Lensa prime bukaan lebar untuk potret dan video dengan latar blur lembut, tajam di tengah bukaan maksimal.',
    },
    {
        slug: 'tripod-manfrotto-compact', name: 'Tripod Manfrotto Compact', brand: 'Manfrotto', category: 'tripod-stabilizer',
        price: 40000, readyUnits: 3, image: 'assets/img/tripod-manfrotto-compact.jpg',
        description: 'Tripod ringkas dan ringan, mudah dibawa untuk shooting di luar maupun dalam studio.',
    },
    {
        slug: 'iphone-15-pro-256gb', name: 'iPhone 15 Pro 256GB', brand: 'Apple', category: 'iphone-ponsel',
        price: 250000, readyUnits: 2, image: 'assets/img/iphone-15-pro-256gb.jpg',
        description: 'Kamera utama untuk konten vertikal dan sinematik, cocok untuk kebutuhan shooting cepat tanpa setup rumit.',
    },
    {
        slug: 'iphone-13-128gb', name: 'iPhone 13 128GB', brand: 'Apple', category: 'iphone-ponsel',
        price: 150000, readyUnits: 2, image: 'assets/img/iphone-13-128gb.jpg',
        description: 'Pilihan hemat untuk kebutuhan dokumentasi harian dan konten media sosial.',
    },
    {
        slug: 'proyektor-epson-eb-x06', name: 'Proyektor Epson EB-X06', brand: 'Epson', category: 'proyektor',
        price: 150000, readyUnits: 2, image: 'assets/img/proyektor-epson-eb-x06.jpg',
        description: 'Proyektor terang untuk presentasi dan nonton bareng, mudah disambungkan lewat HDMI.',
    },
    {
        slug: 'rode-wireless-go-ii', name: 'Rode Wireless GO II', brand: 'Rode', category: 'audio',
        price: 100000, readyUnits: 2, image: 'assets/img/rode-wireless-go-ii.jpg',
        description: 'Mic wireless dua kanal, ringkas dan suara bersih untuk interview maupun konten lapangan.',
    },
    {
        slug: 'godox-sl60w-led', name: 'Godox SL60W LED', brand: 'Godox', category: 'lighting',
        price: 90000, readyUnits: 2, image: 'assets/img/godox-sl60w-led.jpg',
        description: 'Lampu LED kontinu untuk video dan foto produk, daya terang stabil dengan kontrol kecerahan.',
    },
    {
        slug: 'dji-mini-3-fly-more', name: 'DJI Mini 3 Fly More', brand: 'DJI', category: 'drone',
        price: 300000, readyUnits: 1, image: null,
        description: 'Drone ringan di bawah 249 gram dengan paket baterai tambahan, untuk video udara yang halus.',
    },
];

function categoryOf(slug) {
    return CATEGORIES.find((c) => c.slug === slug);
}

function productOf(slug) {
    return PRODUCTS.find((p) => p.slug === slug);
}

function rupiah(amount) {
    return 'Rp' + Math.round(amount).toLocaleString('id-ID');
}

/** Toast singkat untuk aksi yang sengaja tidak aktif di demo ini. */
function demoToast(message) {
    const existing = document.getElementById('demo-toast');
    if (existing) existing.remove();

    const el = document.createElement('div');
    el.id = 'demo-toast';
    el.className = 'fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-white shadow-lg';
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2600);
}

function inert(selector, message) {
    document.querySelectorAll(selector).forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            demoToast(message || 'Ini demo tampilan — fitur ini tidak aktif.');
        });
    });
}
