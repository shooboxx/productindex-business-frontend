import React from 'react'
import styles from '@productindex/styles/businesspage.module.css'
import Link from 'next/link';
type Props = {
    businessId : string | string[];
}

export default function StoreList({businessId}: Props) {
    const uniqueName = 'TheImbueBrand'
  return (
    <div className={styles.storeListSection}>
        <div className="tableHeader side-by-side">
            <h6 className='tableNameHeader'>Stores</h6>
            <Link href={`/create-store?businessId=${businessId}`}><a className='btn btn-menu right'>Add New Store</a></Link>
        </div>

        <ul className={styles.storeList}>
            <li className={styles.listedStore}>
            <div className={styles.storeHandle}><Link href={`/store/${uniqueName}`}><a className={styles.storeHandleLink}>{uniqueName}</a></Link></div>
            <div className={styles.storeAddress}>Address of the store that exists here</div>
            <div className={styles.storeStatus}>Open</div>
            <div className={styles.storeMenu}><img src="/icons/kebab-menu.svg" alt="" /></div>
            </li>
        </ul>
    </div>
  )
}