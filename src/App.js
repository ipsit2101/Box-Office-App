import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element = {<Home />} />
          <Route exact path="/starred" element = {<Starred />} />
          <Route element = {<div>This is 404 Page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
