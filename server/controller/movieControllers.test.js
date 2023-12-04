const {add_movie} = require('./movie_controllers')
const movie_model = require('../model/movie')

describe('add_movie function', () => {
    test('should add a new movie', async () => {
      const mockRequest = {
        body: {
          title: 'The Matrix',
          director: 'Lana Wachowski',
          poster: 'matrix_poster.jpg',
          description: 'A sci-fi action film',
          duration: 136,
        },
      };
  
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
  
      movie_model.create = jest.fn().mockResolvedValue(mockRequest.body); // Mocking the movie_model.create method
  
      await add_movie(mockRequest, mockResponse);
  
      expect(movie_model.create).toHaveBeenCalledWith({
        title: 'The Matrix',
        director: 'Lana Wachowski',
        poster: 'matrix_poster.jpg',
        description: 'A sci-fi action film',
        duration: 136,
      });
      expect(mockResponse.status).toHaveBeenCalledWith(200);
      expect(mockResponse.send).toHaveBeenCalledWith(mockRequest.body);
    });
  
    test('should handle errors when adding a movie', async () => {
      const mockRequest = {
        body: {
          // Invalid data or missing required fields
        },
      };
  
      const mockResponse = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
  
      movie_model.create = jest.fn().mockRejectedValue(new Error('Internal Server Error')); // Mocking the movie_model.create method to throw an error
  
      await add_movie(mockRequest, mockResponse);
  
      expect(movie_model.create).toHaveBeenCalled();
      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.send).toHaveBeenCalledWith({ err: 'Internal Server Error' });
    });
  });