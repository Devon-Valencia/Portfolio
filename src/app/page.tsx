import './styles/global.scss';
import Navbar from "./components/navbar"; 
 

export default function Home() {
  return (
    <>

      <Navbar />

      <main>
        <section id="home" className="home-section" aria-label="Introduction">
          <div id="stars0"></div>
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
          <div className='container'>
            <div className="aboutmebox">
              <h1 className="aboutme-text">
                Hi, I'm <span className='highlight'>Devon Valencia</span>
              </h1>
              <p className='aboutme-text2'>Full Stack Software Engineer</p>
              <hr className='Line'/>
              <div className='links'>
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section" aria-label="Technical Skills">
          <div className="skills-container">
            <h2 className="skills-title">Technical Skills</h2>
            
            <div className="skills-category">
              <h3 className="category-title">Frontend Development</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-icon" />
                  JavaScript
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-icon" />
                  TypeScript
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-icon" />
                  HTML5
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="skill-icon" />
                  CSS
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="SCSS" className="skill-icon" />
                  SCSS
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-icon" />
                  React
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="skill-icon" />
                  Next.js
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" alt="Vite" className="skill-icon" />
                  Vite
                </span>
                <span className="skill-tag">
                  <img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png" alt="Chakra UI" className="skill-icon" />
                  Chakra UI
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Router" className="skill-icon" />
                  React Router
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Query" className="skill-icon" />
                  React Query
                </span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Backend Development</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="skill-icon" />
                  Python
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-icon" />
                  Node.js
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="skill-icon" />
                  Express.js
                </span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Development Tools</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="skill-icon" />
                  Git
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt="npm" className="skill-icon" />
                  npm
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt="Webpack" className="skill-icon" />
                  Webpack
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" alt="ESLint" className="skill-icon" />
                  ESLint
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postcss/postcss-original.svg" alt="PostCSS" className="skill-icon" />
                  PostCSS
                </span>
              </div>
            </div>

            <div className="skills-category">
              <h3 className="category-title">Operating Systems</h3>
              <div className="skills-grid">
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" className="skill-icon" />
                  Linux
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" alt="Ubuntu" className="skill-icon" />
                  Ubuntu
                </span>
                <span className="skill-tag">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows" className="skill-icon" />
                  Windows
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects-section" aria-label="Portfolio Projects">
          <h2>Projects</h2>
          <p>Project details go here...</p>
        </section>

        <section id="contact" className="contact-section" aria-label="Contact Information">
          <h2>Contact</h2>
          <p>Contact form or details go here...</p>
        </section>
      </main>
    </>
  );
}