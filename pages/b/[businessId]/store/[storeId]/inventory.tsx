import React from 'react';
import InventoryTable from '@productindex/components/tables/InventoryTable';
import {BusinessSidebar} from '@productindex/components/sidebars/BusinessSidebar';
import styles from '@productindex/styles/inventorypage.module.css';
import Link from 'next/link';

export default function Inventory() {
  const handleOnChange = () => {
    return;
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
        <div className={styles.inventorySection}>
          <div className={`side-by-side ${styles.inventoryPageHeader}`}>
            <h5 className={styles.pageHeader}>Inventory</h5>
            <Link href="#">
              <a className={`btn-primary btn ${styles.inventoryBtn}`}>+ Add items</a>
            </Link>
          </div>

          <InventoryTable
            data={[
              {
                productName: 'Hello',
                productType: 'Service',
                imageUrl: '/',
                quantity: 10,
                description: 'This is a description',
                price: 10.0,
                showPrice: true,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
