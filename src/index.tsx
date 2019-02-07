import React from 'react';
import { createStore, combineReducers } from 'redux';
import ReactDOM from 'react-dom';

import RootStackNavigator from './components/navigation/RootStackNavigator';
import { Provider } from 'react-redux';

import reducers, {IState as IReducerState} from './reducers';
import { IActions, setLocale } from './actions';
import { setStore } from './utils/Locale';

// tslint:disable-next-line:no-var-requires

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
    <RootStackNavigator />
  </Provider>,
  document.getElementById('app'),
);
