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
})
