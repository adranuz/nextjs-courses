import {currencyFormat} from '@/utils'

describe('currencyFormat', () => {
  it('should format currency', () => {
    expect(currencyFormat(100)).toBe('$100.00')
  })
})
