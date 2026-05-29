import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Work from "./pages/Work"

function App() {

  return (
    <BrowserRouter>
    <Routes>

     <Route element={<Layout/>}>
     <Route path="/" element={<Home/>}/> 
     <Route path="/contact" element={<Contact/>}/> 
     <Route path="*" element={<NotFound/>}/> 
     <Route path="/work" element={<Work/>}/> 
     <Route path="/about" element={<About/>}/> 
     </Route> 
     </Routes>
     </BrowserRouter>
  )
}

export default App
