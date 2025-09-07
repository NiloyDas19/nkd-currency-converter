import Freecurrencyapi from '@everapi/freecurrencyapi-js';

let freecurrencyapi;

/**
 * Initialize the currency converter with your API key
 * @param {string} apiKey - Your freecurrencyapi API key
 */
export function initializeCurrencyConverter(apiKey) {
    if (!apiKey) throw new Error("API key is required. Get a free key from https://freecurrencyapi.com/");
    freecurrencyapi = new Freecurrencyapi(apiKey);
}

/**
 * Convert an amount from one currency to another
 * @param {string} from - Base currency (default USD)
 * @param {string} to - Target currency (default EUR)
 * @param {number} amount - Amount to convert (default 1)
 * @returns {number} Converted amount
 */
export async function convertAmount(from = "USD", to = "EUR", amount = 1) {
    if (!freecurrencyapi) throw new Error("API key not set. Call initializeCurrencyConverter() first.");

    const res = await freecurrencyapi.latest({
        base_currency: from,
        currencies: to
    });

    const rate = res.data[to];
    return rate * amount;
}
