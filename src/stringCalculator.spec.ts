import { describe, expect, it } from "vitest"
import { stringCalculator } from "./stringCalculator.js"

describe("stringCalculator", () => {
  describe("first iteration", () => {
    it("returns zero when empty string", () => {
      const emptyString = ""

      const result = stringCalculator(emptyString)

      expect(result).toEqual(0)
    })
    it("returns the same number when its alone", () => {
      const oneNumber = "1"

      const result = stringCalculator(oneNumber)

      expect(result).toEqual(1)
    })
    it("returns the sum of two numbers", () => {
      const twoNumbers = "1,2"

      const result = stringCalculator(twoNumbers)

      expect(result).toEqual(3)
    })
    it("returns the sum of two numbers 2", () => {
      const twoNumbers = "2,4"

      const result = stringCalculator(twoNumbers)

      expect(result).toEqual(6)
    })
  })
  describe("second iteration", () => {
    it("returns the sum of an arbitrate number of digits", () => {
      const threeNumbers = "1,2,3"

      const result = stringCalculator(threeNumbers)

      expect(result).toEqual(6)
    })
  })

  describe("third iteration", () => {
    it("can separate with new lines", () => {
      const numbersWithNewLine = "1\n2,3"

      const result = stringCalculator(numbersWithNewLine)

      expect(result).toEqual(6)
    })
  })

  describe("forth iteration", () => {
    it("supports custom delimiters", () => {
      const numbersWithDelimiter = "//;\n1;2"

      const result = stringCalculator(numbersWithDelimiter)

      expect(result).toEqual(3)
    })
  })
})
