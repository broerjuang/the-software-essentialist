export class Palindrome {
  static isPalindrome(input: string) {
    return (
      input.toLowerCase() === input.split("").reverse().join("").toLowerCase()
    );
  }
}
