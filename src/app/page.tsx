import './globals.scss';

export default function Home() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <main>
        <div className='container'>
          <header className="Header">
            <nav className="info">
              <a href="" className='home'>Home</a> <a href="#about">Skills</a> <a href ="#projects">Projects</a> <a href="#contact">Contact</a>
            </nav>
          </header>

          <h1 className="aboutmebox">
            <span className="aboutme-text">Hi, I'm 
              <span className='highlight'> Devon Valencia</span>
              <span className='aboutme-text2'>Full stack Software Engineer</span>
            </span>
          </h1>
        </div>
      </main>
    </>
  );
}
