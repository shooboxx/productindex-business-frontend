import React, {useState} from 'react'
import {TextField} from '../textfield'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {Dropdown} from '../dropdown'
import { ImageUpload } from '../ImageUpload'

type Props = {}

export default function CreateBusinesForm({}: Props) {
  const [uploadError, setUploadError] = useState('')
  const [photoUpload, setPhoto] = useState('')
  const checkFileSize = (e) => {
      if (e.target.files[0].size > 15728640) {
        return setUploadError('File size is too big')
      }
      setUploadError('')

  };
  const addPhoto = (e) => {
    setPhoto(e.target.files[0])
  }
  const validatePhoto = (e) => {
    checkFileSize(e)
    addPhoto(e)
  }
  const formik = useFormik({
    initialValues: {
      businessName: '',
      category: '',
      description: '',
      displayPhoto: ''
    },
    onSubmit: async (values)=> {
      if (!uploadError) {
        console.log(values, photoUpload)
      }
    },
    validationSchema: Yup.object({
      businessName: Yup.string().min(3, 'Business name must be at least 3 characters long').required('Business name is required'), //#TODO: Add this to const
      category: Yup.string().required('Business category is required') //#TODO: Add this to const
    })
  })

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ImageUpload name='biz-profile-photo' valueLabel='Display Photo' optional onChange={validatePhoto} error={uploadError}/>
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
            name={'category'}
            // onBlur={formik.handleBlur}
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
    </>
  )
}