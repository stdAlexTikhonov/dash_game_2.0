import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface GameState {
  multiplayer: boolean;
  music: boolean;
  dev: boolean;
  level: number;
  time: number;
}

// Define the initial state using that type
const initialState: GameState = {
  multiplayer: false,
  music: false,
  dev: false,
  level: 0,
  time: 0,
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
    toggleDev: (state) => {
      state.dev = !state.dev;
    },
    setLevel: (state, action: PayloadAction<number>) => {
      state.level = action.payload;
    },
    resetTime: (state) => {
      state.time = 0;
    },
    updateTime: (state) => {
      state.time++;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  toggleMultiplayer,
  toggleMusic,
  toggleDev,
  setLevel,
  resetTime,
  updateTime,
} = gameSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getMultiplayer = (state: RootState) => state.game.multiplayer;

export const getMusic = (state: RootState) => state.game.music;

export const getDev = (state: RootState) => state.game.dev;

export const getLevel = (state: RootState) => state.game.level;

export const getTime = (state: RootState) => state.game.time;

export default gameSlice.reducer;
