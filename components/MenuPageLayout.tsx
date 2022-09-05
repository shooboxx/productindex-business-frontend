import React from 'react'
import {BusinessSidebar} from '@productindex/components/sidebars/BusinessSidebar';
import styles from '@productindex/styles/businesspage.module.css'

type Props = {
    children: any;
}

export default function MenuPageLayout({children}: Props) {
    const handleOnChange = e => {
        return e;
    };
  return (
    <>
    <div className="side-by-side">
      <BusinessSidebar
        currentlyViewedBusiness={'The Testing Ground'}
        optionList={[{name: '', value: ''}]}
        onChange={handleOnChange}
      />
      <div className={styles.mainContent}>
        <div className={styles.mainContainer}>
            {children}
        </div>
      </div>
    </div>
  </>
  )
}