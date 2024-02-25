"use client";

import { type } from "os";
import { string } from "prop-types";
import { Dispatch, Reducer, ReducerAction, ReducerState, SetStateAction } from "react";
import { createContext } from "vm";





export type Card = {
    userId: number,
    id: number,
    title: string,

};



export enum CART_ACTION_TYPES {
    FECTH_START = "FETCH",
    FETCH_COMPLETE = "SUCCED",
    FETCH_START = "SET_CART_COUNT"
}

type State = {
    isCartOpen: boolean,
    cartItems: Card[]

};

//Card[] | Card | null;


export type Action = { type: CART_ACTION_TYPES, payload?: Card[] | Card | null };


export const INITIAL_STATE: State = {
    isCartOpen: false,
    cartItems: [],

};

export function cardReducer(state: State = INITIAL_STATE, action: Action): any {
    const { type, payload } = action;


    switch (type) {
        case CART_ACTION_TYPES.FECTH_START:
            return fetch_start(state);
        case CART_ACTION_TYPES.FETCH_COMPLETE:
            return fetch_complete(state, payload);
        default:
            return state;

    }

}

const fetch_start: any = (state: State): any => {
    console.log("start");
    return state;
};

const fetch_complete: any = (state: State, payload: Card) => {
    // console.log("complete");
    console.log(state);
    return { ...state, cartItems: [...state.cartItems, payload], isCartOpen: true };
};


// type ContextType = {
//     theme: string;
//     setTheme: (theme: string) => void;
// };
// export const ThemeContext = createContext<ContextType | undefined>(undefined);


// export const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
//     const [theme, setTheme] = useState<ContextType["theme"]>("");

//     return (
//         <ThemeContext.Provider value= {{ theme, setTheme }
// }>
//     { children }
//     < /ThemeContext.Provider>
//   );
// };


// type State =
//     | { status: "empty" }
//     | { status: "loading" }
//     | { status: "error", payload: string }
//     | { status: "success", payload: Card[] };

// type State2 = { payload: Card[] | string | null };



// type Action =
//     | { type: "request", payload: string }
//     | { type: "success", payload: Card[] }
//     | { type: "failure", payload: string };

// function display(action: Action) {
//     if (action.type === "success") {
//         console.log(action.payload);
//     }
// }

// function cardReducer(state: State, action: Action): State {
//     const { type, payload } = action;
//     switch (type) {
//         case "request":
//             return { status: "loading" };
//         case "success":
//             return { status: "success", payload: payload };
//         case "failure":
//             return { status: "error", payload: payload };
//     }
// }


