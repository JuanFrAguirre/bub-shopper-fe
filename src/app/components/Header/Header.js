import { Add } from '@/app/icons'
import { Text } from '../Text'

export const Header = () => {
  return (
    <header className="p-4 h-[8vh] shadow-md dark:bg-grayish-900 flex items-center justify-between">
      <Text className="text-2xl text-center" primary title>
        Bub Shopper App
      </Text>
      <div className="flex justify-items-center items-center text-white">
        <Add className="h-8 w-8" fill="white" />
      </div>
    </header>
  )
}
