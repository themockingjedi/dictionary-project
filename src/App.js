import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          This dictionary was coded by{" "}
          <a
            href="https://deanne-lombardi.netlify.app/index.html"
            target="_blank"
            rel="noreferrer"
          >
            DeAnne Lombardi
          </a>
          . Source code can be found on{" "}
          <a
            href="https://github.com/themockingjedi/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
