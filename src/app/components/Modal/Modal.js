import Add from '@/app/icons/Add'
import clsx from 'clsx'

export const Modal = ({ children, isOpen, onClose, ...rest }) => {
  const handleClose = () => onClose()
  return (
    <div className={clsx(!isOpen && 'hidden')} {...rest}>
      <div className="h-[60vh] fixed top-[30%] left-[5vw] bg-neutral-100 rounded-tl-xl rounded-br-xl shadow-lg w-[90vw] z-30">
        <div className="relative p-4">
          {children}
          <div
            className="inline-block absolute -right-4 -top-4 rounded-full bg-pink-700 transform rotate-45 w-10 h-10"
            onClick={handleClose}
          >
            <Add fill="white" className="w-10 h-10" />
          </div>
        </div>
      </div>
      <div
        className="fixed h-screen w-screen top-0 left-0 z-20 bg-gray-900 opacity-50"
        onClick={handleClose}
      ></div>
    </div>
  )
}
