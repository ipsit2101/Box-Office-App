import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Home from "./Pages/Home";
import ShowPage from "./Pages/ShowPage";
import Starred from "./Pages/Starred";

const theme = {

  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6', 
    dark: '#353535',
    maroon: '#5F5F5F',
  },
  
};

const App = () => {
  return (
    <ThemeProvider theme = {theme} >
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/starred" element={<Starred />} />
          <Route exact path="/show/:id" element={<ShowPage />} />
          <Route element={<div>This is 404 Page</div>} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};
                              
export default App;
