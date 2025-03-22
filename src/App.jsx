import Scene from "./components/scene";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Scene />
      <div className="overlay">
        <button className="project-btn">Project</button>
        <button className="about-btn">About Me</button>
      </div>
    </div>
  );
}

export default App;
