//Display Page Footer
import { Link } from 'react-router-dom';
const proLinks = [
  {
    id: 0,
    href: 'https://github.com/dingogap',
    name: 'GitHub',
  },
  {
    id: 1,
    href: 'https://www.linkedin.com/in/peter-medbury-22aa7b35/',
    name: 'Linked In',
  },
];
export default function Footer() {
  return (
    <footer className='page-footer'>
      <div className='container'>
        <div className='links'>
          {proLinks.map((item, index) => (
            <Link to={item.href} target='_blank' key={item.id}>
              {item.name}
            </Link>
          ))}
          <span className='copyright'>© 2023 - Peter Medbury</span>
        </div>
      </div>
    </footer>
  );
}
