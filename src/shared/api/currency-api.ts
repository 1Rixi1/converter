import { Enviroment } from "../constants";

const currencyApi = () => {
  return {
    getCurrency() {
      return fetch(
        `https://api.freecurrencyapi.com/v1/latest?apikey=${Enviroment.CURRENCY_API_KEY}`
      ).then((res) => res.json());
    },
  };
};

export const currencyService = currencyApi();
