export const RestAction = Object.freeze({
  SET_URL: "SET_URL",
  SET_METHOD: "SET_METHOD",
  SET_PARAMS: "SET_PARAMS",
  SET_AUTHORIZATION_TYPE: "SET_AUTHORIZATION_TYPE",
  SET_AUTHORIZATION: "SET_AUTHORIZATION",
  SET_HEADERS: "SET_HEADERS",
  SET_CONTENT_TYPE: "SET_CONTENT_TYPE",
  SET_BODY: "SET_BODY",
  SET_LOADING: "SET_LOADING",
  RESET_OUTPUT: "RESET_OUTPUT",
  RESET_STATE: "RESET_STATE",
});

export const setUrl = (payload) => ({
  type: RestAction.SET_URL,
  payload,
});

export const setParams = (payload) => ({
  type: RestAction.SET_PARAMS,
  payload,
});

export const setMethod = (payload) => ({
  type: RestAction.SET_METHOD,
  payload,
});

export const setAuthorizationType = (payload) => ({
  type: RestAction.SET_AUTHORIZATION_TYPE,
  payload,
});

export const setAuthorization = (payload) => ({
  type: RestAction.SET_AUTHORIZATION,
  payload,
});

export const setHeaders = (payload) => ({
  type: RestAction.SET_HEADERS,
  payload,
});

export const setContentType = (payload) => ({
  type: RestAction.SET_CONTENT_TYPE,
  payload,
});

export const setBody = (payload) => ({
  type: RestAction.SET_BODY,
  payload,
});

export const resetOutput = () => ({
  type: RestAction.RESET_OUTPUT,
});

export const resetState = () => ({
  type: RestAction.RESET_STATE,
});
