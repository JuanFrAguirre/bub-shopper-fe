import clsx from 'clsx'
import { Text } from '../components'
import { Delete } from '../icons'

export const Product = ({
  title,
  presentation,
  price,
  added,
  hasDelete,
  deleteProduct,
  id,
}) => {
  return (
    <>
      <div
        className={clsx(
          'flex flex-col items-center shadow dark:shadow-none rounded-md border dark:border-grayish-800 p-2 gap-4 h-52 relative',
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
        <div className="flex flex-col justify-between gap-2 h-20 grow">
          <div className="flex flex-col justify-between gap-2 overflow-auto">
            <Text
              className={clsx(
                added ? 'text-black' : 'dark:font-light',
                'text-sm text-center ',
              )}
            >
              {title &&
                `${title
                  .split('')
                  .map((char, i) => (i <= 25 ? char : null))
                  .join('')}${title.length > 26 ? '...' : ''}`}
            </Text>
            <Text
              className={clsx(
                !added && 'dark:font-light',
                'text-grayish-400 text-sm text-center  italic',
              )}
            >
              {presentation &&
                `${presentation
                  .split('')
                  .map((char, i) => (i <= 25 ? char : null))
                  .join('')}${presentation.length > 26 ? '...' : ''}`}
            </Text>
          </div>
          <Text
            className={clsx(
              ' text-right pr-1 font-semibold',
              added && 'text-white',
            )}
          >
            € {(price && Number(price).toFixed(2)) || '-'}
          </Text>
        </div>
        {hasDelete ? (
          <div
            className="absolute top-0 right-0 bg-grayish-200 dark:bg-grayish-800 pl-[6px] pb-[6px] rounded-bl-lg z-10"
            onClick={(e) => {
              e.stopPropagation()
              deleteProduct(id)
            }}
          >
            <Delete className="h-5 w-5" fill="tomato" />
            {/* <Delete className="h-5 w-5 hidden dark:inline-block" fill="tomato" /> */}
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
