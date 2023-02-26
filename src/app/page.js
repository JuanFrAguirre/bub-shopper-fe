'use client'

import axios from 'axios'
import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { BottomNavBar, Modal, Text } from './components'
import { AddProductForm, ProductSection } from './products'

export default function Home() {
  const [addProductModalIsOpen, setAddProductModalIsOpen] = useState(false)
  const [searchProductModalIsOpen, setSearchProductModalIsOpen] =
    useState(false)
  const [products, setProducts] = useState([])
  const [productHasBeenAdded, setProductHasBeenAdded] = useState(false)
  const [recentProducts, setRecentProducts] = useState([
    {
      id: 1,
      title: 'Coca Cola lata',
      price: 1.05,
    },
    {
      id: 2,
      title: 'Coca Cola botella',
      price: 2.3,
    },
  ])

  const title = useRef(null)

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/products')
      console.log(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  const formik = useFormik({
    initialValues: {
      id: '',
      title: '',
      price: '',
      presentation: '',
    },
    onSubmit: (values) => {
      const maxId = products.reduce(
        (max, prod) => (max > prod.id ? max : prod.id),
        0,
      )
      setProducts([...products, { ...values, id: maxId + 1 }])
      formik.handleReset()
      setAddProductModalIsOpen(false)
      setProductHasBeenAdded(true)
    },
  })

  useEffect(() => {
    getProducts()

    const listenToKey = (e) => {
      if (e.key === 'a') setAddProductModalIsOpen(true)
    }
    document.addEventListener('keydown', listenToKey, true)
    return () => {
      document.removeEventListener('keydown', listenToKey, true)
    }
  }, [])

  useEffect(() => {
    if (addProductModalIsOpen) {
      title.current.focus()
    }
  }, [addProductModalIsOpen])

  return (
    <main>
      <ProductSection
        products={products}
        setProducts={setProducts}
        title="Carrito"
        productHasBeenAdded={productHasBeenAdded}
        setProductHasBeenAdded={setProductHasBeenAdded}
      />
      <ProductSection
        products={recentProducts}
        setProducts={setRecentProducts}
        title="Recientes"
      />
      <BottomNavBar
        products={products}
        setAddProductModalIsOpen={setAddProductModalIsOpen}
        setSearchProductModalIsOpen={setSearchProductModalIsOpen}
      />
      <Modal
        isOpen={addProductModalIsOpen}
        onClose={() => {
          setAddProductModalIsOpen(false)
          formik.resetForm()
        }}
      >
        <AddProductForm formik={formik} innerRef={title} />
      </Modal>
      <Modal
        isOpen={searchProductModalIsOpen}
        onClose={() => setSearchProductModalIsOpen(false)}
      >
        <Text>SEARCH PRODUCT</Text>
      </Modal>
    </main>
  )
}
