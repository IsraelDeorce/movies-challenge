import fetchMock from 'fetch-mock';
import ShowService from './showService';

describe('show service', () => {
  beforeEach(() => {
    fetchMock.restore();
  });

  describe('getEpisodes', () => {
    it('returns data successfully', async () => {
      // Arrange
      expect.assertions(3);
      const id = 3;
      const expected = [{ mock: "mockString" }];
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/episodes`, {
        body: expected,
      });

      // Act & Assert
      return ShowService.getEpisodes(id).then(response => {
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
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/episodes`, {
        status: 404,
      });

      // Act & Assert
      return ShowService.getEpisodes(id).then(response => {
        expect(response.status).toBe(404);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/episodes`, {
        status: 500,
      });

      // Act & Assert
      return ShowService.getEpisodes(id).then(response => {
        expect(response.status).toBe(500);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/episodes`, async () => {
        throw new Error('an error message');
      });

      // Act & Assert
      return ShowService.getEpisodes(id).catch(error => {
        expect(error.message).toBe('an error message');
        expect(fetchMock.called()).toBe(true);
      });
    });
  });

  describe('getCrew', () => {
    it('returns data successfully', async () => {
      // Arrange
      expect.assertions(3);
      const id = 3;
      const expected = [{ mock: "mockString" }];
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/crew`, {
        body: expected,
      });

      // Act & Assert
      return ShowService.getCrew(id).then(response => {
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
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/crew`, {
        status: 404,
      });

      // Act & Assert
      return ShowService.getCrew(id).then(response => {
        expect(response.status).toBe(404);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/crew`, {
        status: 500,
      });

      // Act & Assert
      return ShowService.getCrew(id).then(response => {
        expect(response.status).toBe(500);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/crew`, async () => {
        throw new Error('an error message');
      });

      // Act & Assert
      return ShowService.getCrew(id).catch(error => {
        expect(error.message).toBe('an error message');
        expect(fetchMock.called()).toBe(true);
      });
    });
  });

  describe('getCast', () => {
    it('returns data successfully', async () => {
      // Arrange
      expect.assertions(3);
      const id = 3;
      const expected = [{ mock: "mockString" }];
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/cast`, {
        body: expected,
      });

      // Act & Assert
      return ShowService.getCast(id).then(response => {
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
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/cast`, {
        status: 404,
      });

      // Act & Assert
      return ShowService.getCast(id).then(response => {
        expect(response.status).toBe(404);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/cast`, {
        status: 500,
      });

      // Act & Assert
      return ShowService.getCast(id).then(response => {
        expect(response.status).toBe(500);
        expect(fetchMock.called()).toBe(true);
      });
    });

    it('is able to return server error', async () => {
      // Arrange
      expect.assertions(2);
      const id = 3;
      fetchMock.getOnce(`https://api.tvmaze.com/shows/${id}/cast`, async () => {
        throw new Error('an error message');
      });

      // Act & Assert
      return ShowService.getCast(id).catch(error => {
        expect(error.message).toBe('an error message');
        expect(fetchMock.called()).toBe(true);
      });
    });
  });
});