import { Palindrome } from "./";

describe("palindrome checker", () => {
  it("should exist", () => {
    expect(Palindrome.isPalindrome).toBeDefined();
  });

  it(`should be able to tell if "mom" is palindome`, () => {
    expect(Palindrome.isPalindrome("mom")).toBe(true);
  });
});
