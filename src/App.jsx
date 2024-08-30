import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Layout from "./layout";
import HomePage from "./pages/Home";
import Contact from "./components/ui/contact/Contact";


import './App.css'

function App() {
  
  ReactGA.initialize("G-23C8DJ5T38");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<Contact />} />
          {/*<Route path="*" element={<NoPage />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
