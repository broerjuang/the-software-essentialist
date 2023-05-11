import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it.each([3, 9, 42])(
    'should return "Fizz" when input is divisible by 3',
    (input) => {
      expect(fizzbuzz(input)).toEqual("Fizz");
    }
  );

  it.each([5, 10, 20, 25])(
    'should return "Buzz" when input is divisible by 5',
    (input) => {
      expect(fizzbuzz(input)).toEqual("Buzz");
    }
  );

  it.each([15, 30, 45])(
    'should return "FizzBuzz" when input is divisible by both 3 and 5',
    (input) => {
      expect(fizzbuzz(input)).toEqual("FizzBuzz");
    }
  );

  it.each([
    [4, "4"],
    [7, "7"],
    [8, "8"],
  ])(
    "should return the number as string when it is not divisible by 3 and 5",
    (input, result) => {
      expect(fizzbuzz(input)).toEqual(result);
    }
  );

  it.each([-2, -100, 101, 200])(
    'should throw "Number out of range" for input less than 0 or greater than 100',
    (input) => {
      expect(() => fizzbuzz(input)).toThrow("Number out of range");
    }
  );
});
