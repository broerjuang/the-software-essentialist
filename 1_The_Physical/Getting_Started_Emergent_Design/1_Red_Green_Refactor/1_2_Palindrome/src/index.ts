export class Palindrome {
  static isPalindrome(input: string) {
    return (
      input.toLowerCase().replace(/ /g, "") ===
      input.replace(/ /g, "").split("").reverse().join("").toLowerCase()
    );
  }
}
