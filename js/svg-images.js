/* =========================================
   SVG Image Generator - No Internet Required
   Beautiful gradient + icon-based product images
   ========================================= */

const SVGImages = {
    // Product Images
    headphones: (seed) => createProductSVG('headphones', seed),
    backpack: (seed) => createProductSVG('backpack', seed),
    vase: (seed) => createProductSVG('vase', seed),
    watch: (seed) => createProductSVG('watch', seed),
    shoes: (seed) => createProductSVG('shoes', seed),
    lamp: (seed) => createProductSVG('lamp', seed),
    yoga: (seed) => createProductSVG('yoga', seed),
    speaker: (seed) => createProductSVG('speaker', seed),
    featured: () => createFeaturedSVG(),

    // Category Images
    electronics: () => createCategorySVG('electronics'),
    fashion: () => createCategorySVG('fashion'),
    home: () => createCategorySVG('home'),
    sports: () => createCategorySVG('sports'),
    books: () => createCategorySVG('books'),
    gaming: () => createCategorySVG('gaming'),

    // Other Images
    avatar: (name, color) => createAvatarSVG(name, color),
    blog1: () => createBlogSVG('tech'),
    blog2: () => createBlogSVG('fashion'),
    blog3: () => createBlogSVG('lifestyle'),
    about1: () => createAboutSVG('main'),
    about2: () => createAboutSVG('sub1'),
    about3: () => createAboutSVG('sub2'),
    promo: () => createPromoSVG()
};

function createProductSVG(type, seed = 1) {
    const colors = {
        headphones: ['#6366f1', '#8b5cf6'],
        backpack: ['#ec4899', '#f43f5e'],
        vase: ['#f59e0b', '#eab308'],
        watch: ['#10b981', '#059669'],
        shoes: ['#ef4444', '#dc2626'],
        lamp: ['#06b6d4', '#0891b2'],
        yoga: ['#8b5cf6', '#a855f7'],
        speaker: ['#f97316', '#ea580c']
    };

    const [c1, c2] = colors[type] || ['#6366f1', '#8b5cf6'];

    const icons = {
        headphones: `<g transform="translate(200,200)">
            <path d="M -80,-20 Q -80,-80 0,-80 Q 80,-80 80,-20 L 80,40 Q 80,60 60,60 L 50,60 Q 30,60 30,40 L 30,0 Q 30,-20 50,-20 L 70,-20" fill="white" stroke="${c1}" stroke-width="3"/>
            <rect x="-80" y="-20" width="40" height="70" rx="10" fill="${c2}"/>
            <rect x="40" y="-20" width="40" height="70" rx="10" fill="${c2}"/>
        </g>`,
        backpack: `<g transform="translate(200,220)">
            <rect x="-60" y="-50" width="120" height="130" rx="15" fill="${c2}"/>
            <path d="M -40,-50 Q -40,-90 0,-90 Q 40,-90 40,-50" fill="none" stroke="${c1}" stroke-width="8"/>
            <rect x="-50" y="-30" width="100" height="40" rx="8" fill="${c1}"/>
            <circle cx="0" cy="-10" r="5" fill="white"/>
        </g>`,
        vase: `<g transform="translate(200,250)">
            <path d="M -50,-80 L 50,-80 L 40,-60 L 50,80 L -50,80 L -40,-60 Z" fill="${c2}"/>
            <ellipse cx="0" cy="-80" rx="50" ry="10" fill="${c1}"/>
            <rect x="-60" y="80" width="120" height="15" rx="3" fill="${c1}"/>
        </g>`,
        watch: `<g transform="translate(200,200)">
            <rect x="-50" y="-70" width="100" height="140" rx="20" fill="${c2}"/>
            <rect x="-40" y="-60" width="80" height="120" rx="12" fill="${c1}"/>
            <text x="0" y="0" text-anchor="middle" fill="white" font-size="24" font-weight="bold">${String(seed).padStart(2, '0')}:${String((seed * 7) % 60).padStart(2, '0')}</text>
            <circle cx="0" cy="0" r="3" fill="white"/>
        </g>`,
        shoes: `<g transform="translate(200,220)">
            <path d="M -100,30 Q -100,-30 -60,-40 L 20,-40 Q 80,-40 90,10 L 90,40 Q 90,50 80,50 L -90,50 Q -100,50 -100,40 Z" fill="${c2}"/>
            <path d="M -60,-40 Q -30,-60 20,-50" fill="none" stroke="${c1}" stroke-width="4"/>
            <circle cx="-40" cy="20" r="3" fill="white"/>
            <circle cx="-20" cy="20" r="3" fill="white"/>
            <circle cx="0" cy="20" r="3" fill="white"/>
        </g>`,
        lamp: `<g transform="translate(200,200)">
            <path d="M -60,-60 L 60,-60 L 40,0 L -40,0 Z" fill="${c2}"/>
            <rect x="-3" y="0" width="6" height="80" fill="${c1}"/>
            <rect x="-40" y="80" width="80" height="15" rx="5" fill="${c1}"/>
            <circle cx="0" cy="-30" r="15" fill="white" opacity="0.5"/>
        </g>`,
        yoga: `<g transform="translate(200,250)">
            <rect x="-130" y="-30" width="260" height="60" rx="30" fill="${c2}"/>
            <ellipse cx="-130" cy="0" rx="20" ry="30" fill="${c1}"/>
            <ellipse cx="130" cy="0" rx="20" ry="30" fill="${c1}"/>
            <circle cx="0" cy="-50" r="15" fill="white" opacity="0.3"/>
        </g>`,
        speaker: `<g transform="translate(200,200)">
            <rect x="-70" y="-90" width="140" height="180" rx="20" fill="${c2}"/>
            <circle cx="0" cy="-30" r="40" fill="${c1}"/>
            <circle cx="0" cy="-30" r="30" fill="${c2}"/>
            <circle cx="0" cy="-30" r="10" fill="white"/>
            <circle cx="0" cy="50" r="25" fill="${c1}"/>
            <circle cx="0" cy="50" r="15" fill="${c2}"/>
        </g>`
    };

    const iconSVG = icons[type] || icons.headphones;

    return `data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">
            <defs>
                <linearGradient id="bg-${type}-${seed}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${c1}" stop-opacity="0.2"/>
                    <stop offset="100%" stop-color="${c2}" stop-opacity="0.4"/>
                </linearGradient>
                <radialGradient id="circle-${type}-${seed}">
                    <stop offset="0%" stop-color="${c1}" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="${c2}" stop-opacity="0.1"/>
                </radialGradient>
            </defs>
            <rect width="400" height="400" fill="#f8fafc"/>
            <circle cx="200" cy="200" r="180" fill="url(#circle-${type}-${seed})"/>
            <circle cx="100" cy="100" r="50" fill="${c1}" opacity="0.1"/>
            <circle cx="320" cy="320" r="70" fill="${c2}" opacity="0.1"/>
            <circle cx="350" cy="80" r="30" fill="${c1}" opacity="0.15"/>
            ${iconSVG}
            <text x="200" y="380" text-anchor="middle" fill="${c1}" font-size="14" font-weight="600" opacity="0.6" font-family="Arial">${type.toUpperCase()}</text>
        </svg>
    `)}`;
}

function createFeaturedSVG() {
    return `data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
            <defs>
                <linearGradient id="featured-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3"/>
                    <stop offset="50%" stop-color="#ec4899" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.3"/>
                </linearGradient>
            </defs>
            <rect width="500" height="500" fill="#f8fafc"/>
            <circle cx="250" cy="250" r="220" fill="url(#featured-bg)"/>
            <g transform="translate(250,250)">
                <path d="M -120,-30 Q -120,-120 0,-120 Q 120,-120 120,-30 L 120,60 Q 120,90 90,90 L 75,90 Q 45,90 45,60 L 45,0 Q 45,-30 75,-30 L 105,-30" fill="white" stroke="#6366f1" stroke-width="4"/>
                <rect x="-120" y="-30" width="60" height="105" rx="15" fill="#ec4899"/>
                <rect x="60" y="-30" width="60" height="105" rx="15" fill="#ec4899"/>
                <circle cx="-90" cy="20" r="15" fill="white" opacity="0.4"/>
                <circle cx="90" cy="20" r="15" fill="white" opacity="0.4"/>
            </g>
            <circle cx="80" cy="80" r="40" fill="#fbbf24" opacity="0.2"/>
            <circle cx="430" cy="420" r="60" fill="#10b981" opacity="0.15"/>
            <text x="250" y="470" text-anchor="middle" fill="#6366f1" font-size="16" font-weight="700" opacity="0.6" font-family="Arial">PREMIUM AUDIO</text>
        </svg>
    `)}`;
}

function createCategorySVG(type) {
    const themes = {
        electronics: { c1: '#6366f1', c2: '#818cf8', icon: 'laptop', name: 'ELECTRONICS' },
        fashion: { c1: '#ec4899', c2: '#f472b6', icon: 'shirt', name: 'FASHION' },
        home: { c1: '#f59e0b', c2: '#fbbf24', icon: 'home', name: 'HOME & LIVING' },
        sports: { c1: '#10b981', c2: '#34d399', icon: 'dumbbell', name: 'SPORTS' },
        books: { c1: '#8b5cf6', c2: '#a78bfa', icon: 'book', name: 'BOOKS' },
        gaming: { c1: '#ef4444', c2: '#f87171', icon: 'gamepad', name: 'GAMING' }
    };

    const t = themes[type];
    const icons = {
        laptop: `<rect x="100" y="80" width="200" height="120" rx="8" fill="white" stroke="${t.c1}" stroke-width="3"/><rect x="110" y="90" width="180" height="100" fill="${t.c1}" opacity="0.3"/><rect x="60" y="200" width="280" height="20" rx="5" fill="${t.c2}"/>`,
        shirt: `<path d="M 100,60 L 150,40 L 200,80 L 250,40 L 300,60 L 320,100 L 290,120 L 290,200 L 110,200 L 110,120 L 80,100 Z" fill="white" stroke="${t.c1}" stroke-width="3"/>`,
        home: `<path d="M 100,200 L 100,140 L 200,60 L 300,140 L 300,200 L 240,200 L 240,160 L 160,160 L 160,200 Z" fill="white" stroke="${t.c1}" stroke-width="3"/><rect x="180" y="170" width="40" height="30" fill="${t.c2}"/>`,
        dumbbell: `<rect x="60" y="120" width="40" height="60" rx="5" fill="white" stroke="${t.c1}" stroke-width="3"/><rect x="100" y="140" width="100" height="20" fill="${t.c2}"/><rect x="200" y="120" width="40" height="60" rx="5" fill="white" stroke="${t.c1}" stroke-width="3"/>`,
        book: `<rect x="120" y="60" width="160" height="180" rx="5" fill="white" stroke="${t.c1}" stroke-width="3"/><line x1="200" y1="60" x2="200" y2="240" stroke="${t.c2}" stroke-width="3"/><line x1="140" y1="100" x2="190" y2="100" stroke="${t.c2}" stroke-width="2"/><line x1="140" y1="130" x2="190" y2="130" stroke="${t.c2}" stroke-width="2"/>`,
        gamepad: `<rect x="80" y="100" width="240" height="100" rx="50" fill="white" stroke="${t.c1}" stroke-width="3"/><circle cx="140" cy="150" r="15" fill="${t.c2}"/><circle cx="260" cy="150" r="15" fill="${t.c2}"/><rect x="150" y="145" width="20" height="10" fill="${t.c1}"/>`
    };

    return `data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 400 300">
            <defs>
                <linearGradient id="cat-${type}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${t.c1}" stop-opacity="0.3"/>
                    <stop offset="100%" stop-color="${t.c2}" stop-opacity="0.5"/>
                </linearGradient>
            </defs>
            <rect width="400" height="300" fill="url(#cat-${type})"/>
            <circle cx="50" cy="50" r="30" fill="white" opacity="0.2"/>
            <circle cx="350" cy="250" r="50" fill="white" opacity="0.15"/>
            <g transform="translate(0,20)">${icons[t.icon]}</g>
            <text x="200" y="280" text-anchor="middle" fill="${t.c1}" font-size="14" font-weight="700" opacity="0.7" font-family="Arial">${t.name}</text>
        </svg>
    `)}`;
}

function createAvatarSVG(name, color = '#6366f1') {
    const initial = name.charAt(0).toUpperCase();
    const colors = ['#6366f1', '#ec4899', '#f59e0b', '#10b981', '#8b5cf6', '#ef4444'];
    const c = color || colors[name.charCodeAt(0) % colors.length];

    return `data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="av-${name}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${c}"/>
                    <stop offset="100%" stop-color="${c}" stop-opacity="0.7"/>
                </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="50" fill="url(#av-${name})"/>
            <circle cx="50" cy="38" r="16" fill="white" opacity="0.95"/>
            <path d="M 20,90 Q 20,60 50,60 Q 80,60 80,90 Z" fill="white" opacity="0.95"/>
            <text x="50" y="55" text-anchor="middle" fill="${c}" font-size="20" font-weight="700" font-family="Arial" opacity="0">${initial}</text>
        </svg>
    `)}`;
}

function createBlogSVG(type) {
    const themes = {
        tech: { c1: '#6366f1', c2: '#8b5cf6', title: 'SMART HOME 2026', subtitle: 'Future Technology' },
        fashion: { c1: '#ec4899', c2: '#f472b6', title: 'FASHION TRENDS', subtitle: 'Style Guide' },
        lifestyle: { c1: '#10b981', c2: '#34d399', title: 'SUSTAINABLE LIVING', subtitle: 'Eco-Friendly' }
    };

    const t = themes[type];

    return `data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
            <defs>
                <linearGradient id="blog-${type}" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="${t.c1}"/>
                    <stop offset="100%" stop-color="${t.c2}"/>
                </linearGradient>
            </defs>
            <rect width="600" height="400" fill="url(#blog-${type})"/>
            <circle cx="100" cy="80" r="60" fill="white" opacity="0.1"/>
            <circle cx="500" cy="320" r="100" fill="white" opacity="0.1"/>
            <circle cx="450" cy="100" r="40" fill="white" opacity="0.15"/>
            <rect x="200" y="160" width="200" height="120" rx="10" fill="white" opacity="0.2"/>
            <rect x="220" y="180" width="160" height="80" rx="5" fill="white" opacity="0.3"/>
            <text x="300" y="80" text-anchor="middle" fill="white" font-size="32" font-weight="800" font-family="Arial">${t.title}</text>
            <text x="300" y="110" text-anchor="middle" fill="white" font-size="16" font-weight="400" font-family="Arial" opacity="0.9">${t.subtitle}</text>
        </svg>
    `)}`;
}

function createAboutSVG(type) {
    if (type === 'main') {
        return `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="600" height="700" viewBox="0 0 600 700">
                <defs>
                    <linearGradient id="about-main" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#6366f1"/>
                        <stop offset="100%" stop-color="#ec4899"/>
                    </linearGradient>
                </defs>
                <rect width="600" height="700" fill="url(#about-main)"/>
                <circle cx="150" cy="150" r="100" fill="white" opacity="0.15"/>
                <circle cx="450" cy="550" r="150" fill="white" opacity="0.1"/>
                <rect x="200" y="250" width="200" height="200" rx="20" fill="white" opacity="0.2"/>
                <circle cx="300" cy="350" r="60" fill="white" opacity="0.3"/>
                <path d="M 250,300 L 350,300 L 370,350 L 350,400 L 250,400 L 230,350 Z" fill="white" opacity="0.4"/>
                <text x="300" y="600" text-anchor="middle" fill="white" font-size="32" font-weight="800" font-family="Arial">ShopHub Store</text>
                <text x="300" y="640" text-anchor="middle" fill="white" font-size="16" font-weight="400" font-family="Arial" opacity="0.9">Premium Shopping Experience</text>
            </svg>
        `)}`;
    } else if (type === 'sub1') {
        return `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                <defs>
                    <linearGradient id="about-sub1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#f59e0b"/>
                        <stop offset="100%" stop-color="#ef4444"/>
                    </linearGradient>
                </defs>
                <rect width="300" height="300" fill="url(#about-sub1)"/>
                <circle cx="80" cy="80" r="50" fill="white" opacity="0.2"/>
                <rect x="100" y="100" width="100" height="100" rx="10" fill="white" opacity="0.3"/>
                <text x="150" y="270" text-anchor="middle" fill="white" font-size="14" font-weight="700" font-family="Arial">QUALITY</text>
            </svg>
        `)}`);
    } else {
        return `data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
                <defs>
                    <linearGradient id="about-sub2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#10b981"/>
                        <stop offset="100%" stop-color="#06b6d4"/>
                    </linearGradient>
                </defs>
                <rect width="300" height="300" fill="url(#about-sub2)"/>
                <circle cx="220" cy="220" r="60" fill="white" opacity="0.2"/>
                <path d="M 150,80 L 200,130 L 200,200 L 150,250 L 100,200 L 100,130 Z" fill="white" opacity="0.3"/>
                <text x="150" y="280" text-anchor="middle" fill="white" font-size="14" font-weight="700" font-family="Arial">TRUST</text>
            </svg>
        `)}`);
    }
}

function createPromoSVG() {
    return `data:image/svg+xml;utf8,${encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="500" height="400" viewBox="0 0 500 400">
            <defs>
                <linearGradient id="promo-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#fbbf24"/>
                    <stop offset="100%" stop-color="#f59e0b"/>
                </linearGradient>
            </defs>
            <rect width="500" height="400" fill="url(#promo-bg)"/>
            <circle cx="100" cy="100" r="60" fill="white" opacity="0.2"/>
            <circle cx="400" cy="300" r="80" fill="white" opacity="0.15"/>
            <text x="250" y="180" text-anchor="middle" fill="white" font-size="72" font-weight="900" font-family="Arial">50%</text>
            <text x="250" y="230" text-anchor="middle" fill="white" font-size="28" font-weight="700" font-family="Arial">OFF</text>
            <text x="250" y="280" text-anchor="middle" fill="white" font-size="16" font-weight="400" font-family="Arial" opacity="0.95">Limited Time Offer</text>
            <rect x="150" y="320" width="200" height="40" rx="20" fill="white"/>
            <text x="250" y="345" text-anchor="middle" fill="#f59e0b" font-size="14" font-weight="700" font-family="Arial">CLAIM NOW</text>
        </svg>
    `)}`;
}

// Make it globally available
window.SVGImages = SVGImages;
