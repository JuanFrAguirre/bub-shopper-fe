import { Add, Search } from '@/app/icons'
import { Text } from '../Text'

export const BottomNavBar = ({
  products,
  setAddProductModalIsOpen,
  setSearchProductModalIsOpen,
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 text-center flex items-center justify-center">
      <section className="absolute bottom-[1vh] left-2 right-2 peer">
        <div className="flex gap-2 bg-primary-600 border-2 rounded-full shadow-lg">
          <div className="basis-1/3 flex flex-col p-2 items-center justify-center text-sm text-center text-white">
            <Search
              className="h-[30px] w-[30px]"
              fill="#ffffff"
              onClick={() => setSearchProductModalIsOpen(true)}
            />
          </div>

          <div className="basis-1/3">
            <div className="flex flex-col p-2 text-sm text-center text-white">
              <Text className="font-light">Total</Text>
              <Text className="text-lg">
                {`€ ${products
                  .reduce((total, product) => total + Number(product.price), 0)
                  .toFixed(2)}`}
              </Text>
            </div>
          </div>

          <div className="basis-1/3 flex flex-col p-2 items-center justify-center">
            <Add
              className="h-[40px] w-[40px] peer-hover:animate-pulse delay-500"
              fill={'#ffffff'}
              onClick={() => setAddProductModalIsOpen(true)}
            />
          </div>
        </div>
      </section>
    </footer>
  )
}
