import clsx from 'clsx'
import { useFormik } from 'formik'
import { useState, useRef, useEffect } from 'react'
import { Modal, Text } from '../components'
import { ChevronRight } from '../icons'
import { EditProductForm } from './EditProductForm'
import { Product } from './Product'

export const ProductSection = ({
  products,
  title,
  setProducts,
  productHasBeenAdded,
  setProductHasBeenAdded,
}) => {
  const [expanded, setExpanded] = useState(true)
  const [editProductIsOpen, setEditProductIsOpen] = useState(false)

  const formik = useFormik({
    initialValues: {
      title: '',
      price: '',
      presentation: '',
    },
    onSubmit: (values) => {
      console.log(values)
      const newProducts = products.map((product) =>
        product.id == values.id ? { ...values } : product,
      )
      setProducts(newProducts)
      formik.handleReset()
      setEditProductIsOpen(false)
    },
  })

  const titleEl = useRef(null)

  const handleEditProduct = (product) => {
    setEditProductIsOpen(true)
    Object.keys(product).forEach((key) => (formik.values[key] = product[key]))
  }

  const handleFinishPurchase = () => {
    setProducts([])
  }

  const deleteProduct = (productId) => {
    console.log(productId)
  }

  useEffect(() => {
    if (productHasBeenAdded) {
      setProductHasBeenAdded(false)
      setExpanded(true)
    }
  }, [productHasBeenAdded, setProductHasBeenAdded])

  return (
    <>
      <div className={clsx('my-4 flex flex-col relative gap-4')}>
        <div className="flex items-center">
          <Text primary className="text-xl">
            {title}
          </Text>
          <ChevronRight
            className={clsx(
              'w-8 h-8 transition-all duration-300',
              expanded && 'rotate-90',
            )}
            fill="rgb(13,148,136)"
          />
          <div className="bg-primary-600 h-[1px] w-full grow"></div>
        </div>
        <input
          type="checkbox"
          className="absolute top-0 w-full h-8 peer opacity-0"
          onClick={() => setExpanded(!expanded)}
          checked={expanded}
          readOnly
        />
        <div
          className={clsx(
            'transition-all duration-300 overflow-hidden max-h-0 peer-checked:max-h-screen',
          )}
        >
          {products.length > 0 ? (
            <>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-1 ">
                {products.map((product, i) => (
                  <div key={i} onClick={() => handleEditProduct(product)}>
                    <Product
                      title={product.title}
                      id={product.id}
                      price={product.price}
                      presentation={product.presentation}
                      added={product.added}
                      setProducts={setProducts}
                      deleteProduct={deleteProduct}
                    />
                  </div>
                ))}
              </div>
              {title === 'Carrito' ? (
                <div className="flex justify-end">
                  <button
                    className="bg-primary-600 px-4 py-2 rounded-full mt-6 mb-2 text-white"
                    type="button"
                    onClick={handleFinishPurchase}
                  >
                    <Text>Finalizar compra</Text>
                  </button>
                </div>
              ) : null}
            </>
          ) : (
            <Text>Aun no hay elementos</Text>
          )}
        </div>
      </div>
      <Modal
        isOpen={editProductIsOpen}
        onClose={() => setEditProductIsOpen(false)}
      >
        <EditProductForm formik={formik} innerRef={titleEl} />
      </Modal>
    </>
  )
}
