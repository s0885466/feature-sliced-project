import { counterActions, counterReducer } from '../slice/counterSlice';
import { CounterSchema } from '../types/counterSchema';

describe('counterSlice.test', () => {
    let state: CounterSchema = {
        value: 10,
    };

    beforeEach(() => {
        state = {
            value: 10,
        };
    });

    test('increment', () => {
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });

    test('decrement', () => {
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
