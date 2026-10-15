export type NavItem = {
  label: string
  href: string
  children?: NavItem[]
}

export const PHONE_DISPLAY = '+1 (818) 23 45 678'
export const PHONE_HREF = 'tel:0018182345678'

export const NAV: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Blog', href: '#blog' },
  {
    label: 'Pages',
    href: '#pages',
    children: [
      { label: 'Shop', href: '#shop' },
      { label: 'Cart', href: '#cart' },
      { label: 'Wishlist', href: '#wishlist' },
      { label: 'My account', href: '#account' },
      { label: 'Submenu example', href: '#submenu' },
      {
        label: 'Dropdown menu',
        href: '#dropdown',
        children: [
          { label: 'Submenu 1', href: '#submenu-1' },
          { label: 'Submenu 2', href: '#submenu-2' },
        ],
      },
    ],
  },
  { label: 'Contact', href: '#quote' },
]

export type SocialName = 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube'

export const SOCIALS: { label: string; href: string; icon: SocialName }[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/XtraTheme', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com/Xtra_Theme', icon: 'twitter' },
  { label: 'Instagram', href: 'https://www.instagram.com/XtraTheme/', icon: 'instagram' },
  { label: 'Linkedin', href: '#linkedin', icon: 'linkedin' },
]

export const FOOTER_SOCIALS: { label: string; href: string; icon: SocialName }[] = [
  { label: 'Facebook', href: '#facebook', icon: 'facebook' },
  { label: 'Twitter', href: '#twitter', icon: 'twitter' },
  { label: 'Instagram', href: '#instagram', icon: 'instagram' },
  { label: 'Youtube', href: '#youtube', icon: 'youtube' },
]

export const TRENDING_SEARCHES = ['place', 'silence', 'create', 'logo', 'like']

export const HERO_SLIDE_ONE = {
  kicker: 'Why choose us?',
  titleLines: ['START', 'NEW'],
  titleAccent: 'PROJECTS',
  text: ['Don’t get framed by the competition,', 'trust our solid reputation.'],
  videoLabel: 'Watch video',
  videoTitle: 'Why choose us?',
  videoHref: 'https://www.youtube.com/watch?v=FyS_zcvmUr4',
  image: '/images/man-model.png',
}

export const HERO_SLIDE_TWO = {
  background: '/images/slide-2.jpg',
  top: 'Committed to superior quality and results',
  bottom: "We'll get it done, like us there are none",
}

export const FEATURES = [
  {
    title: 'Building Engineering',
    image: '/images/service-1.jpg',
    body: 'A Building Engineer is recognised as being expert in the use of technology for the design, construction, assessment and maintenance of the built environment.',
  },
  {
    title: 'Safety First',
    image: '/images/service-2.jpg',
    body: 'Safety First explores the challenges at the heart of needlestick and sharps safety and highlights promising efforts to ensure patient and health care worker safety in hospitals.',
  },
  {
    title: 'Road Construction',
    image: '/images/service-3.jpg',
    body: 'The construction of a new road whether from asphalt or concrete requires the production of an bonded pavement structure, beginning with a stable base.',
  },
]

export const ABOUT_POINTS = [
  'Excellent engineering',
  'Modern & up to date',
  'Grade #1 materials',
  'Structures with long life',
]

export const SERVICES = [
  {
    icon: '/images/s1.png',
    title: 'Building',
    body: 'A building, or edifice, is a structure with a roof and walls standing.',
  },
  {
    icon: '/images/s2.png',
    title: 'Road Construction',
    body: 'Road construction involves the use of asphalt, liquid asphalt, concrete, soil stabilization, rebar, paving and pavement recycling machines, and other road repair materials.',
  },
  {
    icon: '/images/s3.png',
    title: 'Maintenance',
    body: 'All are assigned responsibilities relate to the maintenance mode.',
  },
]

export const PROCESS_STEPS = [
  { number: '01', title: 'Agency / Bidding', body: 'Ensure design documents are reviewed and permitted' },
  { number: '02', title: 'Construction', body: 'Helps to coordinate furnishings and move-in process' },
  { number: '03', title: 'Project Execution', body: 'Client directs move in of equipment, operations & staff' },
]

export const PROJECTS = [
  {
    title: 'Riverview Green Building',
    cats: 'Building, Road Construction',
    image: '/images/portfolio/personal_gift-1.jpg',
  },
  {
    title: 'The Langham Hotel',
    cats: 'Building, Construction',
    image: '/images/portfolio/tick_tock-1-1.jpg',
  },
  {
    title: 'Villa Rustica Renovation',
    cats: 'Construction, Road Construction',
    image: '/images/portfolio/portfolio9-1.jpg',
  },
  {
    title: 'Land Rustica Renovation',
    cats: 'Building, Maintenance',
    image: '/images/portfolio/portfolio10-1.jpg',
  },
  {
    title: 'Kitchen And Living Room',
    cats: 'Architecture, Building',
    image: '/images/portfolio/portfolio2-1.jpg',
  },
  {
    title: 'House Under The Palms',
    cats: 'Construction, Road Construction',
    image: '/images/portfolio/portfolio3-1.jpg',
  },
  {
    title: 'Green House',
    cats: 'Construction, Road Construction',
    image: '/images/portfolio/portfolio6-1.jpg',
  },
  {
    title: 'Inside renovation',
    cats: 'Construction, Road Construction',
    image: '/images/portfolio/portfolio7-1.jpg',
  },
]

export const DEPARTMENTS = [
  'Business Departemant',
  'Personal Departemant',
  'Support Departemant',
  'Others',
]

export const TESTIMONIALS = [
  {
    quote:
      '"Great Experience!! Michael has made the whole process easy from the planning stage to the final plant going in. Steve & his crew did a great job. I felt like Lavish Gardens really listened to what I wanted, gave me ideas, and helped me decide how to make my backyard a place to relax and enjoy the view.',
    author: '- Richard Dowson',
    avatar: '/images/team1.jpg',
  },
  {
    quote:
      '“I just wanted to say thank you to all of you for being so fun to work with and being rock stars with the best attitudes EVER on this 16th floor build for SPS. It means a great deal to me that you all come to the table every week with smiles on your faces and ready to solve whatever issue.”',
    author: '- Lisa Jordan',
    avatar: '/images/team2.jpg',
  },
  {
    quote:
      '"Greiner has been a critical partner to us on the redevelopment of West End Center Office Park. The team of project managers, supervisors, and their support teams can’t be rivaled by any other contractor I have worked with over the past 15 years."',
    author: '- Michael Anderson',
    avatar: '/images/team3.jpg',
  },
]

/* Order mirrors the reference layout, which is not the file numbering. */
export const CLIENT_LOGOS = [
  { src: '/images/logo-4.png', alt: 'Logo 4' },
  { src: '/images/logo-5.png', alt: 'Logo 5' },
  { src: '/images/logo-3.png', alt: 'Logo 3' },
  { src: '/images/logo-1.png', alt: 'Logo 1' },
  { src: '/images/logo-2.png', alt: 'Logo 2' },
]

export const FOOTER_LINKS = [
  { label: 'Contact Us', href: '#quote' },
  { label: 'About', href: '#about' },
  { label: 'Privacy Policy', href: '#privacy' },
]

export const FOOTER_ABOUT = [
  'A company is any entity that engages in business.',
  'Companies can be structured in different ways.',
  'For example, your company can be a sole proprietorship,',
  'a partnership, or a corporation.',
]
