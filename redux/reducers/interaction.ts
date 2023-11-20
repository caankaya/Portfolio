import { createAction, createReducer } from "@reduxjs/toolkit";

interface InteractionState {
  test: string | null;
}

const initialState: InteractionState = {
  test: null,
};

export const testAction = createAction<string>("interaction/test");

const interactionReducer = createReducer(initialState, (builder) => {
  builder.addCase(testAction, (state) => {
    state.test;
  });
});

export default interactionReducer;
