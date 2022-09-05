import React from 'react';
import { useRouter } from 'next/router';
import MenuPageLayout from '@productindex/components/MenuPageLayout';
import StoreList from '../../components/templates/sections/StoreList';
import styles from '@productindex/styles/businesspage.module.css'

export default function ManageBusiness() {
  const router = useRouter()
  return (
    <MenuPageLayout>
      <div className={styles.businessInfoSection}>
        Business info here
      </div>
      <StoreList businessId={router.query.businessId} />

    </MenuPageLayout>
  );
}
