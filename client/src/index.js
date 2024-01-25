import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/user';
import { BudgetsProvider } from './Context/budgets';
import { BudgetProvider } from './Context/budget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

      <UserProvider>
        <BudgetsProvider>
          <BudgetProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </BudgetProvider>
        </BudgetsProvider>
      </UserProvider>

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
