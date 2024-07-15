import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./page/Loading";
import Login from "./page/Login";
import Main from "./page/Main";
import Duckpond from "./page/Duckpond";
import EndingCredit from "./page/Endingcredit";
import Errortologin from "./page/Errortologin";
import DuckShape from "./page/DuckShape";
import Ready from "./page/Ready";
import FlipBook from "./page/FlipBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/flipbook" element={<FlipBook />} />
        <Route path="/main" element={<Main />} />
        <Route path="/duckpond" element={<Duckpond />} />
        <Route path="/ending" element={<EndingCredit />} />
        <Route path="/errortologin" element={<Errortologin />} />
        <Route path="/duckshape" element={<DuckShape />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
