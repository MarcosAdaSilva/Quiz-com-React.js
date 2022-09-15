// Ordem de import => react, componentes, estáticos
import Welcome from "./components/Welcome";
import Question from "./components/Question";

import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      <Welcome />
    </div>
  );
}

export default App;
