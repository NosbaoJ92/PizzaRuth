import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from "./pages/Index"
import Home from "./pages/Home"
import MuseuPesca from "./pages/MuseuPesca"

function App() {
  
  return (
    <div className="w-screen h-screen overflow-scroll overflow-x-hidden bg-gray-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/MuseuPesca" element={<MuseuPesca/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
