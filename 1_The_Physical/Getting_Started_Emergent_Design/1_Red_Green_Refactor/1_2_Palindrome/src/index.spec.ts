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

  it.each(["bill", "Bill", "Never Odd or Even1", "Momx"])(
    `should be able to tell if "%s" is NOT a palindrome`,
    (input) => {
      expect(Palindrome.isPalindrome(input)).toBe(false);
    }
  );
});
