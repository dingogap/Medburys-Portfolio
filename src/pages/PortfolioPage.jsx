// Display the Portfolio Page
// Code is explicit - with moretime it could have be made more concise using objects to store data
import Project from '../components/Project';

export default function PortfolioPage() {
  return (
    <div className='container content pt-4'>
      <h5>Portfolio</h5>
      <div className='portfolio'>
<Project/>
      </div>
    </div>
  );
}
