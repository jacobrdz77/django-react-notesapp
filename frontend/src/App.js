import "./App.css";
import Header from "./components/Header";
import NotesListPage from "./pages/NotesListPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotePage from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" exact element={<NotesListPage />} />
          <Route path="/note/:id" exact element={<NotePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
