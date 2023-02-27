'use client'

import axios from 'axios'
import { useFormik } from 'formik'
import { useEffect, useRef, useState } from 'react'
import { BottomNavBar, LoadingModal, Modal, Text } from './components'
import { AddProductForm, ProductSection } from './products'
import { URL } from './URL'

export default function Home() {
  const [addProductModalIsOpen, setAddProductModalIsOpen] = useState(false)
  const [searchProductModalIsOpen, setSearchProductModalIsOpen] =
    useState(false)
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [productHasBeenAdded, setProductHasBeenAdded] = useState(false)
  const [recentProducts, setRecentProducts] = useState([
    {
      title: 'Coca Cola lata',
      price: 1.05,
    },
    {
      title: 'Coca Cola botella',
      price: 2.3,
    },
  ])

  const title = useRef(null)

  const getProducts = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${URL.prod}/products`)
      setTimeout(() => {
        setLoading(false)
      }, 500)
      setProducts(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  const addProductFormik = useFormik({
    initialValues: {
      title: '',
      price: '',
      presentation: '',
    },
    onSubmit: async (values) => {
      setLoading(true)
      await axios.post(`${URL.prod}/products`, values)
      setLoading(false)
      addProductFormik.handleReset()
      setAddProductModalIsOpen(false)
      setProductHasBeenAdded(true)
      getProducts()
    },
  })

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    if (addProductModalIsOpen) {
      title.current.focus()
    }
  }, [addProductModalIsOpen])

  useEffect(() => {
    if (productHasBeenAdded) {
      getProducts()
    }
  }, [productHasBeenAdded])

  return (
    <>
      <main className="mb-24">
        <ProductSection
          products={products}
          setProducts={setProducts}
          title="Carrito"
          productHasBeenAdded={productHasBeenAdded}
          setProductHasBeenAdded={setProductHasBeenAdded}
          getProducts={getProducts}
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
            addProductFormik.resetForm()
          }}
        >
          <AddProductForm formik={addProductFormik} innerRef={title} />
        </Modal>
        <Modal
          isOpen={searchProductModalIsOpen}
          onClose={() => setSearchProductModalIsOpen(false)}
        >
          <Text>SEARCH PRODUCT</Text>
        </Modal>
      </main>
      <LoadingModal show={loading} />
    </>
  )
}
