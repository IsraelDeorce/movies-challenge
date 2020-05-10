import fetchMock from 'fetch-mock';
import SearchService from './searchService';

describe("Questions service", () => {
  describe("get", () => {
    it("returns data successfully", () => {
      // Arrange
      const expected = [ { mock: 'mockString' } ];

      fetchMock.getOnce('http://api.tvmaze.com/search/shows?q=:girls', { body: expected });

      // Act & Assert
      return SearchService.get('girls').then(response => {
        expect(response.status).toBe(200);
        return response.json().then(actual => {
          expect(actual).toEqual(expected);
          expect(fetchMock.called()).toBe(true);
        });
      });
    });
  });
});
