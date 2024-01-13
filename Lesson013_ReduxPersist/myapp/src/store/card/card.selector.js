export const selectCardsMap = (state) => {
  console.log("/****card selector fired*********");

  return state.card.cartItems.reduce((acc, cart) => {
    const { title, id } = cart;
    acc[title.toUpperCase()] = id;
    return acc;
  }, {});
  // return state.card.cartItems.reduce((acc, card) => {
  //     const { cartItems } = card;
  //     acc[title.toLowerCase()] = cartItems;
  // })
};
