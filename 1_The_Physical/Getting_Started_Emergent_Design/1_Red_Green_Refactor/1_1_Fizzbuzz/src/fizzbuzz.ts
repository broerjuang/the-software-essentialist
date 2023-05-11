export function fizzbuzz(input: number) {
  let isDivisibleBy3 = input % 3 === 0;
  let isDivisibleBy5 = input % 5 === 0;

  if (isDivisibleBy3 && isDivisibleBy5) {
    return "FizzBuzz";
  } else if (isDivisibleBy3) {
    return "Fizz";
  } else if (isDivisibleBy5) {
    return "Buzz";
  } else if (!isDivisibleBy3 && !isDivisibleBy5) {
    return input.toString();
  }
}
