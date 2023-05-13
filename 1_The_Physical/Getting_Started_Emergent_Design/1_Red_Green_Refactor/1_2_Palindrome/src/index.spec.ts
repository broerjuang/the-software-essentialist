import { Palindrome } from "./";

describe("palindrome checker", () => {
  it("should exist", () => {
    expect(Palindrome.isPalindrome).toBeDefined();
  });

  it.each([
    "mom",
    "wow",
    "Mom",
    "xMomx",
    "Was It A Rat I Saw",
    "Never Odd or Even",
  ])(`shoule be able to tell if "%s" is a palindrome`, (input) => {
    expect(Palindrome.isPalindrome(input)).toBe(true);
  });

  it(`should be able to tell if "bill" is NOT a palindrome`, () => {
    expect(Palindrome.isPalindrome("bill")).toBe(false);
  });
});
