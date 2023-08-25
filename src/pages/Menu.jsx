import './Menu.css'

function Menu(){

    return(
        <header class="absolute left-0 top-0">
            <button class="fixed top-4 bg-zinc-500 pl-4 pt-2 pb-2 pr-4 rounded-r-2xl text-2xl text-white cursor-pointer z-10 border-b-2 border-zinc-800"
                id="btnMenuL"><i class="fa-solid fa-bars"></i>
            </button>

            <div class="bg-violet-600 w-screen h-20 fixed bottom-[-1px] flex justify-around items-center rounded-t-xl z-10">
                <a href="index.html" class=" text-white text-3xl"><i class="fa-solid fa-house"></i></a>
                <a href="" class=" text-white text-3xl"><i class="fa-solid fa-magnifying-glass"></i></a>
                <a href="" class=" text-white text-3xl"><i class="fa-solid fa-comment"></i></a>
            </div>
            {/* menulateral */}
            <div class="bgescuro w-full fixed z-10 overflow-hidden overflow-y-hidden">
                <div class="menulateral h-screen top-0 w-52 before:flex flex-col items-center justify-between pt-6 pb-6 gap-6  hidden" id="menuLatera">
                <button class="absolute right-0 top-0 justify-end text-2xl p-3 text-white" id="btnCloseMenu">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div class="flex flex-col gap-4">
                    <img src="src/assets/img/Group 42.png" alt="" class="logo w-36 drop-shadow-xl"/>
                    <ul class="flex flex-col  items-start gap-3">
                        <li><a  class=" text-xl font-semibold drop-shadow-md text-white" href="">Meu perfil</a></li>
                        <li><a  class=" text-xl font-semibold drop-shadow-md text-white" href="">Qual a boa?</a></li>
                        <li><a  class=" text-xl font-semibold drop-shadow-md text-white" href="">Estabelecimento</a></li>
                        <li><a  class=" text-xl font-semibold drop-shadow-md text-white" href="">Configurações</a></li>
                    </ul>
                </div>
                <div class="w-6/12 flex flex-col items-center gap-2">
                    <a href="/Index" class="w-full text-center rounded-md text-white bg-red-500">SAIR</a>
                    <a href="#" class="text-white text-sm">Fale conosco </a>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Menu

