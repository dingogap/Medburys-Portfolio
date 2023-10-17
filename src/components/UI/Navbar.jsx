// Publish the Page Menu
// Code is explicit so the active class can be updated for the current page

import { Link, useLocation } from 'react-router-dom';
export default function Nav({ links }) {
  const currentPage = useLocation().pathname;

  const pageNav = [
    {
      id: 0,
      to: '/about',
    },
    {
      id: 1,
      to: '/portfolio',
    },
    {
      id: 2,
      to: '/contact',
    },
    {
      id: 3,
      to: '/resume',
    },
  ];

  return (
    <ul id='nav-mobile' className='right'>
      {pageNav.map((page, index) => (
        <li key={page.id}>
          <Link
            to={page.to}

            className={currentPage === page.to ? 'active' : ''}
          >
            {page.to.replace('/', '').charAt(0).toUpperCase() +
              page.to.slice(2)}
          </Link>
        </li>
      ))}

    </ul>
  );
}
