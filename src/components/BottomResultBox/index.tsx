import { FC, memo, useMemo } from 'react'
import './index.scss'

type Props = {
  averageReadingTime: string
  longestWord: string
}

const BottomResultBox: FC<Props> = ({ averageReadingTime, longestWord }) => {
  const bottomResultBar = useMemo(
    () => [
      {
        title: 'Average Reading Time:',
        value: averageReadingTime,
      },
      {
        title: 'Longest word:',
        value: longestWord,
      },
    ],
    [averageReadingTime, longestWord]
  )

  return (
    <div className="bottom-result-bar">
      {bottomResultBar.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default memo(BottomResultBox)
