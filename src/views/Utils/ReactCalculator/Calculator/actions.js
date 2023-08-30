export const CalculatorAction = Object.freeze({
  SET_INPUT: "SET_INPUT",
  SET_OUTPUT: "SET_OUTPUT",
  SET_EVALED: "SET_EVALED",
  SET_DEBUG_VALUE: "SET_DEBUG_VALUE",
  SET_ANS: "SET_ANS",
  TOGGLE_DEG_MODE: "TOGGLE_DEG_MODE",
  TOGGLE_INVERSE_MODE: "TOGGLE_INVERSE_MODE",
  RESET_OUTPUT: "RESET_OUTPUT",
  RESET_STATE: "RESET_STATE",
});

export const setInput = (payload) => ({
  type: CalculatorAction.SET_INPUT,
  payload,
});

export const setOutput = (payload) => ({
  type: CalculatorAction.SET_OUTPUT,
  payload,
});

export const setEvaled = (payload) => ({
  type: CalculatorAction.SET_EVALED,
  payload,
});

export const setDegMode = (payload) => ({
  type: CalculatorAction.TOGGLE_DEG_MODE,
  payload,
});

export const toggleInverseMode = () => ({
  type: CalculatorAction.TOGGLE_INVERSE_MODE,
});

export const setDebugValue = (payload) => ({
  type: CalculatorAction.SET_DEBUG_VALUE,
  payload,
});

export const resetOutput = () => ({
  type: CalculatorAction.RESET_OUTPUT,
});

export const resetState = () => ({
  type: CalculatorAction.RESET_STATE,
});
