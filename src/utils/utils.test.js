// Method tests
import {calcTempDifference, calcAverageTemp, changeWindUnits} from "./utils";

// Tests for temperature difference calculation
test('calculates the correct temperature difference', () => {
    const result = calcTempDifference(10, 20);
    expect(result).toBe('10.00');
});

test('calculates the correct temperature difference with negative values', () => {
    const result = calcTempDifference(-5, 10);
    expect(result).toBe('15.00');
});

test('calculates the correct temperature difference with decimal values', () => {
    const result = calcTempDifference(10.5, 5.25);
    expect(result).toBe('5.25');
});

test('calculates the correct temperature difference with many decimal values', () => {
    const result = calcTempDifference(10.35347555, 5.558552);
    expect(result).toBe('4.79');
});


// Tests for average temperature calculation
test('calculates the correct average temperature', () => {
    const result = calcAverageTemp(10, 20);
    expect(result).toBe('15.00');
});

test('calculates the correct average temperature with negative values', () => {
    const result = calcAverageTemp(10, -5);
    expect(result).toBe('2.50');
});

test('calculates the correct average temperature with decimal values', () => {
    const result = calcAverageTemp(10.5, 5.25);
    expect(result).toBe('7.88');
});

test('calculates the correct average temperature with same values', () => {
    const result = calcAverageTemp(2, 2.00);
    expect(result).toBe('2.00');
});

// Tests for wind speed conversion
test('converts wind speed', () => {
    const result = changeWindUnits(10);
    expect(result).toBe('2.78');
});

test('converts wind speed with decimal values', () => {
    const result = changeWindUnits(10.5);
    expect(result).toBe('2.92');
});

test('converts wind speed with zero', () => {
    const result = changeWindUnits(0);
    expect(result).toBe('0.00');
});