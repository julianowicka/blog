import addition from '../../addition'

describe('simple test of addition function', () => {
  test('it should give sum of two numbers', () => {
    const a: number = 3
    const b: number = 3
    expect(addition(a, b)).toBe(6)
  })
})
