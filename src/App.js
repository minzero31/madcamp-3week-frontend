import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Loading from "./page/Loading";
import Login from "./page/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
