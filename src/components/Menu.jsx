import LogoImg from "../assets/img/pizzaRuthLogo.png"
import BasicModal from "./BasicModal"


function Menu(){

    return(
        <div className="header w-full h-24 fixed top-0 flex justify-evenly p-4 items-center border z-10 bg-white">
            <a href="/" className="h-full hover:scale-105 hover:transition-all hover:drop-shadow-md">
                <img src={LogoImg} alt="" className="h-full" />
            </a>
            <div className="flex h-full items-center justify-center gap-6 text-stone-700">
                
                <a href="/cardapio" className=""><i class="fa-solid fa-clipboard-list"></i> Cardápio</a>
                <a href="/pedidos" className=""><i class="fa-solid fa-bag-shopping"></i> Pedidos</a>
            </div> 
            <div className="flex w-24 h-full items-center justify-center text-stone-700">
               
                <BasicModal/>
            </div> 
        </div>
            
    )
}

export default Menu

