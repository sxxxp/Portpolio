import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Contact from "./Contact";
import Main from "./Main";
import Nav from "./Nav";
import NotFound from "./NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
