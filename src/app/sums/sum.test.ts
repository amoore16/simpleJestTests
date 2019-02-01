import { sum } from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test ('adds 3 + 3 to equal 9', () => {
    expect(sum(3, 3)).toBe(6);
});

test ('adds 200 + 200 to equal 400', () => {
    expect(sum(200, 200)).toBe(400);
});