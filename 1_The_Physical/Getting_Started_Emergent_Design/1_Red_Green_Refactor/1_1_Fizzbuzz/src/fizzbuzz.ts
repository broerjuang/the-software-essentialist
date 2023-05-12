export function fizzbuzz(input: number) {
  let isDivisibleBy3 = input % 3 === 0;
  let isDivisibleBy5 = input % 5 === 0;

  if (input > 100 || input < 0) throw new Error("Number out of range");
  if (isDivisibleBy3 && isDivisibleBy5) return "FizzBuzz";
  if (isDivisibleBy3) return "Fizz";
  if (isDivisibleBy5) return "Buzz";
  if (!isDivisibleBy3 && !isDivisibleBy5) return input.toString();
}
