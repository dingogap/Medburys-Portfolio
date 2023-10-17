// Display Resume Data
import { Link } from "react-router-dom";
export default function ResumePage() {
  return (
    <div className='container content pt-4'>
      <h5>Resume</h5>
      <div className='resume'>
        <Link to='#'>Download My Resume</Link>
      </div>
      <h5>Front End Proficiencies</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
        <li>Materialize CSS</li>
        <li>Liquid</li>
        <li>TREEPL CMS</li>
      </ul>
      <h5>Backend End Proficiencies</h5>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
