export enum NotificationType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning",
}

export enum SocketRequest {
  GET_SITE_SETTINGS = "get-site-settings",
  UPDATE_SITE_SETTINGS = "update-site-settings",
  LOGIN_USER = "login-user",
  REGISTER_USER = "register-user",
  UPDATE_PROFILE = "update-profile",
  UPDATE_PASSWORD = "update-password",
  DELETE_PROFILE = "delete-profile",
  PLAY_MOVE = "play-move",
  JOIN_CHATS = "get-conversations",
  JOIN_CHAT = "join-chat",
  START_CONVERSATION = "start-conversation",
  SEND_MESSAGE = "send-message",
  MARK_AS_READ = "mark-as-read",
  LOAD_CURRENT_GAMES = "get-current-games",
  LOAD_CURRENT_GAME = "load-game",
  LOAD_CURRENT_USERS = "get-current-users",
  LOAD_RECENT_GAMES = "get-recent-games",
  RENAME_GAME = "rename-game",
  CHANGE_ICON = "change-icon",
  RESET_GAME_ROUNDS = "reset-rounds",
  CREATE_GAME = "create-game",
  DELETE_GAME = "delete-game",
  PROGRESS_UPDATE = "request-progress-update",
}

export enum SocketResponse {
  GET_SITE_SETTINGS = "site-settings",
  UPDATE_SITE_SETTINGS = "site-settings-updated",
  LOGIN_USER = "user-logged-in",
  REGISTER_USER = "user-registered",
  UPDATE_PROFILE = "profile-updated",
  UPDATE_PASSWORD = "password-updated",
  DELETE_PROFILE = "profile-deleted",
  PLAY_MOVE = "move-played",
  JOIN_CHATS = "conversations",
  JOIN_CHAT = "chat-joined",
  START_CONVERSATION = "conversation-started",
  SEND_MESSAGE = "message-sent",
  MARK_AS_READ = "marked-as-read",
  LOAD_CURRENT_GAMES = "current-games",
  LOAD_CURRENT_GAME = "game-loaded",
  LOAD_CURRENT_USERS = "current-users",
  LOAD_RECENT_GAMES = "recent-games",
  RENAME_GAME = "game-renamed",
  CHANGE_ICON = "icon-changed",
  RESET_GAME_ROUNDS = "rounds-reset",
  CREATE_GAME = "game-created",
  DELETE_GAME = "game-deleted",
  PROGRESS_UPDATE = "update-progress",
}

export enum Status {
  SUCCESS = "success",
  ERROR = "error",
  UNAUTHORIZED = "unauthorized",
}

export const TOKEN_KEY = "ostrta-token";

export const AuthPage = {
  LOGIN_PAGE: "/auth/login",
  REGISTER_PAGE: "/auth/register",
  loginWithReferrer: () => {
    const params = new URLSearchParams();
    params.set("referrer", window.location.href);
    return `${AuthPage.LOGIN_PAGE}?${params.toString()}`;
  },
  registerWithReferrer: () => {
    const url = new URL(window.location.href);
    const referrer = url.searchParams.get("referrer");
    if (referrer) {
      const params = new URLSearchParams();
      params.set("referrer", referrer);
      return `${AuthPage.REGISTER_PAGE}?${params.toString()}`;
    }
    return AuthPage.REGISTER_PAGE;
  },
};
