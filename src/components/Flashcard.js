import { useState } from 'react'
import styled from 'styled-components'
import setavirar from '../assets/img/seta_virar.png'
import setaplay from '../assets/img/seta_play.png'
import icone_certo from '../assets/img/icone_certo.png'
import icone_erro from '../assets/img/icone_erro.png'
import icone_quase from '../assets/img/icone_quase.png'

const VERDE = "#2FBE34"
const AMARELO = "#FF922E"
const VERMELHO = "#FF3030"
const CINZA = "#333333"



export default function Flashcard({ question, answer, index, contador, setContador }) {
    const [estado, setEstado] = useState("fechada")
    const [resultado, setResultado] = useState("") // '', "erro", "quase", "certo"
    const [icone, setIcone] = useState(setaplay)

    if (estado === "fechada") {
        return (
            <Fechada estilo={resultado}>
                <p>Pergunta {index + 1}</p>
                <img onClick={!resultado ? (() => setEstado("questão")) : () => { }} src={icone} alt={`seta ${resultado}`} />
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
                    <Botao onClick={() => { setEstado("fechada"); setContador(contador + 1); setIcone(icone_erro); setResultado(VERMELHO) }} cor={VERMELHO}>Não lembrei</Botao>
                    <Botao onClick={() => { setEstado("fechada"); setContador(contador + 1); setIcone(icone_quase); setResultado(AMARELO) }} cor={AMARELO}>Quase não lembrei</Botao>
                    <Botao onClick={() => { setEstado("fechada"); setContador(contador + 1); setIcone(icone_certo); setResultado(VERDE) }} cor={VERDE}>Zap!</Botao>
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
        color: ${props => props.estilo};
        text-decoration: ${props => props.estilo && "line-through"};
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