import React from 'react';
import { TextField } from '@productindex/components/formElements/Textfield';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Dropdown} from '@productindex/components/formElements/Dropdown';

export default function CreateStoreForm() {
  const formik = useFormik({
    initialValues: {
      storeName: '',
      addressOne: '',
      addressTwo: '',
      country: '',
      state: '',
    },
    onSubmit: async values => {
      console.log(values);
    },
    validationSchema: Yup.object({
      storeName: Yup.string()
        .min(3, 'Business name must be at least 3 characters long')
        .required('Business name is required'), //#TODO: Add this to const
      country: Yup.string().required('Country is required'), //#TODO: Add this to const
      state: Yup.string().required('State/Island is required'), //#TODO: Add this to const
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="storeName"
          valueType="text"
          valuePlaceholder="Give your store a unique handle"
          valueLabel="Store name"
          onChange={formik.handleChange}
          value={formik.values.storeName.replace(' ', '')} //TODO: Allow letters, numbers, underscores
          error={formik.errors.storeName}
          onBlur={formik.handleBlur}
          showLabel
        />
        <TextField
          name="addressOne"
          valueType="text"
          valuePlaceholder="Business address line 1"
          valueLabel="Address line 1"
          onChange={formik.handleChange}
          value={formik.values.addressOne}
          error={formik.errors.addressOne}
          onBlur={formik.handleBlur}
          isOptional
          showLabel
        />
        <TextField
          name="addressTwo"
          valueType="text"
          valuePlaceholder="Business address line 2"
          valueLabel="Address line 2"
          onChange={formik.handleChange}
          value={formik.values.addressTwo} 
          error={formik.errors.addressTwo}
          onBlur={formik.handleBlur}
          isOptional
          showLabel
        />
        <Dropdown
          valueLabel="Country"
          optionList={[{name: 'The Bahamas', value: 'BAH'}]}
          onChange={(e)=> formik.setFieldValue('country', e.target.value)}
          error={formik.errors.country}
          name={'country'}
          showLabel
          // onBlur={formik.handleBlur}
        />
        <Dropdown
          valueLabel="State/Island"
          optionList={[{name: 'The Bahamas', value: 'BAH'}]}
          onChange={(e)=> formik.setFieldValue('state', e.target.value)}
          error={formik.errors.state}
          name={'state'}
          showLabel
          // onBlur={formik.handleBlur}
        />

        <br />
        <input
          type="submit"
          value="Create Store"
          disabled={formik.isSubmitting}
          className="btn btn-primary btn-form"
        />
      </form>
    </>
  );
}
