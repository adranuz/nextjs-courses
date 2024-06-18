import {generatePaginationNumbers} from '@/utils/generatePaginationNumbers'

describe('generatePaginationNumbers', () => {
  it('should return all pages if total pages is less than or equal to 7', () => {
    const result = generatePaginationNumbers(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return first 3 pages and last 2 pages if current page is less than or equal to 2', () => {
    const result = generatePaginationNumbers(1, 10);
    expect(result).toEqual([1, 2, 3, '...', 9, 10]);
  });

  it('should return first 2 pages and last 3 pages if current page is greater than total pages minus 2', () => {
    const result = generatePaginationNumbers(9, 10);
    expect(result).toEqual([1, 2, '...', 8, 9, 10]);
  });

  it('should return first page, 2 pages before and after current page, and last page if current page is in the middle', () => {
    const result = generatePaginationNumbers(5, 10);
    expect(result).toEqual([1, '...', 4, 5, 6, '...', 10]);
  });
});