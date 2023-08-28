import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Cardapio from "./pages/Cardapio"
import Pedidos from "./pages/Pedidos"
import CardList from "./pages/CardList"
import CardList2 from "./pages/CardList2"


function App() {
  
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cardapio" element={<Cardapio/>}/>
          <Route path="/Pedidos" element={<Pedidos/>}/>
          <Route path="/CardList" element={<CardList/>}/>
          <Route path="/CardList2" element={<CardList2/>}/>
        </Routes>
      </BrowserRouter>
      <div class="w-10/12 h-44 rounded-r-full -right-14 absolute top-0 bg-yellow-100 rotate-90">
        
      </div>
    </div>
  )
}

export default App
