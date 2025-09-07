# nkd-currency-converter

A simple JavaScript/Node.js package to convert currencies using the FreeCurrencyAPI. Users provide their own API key, keeping your key private and secure.

## Features

- Convert any amount between two currencies
- Easy to initialize with your API key
- Async functions with promise support
- Lightweight and easy to use

## Installation

```bash
npm install nkd-currency-converter


## Usage

### Step 1: Import the package

```js
import { initializeCurrencyConverter, convertAmount } from "nkd-currency-converter";
```

### Step 2: Initialize with your API key

```js
initializeCurrencyConverter("YOUR_FREE_API_KEY_HERE");
```

> Get a free API key from [FreeCurrencyAPI](https://freecurrencyapi.com/)

### Step 3: Convert currencies

```js
const result = await convertAmount("USD", "EUR", 100);
console.log(`Converted amount: ${result}`);
```

## API Functions

| Function                              | Description                                     | Parameters                                                                                            |
| ------------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `initializeCurrencyConverter(apiKey)` | Initializes the package with your API key       | `apiKey` (string) - required                                                                          |
| `convertAmount(from, to, amount)`     | Converts an amount from one currency to another | `from` (string, default: "USD") <br> `to` (string, default: "EUR") <br> `amount` (number, default: 1) |

## Notes

* Users **must call `initializeCurrencyConverter()`** first before using `convertAmount()`.
* The package **does not store your API key**, so you remain secure.
