const Counter = require('./counter.js')

describe('Counter', () => {
  it('Creates a new Counter class', async () => {
    const mockblockConcurrencyWhile = jest.fn()
    const state = {
      blockConcurrencyWhile: mockblockConcurrencyWhile,
    }
    const counter = new Counter(state)
    expect(mockblockConcurrencyWhile.mock.calls.length).toBe(1)
  })
})
