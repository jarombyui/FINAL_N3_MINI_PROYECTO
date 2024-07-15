
  export const Overlay = ({ show, onClick }) => (
    <div
      onClick={onClick}
      className={`${show ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} absolute inset-0 w-full h-full z-10 bg-black bg-opacity-50 transition-all duration-500 ease-in-out`}
    />
  )
  
