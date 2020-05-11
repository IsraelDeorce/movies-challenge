import { baseUrl, getJsonOrEmptyArray } from './utils.js';

describe('service utils', () => {
  describe('baseUrl', () => {
    it('is the correct API base URL starting with https', () => {
      expect(baseUrl).toBe('https://api.tvmaze.com');
    });
  });
});
