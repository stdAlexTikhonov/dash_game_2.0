import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface GameState {
  multiplayer: boolean;
}

// Define the initial state using that type
const initialState: GameState = {
  multiplayer: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    toggleMultiplayer: (state) => {
      state.multiplayer = !state.multiplayer;
    },

    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMultiplayer } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getMultiplayer = (state: RootState) => state.game.multiplayer;

export default gameSlice.reducer;
