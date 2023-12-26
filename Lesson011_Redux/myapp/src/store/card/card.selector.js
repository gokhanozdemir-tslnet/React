export const selectCardsMap = (state) => {
  console.log("/****card selector fired*********");
  return state.card.cartItems.reduce((acc, card) => {
    const { id, title } = card;
    acc[title.toLowerCase()] = [];
  });
};
