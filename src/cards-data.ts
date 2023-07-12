export interface CardsDataInfo {
  id: number;
  cardEmoji: string;
  status: string;
}
export const cardsData: CardsDataInfo[] = [
  { id: 1, cardEmoji: "🍓", status: "" },
  { id: 2, cardEmoji: "🍓", status: "" },
  { id: 3, cardEmoji: "🦋", status: "" },
  { id: 4, cardEmoji: "🦋", status: "" },
  { id: 5, cardEmoji: "🐠", status: "" },
  { id: 6, cardEmoji: "🐠", status: "" },
  { id: 7, cardEmoji: "🌸", status: "" },
  { id: 8, cardEmoji: "🌸", status: "" },
  { id: 9, cardEmoji: "⭐️", status: "" },
  { id: 10, cardEmoji: "⭐️", status: "" },
  { id: 11, cardEmoji: "🍰", status: "" },
  { id: 12, cardEmoji: "🍰", status: "" },
  { id: 13, cardEmoji: "🦄", status: "" },
  { id: 14, cardEmoji: "🦄", status: "" },
  { id: 15, cardEmoji: "🍭", status: "" },
  { id: 16, cardEmoji: "🍭", status: "" },
];

export const shuffleArray = (array: CardsDataInfo[]) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
