import add from './index';

describe('add', () => {
  it('should add stuff', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
