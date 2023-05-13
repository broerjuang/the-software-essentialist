export class Palindrome {
  static isPalindrome(input: string) {
    let toLowerCaseThenReplace = input.toLowerCase().replace(/ /g, "");
    return (
      toLowerCaseThenReplace ===
      toLowerCaseThenReplace.split("").reverse().join("")
    );
  }
}
