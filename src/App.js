import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import Jobs from "./components/Jobs";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
