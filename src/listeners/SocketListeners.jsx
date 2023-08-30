import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useAPI, useNotification, useSocket, useToken } from "src/hooks";
import {
  openConversation,
  startConversation,
} from "src/redux/conversationSlice";
import { deleteGameFromMenu, updateCurrentGameMenu } from "src/redux/menuSlice";
import { setCurrentGame, updateCurrentGame } from "src/redux/playerSlice";
import { setSiteSettings } from "src/redux/siteSlice";
import { Status, isSuccess } from "src/utils";
import { LOGIN_PAGE, SocketResponse } from "src/utils/constants";

const SocketListeners = () => {
  const socket = useSocket();
  const token = useToken();
  const notification = useNotification();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const api = useAPI();

  const handleResponse = (response, dispatchFunction) =>
    isSuccess(response)
      .then((payload) => dispatch(dispatchFunction(payload)))
      .catch(notification.error);

  const handleStartConversation = (response) =>
    isSuccess(response)
      .then((payload) =>
        dispatch(
          startConversation({
            ...payload,
            opener: payload.opener === token.decoded.id,
          })
        )
      )
      .catch(notification.error);

  const handleToken = (response, successMessage, navigateTo = "/") =>
    isSuccess(response)
      .then((payload) => {
        token.set(payload);
        notification.success(successMessage);
        navigate(navigateTo);
      })
      .catch(notification.error);

  const handleSiteSettings = (response) =>
    handleResponse(response, setSiteSettings);

  const updateGame = (response, successMessage = "Game updated!") =>
    isSuccess(response)
      .then((game) => {
        dispatch(updateCurrentGameMenu(game));
        dispatch(updateCurrentGame(game));
        notification.success(successMessage);
      })
      .catch(notification.error);

  useEffect(() => {
    api.getSiteSettings();
    socket.on("online-status-changed", (player) => console.log({ player }));
    socket.on(SocketResponse.UPDATE_SITE_SETTINGS, handleSiteSettings);
    socket.on(SocketResponse.UPDATE_PROFILE, (response) =>
      handleToken(response, "Profile updated!", "/profile")
    );
    socket.on(SocketResponse.DELETE_PROFILE, (response) =>
      isSuccess(response).then(api.logoutPlayer).catch(notification.error)
    );
    socket.on(Status.UNAUTHORIZED, () => navigate(LOGIN_PAGE));
    socket.on(SocketResponse.PLAY_MOVE, (response) =>
      handleResponse(response, setCurrentGame)
    );
    socket.on(SocketResponse.START_CONVERSATION, handleStartConversation);
    socket.on(SocketResponse.SEND_MESSAGE, (response) =>
      handleResponse(response, openConversation)
    );
    socket.on(SocketResponse.MARK_AS_READ, (response) =>
      handleResponse(response, openConversation)
    );
    socket.on(SocketResponse.RENAME_GAME, updateGame);
    socket.on(SocketResponse.CHANGE_ICON, updateGame);
    socket.on(SocketResponse.RESET_GAME_ROUNDS, (response) =>
      handleResponse(response, setCurrentGame)
    );

    socket.on(SocketResponse.DELETE_GAME, (response) =>
      handleResponse(response, deleteGameFromMenu)
    );

    return () => {
      Object.values(SocketResponse).forEach(socket.off);
    };
  }, []);

  return <></>;
};

export default SocketListeners;
