import { createStore } from 'redux'

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

const store = createStore(counterReducer)
const counter = document.getElementById("counter")
store.subscribe(() => {
  console.log(store.getState())
  counter.innerHTML = store.getState().count
})

const plus = document.getElementById("plus");
plus.addEventListener("click", () => {
  store.dispatch({ type: 'increment' });
});

const minus = document.getElementById("minus");
minus.addEventListener("click", () => {
  store.dispatch({ type: 'decrement' });
});

const reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  store.dispatch({ type: 'reset' });
});
