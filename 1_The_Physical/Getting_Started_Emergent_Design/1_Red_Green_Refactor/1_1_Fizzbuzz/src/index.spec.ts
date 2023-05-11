import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it('should return "Fizz" when input is divisible by 3', () => {
    let result = fizzbuzz(3);
    expect(result).toEqual("Fizz");
  });

  it('should return "Buzz" when input is divisible by 5', () => {
    let result = fizzbuzz(5);
    expect(result).toEqual("Buzz");
  });
});
