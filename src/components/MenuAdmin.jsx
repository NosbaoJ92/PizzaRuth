import React, { useState, useEffect } from 'react';

function MenuAdmin(){

    const handleLogoutClick = () => {
        window.location.href = '/LoginAdmin'
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
      const [horaAcesso, setHoraAcesso] = useState(null);

      useEffect(() => {
        const horaAtual = new Date().toLocaleTimeString();
        setHoraAcesso(horaAtual);
      }, []);

    return(
        <div className="header w-full h-24 fixed top-0 flex justify-between p-4 items-center border z-10 bg-white">
            <a href="/adminlogado" className="h-full hover:scale-105 hover:transition-all hover:drop-shadow-md">
                <img src="src/assets/img/pizzaRuthLogo.png" alt="" className="h-full" />
            </a>
            <div className="flex w-60 h-full items-center justify-center gap-4">
                <div className="flex flex-col justify-center items-center text-sm">
                    <p className="">Acessado:</p>
                    <p className="">{horaAcesso}</p>
                </div>
               
                <button 
                    type="submit" 
                                
                    onClick={handleLogoutClick} 
                    className="w-24 h-10 rounded-md bg-red-600 text-white"
                >
                Sair
                </button>
            </div> 
        </div>
            
    )
}

export default MenuAdmin