import Flashcard from "./Flashcard"

export default function Deck({ cards }){
    return (
        cards.map(card => (<Flashcard question={card.question} answer={card.answer} index={cards.indexOf(card)}/>))
    )
}