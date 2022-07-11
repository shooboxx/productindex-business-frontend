import React from 'react'
import CreateBusinesForm from '../components/forms/createBusinessForm';

type Props = {}

export default function CreateBusiness({}: Props) {
  return (
    <div className='biz-container'>
        <div className="create-card">
        <h4>Create a business</h4>
        <br />
        <CreateBusinesForm />
        </div>
        
    <style>{`
      .create-card {
        width: 600px;
        padding: 3rem 1.5rem;
        margin: 10% auto;
        // border: 1.5px solid black        border-radius: 4px;
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 12px 16px rgba(96, 97, 112, 0.16);
      }      
      .biz-container: {

      }
    `}</style>
    </div>
  )
}