import { Palindrome } from "./";

describe("palindrome checker", () => {
  it("should exist", () => {
    expect(Palindrome.isPalindrome).toBeDefined();
  });

  it(`should be able to tell if "mom" is palindome`, () => {
    expect(Palindrome.isPalindrome("mom")).toBe(true);
  });

  it(`should be able to tell if "wow" is palindrome`, () => {
    expect(Palindrome.isPalindrome("wow")).toBe(true);
  });

  it(`should be able to tell if "bill" is NOT a palindrome`, () => {
    expect(Palindrome.isPalindrome("bill")).toBe(false);
  });
});
