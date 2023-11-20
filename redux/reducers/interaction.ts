import { createAction, createReducer } from "@reduxjs/toolkit";

interface InteractionState {
  test: string | null;
}

const initialState: InteractionState = {
  test: null,
};

export const testAction = createAction<string>("interaction/test");

const interactionReducer = createReducer(initialState, () => {});

export default interactionReducer;
