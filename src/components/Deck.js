import Flashcard from "./Flashcard"

export default function Deck({ cards, contador, setContador }){
    return (
        cards.map(card => (<Flashcard key={cards.indexOf(card)} question={card.question} answer={card.answer} index={cards.indexOf(card)} contador={contador} setContador={setContador}/>))
    )
}