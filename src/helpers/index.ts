import { pronouns } from "../data/pronouns"

export const countWords = (text: string) => text.match(/\w+/g)?.length || 0

export const countSentences = (text: string) => (text.match(/[.!?]+/g) || []).length

export const countParagraphs = (text: string) => (text.match(/^\s*\S.*$/gm) || []).length

export const countPronouns = (text: string) => {
  const regex = new RegExp(`\\b(${pronouns.join('|')})\\b`, 'gi')
  const matches = text.match(regex)
  return matches ? matches.length : 0
}

export const calculateART = (text: string) => {
  if (text.length === 0) return '-'
  const AvarageOneMin = 225
  const words = countWords(text)
  const time = Math.ceil(words / AvarageOneMin)
  return `~${time} minute${time > 1 ? 's' : ''}`
}

export const findLongestWord = (text: string) => {
  if (text.length === 0) return '-'

  const sanitizedText = text.replace(/[^\w\s]/g, '')
  const words = sanitizedText.split(' ')

  let longestWord = ''
  let longestLength = 0

  for (let word of words) {
    if (word.length > longestLength) {
      longestWord = word
      longestLength = word.length
    }
  }

  return longestWord
}
