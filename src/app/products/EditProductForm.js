import { FormInput } from '../components'

export const EditProductForm = ({ formik, innerRef }) => {
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <FormInput
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          innerRef={innerRef}
        />
        <FormInput
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
          type="number"
        />
        <FormInput
          name="presentation"
          value={formik.values.presentation}
          onChange={formik.handleChange}
        />

        <button
          type="submit"
          className="bg-primary-600 inline-block self-center px-4 py-2 mt-4 rounded-md text-white"
        >
          Submit
        </button>
      </form>
    </>
  )
}
