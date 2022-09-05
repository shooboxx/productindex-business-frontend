import React from 'react'
import Link  from 'next/link';
import styles from './sidebar.module.css'
import { Dropdown } from '@productindex/components/formElements/Dropdown';
import { useRouter } from 'next/router';
import { link } from 'fs';


type Props = {
    currentlyViewedBusiness: string;
    optionList: SelectOptions[];
    onChange: any;

}
type SelectOptions = {
    name: string;
    value: string;
}



const BusinessSidebar = ({ currentlyViewedBusiness, optionList, onChange}: Props) => {
    const router = useRouter()
    const businessId = 1;
    const storeName = 'AlphaBet'
    const links = {
        changeBusiness: '/my-business',
        addStore: `/b/${businessId}/create-store`,
        storeDetails: `/store/${storeName}`,
        inventory: `/store/${storeName}/inventory`,
        reviews: `/store/${storeName}/reviews`,
        business: `/b/${businessId}`,
        businessProducts: `/b/${businessId}/products`,
        help: '/help'

    }
    return (
    <>
        <div className={styles.bizSidebar}>
            <div className={`${styles.businessSection} ${styles.sideBarSection}`}>
            <div className={styles.businessBox}>
                <div className={styles.businessLogoBox}>
                    <img src="/images/logo-dark.png" alt="Product Index Logo" />
                    <h6 className={styles.forBusiness}>For Business</h6> 
                </div>

                <h5>{currentlyViewedBusiness}</h5>
                <Link href={links.changeBusiness}><a className='link'>Change</a></Link>
            </div>

            </div>
            <div className={styles.sideBarSection}>
            <h6 className={`${styles.sideBarLabel}`}>Your stores</h6>
            <div className={styles.businessBox}>
                <Dropdown 
                  valueLabel=''
                  name='storeList'
                  onChange={onChange}
                  optionList={optionList}
                  defaultValue={optionList[0].value}
                />
            </div>

            <Link href={links.addStore}><a className={`link ${styles.itemPadding}`}>+ Add new store</a></Link>
            </div>
            <div className={`${styles.manageBusiness} ${styles.sideBarSection}`}>
            <h6 className={`${styles.sideBarLabel}`}>Manage store</h6>
            <Link href={links.storeDetails}><a className={styles.navSelector}>Details</a></Link>
            <Link href={links.inventory}><a className={styles.navSelector}>Inventory</a></Link>
            <Link href={links.reviews}><a className={styles.navSelector}>Reviews</a></Link>
            </div>
            <div className={styles.sideBarSection}>
            <Link href={links.business}><a className={styles.navSelector}>Manage Business</a></Link>
            <Link href={links.businessProducts}><a className={styles.navSelector}>Manage Products</a></Link>
            </div>
            <div className={styles.sideBarSection}>
            <Link href={links.help}><a className={styles.navSelector}>Help</a></Link>
            </div>
        </div>
    </>
  )
}

export {BusinessSidebar}