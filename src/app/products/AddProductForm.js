import { FormInput } from '../components'

export const AddProductForm = ({ formik, innerRef }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <FormInput
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          innerRef={innerRef}
          label="Titulo"
        />
        <FormInput
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          type="number"
          label="Precio"
        />
        <FormInput
          name="presentation"
          value={formik.values.presentation}
          onChange={formik.handleChange}
          label="Presentacion"
        />

        <button
          type="submit"
          className="bg-primary-600 inline-block px-4 py-2 mt-4 rounded-md text-white self-end"
        >
          Agregar
        </button>
      </form>
    </>
  )
}
