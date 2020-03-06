// 1. 필요한 함수 / 타입 import 하기. 
import {createAction, ActionType, createReducer} from 'typesafe-actions';

// 2. 액션 type 선언할 때 as const 지우기.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

// 3. createAction으로 액션 생성 함수 만들기. 
export const increase = createAction(INCREASE)();
// createAction(~~)은 () => ({ type: INCREASE })
export const decrease = createAction(DECREASE)();
// createAction(~~)은 () => ({ type: DECREASE })
export const increaseBy = createAction(INCREASE_BY)<number>();
// createAction(~~)은 (payload: number) => ({ type: INCREASE_BY, payload })

// 4. action의 객체 type 만들기.
const actions = {increase, decrease, increaseBy};
type CounterAction = ActionType<typeof actions>;

// 4. state의 타입과 state의 초깃값 선언하기.
type CounterState = {
  count: number;
}

const initialState : CounterState = {
  count: 0
}

// 5. createReducer로 reducer 작성하기.
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, state => ({count: state.count + 1}))
  .handleAction(decrease, state => ({count: state.count - 1}))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload
  }))
  


export default counter;