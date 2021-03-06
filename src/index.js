import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 4500, createdAt: 0 })
);
store.dispatch(
  addExpense({ description: "Gas Bill", amount: 300, createdAt: 1000 })
);
store.dispatch(addExpense({ description: "Rent", amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(app, rootElement);
