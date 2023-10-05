import React from "react";
import Helmet from 'react-helmet'
import bgImg from "../assets/img/apresentaçãoPizza.png"
import "../css/index.css"
import Footer from "../components/Footer";

import MenuAlter from "../components/MenuAlter";

export default function CadUser(){

    
    return(
    <div className="w-screen h-screen absolute z-10 bg-gray-300 overflow-hidden">
        <Helmet title="Cadastro Usuário" />
        <MenuAlter/>
        <div className="w-screen h-screen flex justify-center items-center mt-10 overflow-y-hidden">
        <img className="h-full absolute -z-10 right-0 drop-shadow-[10px_10px_10px_black]" src={bgImg} alt="" />
            <form action="" className="FormCad flex flex-col justify-center items-center border w-6/12 h-4/6 gap-6 rounded-[10px]">
                <h1 className="text-white font-bold text-3xl">Cadastro</h1>
                <div className="flex flex-col w-full gap-1 justify-center items-center">
                    <input type="text" placeholder="Nome" className="border pl-2 w-5/12 h-9" required/>
                    <input type="text" placeholder="Sobrenome" className="border pl-2 w-5/12 h-9" required/>
                    <input type="text" placeholder="CPF" className="border pl-2 w-5/12 h-9" required/>
                    <input type="email" placeholder="Email" className="border pl-2 w-5/12 h-9" required/>
                    <input type="tel" placeholder="Telefone" className="border pl-2 w-5/12 h-9" required/>
                    <input type="password" placeholder="Senha" className="border pl-2 w-5/12 h-9" required/>
                    <input type="password" placeholder="Confirmar senha" className="border pl-2 w-5/12 h-9" />
                </div>
                <div className="w-full flex flex-col justify-center items-center gap-1">
                    <button className="border w-3/12 text-white" type="submit" onClick={'#'}>Cadastrar</button>
                </div>
                
            </form>
        </div>
        
        <Footer/>            
    </div>
    )
    
}