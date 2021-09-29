import logo from "./logo.svg";
import "./App.css";
import FruitsPage from "./pages/fruitsPage";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <FruitsPage />
    </div>
  );
}

export default App;
