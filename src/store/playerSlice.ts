import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PlayerState {
  player_ready: boolean;
  first_render: boolean;
}

// Define the initial state using that type
const initialState: PlayerState = {
  player_ready: false,
  first_render: false,
};

export const playerSlice = createSlice({
  name: "main_player",
  initialState,
  reducers: {
    setPlayerReady: (state) => {
      state.player_ready = true;
    },
    setFirstRender: (state) => {
      state.first_render = true;
    },
    resetFirstRender: (state) => {
      state.first_render = false;
    },
    togglePlayerReady: (state) => {
      state.player_ready = state.first_render && !state.player_ready;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPlayerReady,
  togglePlayerReady,
  setFirstRender,
  resetFirstRender,
} = playerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getPlayer = (state: RootState) => state.player.player_ready;

export const getRender = (state: RootState) => state.player.first_render;

export default playerSlice.reducer;
