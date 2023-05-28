import { useEffect, useReducer, useRef, useState } from 'react'
import './App.scss'
import { ActionTypes, initialState, statsReducer } from './App.types'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import {
  calculateART,
  countParagraphs,
  countPronouns,
  countSentences,
  countWords,
  findLongestWord,
} from './helpers'

const App = () => {
  const ref = useRef<HTMLTextAreaElement>(null)
  const [value, setValue] = useState<string>('')
  const [stats, dispatch] = useReducer(statsReducer, initialState)

  useEffect(() => {
    dispatch({ type: ActionTypes.UPDATE_WORDS, payload: countWords(value) })
    dispatch({ type: ActionTypes.UPDATE_CHARACTERS, payload: value.length })
    dispatch({ type: ActionTypes.UPDATE_SENTENCES, payload: countSentences(value) })
    dispatch({ type: ActionTypes.UPDATE_PARAGRAPHS, payload: countParagraphs(value) })
    dispatch({ type: ActionTypes.UPDATE_PRONOUNS, payload: countPronouns(value) })
    dispatch({ type: ActionTypes.UPDATE_ART, payload: calculateART(value) })
    dispatch({ type: ActionTypes.UPDATE_LONGEST_WORD, payload: findLongestWord(value) })
  }, [value])

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox
            words={stats.words}
            characters={stats.characters}
            sentences={stats.sentences}
            paragraphs={stats.paragraphs}
            pronouns={stats.pronouns}
          />
          <TextArea ref={ref} value={value} onChange={(val) => setValue(val)} />
          <BottomResultBox
            averageReadingTime={stats.averageReadingTime}
            longestWord={stats.longestWord}
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
