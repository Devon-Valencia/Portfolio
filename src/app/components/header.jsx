import '../globals.scss'; // path relative to Header.jsx
import Link from "next/link";

export default function Header() {
  return (
        <header className="Header">
            <nav className="info">
                <Link href="/" className="home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="https://github.com/Devon-Valencia" target="_blank" rel="noopener noreferrer">
                Github
                </Link>
            </nav>
        </header>
  );
}
