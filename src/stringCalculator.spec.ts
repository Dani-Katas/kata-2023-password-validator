import { describe, expect, it } from "vitest"
import { stringCalculator } from "./stringCalculator.js"

// stringCalculator(numbers: string): number
// stringCalculator("1,2") =>> 3
// stringCalculator("1") =>> 1
// stringCalculator("") =>> 0

// ZOM BIE

describe("stringCalculator", () => {
  describe("first iteration", () => {
    it("returns zero when empty string", () => {
      const emptyString = ""

      const result = stringCalculator(emptyString)

      expect(result).toEqual(0)
    })
  })
})
