import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import EditPage from "./pages/Edit.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="center">Meme Generator</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
