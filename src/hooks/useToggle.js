import { useState } from 'react'

 export const useToggle = (initialState = false) => {
  const [value, setValue] = useState(initialState)

  const toggle = () => {
    setValue(!value)
  }

  const open = () => {
    setValue(true)
  }

  const close = () => {
    setValue(false)
  }

  return [value, open, close, toggle]
}

