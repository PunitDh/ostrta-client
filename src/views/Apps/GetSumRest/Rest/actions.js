export const RestAction = Object.freeze({
  SET_URL: "SET_URL",
  SET_REQUEST_NAME: "SET_REQUEST_NAME",
  SET_METHOD: "SET_METHOD",
  SET_PARAMS: "SET_PARAMS",
  DELETE_PARAMS: "DELETE_PARAMS",
  SET_AUTHORIZATION_TYPE: "SET_AUTHORIZATION_TYPE",
  SET_AUTHORIZATION: "SET_AUTHORIZATION",
  SET_HEADERS: "SET_HEADERS",
  DELETE_HEADERS: "DELETE_HEADERS",
  SET_CONTENT_TYPE: "SET_CONTENT_TYPE",
  SET_BODY_CONTENT: "SET_BODY_CONTENT",
  DELETE_BODY_CONTENT: "DELETE_BODY_CONTENT",
  SET_RESPONSE: "SET_RESPONSE",
  SET_RESPONSE_TIME: "SET_RESPONSE_TIME",
  SET_OUTPUT_DISPLAY_TYPE: "SET_OUTPUT_DISPLAY_TYPE",
  RESET_OUTPUT: "RESET_OUTPUT",
  RESET_STATE: "RESET_STATE",
});

export const setUrl = (payload) => ({
  type: RestAction.SET_URL,
  payload,
});

export const setRequestName = (payload) => ({
  type: RestAction.SET_REQUEST_NAME,
  payload,
});

export const setParams = (payload) => ({
  type: RestAction.SET_PARAMS,
  payload,
});

export const deleteParams = (payload) => ({
  type: RestAction.DELETE_PARAMS,
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

export const setAuthorization = (type, key, value) => ({
  type: RestAction.SET_AUTHORIZATION,
  payload: {
    type,
    key,
    value,
  },
});

export const setHeaders = (payload) => ({
  type: RestAction.SET_HEADERS,
  payload,
});

export const removeHeader = (payload) => ({
  type: RestAction.SET_HEADERS,
  payload,
});

export const deleteHeaders = (payload) => ({
  type: RestAction.DELETE_HEADERS,
  payload,
});

export const setContentType = (payload) => ({
  type: RestAction.SET_CONTENT_TYPE,
  payload,
});

export const setBodyContent = (type, value) => ({
  type: RestAction.SET_BODY_CONTENT,
  payload: { type, value },
});

export const deleteBodyContent = (type, value) => ({
  type: RestAction.DELETE_BODY_CONTENT,
  payload: { type, value },
});

export const setResponse = (payload) => ({
  type: RestAction.SET_RESPONSE,
  payload,
});

export const setResponseTime = (payload) => ({
  type: RestAction.SET_RESPONSE_TIME,
  payload,
});

export const setOutputDisplayType = (payload) => ({
  type: RestAction.SET_OUTPUT_DISPLAY_TYPE,
  payload,
});

export const resetOutput = () => ({
  type: RestAction.RESET_OUTPUT,
});

export const resetState = () => ({
  type: RestAction.RESET_STATE,
});