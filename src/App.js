import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./page/Loading";
import Login from "./page/Login";
import Main from "./page/Main";
import Duckpond from "./page/Duckpond"; // Duckpond 컴포넌트 임포트
import EndingCredit from "./page/Endingcredit";
import Errortologin from "./page/Errortologin";
import DuckShape from "./page/DuckShape";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/duckpond" element={<Duckpond />} />
        <Route path="/ending" element={<EndingCredit />} /> 
        <Route path="/errortologin" element={<Errortologin/>} />
        <Route path="/duckshape" element={<DuckShape/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
