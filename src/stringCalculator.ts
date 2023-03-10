export function stringCalculator(numbers: string): number {
  if (numbers === "") {
    return 0
  }

  const arrayNumbers = parseNumbers(numbers)
  return sumNumbers(arrayNumbers)
}

function parseNumbers(numbers: string) {
  const arrayString = numbers.split(",")
  const arrayNumbers = arrayString.map((element) => parseInt(element))
  return arrayNumbers
}

function sumNumbers(arrayNumbers: number[]): number {
  return arrayNumbers.reduce((totalSum, currentNumber) => totalSum + currentNumber)
}
