// Make images available

const Portfolio = [
  {
    id: '0',
    href: 'https://dingogap.net.au',
    alt: 'The Dingo Gap Website',
    title: 'Dingo Gap',
    tech: 'HTML/CSS/JS/Liquid',
    image: new URL('./dingoGap.jpg', import.meta.url).href,
  },
  {
    id: '1',
    href: 'https://ubmbc.org.au',
    alt: 'The Upper Blue Mountains Bushwalking Club Website',
    title: 'UBMBC',
    tech: 'HTML/CSS/JS/Liquid',
    image: new URL('./ubmbc.jpg', import.meta.url).href,
  },
  {
    id: '2',
    href: 'https://bushexplorers.com.au',
    alt: 'The Bush Explorers Website',
    title: 'Bush Explorers',
    tech: 'HTML/CSS/JS/Liquid',
    image: new URL('./bushExplorers.jpg', import.meta.url).href,
  },
  {
    id: '3',
    href: 'https://dingogap.github.io/moviesearch/',
    alt: 'Movie Search',
    title: 'Movie Search',
    tech: 'HTML/CSS/JS/jQuery/APIs',
    image: new URL('./movieSearch.jpg', import.meta.url).href,
  },
  {
    id: '4',
    href: '#',
    alt: 'Fit Connect Pro',
    title: 'Fit Connect Pro',
    tech: 'HTML/CSS/JS/MySQL/Express/FullCalendar',
    image: new URL('./fitConnectPro.jpg', import.meta.url).href,
  },
  {
    id: '5',
    href: 'https://dingogap.net.au',
    alt: 'Weather Dashboard',
    title: 'Weather Dashboard',
    tech: 'HTML/CSS/JS/jQuery/APIs',
    image: new URL('./weatherDashboard.jpg', import.meta.url).href,
  },
  {
    id: '6',
    image: new URL('./me.jpg', import.meta.url).href,
  },  
];


export default Portfolio;
