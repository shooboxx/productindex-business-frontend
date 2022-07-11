import React from 'react'
import {TextField} from '../textfield'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Dropdown} from '../dropdown'

type Props = {}

export default function CreateBusinesForm({}: Props) {
  const formik = useFormik({
    initialValues: {
      businessName: '',
      category: '',
      description: '',
    },
    onSubmit: async (values)=> {
      console.log(values)
    },
    validationSchema: Yup.object({
      businessName: Yup.string().min(3, 'Business name must be at least 3 characters long').required('Business name is required'), //#TODO: Add this to const
      category: Yup.string().required('Business category is required') //#TODO: Add this to const
    })
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField 
            name='businessName'
            valueType='text'
            valuePlaceholder='Enter your business name here'
            valueLabel='Business name'
            onChange={formik.handleChange}
            value={formik.values.businessName}
            className='med-textbox'
            error={formik.errors.businessName}
            onBlur={formik.handleBlur}
        />
        <Dropdown 
            valueLabel='Business Category'
            optionList={[{name: "The Bahamas", value: "BAH"}]}
            onChange={formik.handleChange}
            error={formik.errors.category}
            value={formik.values.category}
        />
        <TextField 
            name='description'
            valueType='text'
            valuePlaceholder='Let your customers know what you provide.'
            valueLabel='Description'
            onChange={formik.handleChange}
            value={formik.values.description}
            className='med-textbox'
            error={formik.errors.description}
            onBlur={formik.handleBlur}
            optional
        />
        <br />
        <input type="submit" value="Create Business" disabled={formik.isSubmitting} className='btn btn-primary btn-form' />


      </form> 
    </div>
  )
}