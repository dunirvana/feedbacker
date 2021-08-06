import {
  getDiffTimeBetweenCurrentDate
} from './date'

describe('Dates utils', () => {
  it('should return null with null param', () => {
    expect(getDiffTimeBetweenCurrentDate(null)).toBe(null)
  })

  it('should return empty with undefined param', () => {
    expect(getDiffTimeBetweenCurrentDate(undefined)).toBe('')
  })
})