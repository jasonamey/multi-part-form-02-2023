import { titleCase, getTimeAbbreviation, removeAdverb } from '.'

describe.skip('all tests', () => {
  describe('Function titleCase properly titles words', () =>
    it('test different words', () => {
      expect(titleCase('dog')).toEqual('Dog')
      expect(titleCase('d')).toEqual('D')
      expect(titleCase('dog nose')).toEqual('Dog nose')
      expect(titleCase('')).toEqual('')
    }))

  describe('Funciton getTimeAbbreviation returns mo or yr', () => {
    it('test both cases', () => {
      expect(getTimeAbbreviation('monthly')).toEqual('mo')
      expect(getTimeAbbreviation('yearly')).toEqual('yr')
    })
  })

  describe('Funciton removeAdverb strips words of ly', () => {
    it('test differnt words', () => {
      expect(removeAdverb('monthly')).toEqual('month')
      expect(removeAdverb('yearly')).toEqual('year')
    })
  })
})
