import sad from "../assets/img/sad.png"
import party from "../assets/img/party.png"
import styled from 'styled-components'

export default function Mensagem({ contador, cardsNumero, erro }) {
    if (contador.length === cardsNumero) {
        if (!contador.includes(erro)) {
            return (
                <Modelo>
                    <div><img src={party} alt='party img' /> Parabéns!</div>
                    Você não esqueceu de <br />
                    nenhum Flashcard!
                </Modelo>
            )
        }
        else {
            return (
                <Modelo>
                    <div><img src={sad} alt='sad     img' /> Putz...</div>
                    Ainda faltam mais alguns...<br />
                    Mas não desanime!
                </Modelo>
            )
        }
    }
}

const Modelo = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    div {
        font-weight: 700;
        gap: 0px 12px
    }
    img{
        width: 12px;
        heigth: 12px;
    }
`