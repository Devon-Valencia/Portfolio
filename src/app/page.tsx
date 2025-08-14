import './globals.scss';
import Link from 'next/link';
import Header from "./components/Header"; 

export default function Home() {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <main>
        <div className='container'>
          <Header />
          <h1 className="aboutmebox">
            <span className="aboutme-text">Hi, I'm 
              <span className='highlight'> Devon Valencia</span>
              <span className='aboutme-text2'>Full Stack Software Engineer</span>
            </span>

            <hr className='Line'/>

            <span className='links'>              
              <Link href="/skills">Skills</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </span>
          </h1>
        </div>
      </main>
    </>
  );
}

