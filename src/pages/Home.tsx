import React, { useEffect, useState } from "react";
import { costumer } from "../types/costumer";
import Client from "../components/Client";
const Home:React.FC = () =>{
    //state de array de costumers
    const [costumers,useCostumers] = useState<costumer[]>()
    useEffect(()=>{
        //Codigo para pegar os costumers no servidor
    },[])
    return(
        <html lang="pt-BR">
            <div>
                {
                //map para criar os components dos costumers na tabela,
                //o v é do tipo costumer e o i é number para ficar na ordem da tabela
                costumers?.map((v,i)=>(
                    <Client costumer={v} key={i}></Client>
                ))
                }
            </div>
        </html>
    )
}
export default Home