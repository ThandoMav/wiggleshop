import { FiSend } from 'react-icons/fi';

import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
// import icons
import { BsChatDotsFill } from 'react-icons/bs';
import bcrypt from 'bcryptjs';
//import LogoV2 from '/salon/logo.png';

export const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com ',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      price: 70,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      price: 80,
      brand: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
    {
      name: 'Slim Shirt',
      slug: 'slim-shirt',
      category: 'Shirts',
      image: '/images/shirt3.jpg',
      price: 90,
      brand: 'Raymond',
      rating: 4.5,
      numReviews: 3,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: 'Golf Pants',
      slug: 'golf-pants',
      category: 'Pants',
      image: '/images/pants1.jpg',
      price: 90,
      brand: 'Oliver',
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: 'Smart looking pants',
    },
    {
      name: 'Fit Pants',
      slug: 'fit-pants',
      category: 'Pants',
      image: '/images/pants2.jpg',
      price: 95,
      brand: 'Zara',
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: 'A popular pants',
    },
    {
      name: 'Classic Pants',
      slug: 'classic-pants',
      category: 'Pants',
      image: '/images/pants3.jpg',
      price: 75,
      brand: 'Casely',
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: 'A popular pants',
    },
  ],
  categories: [
    {
      name: 'Facials That Glow',
      slug: '/search-best-doctors',
      category: 'Shirts',
      image: '/salon/facial.png',
    },
    {
      name: 'Massage Therapy for Total Relaxation',
      slug: '/search-best-doctors',
      category: 'Shirts',
      image: '/salon/massage.png',
    },
    {
      name: 'Pedicures and Manicures – Perfectly Polished',
      slug: '/search-best-doctors',
      category: 'Shirts',
      image: '/salon/pedicure.png',
    },
    {
      name: 'Smooth Skin with Waxing and Tinting',
      slug: '/search-best-doctors',
      category: 'Pants',
      image: '/salon/skin.png',
    },
    {
      name: 'Luscious Nails & Lash Extensions',
      slug: '/search-best-doctors',
      category: 'Pants',
      image: '/salon/nail.png',
    },
    
  ],
  freebies: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      tag: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
  ],
  services: [
    {
      name: 'Free Shirt',
      slug: 'free-shirt',
      category: 'Shirts',
      image: '/images/shirt1.jpg',
      tag: 'Nike',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner1.jpg',
    },
    {
      name: 'Fit Shirt',
      slug: 'fit-shirt',
      category: 'Shirts',
      image: '/images/shirt2.jpg',
      tag: 'Adidas',
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: 'A popular shirt',
      isFeatured: true,
      banner: '/images/banner2.jpg',
    },
  ],
};

export const header = {
  logo: '/salon/logoWhite.png',
  logoV2: '/salon/logo.png',
  btnLoginText: 'Log in',
  btnSignupText: 'Sign Up',
};


export const nav = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about-us' },
  { name: ' Products  ', href: '/search' },
  { name: 'Treatments', href: '/search-services' },
  { name: 'Posts', href: '/search-posts' },
  { name: 'Contact', href: '/contact' },
];

export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'What we do',
    href: 'skills',
  },
  {
    name: 'Our team',
    href: 'team',
  },
  {
    name: 'Contact us',
    href: 'contact',
  },
];

export const product = {
  title: 'The Product we work with.',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: FaPlay,
      title: 'Cross platform',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: FaPlay,
      title: 'Cloud server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: FaPlay,
      title: 'Pure Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
};

export const banner = {
  titlePart1: 'I code flexible Web Applications',
  titlePart2: '– For RSA Doctors.',
  subtitle:
    'I digitize and automate your medical practice, enabling you to attract more patients.',
  textBtn: 'Consult Now',
  //img: '/img/banner/banner.png',
  img: '/img/banner/bannerr.jpg',
};
export const bannerBeauty = {
  titlePart1: 'Unleash Your Radiance at',
  titlePart2: 'Energizing Beauty!',
  subtitle:
    ' Glow Everyday with our day-to-day beauty treatments including facials, massages, nails, waxing, and more in Nelspruit, Mbombela.',
  textBtn: 'Consult Now',
  //img: '/img/banner/banner.png',
  img: '/img/banner/bannerr.jpg',
};

export const reservationData = {
  title: 'booking form',
  subtitle:
    'Call (800) 123-4567 from 5AM - 11PM daily, or book online with OpenTable.Reservations required for parties of 6 or more.',
  modelImg: '/img/model-black.png',
  btnText: 'make a reservation',
};

export const about = {
  icon: '/img/about/icons/users-icn.svg',
  title: 'Our misson',
  subtitle1:
    'This is where innovation, faith, and excellence meet.I specialize in creating high-ranking, SEO-optimized web apps, automated business solutions, and strategic marketing services that help medical professionals achieve growth and financial freedom.',
  subtitle2:
    'My mission is deeply rooted in my faith in Jesus Christ, making God the cornerstone of everything we do.',
  link: 'More about me',
};

export const workouts = {
  icon: '/img/workouts/icons/calendar.svg',
  title: 'Training programs',
  programs: [
    {
      image: '/img/workouts/resistance.png',
      name: 'Resistance',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Boxing',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Body Pump',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Yoga',
    },
    {
      image: '/img/workouts/resistance.png',
      name: 'Full Body',
    },
  ],
};

export const pricing = {
  icon: '/img/pricing/icons/price.svg',
  title: 'Pricing plan',
  plans: [
    {
      name: 'Social Media',
      price: '3899',
      list: [
        { name: 'FREE Photoshoot(30MIN)' },
        { name: 'Social Media Audit' },
        { name: 'free fitness consultation' },
        { name: 'Facebook,Instagram, TikTok& X Setup' },
        { name: '30 Day Graphics & Social Media Content Strategy' },
        { name: '5 Offer Posters +5 Day Paid Facebook ADs' },
        { name: 'Market on 20 Groups around your area' },
      ],
      delay: 600,
      link: 'List%20&%20Offer%20Poster',
    },
    {
      name: 'Basic',
      price: '7500',
      list: [
        { name: '5 Webpages' },
        { name: 'Google My Business' },
        { name: 'Google Analytics Setup' },
        { name: 'Automated Booking' },
        { name: 'Technical SEO' },
        { name: 'Keywords SEO Plan' },
        { name: 'Blog System + 1 Free Article' },
        { name: 'Google Analytics Setup' },
      ],
      delay: 800,
    },
    {
      name: 'Basic+Marketing',
      price: '9800',
      list: [
        { name: '10 Webpages' },
        { name: 'Google My Business' },
        { name: 'Google Analytics Setup' },
        { name: 'Automated Booking' },
        { name: 'Technical SEO' },
        { name: 'Keywords SEO Plan' },
        { name: 'Blog System + 1 Free Article' },
        { name: '30 Day Social Media Content' },
      ],
      delay: 1000,
    },
    {
      name: 'Online Business',
      price: 'Quote',
      list: [
        { name: '20 Webpages' },
        { name: 'Google My Business' },
        { name: 'Google Analytics Setup' },
        { name: 'Automated Booking' },
        { name: 'Technical SEO' },
        { name: 'Keywords SEO Plan' },
        { name: 'Blog System + 1 Free Article' },
        { name: '24/7 Online Store' },
        { name: 'Free Photoshoot' },
        { name: '30 Day Social Media Content' },
      ],
      delay: 1000,
    },
  ],
};

export const faq = {
  icon: '/img/faq/icons/question-mark.svg',
  title: 'FAQ',
  accordions: [
    {
      question: 'How long does it take to develop my web app?',
      answer:
        'Typical development takes 4-6 weeks, depending on your business needs..',
    },
    {
      question: 'What’s included in the automation process?',
      answer:
        'Automated booking, patient onboarding, and email follow-ups are standard.',
    },
    {
      question: 'Do you offer support after project completion?',
      answer:
        'Yes, we provide ongoing updates and analytics to ensure continued success.',
    },
  ],
};

export const join = {
  image: '/img/offer.jpg',
  title: 'Premium Website + Marketing Package',
  subtitle:
    'SEO-optimized web app with seamless booking features. Automated customer funnel to onboard and retain patients. 90-day social media strategy to grow your audience. Free headshot photoshoot or practice showcase video.',
  btnText: ' Book Your Free Call Now',
};

export const footer = {
  logo: '/img/header/logo.svg',
  copyrightText: 'All rights reserved. Gymme 2022.',
};

export const accomodations = [
  {
    image: '/img/workouts/resistance.png',
    title: 'Resortive Yoga Training & Immersion',
    institution: 'University of Mpumpmalanga',
    price: 4500.0,
    slug: 'riverside',
    nearerPlaces: 'Riverside mall. NST Botenical Garden',
    exerpt:
      'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '100',
  },
  {
    image: '/img/workouts/resistance.png',
    title: 'Resortive Yoga Training & Immersion',
    institution: 'University of Johannesburg',
    price: 7500.0,
    slug: 'riverside',
    nearerPlaces: 'Riverside mall. NST Botenical Garden',
    exerpt:
      'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '80',
  },
  {
    image: '/img/workouts/resistance.png',
    title: 'Resortive Yoga Training & Immersion',
    institution: 'University of Bloemfontein',
    price: 9500.0,
    slug: 'riverside',
    nearerPlaces: 'Riverside mall. NST Botenical Garden',
    exerpt:
      'Here is some tips for new job seekars who want to get a dream job and want to shine in his career.',
    link: 'Get started',
    delay: '90',
  },
];

export const workoutsPosts = {
  icon: '/img/workouts/icons/calendar.svg',
  title: 'Training programs',
  programs: [
    {
      image: '/img/kmcport.PNG',
      name: 'KaNyamazane Medical Centre',
      category: 'health',
      postedAt: '14:87',
    },
    {
      image: '/img/mmwaport.PNG',
      name: 'Mzansimedical',
      category: 'health',
      postedAt: '14:87',
    },
    {
      image: '/img/thandotsxstore.PNG',
      name: 'ShoppingCart',
      category: 'Online Store',
      postedAt: '14:87',
    },
    {
      image: '/img/thoughthub.PNG',
      name: 'Studentgroove',
      category: 'Blog With Store',
      postedAt: '14:87',
    },
    {
      image: '/img/headless.PNG',
      name: 'ThoughtsHubs',
      category: 'Blog',
      postedAt: '14:87',
    },
    {
      image: '/img/escapehub.PNG',
      name: 'Escapehub',
      category: 'Travel Listing',
      postedAt: '14:87',
    },
  ],
};

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'Mbombela Home office',
      subtitle:
        'I hold a Uni Diploma in ICT in App Development and I have 4 years experience in MERN & Next.js web development. I am a GodSon.',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '429 Moya, KaNyamazane',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+27 71 281 113',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'thandomavweb@gmail.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};


export const testimonialsSalon = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        ' I’ve been visiting Serenity Spa for over a year, and I can’t imagine going anywhere else!The staff is incredibly professional and always makes me feel welcome. My skin has never looked better since starting their facial treatments. I leave every appointment feeling rejuvenated and confident. Highly recommend!',
      image: '/salon/test.jpg',
      name: 'Lindo Andy',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        '"Wow, what an amazing experience! The massage I received was heavenly—just what I needed to unwind after a long week. The atmosphere is so calming, and the attention to detail is unmatched. I loved how the therapist tailored the session to my needs.I’ll definitely be back for more',
        image: '/salon/test.jpg',
      name: 'Trudy Kganane',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        ' I had the most relaxing day at Blissful Retreat Spa. From the moment I walked in, I felt transported to a tranquil oasis. The body wrap and manicure were fantastic, but the real highlight was the staffs genuine care and expertise. I left feeling pampered and refreshed. This is my new go-to for self-care!',
        image: '/salon/test.jpg',
      name: 'Dr. Joel Mavuso',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    
  ],
};


export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'EThe consultation went beyond expectations, providing actionable steps to enhance my online presence.',
      image: '/img/testimonial/avatar1.png',
      name: 'Lindo Andy',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'The consultation went beyond expectations, providing actionable steps to enhance my online presence.',
      image: '/img/testimonial/avatar1.png',
      name: 'Yrudy Kganane',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'The consultation went beyond expectations, providing actionable steps to enhance my online presence.',
      image: '/img/testimonial/avatar1.png',
      name: 'Dr. Joel Mavuso',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: '/img/testimonial/avatar1.png',
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: '/img/testimonial/avatar1.png',
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const footerData = {
  about: {
    title: 'Salon',
    subtitle:
      'I hold a Uni Diploma in ICT in App Development and I have 4 years experience in MERN & Next.js web development. I am a GodSon.',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '429 Moya, KaNyamazane',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+27 71 128 113',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'thandomavweb@gmail.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/about-me', name: 'About me' },
      { href: '/search', name: 'Shop' },
      { href: '/search-posts', name: 'Posts' },
      { href: '/about-me', name: 'My services' },
      { href: '/contact', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 4:00pm' },
      { name: 'Sat / 10:00 - 12:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Stay ahead with strategies on grow your business online',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};


export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  images: [
    {
      src: '/salon/test.jpg',
      original: '/salon/test.jpg',
      width: 465,
      height: 412,
    },
    {
      src: '/salon/shell.jpg',
      original:'/salon/shell.jpg',
      width: 465,
      height: 540,
    },
    {
      src: '/salon/pedi.jpg',
      original: '/salon/pedi.jpg',
      width: 465,
      height: 412,
    },
    {
      src: '/salon/mess.jpg',
      original: '/salon/mess.jpg',
      width: 465,
      height: 540,
    },
    {
      src: '/salon/make.jpg',
      original: '/salon/make.jpg',
      width: 465,
      height: 540,
    },
  ],
};



export const headerData = {
  "logoImgV1": "/salon/logoWhite.png",
  "logoImgV2":"/salon/logo.png",
  "btnText": "Contact us"
};

export const navData = [
  { "name": "About", "href": "/" },
  { "name": "How to", "href": "/" },
  { "name": "Faqs", "href": "/" }
];

export const heroData = {
  "title": "Unleash Your Radiance at Energizing Beauty!",
  "sceneImg": "/imagesTr/hero/scene.svg",
  "boyImg": "/imagesTr/hero/boy.svg",
  "girlImg": "/imagesTr/hero/girl.svg",
  "truckImg": "/imagesTr/hero/truck.svg",
  "btnText": "Get Started"
};

export const BeautyfooterData = {
  logo: '/salon/logo.png',
  footerFlower: '/salon/footerFlower.png',
  address: 'Warehouse Society, 234 Bahagia Ave Street PRBW 29281',
  email: 'info@warehouse.project',
  phone: '1-232-3434 (Main)',
  list1: [
    {
      name: 'Profile',
      href: '#',
    },
    {
      name: 'Features',
      href: '#',
    },
    {
      name: 'Careers',
      href: '#',
    },
    {
      name: 'DW News',
      href: '#',
    },
  ],
  list2: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Sign Up',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Reports',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: '#',
    },
  ],
};

export const BeautyCopyrightData = {
  text: '© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.',
  icon: <BsChatDotsFill />,
};

const myData = {
  headerData,
  navData,
  heroData,
  bannerBeauty,
  BeautyfooterData,
  BeautyCopyrightData,
  data,
  header,
  nav,
  navigation,
  product,
  banner,
  reservationData,
  about,
  workouts,
  pricing,
  faq,
  join,
  footer,
  galleryData,
  testimonialsSalon,
  accomodations,
  workoutsPosts,
  contactData,
  testimonials,
  footerData
}

export default myData;