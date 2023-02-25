'use client'

import clsx from 'clsx'
import { useState } from 'react'
import { Modal, Text } from './components'
import Add from './icons/Add'
import { Product } from './products'

const products = [
  {
    title: 'Coca Cola lata',
    price: 1.05,
  },
  {
    title: 'Pepsi Cola lata',
    price: 0.97,
  },
  {
    title: 'Queso Havarti Fetas',
    price: 2.15,
  },
]

export default function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <main>
      <div className="grid grid-cols-3 gap-1 my-4">
        {products.map((product) => (
          <Product
            key={product.title}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
      <div className="fixed bottom-16 left-6 p-4 rounded-md border shadow bg-neutral-100 text-center">
        <Text className="text-xl font-semibold">Total:</Text>
        <Text pink className="text-3xl font-bold">
          € 14.5
        </Text>
      </div>

      <div
        className="fixed bottom-16 right-6 p-4 rounded-full bg-pink-700 h-14 w-14 flex items-center justify-center"
        onClick={() => setModalIsOpen(true)}
      >
        <Text className="text-5xl p-0 m-0 text-white">
          <Add className="h-[50px] w-[50px]" fill={'#ffffff'} />
        </Text>
      </div>

      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <Text>hola</Text>
      </Modal>
    </main>
  )
}
