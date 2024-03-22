import { useState } from "react";

export default function Main() {
    const [nome, setNome] = useState("");
    const [telefone, setTel] = useState(0);
    const [cpf, setCpf] = useState(0);
    const [listaContatos, setContatos] = useState([]);

    const registrar = (event) => {
        event.preventDefault();
        setContatos([...listaContatos,{
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            cpfSalvo: cpf,
        }
    ])
        alert("Cadastro salvo");
    };
    console.table(listaContatos);

    return(
        <main>
            <form action="" onSubmit={registrar}>
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
                <label htmlFor="cpf">CPF:</label>
                <input
                    type= "tel"
                    name= "" id= ""
                    onChange={(event)=> setCpf(event.target.value)}
                />
                {nome}
                {telefone}
                {cpf}
                <button>Salvar</button>
            </form>
        </main>
    )
}