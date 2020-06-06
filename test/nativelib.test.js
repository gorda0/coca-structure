var assert = require('assert')
var expect = require('chai').expect
const { nLib } = require('../dist/bundle')

describe('Run native functions', () => {
  describe('Assert  x is bigger than y', () => {
    it('should return false for 1 > 2', () => {
      expect(nLib.biggerThan(1, 2)).to.be.false
    })

    it('should return false for 1 > 1', () => {
      expect(nLib.biggerThan(1, 1)).to.be.false
    })

    it('should return true for 1 > 0', () => {
      expect(nLib.biggerThan(1, 0)).to.be.true
    })
  })

  describe('Assert  x is smaller than y', () => {
    it('should return true for 1 < 2', () => {
      expect(nLib.smallerThan(1, 2)).to.be.true
    })

    it('should return false for 1 < 1', () => {
      expect(nLib.smallerThan(1, 1)).to.be.false
    })

    it('should return false for 1 < 0', () => {
      expect(nLib.smallerThan(1, 0)).to.be.false
    })
  })
})
