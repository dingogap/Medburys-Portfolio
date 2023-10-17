//Display About Me information

import Portfolio from '../components/Images/Images';
export default function AboutPage() {
  return (
    <div className="container content pt-4">
      <h5>About Me</h5>
      <img
        src={Portfolio[6].image}
        alt="Relaxing on a narrow ledge halfway down the NarrowNeck cliffs"
        className="about-img"
      ></img>
      <p>
        I am a software developer with more than 40 years experience in the
        industry, programming and managing mini-computer systems, distributed
        local area networks & directory services/identity management systems.
      </p>
      <p>
        More recently I have worked as front-end developer using HTML/CSS/JS &
        Liquid to build complex websites on the TREEPL CMS platform.
      </p>
      <p>
        I joined the Sydney Uni Full Stack Coding Bootcamp to learn and better understand the backend processes that underpin modern websites.
      </p>
      <p>
        When I'm not coding or spending time with family I'll probably be bushwalking somewhere remote or
        photographing the galaxy.
      </p>
    </div>
  );
}
