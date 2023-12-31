import { APILogsAction } from "./actions";
import { LogType } from "./constants";

export type Action = {
  type: APILogsAction;
  payload?: any;
};

export type State = {
  type: LogType;
  limit: number;
  time: number;
  confirmClear: boolean;
  logs: LogMessage[];
};

export type LogMessage = {
  id: string;
  type: LogType;
  content: string;
  timeStamp: string;
};
