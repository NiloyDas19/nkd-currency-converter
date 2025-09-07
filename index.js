import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const API_KEY = 'fca_live_LiMkxVF6KvQ2mEiRByE80Z77WxJQenQQIHvXQ45v';

const freecurrencyapi = new Freecurrencyapi(API_KEY);

export async function convertCurrency(fromCurrency = "USD", toCurrency = "EUR", units = 1) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier = res.data[toCurrency];
    return multiplier * units;
}
