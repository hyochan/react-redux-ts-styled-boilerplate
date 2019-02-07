const SET_LOCALE = 'SET_LOCALE';

interface ISetLocale {
  type: typeof SET_LOCALE;
  value: string;
}

export function setLocale(lang: string): ISetLocale {
  return {
    type: SET_LOCALE,
    value: lang,
  };
}

export type IActions = ISetLocale;
