import { fizzbuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {
  it('should return "Fizz" when input is divisible by 3', () => {
    let result = fizzbuzz(3);
    expect(result).toEqual("Fizz");
  });
});
