// Make images available

const Portfolio = [
  {
    id: '0',
    title: 'The Tech Blog',
    tech: 'HTML/CSS/JS/Liquid',
    image: new URL('./techBlog.jpg', import.meta.url).href,
    github: 'https://github.com/dingogap/the-tech-blog',
  },
  {
    id: '1',
    title: 'Note Taker',
    tech: 'HTML/CSS/JS/Liquid',
    image: new URL('./noteTaker.jpg', import.meta.url).href,
    github: 'https://github.com/dingogap/A-PWA-Text-Editor',
  },
  {
    id: '2',
    alt: 'Just Another Text Editor',
    title: 'Just Another Text Editor',
    tech: 'HTML/CSS/JS/Liquid',
    image: new URL('./jate.jpg', import.meta.url).href,
    github: 'https://github.com/dingogap/A-PWA-Text-Editor',
  },
  {
    id: '3',
    href: 'https://dingogap.github.io/moviesearch/',
    alt: 'Movie Search',
    title: 'Movie Search',
    tech: 'HTML/CSS/JS/jQuery/APIs',
    image: new URL('./movieSearch.jpg', import.meta.url).href,
    github: 'https://github.com/dingogap/moviesearch'

  },
  {
    id: '4',
    href: '#',
    alt: 'Fit Connect Pro',
    title: 'Fit Connect Pro',
    tech: 'HTML/CSS/JS/MySQL/Express/FullCalendar',
    image: new URL('./fitConnectPro.jpg', import.meta.url).href,
    github: 'https://github.com/dingogap/Fit-Connect-Pro'
  },
  {
    id: '5',
    href: 'https://dingogap.net.au',
    alt: 'Weather Dashboard',
    title: 'Weather Dashboard',
    tech: 'HTML/CSS/JS/jQuery/APIs',
    image: new URL('./weatherDashboard.jpg', import.meta.url).href,
    github: 'https://github.com/dingogap/Weather-Dashboard'
  },
  {
    id: '6',
    image: new URL('./me.jpg', import.meta.url).href,
  },  
];


export default Portfolio;
