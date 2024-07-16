import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./page/Loading";
import Login from "./page/Login";
import EndingCredit from "./page/Endingcredit";
import WinnerStud from "./page/WinnerStud";
import LoserStud from "./page/LoserStud";
import WinnerProf from "./page/WinnerProf";
import LoserProf from "./page/LoserProf";
import Curtain from "./page/Curtain";
import Ready from "./page/Ready";
import FlipBook from "./page/FlipBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/ending" element={<EndingCredit />} /> 
        <Route path="/winnerprof" element={<WinnerProf/>} />
        <Route path="/winnerstud" element={<WinnerStud/>} />
        <Route path="/loserprof" element={<LoserProf/>} />
        <Route path="/loserstud" element={<LoserStud/>} />
        <Route path="/curtain" element={<Curtain/>} />
        <Route path="/ending" element={<EndingCredit />} />
        <Route path="/flipbook" element={<FlipBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
