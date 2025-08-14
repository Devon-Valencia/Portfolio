import './styles/global.scss';
import Navbar from "./components/navbar"; 

export default function Home() {
  return (
    <>

      <Navbar />

      <section id="home" className="home-section">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
        <div className='container'>
          <h1 className="aboutmebox">
            <span className="aboutme-text">
              Hi, I'm <span className='highlight'>Devon Valencia</span>
              <span className='aboutme-text2'>Full Stack Software Engineer</span>
            </span>
            <hr className='Line'/>
            <span className='links'>
              <a href="#contact">Contact</a>
            </span>
          </h1>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="skills-box">
          <h1 className="title">Skills</h1>
          <span>Python</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>


      <section id="projects" className="projects-section">
        <h1>Projects</h1>
        <p>Project details go here...</p>
      </section>

      <section id="contact" className="contact-section">
        <h1>Contact</h1>
        <p>Contact form or details go here...</p>
      </section>
    </>
  );
}