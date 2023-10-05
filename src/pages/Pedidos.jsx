import Menu from "../components/Menu"
import Helmet from 'react-helmet'

function Pedidos(){
    return(
        <div className="w-full absolute mt-24 z-10">
            <Helmet title="PizzaRuth - Pedidos" />
            <Menu />

            <div className="w-full h-full flex flex-col items-center bg-white">
                <div className="container flex justify-around w-full h-full gap-16 flex-wrap">
                    Aqui é o Pedidos
                </div>
            </div>
        
        </div>
    )
}

export default Pedidos