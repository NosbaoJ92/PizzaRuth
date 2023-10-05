import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import LoginUser from './pages/LoginUser';
import Cardapio from "./pages/Cardapio"
import Pedidos from "./pages/Pedidos"
import LoginAdmin from './pages/LoginAdmin';
import AdminLogado from './pages/AdminLogado';
import CadUser from './pages/CadUser';

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import Usuario from './api/usuarios';

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

function App() {
  document.title = 'Home - React Router com Helmet'
 
  
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white relative">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/loginuser" element={<LoginUser/>}/>
          <Route path="/loginadmin" element={<LoginAdmin/>}/>
          <Route path="/adminlogado" element={<AdminLogado/>}/>
          <Route path="/cardapio" element={<Cardapio/>}/>
          <Route path="/pedidos" element={<Pedidos/>}/>
          <Route path="/caduser" element={<CadUser/>}/>
          <Route path="/usuarios" element={<Usuario/>}/>
          {/* <Route path="/CardList" element={<CardList/>}/>
          <Route path="/CardList2" element={<CardList2/>}/> */}
        </Routes>
      </BrowserRouter>
      <div class="">
        
      </div>
    </div>
  )
}

export default App
