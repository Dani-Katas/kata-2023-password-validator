export function stringCalculator(textWithNumbers: string): number {
  if (textWithNumbers === "") {
    return 0
  }

  const numbers = parseNumbers(textWithNumbers)
  return addNumbers(numbers)
}

function parseNumbers(textWithNumbers: string) {
  const withoutNewLines = textWithNumbers.replace("\n", ",")
  const numbers = withoutNewLines.split(",").map((element) => parseInt(element))

  return numbers
}

function addNumbers(numbers: number[]): number {
  return numbers.reduce(add)
}

function add(first: number, second: number) {
  return first + second
}
