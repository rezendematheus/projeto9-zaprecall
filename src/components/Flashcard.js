import { useState } from 'react'
import styled from 'styled-components'
import setavirar from '../assets/img/seta_virar.png'
import setaplay from '../assets/img/seta_play.png'

const VERDE = "#2FBE34"
const AMARELO = "#FF922E"
const VERMELHO = "#FF3030"
const CINZA = "#333333" 

export default function Flashcard({ question, answer, index }) {
    const [estado, setEstado] = useState("fechada")
    const [resultado, setResultado] = useState("") // nulo, vazio, metade, inteiro

    if (estado === "fechada") {
        return (
            <Fechada>
                Pergunta {index + 1}
                <img onClick={() => setEstado("questão")} src={setaplay} alt='seta play' />
            </Fechada>
        )
    }
    if (estado === "questão") {
        return (
            <Aberta>
                {question}
                <img onClick={() => setEstado("resposta")} src={setavirar} alt='seta virar' />
            </Aberta>
        )
    }
    if (estado === "resposta") {
        return (
            <Aberta>
                {answer}
                <ContainerBotoes>
                    <Botao cor={VERMELHO}>Não lembrei</Botao>
                    <Botao cor={AMARELO}>Quase não lembrei</Botao>
                    <Botao cor={VERDE}>Zap!</Botao>
                </ContainerBotoes>
            </Aberta>   
        )
    }
}

const Fechada = styled.li`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    P {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const Aberta = styled.li`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`
const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
    gap: 0px 10px;

`
const Botao = styled.button`
    width: 85px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.cor};
    border-radius: 5px;
    border: 1px solid ${props => props.cor};
    padding:5px;
`