import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCardToItems } from "../store/card/card.action";

const CardAdder = () => {
  console.log("/********rendering App*******/");
  const [cardToAdd, setCardToAdd] = useState("");
  const dispatch = useDispatch();

  const submitClick = (event) => {
    event.preventDefault();

    dispatch(addCardToItems(cardToAdd));
  };

  const inputOnChange = (event) => {
    const newCardToAdd = {
      id: event.target.value,
      title: event.target.value,
    };
    setCardToAdd(newCardToAdd);
  };
  return (
    <div className="col-md-5">
      <form>
        <input
          type="text"
          onChange={inputOnChange}
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
  );
};

export default CardAdder;
