import { useReducer } from "react";
// reducer is a function that determines changes to an application's state.
// type for initial state ,state
type CounterState = {
  // we put it based on the initial state
  count: number;
};
const initialState = { count: 0 }; // initial state

//  type for action with payload
type UpdateAction = {
  type: "increment" | "decrement"; // can be also string
  payload: number;
};
// type for action but no payload
type ResetAction = {
  type: "reset";
};

type CounterAction = UpdateAction | ResetAction; // union type

// reducer function
function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}
// without reset action
// type CounterAction = UpdateAction; // union type

// // reducer function
// function reducer(state: CounterState, action: CounterAction) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + (action.payload ?? 0) };
//     case "decrement":
//       return { count: state.count - (action.payload ?? 0) };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// }
export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};
