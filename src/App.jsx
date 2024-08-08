
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import HomePage from "./pages/Home";
import Contact from "./components/ui/contact/Contact";


import './App.css'

function App() {
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
