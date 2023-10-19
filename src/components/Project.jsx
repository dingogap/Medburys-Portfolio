import { Link } from 'react-router-dom';
import Portfolio from '../components/Images/Images';
import githubLogo from './Images/github.svg';

export default function Project() {
  return Portfolio.map(
    (project, index) =>
      index < 6 && (
        <div
          key={project.id}
          className={'flex-item card' + (parseInt(project.id) + 1)}
        >
          {project.href ? (
            <Link to={project.href} target='_blank'>
              <img src={project.image} alt={project.alt} />
            </Link>
          ) : (
            <img src={project.image} alt={project.alt} />
          )}
          <div className={'text' + (parseInt(project.id) + 1)}>
            <p className='title'>
              {project.href ? (
                <Link to={project.href} target='_blank'>
                  {project.title}
                </Link>
              ) : (
                project.title
              )}
              {project.github ? (
                <Link to={project.github} target='_blank'>
                  <img src={githubLogo} width='30' height='30' />
                </Link>
              ) : (
                ''
              )}
            </p>
            <p>{project.tech}</p>
          </div>
        </div>
      )
  );
}
