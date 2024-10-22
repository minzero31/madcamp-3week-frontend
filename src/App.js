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
import Waiting from "./page/Waiting";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/flipbook" element={<FlipBook />} />
        <Route path="/waiting" element={<Waiting />} />
        <Route path="/curtain" element={<Curtain />} />
        <Route path="/winnerprof" element={<WinnerProf />} />
        <Route path="/winnerstud" element={<WinnerStud />} />
        <Route path="/loserprof" element={<LoserProf />} />
        <Route path="/loserstud" element={<LoserStud />} />
        <Route path="/endingcredit" element={<EndingCredit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
