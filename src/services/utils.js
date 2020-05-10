export const baseUrl = 'https://api.tvmaze.com';

export const getJsonOrEmptyArray = async promise => promise && (promise.ok ? await promise.json() : []);