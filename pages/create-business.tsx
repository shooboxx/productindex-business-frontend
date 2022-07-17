import React from 'react';
import CreateBusinesForm from '@productindex/components/templates/forms/createBusinessForm';

export default function CreateBusiness() {
  return (
    <div className="biz-container">
      <div className="create-card">
        <h4>Create a business</h4>
        <br />
        <CreateBusinesForm />
      </div>
      <style>{`
        .create-card {
            width: 37.5rem;
            padding: 3rem 2rem;
            margin: auto auto;
            border-radius: 4px;
            box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 12px 16px rgba(96, 97, 112, 0.16);
            background-color: #FFF;
            height: 100%;
        }      
        `}</style>
    </div>
  );
}
