
function Menu(){

    return(
        <div className="header w-full h-24 fixed top-0 flex justify-between p-4 items-center border z-10 bg-white">
            <a href="/" className="h-full hover:scale-105 hover:transition-all hover:drop-shadow-md">
                <img src="src/assets/img/pizzaRuthLogo.png" alt="" className="h-full" />
            </a>
            <div className="flex h-full items-center justify-center gap-4 text-stone-700">
                <a href="/Cardapio" className="">Cardápio</a>
                <a href="/Pedidos" className="">Pedidos</a>
            </div> 
        </div>
            
    )
}

export default Menu

