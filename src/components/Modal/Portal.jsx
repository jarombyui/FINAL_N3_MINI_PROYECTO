import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(children, document.querySelector('#portal'))
    : null
}

