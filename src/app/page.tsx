import './globals.scss';

export default function Home() {
  return (
    <>
      {/* Starfield background layers */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div id="stars4"></div>

      <main>
        <header className="Header">
          <nav className="info">
            <a href="">Home</a> <a href="#about">About</a> <a href="#contact">Contact</a>
          </nav>
        </header>

        <h1 className="aboutmebox">
          <img className="profile-pic" src="Devon Valencia.png" alt="Profile Picture" />
          <span className="aboutme-text">Devon Valencia</span>
        </h1>
      </main>
    </>
  );
}