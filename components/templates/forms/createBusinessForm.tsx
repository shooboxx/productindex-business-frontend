import React, {useState} from 'react';
import {TextField} from '@productindex/components/formElements/Textfield'
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Dropdown} from '@productindex/components/formElements/Dropdown'
import {ImageUpload} from '@productindex/components/formElements/ImageUpload';
import { TextArea } from '@productindex/components/formElements/TextArea';
import { BusinessApi } from '@productindex/api/business';
import { useRouter } from 'next/router';
import { toasty } from '../../../util/toasty';


export default function CreateBusinesForm() {
  const router = useRouter()
  const [uploadError, setUploadError] = useState('');
  const [photoUpload, setPhoto] = useState('');
  const checkFileSize = e => {
    if (e.target.files[0].size > 15728640) {
      return setUploadError('File size is too big');
    }
    setUploadError('');
  };
  const addPhoto = e => {
    setPhoto(e.target.files[0]);
  };
  const validatePhoto = e => {
    checkFileSize(e);
    addPhoto(e);
  };
  const formik = useFormik({
    initialValues: {
      businessName: '',
      category: '',
      description: '',
      displayPhoto: '',
    },
    onSubmit: async values => {
      if (!uploadError) {
        //photoUpload has the photo data
        const {success, data : newBusiness } = await BusinessApi.createBusiness(values)
        if (success) {
          toasty('success', 'Your business has been created successfully!')
          router.replace({
            pathname: "/create-store",
            query: { businessId: newBusiness.id },
        } )}
      }

    },
    validationSchema: Yup.object({
      businessName: Yup.string()
        .min(3, 'Business name must be at least 3 characters long') //TODO: Add this to a const
        .required('Business name is required'), //#TODO: Add this to const
      category: Yup.string().required('Business category is required'), //#TODO: Add this to const
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ImageUpload
          name="Upload Photo"
          valueLabel="Display Photo"
          isOptional
          onChange={validatePhoto}
          showLabel
          error={uploadError}
        />
        <TextField
          name="businessName"
          valueType="text"
          valuePlaceholder="Enter your business name here"
          valueLabel="Business name"
          onChange={formik.handleChange}
          value={formik.values.businessName}
          error={formik.errors.businessName}
          onBlur={formik.handleBlur}
          showLabel
        />
        <Dropdown
          valueLabel="Business Category"
          optionList={[{name: 'The Bahamas', value: 'BAH'}]}
          onChange={(e)=> formik.setFieldValue('category', e.target.value)}
          error={formik.errors.category}
          name={'category'}
          showLabel
          onBlur={formik.handleBlur}
          // onBlur={formik.handleBlur}
        />
        <TextArea 
          name="description"
          valuePlaceholder="Let your customers know what you provide."
          valueLabel="Description"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.errors.description}
          onBlur={formik.handleBlur}
          isOptional
          showLabel
        />
        <br />
        <input
          type="submit"
          value="Create Business"
          disabled={formik.isSubmitting}
          className="btn btn-primary btn-form"
        />
      </form>
    </>
  );
}
