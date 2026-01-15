import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Article from "./pages/Article";
import Evaluation from "./pages/Evaluation";
import Experiments from "./pages/Experiments";
import Tools from "./pages/Tools";
import Publications from "./pages/Publications";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:slug" element={<Article />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="/experiments" element={<Experiments />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
