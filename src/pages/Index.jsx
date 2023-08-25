function Index(){
    return(
        <div className="w-screen h-screen overflow-x-hidden">
            <div className="bg-violet-600 w-full h-full flex justify-center border">
                <div className=" h-full flex flex-col justify-center items-center gap-10  max-[426px]:w-10/12 min-[768px]:w-6/12 min-[1024px]:w-4/12 min-[1440px]:w-2/12">
                    <img src="src/assets/img/Group 42.png" alt="" className=""/>
                    <div className="flex gap-4 w-full justify-center text-white">
                        <div className="flex gap-2">
                            <input id="userRadio" type="radio"/>
                            <label for="userRadio">Usuário</label>
                        </div>
                        <div className="flex gap-2">
                            <input id="estaRadio" type="radio"/>
                            <label for="uestaRadio">Estabelecimento</label>
                        </div>
                    </div>
                    <div className="login w-full flex flex-col items-center gap-4">
                        <div className="inputs w-full flex flex-col gap-2">
                            <input className="rounded-md w-full h-10 pl-2 bg-gray-200" type="text" placeholder="Email ou Usuário"/>
                            <input className="rounded-md w-full h-10 pl-2 bg-gray-200" type="password" placeholder="Senha"/>
                        </div>
                        
                        <div className="submit w-6/12 flex flex-col items-center text-white gap-1">
                            <a href="/Home" id="btnEntrar" className="text-center bg-orange-400 w-full  rounded-md" type="submit">Entrar</a>
                            <a href="#" className="">cadastrar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index