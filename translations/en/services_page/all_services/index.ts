export default {
  services: [
    {
        name: 'Social benefits Netherlands',
        description: 'We help in obtaining the highest possible social benefits in the Netherlands.',
        category: 'benefits',
        img: '/img/header-benefits.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Social benefits Germany',
        description: 'We offer assistance in obtaining social benefits in Germany.',
        category: 'benefits',
        img: '/img/image-benefits.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Financial subsidies',
        description: 'We offer assistance in obtaining due or returning unduly collected subsidies in the Netherlands',
        category: 'subsidies',
        img: '/img/header-subsidies.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Business administration Poland',
        description: 'We keep accounting for companies in Poland.',
        category: 'administration',
        img: '/img/header-2.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Business administration Netherlands',
        description: 'Accounting, consulting and support for entrepreneurs in the Netherlands',
        category: 'administration',
        img: '/img/header-administration.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Tax settlement Poland',
        description: 'Online Podatki settles taxes from companies and individuals',
        category: 'taxes',
        img: '/img/header-taxes.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Tax settlement Netherland',
        description: 'We settle taxes for companies and individual clients in the Netherlands',
        category: 'taxes',
        img: '/img/image-taxes.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Tax settlement Germany',
        description: 'We provide tax settlements for individuals and companies in Germany',
        category: 'taxes',
        img: '/img/header-1.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    },
    {
        name: 'Tax settlement Belgium',
        description: 'We settle taxes for companies and individual clients in Belgium',
        category: 'taxes',
        img: '/img/header-3.jpg',
        id: Math.floor(Math.random() * 1000000).toFixed(0)
    }
  ],
  categories: [
     {
        id: 1,
        type: 'benefits',
        display: 'Benefits'
    },
    {
        id: 2,
        type: 'subsidies',
        display: 'Subsidies'
    },
    {
        id: 3,
        type: 'administration',
        display: 'Administration'
    },
    {
        id: 4,
        type: 'taxes',
        display: 'Taxes'
    }
  ]
}