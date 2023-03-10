export function stringCalculator(numbers: string): number {
  if (numbers === "") {
    return 0
  }

  const arrayNumbers = parseNumbers(numbers)
  return addNumbers(arrayNumbers)
}

function parseNumbers(numbers: string) {
  return numbers.split(",").map((element) => parseInt(element))
}

function addNumbers(numbers: number[]): number {
  return numbers.reduce(add)
}

function add(first: number, second: number) {
  return first + second
}
