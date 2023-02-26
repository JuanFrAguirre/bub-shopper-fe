import clsx from 'clsx'
import { Text } from '../components'

export const Product = ({ title, presentation, price, added }) => {
  return (
    <>
      <div
        className={clsx(
          'flex flex-col items-center shadow dark:shadow-none rounded-md border dark:border-grayish-800 p-2 gap-4 h-48',
          added ? 'bg-primary-600' : 'bg-grayish-100 dark:bg-grayish-900',
        )}
      >
        <div>
          <Text
            className={clsx(added && 'text-white', 'text-5xl font-black')}
            primary={!added}
          >
            {String(title.split(' ')[0][0]).toUpperCase()}
          </Text>
        </div>
        <div className="flex flex-col gap-2 h-20 grow">
          <Text
            className={clsx(
              added ? 'text-black' : 'dark:font-light',
              'text-sm basis-[60%] text-center',
            )}
          >
            {`${title
              .split('')
              .map((char, i) => (i <= 23 ? char : null))
              .join('')}${title.length > 24 ? '...' : ''}`}
          </Text>
          <Text
            className={clsx(
              !added && 'dark:font-light',
              'text-grayish-400 text-sm basis-[20%] text-center italic',
            )}
          >
            {presentation}
          </Text>
          <Text
            className={clsx(
              'basis-[20%] text-right pr-1 font-semibold',
              added && 'text-white',
            )}
          >
            € {price || '-'}
          </Text>
        </div>
      </div>
    </>
  )
}
