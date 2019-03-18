import booksService from './../../services/booksService';

describe('Services: booksService', () => {
  it('should sum 2 params', () => {
    let result = booksService.sum(2, 2);
    expect(result).toEqual(4);
  });

  it('should sum 2 params', () => {
    let result = booksService.sum(2, 2, 5);
    expect(result).toEqual(4);
  })

});