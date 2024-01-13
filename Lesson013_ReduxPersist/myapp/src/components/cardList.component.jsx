import { useSelector } from "react-redux";
import Card from "./card.component";
import { selectCardsMap } from "../store/card/card.selector";

const CardList = () => {
  const cardItems = useSelector((state) => state.card.cartItems);
  console.log("/********rendering CardList*******/");
  // const x = useSelector((state) => selectCardsMap(state));
  // const y = useSelector(selectCardsMap);

  // console.log("original:", cardItems);
  // console.log("reduced:", x);
  // console.log("reduced:", y);

  return (
    <div className="row">
      {cardItems.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
};
export default CardList;
