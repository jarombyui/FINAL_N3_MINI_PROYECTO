import React, { HTMLAttributes, ReactNode } from 'react'
import { Portal } from './Portal'
import { Overlay } from './Overlay'


const classNames = (cln) => {
  return cln.join(' ').trim()
}

export const ModalPortal = ({ isOpen, onClose, children, ...props }) => {
  return (
    <Portal>
      <div
        className={classNames([
          isOpen ? 'opacity-100 z-50' : 'opacity-0 -z-10',
          'fixed top-0 w-full h-screen grid place-items-center transition-all duration-500 ease-in-out'
        ])}>
        <Overlay show={isOpen} onClick={onClose} />
        <div className="z-20 grid place-items-center">
            {children}
        </div>
      </div>
    </Portal>
  )
}



