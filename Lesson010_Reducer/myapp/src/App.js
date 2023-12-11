import logo from "./logo.svg";
import "./App.css";
import Card from "./components/card.component";
import { useReducer, useState } from "react";

function App() {
  // const [cardItems, setCardItems] = useState([]);
  // const [card, setCard] = useState(null);

  //useReducer
  const INITIAL_STATE = {
    card: "",
    cardItems: [
      {
        id: 0,
        title: "Card0",
      },
    ],
  };
  const CardListReducer = (state, action) => {
    console.log(state);
    console.log(action);

    const { type, payload } = action;

    switch (type) {
      case "SET_CARD":
        return {
          ...state,
          card: payload,
        };
      case "ADD_CARD":
        return {
          ...state,
          cardItems: [...state.cardItems, payload],
        };
      default:
        throw new Error(`Unhandled type ${type} in cartReducer`);
    }
  };

  const [state, dispatch] = useReducer(CardListReducer, INITIAL_STATE);

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
    dispatch({ type: "SET_CARD", payload: newCardToAdd });
  };

  const submitClick = (event) => {
    event.preventDefault();
    // setCardItems([...cardItems, card]);
    // console.log(cardItems);
    // setCard(null);
    const newCardToAdd = state.card;
    // setCard(card);
    dispatch({
      type: "ADD_CARD",
      payload: newCardToAdd,
    });
  };

  return (
    <div className="container" style={{ marginTop: "20px" }}>
      <div className="row">
        <div className="col-md-5">
          <form>
            <input
              type="text"
              onChange={inputOnChange}
              className="form-control float-start"
            />
            {state.card.title}
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
        {state.cardItems.map((card) => {
          return <Card key={card.id} />;
        })}
      </div>
    </div>
  );
}

export default App;
