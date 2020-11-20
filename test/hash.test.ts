import hashcode from '../src'

describe('hash', () => {
  it('should generate proper hash code', () =>
    expect(hashcode({ cat: 'meow' })).toBe(1225469654))
})
