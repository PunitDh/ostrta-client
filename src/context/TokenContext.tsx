import jwtDecode from "jwt-decode";
import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearToken, setToken } from "../redux/playerSlice";
import { Token } from "../hooks/types";

export const TokenContext = createContext<Token>({});

type Props = {
  children: any
}

export const TokenProvider = ({ children }: Props) => {
  const token = (useSelector((state) => (state as any).player).token as string);
  const dispatch = useDispatch();

  return (
    <TokenContext.Provider
      value={{
        jwt: token,
        decoded: jwtDecode(token),
        set: (token) => dispatch(setToken(token)),
        clear: () => dispatch(clearToken()),
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};
