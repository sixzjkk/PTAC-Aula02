import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTel] = useState(0);

    return(
        <main>
            <form>
                <label htmlFor="nome">Nome:</label>
                <input
                    type= "text"
                    name= "" id= ""
                    onChange={(event)=> setNome(event.target.value)}
                />
                <label htmlFor="telefone">Telefone:</label>
                <input
                    type= "tel"
                    name= "" id= ""
                    onChange={(event)=> setTel(event.target.value)}
                />
                {nome}
                {telefone}
                <button>Enviar</button>
            </form>
        </main>
    )
}