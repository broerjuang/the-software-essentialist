import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  describe('should return "Fizz" when input is divisible by 3', () => {
    it.each([3, 9, 42])('should return "Fizz" when input is %s', (input) => {
      let result = fizzbuzz(input);
      expect(result).toEqual("Fizz");
    });
  });

  describe('should return "Buzz" when input is divisible by 5', () => {
    it.each([5, 10, 20, 25])(
      'should return "Buzz" when input is %s',
      (input) => {
        let result = fizzbuzz(input);
        expect(result).toEqual("Buzz");
      }
    );
  });

  describe('should return "FizzBuzz" when input is divisible by both 3 and 5', () => {
    it.each([15, 30, 45])(
      'should return "FizzBuzz" when input is %s',
      (input) => {
        let result = fizzbuzz(input);
        expect(result).toEqual("FizzBuzz");
      }
    );
  });

  describe("should return the number as string when it is not divisible by 3 and 5", () => {
    it.each([
      [4, "4"],
      [7, "7"],
      [8, "8"],
    ])('should return "%s" when input is %s', (input, expected) => {
      let result = fizzbuzz(input);
      expect(result).toEqual(expected);
    });
  });

  describe('should throw "Number out of range" for input less than 0 or greater than 100', () => {
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
});
