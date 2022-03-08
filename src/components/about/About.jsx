import './About.css';
import InfoCard from '../info-card/InfoCard';
import Skills from '../skills/Skills';
import avatar from '../../images/Evgeny.jpg';

function About() {
    return(
        <div className="about container">
            <h2>About Me</h2>
            <div className="about-flex">
                <div className="description">
                    <InfoCard imagePath={avatar}/>
                    <p>My name is Evgeny Berezhnov. I'm Web Developer at San Diego Mesa College and at Core Systems. Also, I'm part-time student. My major is Computer Science. I like programming and was on the CruzHacks and SFhacks with my friends we created something cool together. I live in San Diego, California.</p>
                </div>
                <Skills/>
            </div>
        </div>
    );
}

export default About;