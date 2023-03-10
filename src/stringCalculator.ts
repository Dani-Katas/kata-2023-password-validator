export function stringCalculator(textWithNumbers: string): number {
  if (textWithNumbers === "") {
    return 0
  }

  const numbers = parseNumbers(textWithNumbers)
  if (numbers[0] < 0) throw new Error(`Negatives not allowed: ${numbers[0]}`)

  return addNumbers(numbers)
}

function splitByDelimiter(textWithNumbers: string, delimiter = ",") {
  const newLine = "\n"
  const withoutNewLines = textWithNumbers.replace(newLine, delimiter)

  return withoutNewLines.split(delimiter).map((element) => parseInt(element))
}

function parseNumbers(textWithNumbers: string) {
  const upcomingDelimiterIndicator = "//"
  if (textWithNumbers.startsWith(upcomingDelimiterIndicator)) {
    const delimiterLength = 1
    const newLine = "\n"
    const firstNumberIndex = upcomingDelimiterIndicator.length + delimiterLength + newLine.length
    const textWithoutStartingDelimiter = textWithNumbers.substring(firstNumberIndex, textWithNumbers.length)
    const delimiter = textWithNumbers[upcomingDelimiterIndicator.length]
    return splitByDelimiter(textWithoutStartingDelimiter, delimiter)
  }

  return splitByDelimiter(textWithNumbers)
}

function addNumbers(numbers: number[]): number {
  return numbers.reduce(add)
}

function add(first: number, second: number) {
  return first + second
}
