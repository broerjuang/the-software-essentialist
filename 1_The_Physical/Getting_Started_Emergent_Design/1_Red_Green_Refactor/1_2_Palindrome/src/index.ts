export class Palindrome {
  static isPalindrome(input: string) {
    return input === input.split("").reverse().join("");
  }
}
