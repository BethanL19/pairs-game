import { useState } from "react";
import { CardsDataInfo, cardsData } from "./cards-data";
import { Card } from "./card";

export function Pairs(): JSX.Element {
  const shuffleCards = cardsData.sort(() => Math.random() - 0.5);
  const [clickCounter, setClickCounter] = useState(0);
  const [firstCard, setFirstCard] = useState<CardsDataInfo>({
    id: -1,
    cardEmoji: "",
    status: "",
  });
  const [cards, setCards] = useState<CardsDataInfo[]>(shuffleCards);

  const handleClick = (card: CardsDataInfo) => {
    if (clickCounter === 0) {
      FirstClick(card);
    } else if (clickCounter === 1) {
      SecondClick(card);
    }
  };
  const FirstClick = (card: CardsDataInfo) => {
    setFirstCard(card);
    setClickCounter(1);
  };
  const SecondClick = (card: CardsDataInfo) => {
    checkForMatch(card);
    setClickCounter(0);
  };
  const checkForMatch = (card: CardsDataInfo) => {
    if (card.id === firstCard.id) {
      const updatedCards = cards.map((eachCard) => {
        if (eachCard.id === card.id) {
          return { ...eachCard, status: "matched" };
        }
        return card;
      });
      setCards(updatedCards);
    }
  };
  const cardsOutput = cards.map((eachCard, index) => (
    <Card key={index} card={eachCard} click={() => handleClick(eachCard)} />
  ));

  return <>{cardsOutput}</>;
}
// have card 1 & 2 in array if match then cards need to disappear (remove from array?)
// need cards to be facing down then when clicked turn
