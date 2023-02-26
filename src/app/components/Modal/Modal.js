import { Add } from '@/app/icons'
import clsx from 'clsx'

export const Modal = ({ children, isOpen, onClose, ...rest }) => {
  const handleClose = () => onClose()
  return (
    <div className={clsx(!isOpen && 'hidden')} {...rest}>
      <div className="fixed bottom-[5%] left-[5vw] right-[5vw] bg-grayish-100 dark:bg-gray-900 rounded-3xl border shadow-xl z-30">
        <div className="p-6">
          {children}
          <div
            className="inline-block absolute -right-4 -top-4 rounded-full bg-primary-600 transform rotate-45 w-10 h-10"
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
