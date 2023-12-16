import "./App.css";
import { addCardToItems } from "./store/card/card.action";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const submitClick = (event) => {
    event.preventDefault();

    const newCardToAdd = {
      id: "1",
      title: "event.target.value",
    };
    console.log(addCardToItems(newCardToAdd));
    dispatch(addCardToItems(newCardToAdd));
    // setCardItems([...cardItems, card]);
    // console.log(cardItems);
    // setCard(null);
    // const newCardToAdd = state.card;
    // // setCard(card);
    // dispatch({
    //   type: "ADD_CARD",
    //   payload: newCardToAdd,
    // });
  };

  const inputOnChange = (event) => {
    // const card = {
    //   id: event.target.value,
    //   title: event.target.value,
    // };
    const newCardToAdd = {
      id: event.target.value,
      title: event.target.value,
    };
    // setCard(card);
    //dispatch({ type: "SET_CARD", payload: newCardToAdd });
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-5">
          <form>
            <input
              type="text"
              // onChange={inputOnChange}
              className="form-control float-start"
            />
            {/* {state.card.title} */}
            <button
              type="submit"
              onClick={submitClick}
              //disabled={!state.card}
              className="btn btn-sm btn-dark"
            >
              Add
            </button>
          </form>
        </div>
        <div className="col-md-5"></div>
      </div>
      <div className="row">
        {/* {state.cardItems.map((card) => {
          return <Card key={card.id} />;
        })} */}
      </div>
    </div>
  );
}

export default App;
