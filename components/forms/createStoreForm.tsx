import React, {useState} from 'react'
import {TextField} from '../textfield'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Dropdown} from '../dropdown'
import { ImageUpload } from '../ImageUpload'

type Props = {}

export default function CreateStoreForm({}: Props) {
  const formik = useFormik({
    initialValues: {
      storeName: '',
      addressOne: '',
      addressTwo: '',
      country: '',
      state: '',
    },
    onSubmit: async (values)=> {
        console.log(values)
    },
    validationSchema: Yup.object({
      storeName: Yup.string().min(3, 'Business name must be at least 3 characters long').required('Business name is required'), //#TODO: Add this to const
      country: Yup.string().required('Country is required'), //#TODO: Add this to const
      state: Yup.string().required('State/Island is required') //#TODO: Add this to const
    })
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField 
            name='storeName'
            valueType='text'
            valuePlaceholder='Give your store a unique handle'
            valueLabel='Store name'
            onChange={formik.handleChange}
            value={formik.values.storeName.replace(' ', '')} //TODO: Allow letters, numbers, underscores
            className='med-textbox'
            error={formik.errors.storeName}
            onBlur={formik.handleBlur}
        />
        <TextField 
            name='addressOne'
            valueType='text'
            valuePlaceholder='Business address line 1'
            valueLabel='Address line 1'
            onChange={formik.handleChange}
            value={formik.values.addressOne} //TODO: Allow letters, numbers, underscores
            className='med-textbox'
            error={formik.errors.addressOne}
            onBlur={formik.handleBlur}
            optional
        />
        <TextField 
            name='addressTwo'
            valueType='text'
            valuePlaceholder='Business address line 2'
            valueLabel='Address line 2'
            onChange={formik.handleChange}
            value={formik.values.addressTwo} //TODO: Allow letters, numbers, underscores
            className='med-textbox'
            error={formik.errors.addressTwo}
            onBlur={formik.handleBlur}
            optional
        />
        <Dropdown 
            valueLabel='Country'
            optionList={[{name: "The Bahamas", value: "BAH"}]}
            onChange={formik.handleChange}
            error={formik.errors.country}
            value={formik.values.country}
            name={'country'}
            // onBlur={formik.handleBlur}
        />
        <Dropdown 
            valueLabel='State/Island'
            optionList={[{name: "The Bahamas", value: "BAH"}]}
            onChange={formik.handleChange}
            error={formik.errors.state}
            value={formik.values.state}
            name={'state'}
            // onBlur={formik.handleBlur}
        />

        <br />
        <input type="submit" value="Create Store" disabled={formik.isSubmitting} className='btn btn-primary btn-form' />


      </form> 
    </>
  )
}