import STRINGS from '../../STRINGS';

const DEFAULT_LOCALE = 'en';
let _store: any;

export const setStore = (store: any) => {
  _store = store;
};

export const getString = (val: string) => {
  const locale = _store && _store.getState() && _store.getState().locale
    ? _store.getState().locale
    : DEFAULT_LOCALE;

  let str = STRINGS[locale]
    ? STRINGS[locale][val].toString()
    : null;

  if (!str) {
    str = STRINGS[DEFAULT_LOCALE][val].toString();
  }

  if (!str) {
    str = '...';
  }
  return str.toString();
};
