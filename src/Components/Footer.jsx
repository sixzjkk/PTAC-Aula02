export default function Footer(){

    return(
        <footer>
            <div className="footer-1">
                <div className="footer-image">
                    <img className="footer-img" src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Mojang2020Logo.png" alt="Mojang logo"></img>
                    <img className="footer-img" src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/logos/Logo_Xbox_Game_Studio.png" alt="Xbox logo"></img>
                </div>
                <p className="footer-texto-mojang">Mojang ©2009-2023. "Minecraft" é uma marca registrada da Mojang Synergies AB</p>
                <div className="footer-info1">
                    <p className="footer-texto">Diretrizes de Uso do Minecraft</p>
                    <p className="traco">|</p>
                    <p className="footer-texto">Gerenciar consentimento</p>
                </div>
            </div>
            <div className="footer-info2">
                <p className="footer-titulo">Jogos</p>
                <p className="footer-texto">Minecraft</p>
                <p className="footer-texto">Minecraft Dungeons</p>
                <p className="footer-texto">Minecraft Legends</p>
                <p className="footer-texto">Minecraft Education</p>
                <p className="footer-titulo">Comunidade</p>
                <p className="footer-texto">Comunidade</p>
                <p className="footer-texto">Portal de Aprendizagem para</p>
                <p className="footer-texto">Criadores</p>
                <p className="footer-texto">Carreiras na Mojang Studios</p>
            </div>
            <div className="footer-info2">
            <p className="footer-titulo">Loja</p>
                <p className="footer-texto">Marketplace</p>
                <p className="footer-texto">Loja do Minecraft</p>
                <p className="footer-titulo">Suporte</p>
                <p className="footer-texto">Dicas para iniciantes</p>
                <p className="footer-texto">Discussões e ajuda</p>
                <p className="footer-texto">Comentários</p>
                <p className="footer-texto">Mapa do site</p>
                <p className="footer-texto">Baixar</p>
                <p className="footer-texto">Fale conosco</p>
                <p className="footer-titulo">Conta</p>
                <p className="footer-texto">Perfil</p>
                <p className="footer-texto">Resgatar</p>
            </div>
            <img className="footer-esrb" src="src/image/esrb_2021 .svg"></img>
        </footer>
    );
}