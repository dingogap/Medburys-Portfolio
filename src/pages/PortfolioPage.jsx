// Display the Portfolio Page
// Code is explicit - with moretime it could have be made more concise using objects to store data
import { Link } from 'react-router-dom';
import Portfolio from '../components/Images/Images';

export default function PortfolioPage() {
  return (
    <div className='container content pt-4'>
      <h5>Portfolio</h5>
      <div className='portfolio'>
        {Portfolio.map((project, index) => 
        index <6 && (
          <div
            key={project.id}
            className={'flex-item card' + (parseInt(project.id) + 1)}
          >
            <Link to={project.href} target='_blank'>
              <img src={project.image} alt={project.alt} />
            </Link>
            <div className={'text' + (parseInt(project.id) + 1)}>
            <h5>{project.title}</h5>
            <p>{project.tech}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}
