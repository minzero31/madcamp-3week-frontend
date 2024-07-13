import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./page/Loading";
import Login from "./page/Login";
import Main from "./page/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
