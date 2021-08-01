import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface PlayerState {
  player_ready: boolean;
  first_render: boolean;
  user_input: string | null;
  user_action: boolean;
  max_score: number;
  score: number;
  bombs: number;
}

// Define the initial state using that type
const initialState: PlayerState = {
  player_ready: false,
  first_render: false,
  user_input: null,
  user_action: false,
  max_score: 0,
  score: 0,
  bombs: 0,
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
    setUserAction: (state) => {
      state.user_action = true;
    },
    resetUserAction: (state) => {
      state.user_action = false;
    },
    setMaxScore: (state, action: PayloadAction<number>) => {
      state.max_score = action.payload;
    },
    addScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
    addBomb: (state) => {
      state.bombs++;
    },
    putBomb: (state) => {
      state.bombs--;
    },
    resetBombs: (state) => {
      state.bombs = 0;
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
  setUserAction,
  resetUserAction,
  setMaxScore,
  addScore,
  addBomb,
  putBomb,
  resetScore,
  resetBombs,
} = playerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getPlayer = (state: RootState) => state.player.player_ready;

export const getRender = (state: RootState) => state.player.first_render;

export const getUserInput = (state: RootState) => state.player.user_input;

export const getUserAction = (state: RootState) => state.player.user_action;

export const getMaxScore = (state: RootState) => state.player.max_score;

export const getScore = (state: RootState) => state.player.score;

export const getBombs = (state: RootState) => state.player.bombs;

export default playerSlice.reducer;
