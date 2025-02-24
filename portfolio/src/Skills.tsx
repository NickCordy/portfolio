import './Skills.scss'

export default function Skills() {
    return (
        <div className="skills">
            <h2>Skills</h2>
            <div className="skill-cards">
                <div className="card">
                    <h3>Programming Languages</h3>
                    <div className="skill-list">
                        <ul>
                            <li>Python</li>
                            <li>JavaScript</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>C#</li>
                            <li>SQL</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <h3>Frameworks</h3>
                    <div className="skill-list">
                        <ul>
                            <li>Flask</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Scikit-learn</li>
                            <li>PyTorch</li>
                            <li>NumPy</li>
                            <li>Pandas</li>
                            <li>Matplotlib</li>
                            <li>Seaborn</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <h3>Databases</h3>
                    <div className="skill-list">
                        <ul>
                            <li>PostgreSQL</li>
                            <li>MongoDB</li>
                            <li>SQLite</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <h3>Tools & Tech</h3>
                    <div className="skill-list">
                        <ul>
                            <li>Git</li>
                            <li>Docker</li>
                            <li>Postman</li>
                            <li>RESTful APIs</li>
                            <li>Jira</li>
                            <li>Jenkins</li>
                            <li>Figma</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}