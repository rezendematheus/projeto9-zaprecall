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
    const [testIcone, setTest] = useState("")

    if (estado === "fechada") {
        return (
            <div data-test="flashcard">
                <Fechada estilo={resultado}>
                    <p data-test="flashcard-text">Pergunta {index + 1}</p>
                    <img data-test={testIcone} onClick={!resultado ? (() => setEstado("questão")) : () => { }} src={icone} alt={`seta ${resultado}`} />
                </Fechada>
            </div>

        )
    }
    if (estado === "questão") {
        return (
            <div data-test="flashcard">
                <Aberta>
                    <div data-test="flashcard-text">{question}</div>
                    <img data-test="turn-btn" onClick={() => setEstado("resposta")} src={setavirar} alt='seta virar' />
                </Aberta>
            </div>

        )
    }
    if (estado === "resposta") {
        return (
            <div data-test="flashcard" >
                <Aberta>
                    <span data-test="flashcard-text">{answer}</span>
                    <ContainerBotoes>
                        <Botao
                            data-test="zap-btn"
                            onClick={() => { setEstado("fechada"); setContador([...contador, icone_erro]); setIcone(icone_erro); setTest("no-icon"); setResultado(VERMELHO) }}
                            cor={VERMELHO}>
                            Não lembrei
                        </Botao>
                        <Botao
                            data-test="zap-btn"
                            onClick={() => { setEstado("fechada"); setContador([...contador, icone_quase]); setIcone(icone_quase); setTest("partial-icon"); setResultado(AMARELO) }}
                            cor={AMARELO}>
                            Quase não lembrei
                        </Botao>
                        <Botao
                            data-test="zap-btn"
                            onClick={() => { setEstado("fechada"); setContador([...contador, icone_certo]); setIcone(icone_certo); setTest("zap-icon"); setResultado(VERDE) }}
                            cor={VERDE}>
                            Zap!
                        </Botao>
                    </ContainerBotoes>
                </Aberta>
            </div>

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
    padding: 10px;
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