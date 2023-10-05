import "../css/index.css"
import Helmet from 'react-helmet'
import bgImg from "../assets/img/bgImg.jpg"
import React, { Component } from "react";

export default function LoginUser(){

    const handleVoltarClick = () => {
        window.location.href = '/'
        // // Realize a validação das credenciais aqui.
        // // Você pode comparar as credenciais com as credenciais corretas.
        // if (credentials.login === 'usuario' && credentials.senha === 'senha') {
        //   // Credenciais corretas, redirecione para a página de logado.
        //   history.push('/pagina-de-logado');
        // } else {
        //   // Credenciais incorretas, exiba uma mensagem de erro.
        //   setError('Credenciais incorretas. Tente novamente.');
        // }
      };
    const handleLoginClick = () => {
        window.location.href = '/'
      };

    return( 
        <div className="w-full absolute z-10">
            <Helmet title="Login Usuário" />

            <div className=" w-full h-screen flex gap-2 relative">
                <form className="logUser absolute z-10 w-5/12 h-full justify-center items-center gap-6 p-6 flex flex-col">
                    <h1 className="text-xl font-bold text-white">LOGIN USUÁRIO</h1>
                    <div className="w-6/12 flex flex-col gap-3">
                        <input 
                            type="text" 
                            placeholder="Login"  
                            // value={credentials.login} 
                            // onChange={(e) => setCredentials({ ...credentials, login: e.target.value })} 
                            className="w-full h-10 pl-4 placeholder:text-gray-400 bg-gray-100" 
                            required
                        />

                        <input 
                            type="password" 
                            placeholder="Senha"
                            // value={credentials.senha} 
                            // onChange={(e) => setCredentials({ ...credentials, senha: e.target.value })}
                            className="w-full h-10 pl-4 placeholder:text-gray-400 bg-gray-100" 
                            required
                        />
                    </div>

                    <div className="w-6/12 flex justify-between gap-2">   
                        <button 
                            type="submit" 
                            
                            onClick={handleLoginClick} 
                            className="w-6/12 h-10 bg-white text-black"
                        >
                        Acessar
                        </button>
                        
                        {/* VERIFICAR POSSIVEL PROBLEMA */}
                        <a 
                        href="/caduser"
                        className="w-6/12 h-10 flex justify-center items-center text-white border hover:bg-white hover:text-black animate-pulse"
                        >
                        cadastrar
                        </a>

                        {/* {error && <p>{error}</p>} */}
                    </div>
                    <button                       
                        onClick={handleVoltarClick} 
                        className="w-10 h-10 bg-red-600 text-white absolute top-0 right-0 rounded-bl-md hover:bg-red-700"
                        >
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </form>
                <div className="w-screen h-screen border flex justify-end right-0">
                    <img className="w-full h-full object-cover" src={bgImg} alt="" />
                </div>
                                
            </div>
        </div>
    )
}
