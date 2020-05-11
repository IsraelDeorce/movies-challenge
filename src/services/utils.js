/** Base Url used in all API Requests */
export const baseUrl = 'https://api.tvmaze.com';

/** Receives a promise and returns its json if it's ok or empty array */
export const getJsonOrEmptyArray = async promise => promise && (promise.ok ? await promise.json() : []);