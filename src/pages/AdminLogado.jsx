import MenuAdmin from "../components/MenuAdmin"
import Helmet from 'react-helmet'

export default function AdminLogado(){

    fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'POST',
        body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),

    headers: {
        'Content-type': 'applicattion/json; charset=UTF8'
    },
})
.then((response) => response.json())
.then((json) => console.log(json));

    return(
        <div className="w-full absolute mt-24 z-10">
            <Helmet title="Área do Gestor" />
            <MenuAdmin/>

            <div className="container w-full h-full flex flex-col bg-white">

            {/* {users.map( user =>
                 <p key={user.id} className="tituloPag flex w-screen justify-center pt-8 border">
                    Olá Admin, pronto para atualizar as informações de seu estabelecimento.
                </p>
                )} */}

                

                <div className="infoTopo flex flex-col w-screen items-center pt-8 border">
                    <h1 className="">Informações</h1>
                    <div className="tabelaInfo flex gap-2 justify-center w-full p-2 border">
                        

                            {/* ATULIZAR INFORMAÇÕES DO TOPO DA PÁGINA */}
                            
                    </div>
                </div>

            </div>

        </div>
    )
}
