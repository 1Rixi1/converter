import {Enviroment} from "../util";

const currencyApi = () => {


  const key = Enviroment.CURRENCY_API_KEY as keyof ImportMetaEnv
  return {
    getCurrency() {
      return fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${import.meta.env[key]}`
      ).then((res) => res.json());
    },
  };
};

export const currencyService = currencyApi();
