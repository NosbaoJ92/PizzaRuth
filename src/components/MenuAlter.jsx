import LogoImg from "../assets/img/pizzaRuthLogo.png"
import BasicModal from "./BasicModal"


export default function MenuAlter(){

    return(
        <div className="header w-full h-24 fixed top-0 flex p-4 justify-center border z-10 bg-white">
            <div className="w-6/12 h-full flex justify-between items-center ">
                <a href="/" className="hover:text-red-500">
                voltar ao ínicio
                </a>
                <img src={LogoImg} alt="" className="h-full" />     
                <a href="/" className="invisible" >
                voltar ao ínicio
                </a>   
            </div>
            
        </div>
            
    )
}

