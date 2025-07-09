"use client";
import { useReducer } from "react";

const initial = {
  A: 0,
  B: 0,
  C: 0,
};

function voteReducer(state, action) {
  switch (action.type) {
    case "VOTE_OPTION_A":
      return { ...state, A: state.A + 1 };
    case "VOTE_OPTION_B":
      return { ...state, B: state.B + 1 };
    case "VOTE_OPTION_C":
      return { ...state, C: state.C + 1 };
    default:
      return state;
  }
}

function VotingApp() {
  const [state, dispatch] = useReducer(voteReducer, initial);

  return (
    <div >
      <h2>vote</h2>

      <div>
        <button onClick={() => dispatch({ type: "VOTE_OPTION_A" })}>
          Vote Option A
        </button>
        <button onClick={() => dispatch({ type: "VOTE_OPTION_B" })}>
          Vote Option B
        </button>
        <button onClick={() => dispatch({ type: "VOTE_OPTION_C" })}>
          Vote Option C
        </button>
      </div>

      <h3>Current Votes:</h3>
      <ul>
        <li>Option A: {state.A}</li>
        <li>Option B: {state.B}</li>
        <li>Option C: {state.C}</li>
      </ul>
    </div>
  );
}

export default VotingApp;
