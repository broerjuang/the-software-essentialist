import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it.each([3, 9, 42])('should return "Fizz" when input is %s', (input) => {
    let result = fizzbuzz(input);
    expect(result).toEqual("Fizz");
  });

  it.each([5, 10, 20, 25])('should return "Buzz" when input is %s', (input) => {
    let result = fizzbuzz(input);
    expect(result).toEqual("Buzz");
  });

  it.each([15, 30, 45])(
    'should return "FizzBuzz" when input is %s',
    (input) => {
      let result = fizzbuzz(input);
      expect(result).toEqual("FizzBuzz");
    }
  );

  it.each([
    [4, "4"],
    [7, "7"],
    [8, "8"],
  ])('should return "%s" when input is %s', (input, expected) => {
    let result = fizzbuzz(input);
    expect(result).toEqual(expected);
  });

  it.each([-2, -100, 101, 200])(
    'should throw "Number out of range" when the input is %s',
    (input) => {
      expect(() => fizzbuzz(input)).toThrow("Number out of range");
    }
  );
  it("should work with 0", () => {
    expect(() => fizzbuzz(0)).not.toThrow();
  });
});
