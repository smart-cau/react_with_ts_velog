import { TodoState, TodoAction } from './types';
import { createReducer } from 'typesafe-actions';
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actions'

// initialState
const initialState: TodoState = [
  {id: 1, text: 'ts 배우기', done: true},
  {id: 2, text: 'ts 배우기 & redux 배우기', done: true},
  {id: 3, text: 'todlist 만들기', done: false},
]

// reducer
const todos = createReducer<TodoState, TodoAction>(initialState, {
  [ADD_TODO]: (state, {payload: text}) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false
    }),
  [TOGGLE_TODO] : (state, {payload: id}) => 
    state.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo),
  [REMOVE_TODO] : (state, {payload: id}) =>
    state.filter(todo => todo.id !== id)
})

export default todos;