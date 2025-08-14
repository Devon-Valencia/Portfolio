import '../styles/global.scss'; 
import Link from "next/link";

export default function Navbar() {
  return (
        <header className="Navbar">
            <nav className="info">
                <Link href="/" className="home">Home</Link>
                <Link href="#skills" >Skills</Link>
                <Link href="#projects">Projects</Link>
                <Link href="/about">About</Link>
                <Link href="https://github.com/Devon-Valencia" target="_blank" rel="noopener noreferrer">
                Github
                </Link>
            </nav>
        </header>
  );
}
