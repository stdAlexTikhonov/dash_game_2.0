import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PlayerState {
  player_ready: boolean;
  first_render: boolean;
  user_input: string | null;
}

// Define the initial state using that type
const initialState: PlayerState = {
  player_ready: false,
  first_render: false,
  user_input: null,
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
    setUserInput: (state, action: PayloadAction<string | null>) => {
      state.user_input = action.payload;
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
  setUserInput,
} = playerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getPlayer = (state: RootState) => state.player.player_ready;

export const getRender = (state: RootState) => state.player.first_render;

export const getUserInput = (state: RootState) => state.player.user_input;

export default playerSlice.reducer;
