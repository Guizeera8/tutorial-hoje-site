import currency, { type Options } from 'currency.js';

export const formatCents = (value: number, options?: Options) => {
  if (value <= 100) {
    return currency(0, { ...currencyOptions, ...options }).format();
  }
  return currency(value, {
    ...currencyOptions,
    ...options,
    fromCents: true,
  }).format();
};

export const formatAmount = (value: number, options?: Options) =>
  currency(value, { ...currencyOptions, ...options }).format();

export const currencyOptions = {
  separator: '.',
  decimal: ',',
  symbol: 'R$',
  pattern: '! #',
};

export const currencyWithoutSymbol = {
  separator: '.',
  decimal: ',',
  pattern: '#',
};
