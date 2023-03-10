export function stringCalculator(textWithNumbers: string): number {
  if (textWithNumbers === "") {
    return 0
  }

  const numbers = parse(textWithNumbers)
  ensureThereAreNotNegative(numbers)

  return addMultiple(numbers)
}

function ensureThereAreNotNegative(numbers: number[]) {
  const negativeNumbers = numbers.filter((number) => number < 0)

  if (negativeNumbers.length > 0) throw new Error(`Negatives not allowed: ${negativeNumbers}`)
}

function splitByDelimiter(textWithNumbers: string, delimiter = ",") {
  const newLine = "\n"
  const withoutNewLines = textWithNumbers.replace(newLine, delimiter)

  return withoutNewLines.split(delimiter).map((element) => parseInt(element))
}

function parse(textWithNumbers: string) {
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

function addMultiple(numbers: number[]): number {
  return numbers.reduce(add)
}

function add(first: number, second: number) {
  return first + second
}
