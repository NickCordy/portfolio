import './Projects.scss'
import codeImage from './assets/code.jpg';
import chatbotImage from './assets/chatbot.png';
import mazeSolverImage from './assets/maze-solver.png';

export default function Projects() {
    return (
        <div className="projects">
            <h2>Projects</h2>
            <div className="project-cards">
                <div className="col">
                    <div className="img-containers">
                        <div className="project-card card-enlarge card-margin-lg text-center mx-auto" style={{width: '20rem', height: '20rem'}}>
                            <a href="https://github.com/NickCordy/Media-Player">
                                <img src={codeImage} className="card-img-top img-zoom" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="card-title">Media Player</h3>
                        <div className="card-text">
                            <p>Implemented media handling logic and user interface using XAML and C# in WPF.</p>
                            <p>Gained insight user controls and design within the .NET framework.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="img-containers">
                        <div className="project-card card-enlarge card-margin-lg text-center mx-auto" style={{width: '20rem', height: '20rem'}}>
                            <a href="https://github.com/NickCordy/French-Chatbot">
                                <img src={chatbotImage} className="card-img-top img-zoom" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="card-title">French Chatbot</h3>
                        <div className="card-text">
                            <p>Developed an AI chatbot using Python and integrated Flask for web app functionality, focusing on language processing.</p>
                            <p>Enhanced understanding of NLP and its application in creating conversational AI.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="img-containers">
                        <div className="project-card card-enlarge card-margin-lg text-center mx-auto" style={{width: '20rem', height: '20rem'}}>
                            <a href="https://github.com/NickCordy/maze-solver">
                                <img src={mazeSolverImage} className="card-img-top img-zoom" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="card-title">Maze Solver</h3>
                        <div className="card-text">
                            <p>Implemented a maze-solving algorithm using C++, focusing on pathfinding using DFS.</p>
                            <p>Gained experience in algorithm design and optimization.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}