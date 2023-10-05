// import { useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import AdminLogado from './AdminLogado';
import Helmet from 'react-helmet'

export default function LoginAdmin(){
    
    // const [credentials, setCredentials] = useState({ login: 'admin', senha: 'admin' });
    // const [error, setError] = useState('');
    // const history = useHistory();

    const handleLoginClick = () => {
        window.location.href = '/adminlogado'
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
    return( 
        <div className="w-full h-full absolute">
            <Helmet title="Login Gestor" />
            <div className="w-full h-screen flex flex-col items-center justify-center bg-white border">

                <form className="container relative w-4/12 h-2/4 justify-center items-center gap-6 p-6 flex flex-col bg-blue-500 drop-shadow-[0px_12px_10px] border">
                    <h1 className="text-xl font-bold text-white">GESTÃO DE LOJA</h1>
                    <div className="w-8/12 flex flex-col gap-3">
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

                    <div className="w-4/12 flex flex-col">   
                        <button 
                            type="submit" 
                            
                            onClick={handleLoginClick} 
                            className="w-full h-10 bg-white text-black"
                        >
                        Acessar
                        </button>
                        {/* {error && <p>{error}</p>} */}
                    </div>

                    <p className="absolute bottom-1 right-2 text-white">v1.0</p>
                </form>

            </div>  
        
        </div>
    )
}
