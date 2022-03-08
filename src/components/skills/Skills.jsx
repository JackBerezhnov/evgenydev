import './Skills.css';

function Skills() {
    return(
        <div className="skills-table">
            <div className='first-column'>
                <h3>Languages:</h3>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>PHP</li>
                    <li>C#</li>
                </ul>
                <h3>Libraries:</h3>
                <ul>
                    <li>React.js</li>
                    <li>Chart.js</li>
                </ul>
                <h3>Frameworks:</h3>
                <ul>
                    <li>Angular</li>
                    <li>.NET Core 3.1</li>
                </ul>
            </div>
            <div className='second-column'>
                <h3>Tools:</h3>
                <ul>
                    <li>Git</li>
                    <li>npm</li>
                    <li>yarn</li>
                </ul>
                <h3>CMS:</h3>
                <ul>
                    <li>WordPress</li>
                    <li>Omni CMS</li>
                </ul>
                <h3>IDE:</h3>
                <ul>
                    <li>Visual Studio Code</li>
                    <li>Visual Studio</li>
                </ul>
            </div>
        </div>
    );
}

export default Skills;