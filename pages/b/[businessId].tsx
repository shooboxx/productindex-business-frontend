import React from 'react';
import {BusinessSidebar} from '@productindex/components/sidebars/BusinessSidebar';

export default function ManageBusiness() {
  const handleOnChange = e => {
    return e;
  };
  return (
    <>
      <div className="side-by-side">
        <BusinessSidebar
          currentlyViewedBusiness={'The Testing Ground'}
          businessListLink={'#'}
          optionList={[{name: '', value: ''}]}
          addStoreLink={'#'}
          storeDetailsLink={'#'}
          storeInventoryLink={'#'}
          storeReviewsLink={'#'}
          manageBusinessLink={'#'}
          manageBusinessProductLink={'#'}
          helpLink="#"
          onChange={handleOnChange}
        />
      </div>
    </>
  );
}
