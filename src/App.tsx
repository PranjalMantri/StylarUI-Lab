import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Playground from "./pages/Playground";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
}

export default App;
