import { CardsDataInfo } from "./cards-data";

export interface CardProps {
  card: CardsDataInfo;
  click: (card: CardsDataInfo) => void;
}
export function Card(props: CardProps): JSX.Element {
  return (
    <>
      <button
        className={`card ${props.card.status}`}
        onClick={() => props.click(props.card)}
      >
        {props.card.cardEmoji}
      </button>
    </>
  );
}
