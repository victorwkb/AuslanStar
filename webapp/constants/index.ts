
// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/dictionary', key: 'dictionary', label: 'Dictionary' },
    { href: '/resources', key: 'resources', label: 'Resources' },
    // ... more items
];
// Resource SUB-NAVIGATION
export const RESOURCE_LINKS = [
  { href: '/resources/benefits', key: 'benefits', label: 'Benefits of Learning Auslan' },
  { href: '/resources/support', key: 'support', label: 'Supporting Your Child' },
  { href: '/resources/simulator', key: 'simulator', label: 'Hearing Loss Simulator' },
  // ... more items
];


// FOOTER SECTION
export const FOOTER_LINKS = [
    {
        title: 'About',
        links: [
            { label: 'About Auslan Star', href: '/resources/benefits' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
            { label: 'Terms', href: '/terms' },
        ],
    },
    {
        title: 'Service',
        links: [
            { label: 'Dictionary', href: '/dictionary' },
            { label: 'Simulator', href: '/resources/simulator' },
            { label: 'Handbook', href: '/resources/support' },
        ],
    },
];


export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
        { label: 'Email Officer', value: 'auslanstarservice@gmail.com' },
    ],
};
