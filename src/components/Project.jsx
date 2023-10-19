import { Link } from 'react-router-dom';
import Portfolio from '../components/Images/Images';

export default function Project() {
return (
Portfolio.map((project, index) => 
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
    ))
)}