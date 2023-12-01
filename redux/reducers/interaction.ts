import { createAction, createReducer } from "@reduxjs/toolkit";

interface InteractionState {
  eng: boolean;
}

const initialState: InteractionState = {
  eng: false,
};

export const changeLanguage = createAction("interaction reducer / changing the language");

const interactionReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeLanguage, (state) => {
    state.eng = !state.eng;
  });
});

export default interactionReducer;
