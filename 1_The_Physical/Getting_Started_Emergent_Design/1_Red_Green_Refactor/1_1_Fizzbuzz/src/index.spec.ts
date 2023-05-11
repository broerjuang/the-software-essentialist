import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it('should return "Fizz" when input is divisible by 3', () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(9)).toEqual("Fizz");
    expect(fizzbuzz(42)).toEqual("Fizz");
  });

  it('should return "Buzz" when input is divisible by 5', () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it('should return "FizzBuzz" when input is divisible by both 3 and 5', () => {
    let result = fizzbuzz(15);
    expect(result).toEqual("FizzBuzz");
    expect(fizzbuzz(45)).toEqual("FizzBuzz");
  });

  it("should return the number as string when it is not divisible by 3 or 5", () => {
    expect(fizzbuzz(7)).toEqual("7");
  });
});
