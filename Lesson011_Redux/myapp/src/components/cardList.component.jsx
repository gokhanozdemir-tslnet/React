import { useSelector } from "react-redux";
import Card from "./card.component";

const CardList = () => {
    const cardItems = useSelector((state) => state.card.cartItems);
    console.log("/********rendering CardList*******/")
  return (
    <div className="row">
      {cardItems.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
};
export default CardList;
