import React from "react";
import "../css/login.css"
const Login:React.FC = ()=>{

    return(
        <html>
            <div className="container">
                <h1 className="title">Usuário</h1>
                <input></input>
                <h1 className="title">Senha</h1>
                <input></input>
                {
                //aqui tem q fazer a função usando o onClick do react para logar no negocio
                //e quando ele logar ele redirecionar a pagina para o /home
                }
                <button >Login</button>
                <br/>
                <div className=""> 
                </div>   
            </div>
        </html>

    )
}
export default Login