import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle, css } from 'styled-components';

import RootStackNavigator from './components/navigation/RootStackNavigator';
import { IActions, setLocale } from './actions';
import reducers, {IState as IReducerState} from './reducers';
import { setStore } from './utils/Locale';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(255,254,252);
  }
`;

const store = createStore<IReducerState, IActions, {}, {}>(
  combineReducers({
    ...reducers,
  }),
);

setStore(store);

if (navigator) {
  const userLang: string = navigator.language;
  if (store.getState().locale !== userLang) {
    store.dispatch(setLocale(userLang));
  }
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <RootStackNavigator />
  </Provider>,
  document.getElementById('app'),
);
