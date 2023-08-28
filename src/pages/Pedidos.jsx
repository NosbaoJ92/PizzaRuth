import Menu from "./Menu"

function Pedidos(){
    return(
        <div className="w-full absolute mt-24 z-10">
            <Menu />
            
            <div className="w-full h-full border border-black flex flex-col">
            Página Pedidos
            </div>
        </div>
    )
}

export default Pedidos