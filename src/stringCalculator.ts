export function stringCalculator(numbers: string): number {
  if (numbers === "") {
    return 0
  }

  const arrayString = numbers.split(",")
  const arrayNumbers = arrayString.map((element) => parseInt(element))
  return sumNumbers(arrayNumbers)
}

function sumNumbers(numbers: number[]): number {
  return numbers.reduce((totalSum, currentNumber) => totalSum + currentNumber)
}
