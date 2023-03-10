export function stringCalculator(numbers: string): number {
  if (numbers === "") {
    return 0
  }

  if (numbers.length === 3) {
    return parseInt(numbers[0]) + parseInt(numbers[2])
  }

  return parseInt(numbers)
}
