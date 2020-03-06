import {ActionType} from 'typesafe-actions';
import * as actions from './actions';

// TS types for Actions
export type TodoAction = ActionType<typeof actions>;

// Type for a State
export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

export type TodoState = Todo[];