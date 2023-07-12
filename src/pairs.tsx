import { useState } from "react";
import { CardsDataInfo, cardsData, shuffleArray } from "./cards-data";
import { Card } from "./card";

export function Pairs(): JSX.Element {
  const shuffleCards = shuffleArray(cardsData);
  const [clickCounter, setClickCounter] = useState(0);
  const cardReset = {
    id: -1,
    cardEmoji: "",
    status: "",
  };
  const [firstCard, setFirstCard] = useState<CardsDataInfo>(cardReset);
  const [cards, setCards] = useState<CardsDataInfo[]>(shuffleCards);

  const handleClick = (card: CardsDataInfo) => {
    const updatedCards = cards.map((eachCard) => {
      if (eachCard.id === card.id) {
        return { ...eachCard, status: "active" };
      }
      return eachCard;
    });
    setCards(updatedCards);
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
    const updatedCards = cards.map((eachCard) => {
      if (eachCard.id === card.id) {
        return { ...eachCard, status: "active" };
      }
      return eachCard;
    });
    setCards(updatedCards);
    setClickCounter(0);
    setFirstCard(cardReset);
    setTimeout(() => {
      checkForMatch(card);
    }, 500);
  };
  const checkForMatch = (card: CardsDataInfo) => {
    const updatedCards = cards.map((eachCard) => {
      if (
        eachCard.cardEmoji === firstCard.cardEmoji &&
        card.cardEmoji === firstCard.cardEmoji
      ) {
        return { ...eachCard, status: "matched" };
      } else if (eachCard.status === "active") {
        return { ...eachCard, status: "" };
      } else {
        return { ...eachCard };
      }
    });
    setCards(updatedCards);
  };
  const cardsOutput = cards.map((eachCard, index) => (
    <Card key={index} card={eachCard} click={() => handleClick(eachCard)} />
  ));

  return <>{cardsOutput}</>;
}
// have card 1 & 2 in array if match then cards need to disappear (remove from array?)
// need cards to be facing down then when clicked turn
