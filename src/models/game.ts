import { User } from "./user";

export interface Game {
  isOver: boolean;
  isStarted: boolean;
  players: User[];
}