import { expect, test } from "bun:test";
import maxSubArray from './maxSubArray';

test('case 1', () => {
    expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
});

test('case 2', () => {
    expect(maxSubArray([1])).toBe(1);
});


test('case 3', () => {
    expect(maxSubArray([5,4,-1,7,8])).toBe(23);
});