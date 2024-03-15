export default function Header(){

    return(
        <header>
            <div className="header-one">
                <p className="header-info-one">Conectar</p>
                <p className="header-info-one">Resgatar</p>
            </div>
            <div className="header">
                <div className="header-informacoes">
                    <p className="header-info" id="jogo-header">Games</p>
                    <p className="header-info" id="comunidade-header">Comunidade</p>
                    <p className="header-info" id="produtos-header">Produtos</p>
                    <img className="flecha" src="src/Image/nav-link-icon.svg" alt="Flecha"></img>
                    <p className="header-info" id="suporte-header">Suporte</p>
                    <img className="flecha" src="src/Image/nav-link-icon.svg" alt="Flecha"></img>
                </div>
                <img className="logotipo" src="src/Image/logo-minecraft.svg" alt="Logotipo minecraft"></img>
                <div className="header-button">
                    <button className="button">Obter o Minecraft</button>
                </div>
            </div>
        </header>
    );
}