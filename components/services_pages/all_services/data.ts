export const categories = [
    {
        id: 1,
        type: 'benefits',
        display: 'Zasiłki'
    },
    {
        id: 2,
        type: 'subsidies',
        display: 'Dotacje'
    },
    {
        id: 3,
        type: 'administration',
        display: 'Administracja'
    },
    {
        id: 4,
        type: 'taxes',
        display: 'Podatki'
    }
];

export const projects = [
    {
        name: 'Zasiki socjalne Holandia',
        description: 'Pomagamy w uzyskaniu jak największych świadczeń socjalnych na terenie Holandii.',
        category: 'benefits',
        img: '/img/header-benefits.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Zasiki socjalne Niemcy',
        description: 'Oferujemy pomoc w uzyskaniu świadczeń socjalnych na terenie Niemiec.',
        category: 'benefits',
        img: '/img/image-benefits.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Dotacje finansowe',
        description: 'Oferujemy pomoc w uzyskaniu należnych lub zwrocie nienależnie pobranych dodatków na terenie Holandii',
        category: 'subsidies',
        img: '/img/header-subsidies.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Aministracja firm Polska',
        description: 'Prowadzimy księgowość firm w Polsce.',
        category: 'administration',
        img: '/img/header-2.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Aministracja firm Holandia',
        description: 'Księgowość, doradztwo i wsparcie dla przedsiębiorców na terenie Holandii',
        category: 'administration',
        img: '/img/header-administration.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Rozliczanie podatków Polska',
        description: 'Online Podatki rozlicza z podatków firmy i osoby prywatne',
        category: 'taxes',
        img: '/img/header-taxes.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Rozliczanie podatków Holandia',
        description: 'Rozliczamy z podatków firmy i indywidualnych klientów w Holandii',
        category: 'taxes',
        img: '/img/image-taxes.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Rozliczanie podatków Niemcy',
        description: 'Prowadzimy rozliczenia podatkowe osób prywatnych i firm w Niemczech',
        category: 'taxes',
        img: '/img/header-1.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Rozliczanie podatków Belgia',
        description: 'Rozliczamy z podatków firmy i klientów indywidualnych  w Belgii',
        category: 'taxes',
        img: '/img/header-3.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    }
];