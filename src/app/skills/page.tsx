import '../styles/skills.scss';
import Header from "../components/Header"; 

export default function SkillsPage() {
  return (
    <>
    <main>
      <div className='container'>
      <Header />
          <div className='skills-box'>
            <h1 className='title'>Skills</h1>
            <span>Python</span>
            <span>JavaScript</span>
            <span>React</span>
          </div>
        </div>
    </main>
    </>
  );
}