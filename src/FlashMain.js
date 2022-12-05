import { useState } from "react"
import styled from 'styled-components'
import logo from "./assets/img/logo.png"
import Deck from "./components/Deck"
import Mensagem from "./components/Mensagem"
import icone_certo from './assets/img/icone_certo.png'
import icone_erro from './assets/img/icone_erro.png'
import icone_quase from './assets/img/icone_quase.png'

const cards = [
	{ question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
	{ question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
	{ question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
	{ question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
	{ question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
	{ question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
	{ question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
	{ question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
]
export default function FlashMain(){
    const [contador, setContador] = useState([])
    return (
        <ScreenContainer>
            
            <LogoContainer>
                <img src={logo} alt="zap logo" />
                <h1>
                    ZapRecall
                </h1>
            </LogoContainer>


            <Deck cards={cards} contador={contador} setContador={setContador} />
            

            <Footer data-test="footer" concluido={contador.length===cards.length}>
                <Mensagem contador={contador} cardsNumero={cards.length} erro={icone_erro}  />
                
                <p>{contador.length}/{cards.length} Concluídos</p>
                <FooterBotoes>
                    {contador.map(e => <img src={e} alt={`${e} icon`}/>)}
                </FooterBotoes>
            </Footer>

        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 20px 0;
    
    img {
        width: 52px;
    }
    h1 {
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        color: #FFFFFF;
        margin-left: 20px;
    }
`

const Footer = styled.div`
    width: 100%;
    min-height: 50px;
    max-height:${props => props.concluido ? "" : "60px"};
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px 0px;
    padding: 10px;
    p{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 18px;
        color: #333333;
        margin: 5px;
    }
`

const FooterBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: center;    
    gap: 0px 5px;
`