import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./page/Loading";
import Login from "./page/Login";
import EndingCredit from "./page/Endingcredit";
import Errortologin from "./page/Errortologin";
import DuckShape from "./page/DuckShape";
import Curtainmain from "./page/Curtainmain";
import WinnerStud from "./page/WinnerStud";
import LoserStud from "./page/LoserStud";
import WinnerProf from "./page/WinnerProf";
import LoserProf from "./page/LoserProf";
import Curtain from "./page/Curtain";
import Ready from "./page/Ready";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/main" element={<Main />} />
        <Route path="/duckpond" element={<Duckpond />} />
        <Route path="/ending" element={<EndingCredit />} /> 
        <Route path="/errortologin" element={<Errortologin/>} />
        <Route path="/duckshape" element={<DuckShape/>} />
        <Route path="/curtainmain" element={<Curtainmain/>} />
        <Route path="/winnerprof" element={<WinnerProf/>} />
        <Route path="/winnerstud" element={<WinnerStud/>} />
        <Route path="/loserprof" element={<LoserProf/>} />
        <Route path="/loserstud" element={<LoserStud/>} />
        <Route path="/curtain" element={<Curtain/>} />
        <Route path="/ending" element={<EndingCredit />} />
        <Route path="/errortologin" element={<Errortologin />} />
        <Route path="/duckshape" element={<DuckShape />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
