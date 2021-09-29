jest.useFakeTimers();
const processNumbers = require('./processNumbers');

const mockRequest = (sessionData) => {
    return {
      num: sessionData,
      params: {
          num: 10
      }
    };
  };

const mockResponse = () => {
    const res = {
        send: jest.fn()
    };
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

test('Numbers processor must be loaded', () => {
    const res = mockResponse();
    processNumbers(mockRequest(), res);
    expect(res.send).toHaveBeenCalledTimes(1);
});