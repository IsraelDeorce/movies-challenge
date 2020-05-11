import fetchMock from 'fetch-mock';
import SearchService from './searchService';

describe('search service', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  describe('get', () => {
    it('returns data successfully', async () => {
      // Arrange
      expect.assertions(3);
      const expected = [{ mock: 'mockString' }];
      fetchMock.getOnce('https://api.tvmaze.com/search/shows?q=:param', {
        body: expected,
      });

      // Act & Assert
      return SearchService.get('param').then(response => {
        expect(response.status).toBe(200);
        return response.json().then((actual) => {
          expect(actual).toEqual(expected);
          expect(fetchMock.called()).toBe(true);
        });
      });
    });

    it('is able to return resource not found', async () => {
      // Arrange
      expect.assertions(2);
      fetchMock.getOnce('https://api.tvmaze.com/search/shows?q=:param', {
        status: 404,
      });

      // Act & Assert
      return SearchService.get('param').then(response => {
        expect(response.status).toBe(404);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      fetchMock.getOnce('https://api.tvmaze.com/search/shows?q=:param', {
        status: 500,
      });

      // Act & Assert
      return SearchService.get('param').then(response => {
        expect(response.status).toBe(500);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      fetchMock.getOnce('https://api.tvmaze.com/search/shows?q=:param', async () => {
        throw new Error('an error message');
      });

      // Act & Assert
      return SearchService.get('param').catch(error => {
        expect(error.message).toBe('an error message');
        expect(fetchMock.called()).toBe(true);
      });
    });
  });
});
