import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface GameState {
  multiplayer: boolean;
  music: boolean;
}

// Define the initial state using that type
const initialState: GameState = {
  multiplayer: false,
  music: false,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    toggleMultiplayer: (state) => {
      state.multiplayer = !state.multiplayer;
    },
    toggleMusic: (state) => {
      state.music = !state.music;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { toggleMultiplayer, toggleMusic } = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getMultiplayer = (state: RootState) => state.game.multiplayer;

export const getMusic = (state: RootState) => state.game.music;

export default gameSlice.reducer;
