
"use client";
import { Action, CART_ACTION_TYPES, Card, INITIAL_STATE, cardReducer } from "@/components/card.reducer";
import Image from "next/image";
import { useReducer } from "react";

export default function Home() {


  const [state, dispatch] = useReducer(cardReducer, INITIAL_STATE);
  console.log(state);


  const fetchClick: any = (event: any) => {

    // alert(event.target.name);

    const act: Action = {
      type: CART_ACTION_TYPES.FECTH_START
    };

    dispatch(act);

  };

  const fetchCompleteClick: any = (event: any) => {


    const mycard: Card = {
      userId: 1,
      id: 1,
      title: "title"

    };

    alert(event.target.name);

    const act: Action = {
      type: CART_ACTION_TYPES.FETCH_COMPLETE,
      payload: mycard
    };

    dispatch(act);

    // console.log(state);

  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>merhaba</div>
      <button name="button1"
        onClick={fetchClick}
        style={{ backgroundColor: "orange" }}
      >Click Start</button>
      <button name="button2"
        onClick={fetchCompleteClick}
        style={{ backgroundColor: "orange" }}
      >Click Complete</button>
    </main>
  );
}
