import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
//import { useEffect } from 'react';
import ReactGA from "react-ga4";
import { clarity } from "react-microsoft-clarity";

import Layout from "./layout";
import HomePage from "./pages/Home";
import Contact from "./components/ui/contact/Contact";


import './App.css'

function App() {

  if (process.env.NODE_ENV === 'production' ) clarity.init("nvd25h7exz")
  //clarity.init("nvd25h7exz");
  console.log(process.env.NODE_ENV)

  ReactGA.initialize("G-23C8DJ5T38");

  /*if (clarity.hasStarted) {
    clarity.identify('userid', {user})
  }*/

  /*const location = useLocation();

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);*/

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
