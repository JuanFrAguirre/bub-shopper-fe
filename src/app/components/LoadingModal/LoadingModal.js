import clsx from 'clsx'
import { Text } from '../Text'

export const LoadingModal = ({ show }) => {
  return (
    <div className={clsx(show ? '' : 'hidden')}>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/60 z-40"></div>
      <div className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-end pb-32 z-50">
        <div className="flex flex-col gap-5 items-center">
          <div className="animate-bounce">
            <div className=" rounded-full w-16 h-16 border-8 border-primary-600 border-r-transparent grid place-items-center animate-spin"></div>
          </div>
          <Text
            className="text-white text-2xl font-semibold animate-pulse"
            primary
          >
            Loading...
          </Text>
        </div>
      </div>
    </div>
  )
}
