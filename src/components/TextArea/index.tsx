import { ForwardedRef, forwardRef } from 'react'
import './index.scss'

type Props = {
  value: string
  onChange: (val: string) => void
}

const TextArea = forwardRef((props: Props, ref: ForwardedRef<HTMLTextAreaElement>) => {
  const { value, onChange } = props
  return (
    <textarea
      ref={ref}
      className="text-area"
      placeholder="Paste your text here..."
      value={value}
      onChange={(e) => {
        onChange(e.target.value)
      }}
    />
  )
})

export default TextArea
