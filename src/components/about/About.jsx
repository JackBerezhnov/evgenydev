import './About.css';
import InfoCard from '../info-card/InfoCard';

function About() {
    return(
        <div class="about container">
            <h2>About Me</h2>
            <div class="description">
                <InfoCard />
            </div>
        </div>
    );
}

export default About;