import { Action, Address, Output } from "./types";

export enum CalculatorAction {
  ADD_INPUT = "ADD_INPUT",
  SET_OUTPUT = "SET_OUTPUT",
  SET_EVALED = "SET_EVALED",
  SET_DEBUG_VALUE = "SET_DEBUG_VALUE",
  SET_INVERSE_MODE = "SET_INVERSE_MODE",
  ADD_MEMORY = "ADD_MEMORY",
  REMOVE_MEMORY = "REMOVE_MEMORY",
  CLEAR_MEMORY = "CLEAR_MEMORY",
  BACKSPACE = "BACKSPACE",
  TOGGLE_DEG_MODE = "TOGGLE_DEG_MODE",
  TOGGLE_INVERSE_MODE = "TOGGLE_INVERSE_MODE",
  RESET_OUTPUT = "RESET_OUTPUT",
  RESET_STATE = "RESET_STATE",
}

export const addInput = (...payload: string[]): Action => ({
  type: CalculatorAction.ADD_INPUT,
  payload,
});

export const setOutput = (payload: Output): Action => ({
  type: CalculatorAction.SET_OUTPUT,
  payload,
});

export const setDegreesMode = (payload: boolean): Action => ({
  type: CalculatorAction.TOGGLE_DEG_MODE,
  payload,
});

export const addMemory = (address: string, value: number): Action => ({
  type: CalculatorAction.ADD_MEMORY,
  payload: {
    address, value
  },
});

export const removeMemory = (payload: string): Action => ({
  type: CalculatorAction.REMOVE_MEMORY,
  payload,
});

export const clearMemory = (): Action => ({
  type: CalculatorAction.CLEAR_MEMORY,
});

export const setInverseMode = (payload: boolean): Action => ({
  type: CalculatorAction.SET_INVERSE_MODE,
  payload,
});

export const toggleInverseMode = (): Action => ({
  type: CalculatorAction.TOGGLE_INVERSE_MODE,
});

export const backspace = (): Action => ({
  type: CalculatorAction.BACKSPACE,
});

export const resetOutput = (): Action => ({
  type: CalculatorAction.RESET_OUTPUT,
});

export const resetState = (): Action => ({
  type: CalculatorAction.RESET_STATE,
});
