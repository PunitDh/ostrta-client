import axios from "axios";
import useToken from "./useToken";
import useNotification from "./useNotification";
import { useDispatch } from "react-redux";
import { setConversations } from "src/redux/conversationSlice";
import {
  setCurrentGame,
  setCurrentGames,
  setCurrentUsers,
  setRecentGames,
} from "src/redux/playerSlice";
import { setCurrentGamesNav, updateCurrentGameMenu } from "src/redux/menuSlice";
import { useNavigate } from "react-router";
import { setSiteSettings } from "src/redux/siteSlice";
import useSocket from "./useSocket";
import { SocketRequest } from "src/utils/constants";

export default function useAPI() {
  const token = useToken();
  const notification = useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const socket = useSocket();

  const authHeaders = {
    headers: {
      Authorization: token.jwt,
    },
  };

  const request = {
    send: function (method, endpoint, ...args) {
      return new Promise((resolve, reject) =>
        axios[method](`${process.env.REACT_APP_SERVER_URL}${endpoint}`, ...args)
          .then((response) =>
            response.data.code < 400
              ? resolve(response.data)
              : reject(response.data)
          )
          .catch((data) => {
            navigate("/auth/login");
            notification.error(data.payload);
          })
      );
    },

    get: function (...args) {
      return this.send("get", ...args);
    },
    post: function (...args) {
      return this.send("post", ...args);
    },
    put: function (...args) {
      return this.send("put", ...args);
    },
    delete: function (...args) {
      return this.send("delete", ...args);
    },
  };

  const handleToken = (data, successMessage) => {
    if (data.code !== 200) {
      notification.error(data.payload);
    } else {
      token.set(data.payload);
      notification.success(successMessage);
      navigate("/");
    }
  };

  return {
    registerPlayer: (formData) =>
      request
        .post("/player/register", formData)
        .then((response) => handleToken(response, "Registration successful!"))
        .catch((data) => notification.error(data.payload)),

    loginPlayer: (formData) =>
      request
        .post("/player/login", formData)
        .then((response) => handleToken(response, "Login successful!"))
        .catch((data) => notification.error(data.payload)),

    getSiteSettings: () =>
      request
        .get("/admin/settings")
        .then((data) => dispatch(setSiteSettings(data.payload)))
        .catch((data) => notification.error(data.payload)),

    updateProfile: (formData) =>
      request
        .put("/player", formData, authHeaders)
        .then((data) => {
          token.set(data);
          notification.success("Profile updated!");
          navigate("/profile");
        })
        .catch((data) => notification.error(data.payload)),

    getConversations: () => {
      if (token.jwt) {
        socket.emit(SocketRequest.JOIN_CHATS, { _jwt: token.jwt });
        return request
          .get("/player/chats", authHeaders)
          .then((data) => dispatch(setConversations(data.payload)))
          .catch((data) => notification.error(data.payload));
      }
    },

    createGame: (data) => {
      return request
        .post("/games/new", data, authHeaders)
        .then((data) => {
          dispatch(setCurrentGame(data.payload));
          dispatch(updateCurrentGameMenu(data.payload));
          navigate(`/games/${data.payload.id}`);
        })
        .catch((data) => notification.error(data.payload));
    },

    getCurrentGames: () =>
      token.jwt &&
      request
        .get("/player/games", authHeaders)
        .then((data) => {
          dispatch(setCurrentGames(data.payload));
          dispatch(setCurrentGamesNav(data.payload));
        })
        .catch((data) => notification.error(data.payload)),

    getRecentGames: (limit) =>
      request
        .get("/games/recent", { ...authHeaders, params: { limit } })
        .then((data) => dispatch(setRecentGames(data.payload)))
        .catch((data) => notification.error(data.payload)),

    getCurrentUsers: () =>
      request
        .get("/player/players", authHeaders)
        .then((data) => dispatch(setCurrentUsers(data.payload)))
        .catch((data) => notification.error(data.payload)),

    getGame: (gameId) => {
      socket.emit(SocketRequest.JOIN_CHAT, { _jwt: token.jwt, gameId: gameId });
      return request
        .get(`/games/${gameId}`, authHeaders)
        .then((data) => dispatch(setCurrentGame(data.payload)))
        .catch((data) => {
          navigate("/games");
          notification.error(data.payload);
        });
    },

    getLogs: (limit, type) =>
      request.get(`/admin/logs`, { ...authHeaders, params: { limit, type } }),

    clearLogs: () => request.delete(`/admin/logs`, authHeaders),

    translateSubtitles: (formData) =>
      request.post("/video/subtitles/translate", formData, authHeaders),

    getDownloadFile: (location) =>
      request.get(`/${location}`, {
        responseType: "blob",
      }),
  };
}
