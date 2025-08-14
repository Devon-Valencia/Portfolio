import './globals.scss';
import Link from 'next/link';

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
              <Link href="/" className="home">Home</Link>
              <Link href="/skills">Skills</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>

          <h1 className="aboutmebox">
            <span className="aboutme-text">Hi, I'm 
              <span className='highlight'> Devon Valencia</span>
              <span className='aboutme-text2'>Full Stack Software Engineer</span>
            </span>
          </h1>
        </div>
      </main>
    </>
  );
}

