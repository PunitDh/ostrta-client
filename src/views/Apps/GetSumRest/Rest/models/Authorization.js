import { AuthorizationType, AuthorizationTypeItems } from "../constants";

export default class Authorization {
  constructor(obj = {}) {
    this.type = obj.type || AuthorizationType.NO_AUTH;
    Object.keys(AuthorizationType).forEach((authType) => {
      this[authType] =
        obj[authType] || AuthorizationTypeItems[authType].initialState;
    });
  }
}
