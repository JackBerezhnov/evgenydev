import './About.css';
import InfoCard from '../info-card/InfoCard';
import avatar from '../../images/Evgeny.jpg';

function About() {
    return(
        <div className="about container">
            <h2>About Me</h2>
            <div className="description">
                <InfoCard imagePath={avatar}/>
            </div>
        </div>
    );
}

export default About;