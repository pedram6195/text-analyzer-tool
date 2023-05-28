import { FC, useMemo } from 'react'
import './index.scss'

type Props = {
  words: number
  characters: number
  sentences: number
  paragraphs: number
  pronouns: number
}

const ResultBox: FC<Props> = ({ words, characters, paragraphs, pronouns, sentences }) => {
  const resultBar = useMemo(
    () => [
      {
        title: 'Words',
        value: words,
      },
      {
        title: 'Characters',
        value: characters,
      },
      {
        title: 'Sentences',
        value: sentences,
      },
      {
        title: 'Paragraphs ',
        value: paragraphs,
      },
      {
        title: 'Pronouns',
        value: pronouns,
      },
    ],
    [characters, paragraphs, pronouns, sentences, words]
  )

  return (
    <div className="result-bar">
      {resultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default ResultBox
