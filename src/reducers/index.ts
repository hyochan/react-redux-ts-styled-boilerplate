export interface IState {
  locale: string;
}

const initialState: IState = {
  locale: 'en',
};

function locale(state = initialState.locale, action) {
  switch (action.type) {
    case 'UPDATE_LOCALE':
      return action.value;
    default:
      return state;
  }
}

const myReducers = {
  locale,
};

export default myReducers;
