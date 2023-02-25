import { Text } from '../components'

export const Product = ({
  title,
  subtitle,
  description,
  presentation,
  store,
  price,
}) => {
  return (
    <>
      <div className="flex flex-col items-center shadow dark:shadow-none rounded-md border dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 p-2 gap-4 h-40">
        <div>
          <Text className="text-5xl font-black" pink>
            {title.split(' ')[0][0]}
          </Text>
        </div>
        <div className="flex flex-col gap-2 h-20">
          <Text className="text-sm font-light basis-2/3">{title}</Text>
          <Text className="basis-1/3 text-right pr-1 font-semibold">
            € {price}
          </Text>
        </div>
      </div>
    </>
  )
}
