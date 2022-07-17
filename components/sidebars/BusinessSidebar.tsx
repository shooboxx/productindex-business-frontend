import React from 'react'
import Link  from 'next/link';
import styles from './sidebar.module.css'

type Props = {
    currentlyViewedBusiness: string;
    businessListLink: string;
    optionList: SelectOptions[];
    addStoreLink: string;
    storeDetailsLink: string;
    storeInventoryLink: string;
    storeReviewsLink: string;
    manageBusinessLink: string;
    manageBusinessProductLink: string;
    helpLink: string;
    onChange: any;

}
type SelectOptions = {
    name: string;
    value: string;
}

const BusinessSidebar = ({ currentlyViewedBusiness, businessListLink, optionList, addStoreLink, storeDetailsLink, storeInventoryLink, storeReviewsLink, manageBusinessLink, manageBusinessProductLink, helpLink, onChange}: Props) => {
  return (
    <div>
        <div className={styles.bizSidebar}>
            <div className={`${styles.businessSection} ${styles.sideBarSection}`}>
            <div className={styles.businessBox}>
                <div className={styles.businessLogoBox}>
                    <img src="/images/logo-dark.png" alt="Product Index Logo" />
                    <h6 className={styles.forBusiness}>For Business</h6> 
                </div>
                
                <h5>{currentlyViewedBusiness}</h5>
                <Link href={businessListLink}><a className='link'>Change</a></Link>
            </div>

            </div>
            <div className={styles.sideBarSection}>
            <h6 className={`label ${styles.sideBarLabel}`}>Your stores</h6>
            <div className={styles.businessBox}>
                <select name='stores-list' id={styles.storesList} className='textbox' onChange={onChange} defaultValue={'-'}>
                    {optionList && <> <option disabled hidden value={'-'}> - </option> {optionList.map((item) => <option key={item.name} value={item.value}>{item.name}</option> )}</>}
                </select>
            </div>

            <Link href={addStoreLink}><a className={`link ${styles.itemPadding}`}>+ Add new store</a></Link>
            </div>
            <div className={`${styles.manageBusiness} ${styles.sideBarSection}`}>
            <h6 className={`label ${styles.sideBarLabel}`}>Manage store</h6>
            <Link href={storeDetailsLink}><a className={styles.navSelector}>Details</a></Link>
            <Link href={storeInventoryLink}><a className={styles.navSelector}>Inventory</a></Link>
            <Link href={storeReviewsLink}><a className={styles.navSelector}>Reviews</a></Link>
            </div>
            <div className={styles.sideBarSection}>
            <Link href={manageBusinessLink}><a className={styles.navSelector}>Manage Business</a></Link>
            <Link href={manageBusinessProductLink}><a className={styles.navSelector}>Business Products</a></Link>
            </div>
            <div className={styles.sideBarSection}>
            <Link href={helpLink}><a className={styles.navSelector}>Help</a></Link>
            </div>
        </div>
    </div>
  )
}

export {BusinessSidebar}