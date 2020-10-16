import { sum, delay } from './';

describe('instruments', () => {

    test('sum function should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    test('function should throw exception if second argument has invalid type equals to string', () => {
        expect(() => sum(2, 'привет')).toThrow();
    });

    test('sum function must return an addition of two passed arguments', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(1, 8)).toMatchSnapshot();
    });

    test('delay function should return a resolved promise', async () => {
        await expect(delay(5000)).resolves.toBeUndefined();
    });
});
