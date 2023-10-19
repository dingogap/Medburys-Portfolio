//Display Page Footer
import { Link } from 'react-router-dom';
import githubLogo from './Images/github.svg'
import linkedInLogo from './Images/linkedin.svg'

const proLinks = [
  {
    id: 0,
    href: 'https://github.com/dingogap',
    name: 'GitHub',
    icon: githubLogo
  },
  {
    id: 1,
    href: 'https://www.linkedin.com/in/peter-medbury-22aa7b35/',
    name: 'Linked In',
    icon: linkedInLogo
  },
];
export default function Footer() {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <div className='links'>
          {proLinks.map((item, index) => (
            <Link to={item.href} target='_blank' key={item.id}>
             <img src={item.icon} width="35" height="35" alt={item.name}/> 
            </Link>
          ))}
          <span className='copyright'>© 2023 - Peter Medbury</span>
        </div>
      </div>
    </footer>
  );
}
