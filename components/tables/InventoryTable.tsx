import React from 'react';
import styles from './tables.module.css';

type Inventory = {
  productName: string;
  productType: string;
  imageUrl: string;
  quantity: number;
  description: string;
  showPrice: boolean;
  price: number;
};
type Props = {
  data: Inventory[];
};

export default function InventoryTable({data}: Props) {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={`${styles.tableRows}`}>
          <th className={styles.tableHeaderCol}>
            <h6>Image </h6>
          </th>
          <th className={styles.tableHeaderCol}>
            <h6>Product Name </h6>
          </th>
          <th className={styles.tableHeaderCol}>
            <h6>Quantity </h6>
          </th>
          <th className={styles.tableHeaderCol}>
            <h6>Price </h6>
          </th>
          <th className={styles.tableHeaderCol}>
            <h6>Show Price </h6>
          </th>
          <th className={styles.tableHeaderCol}>
            <h6>Description </h6>
          </th>
          <th className={styles.tableHeaderCol}>
            <h6>Type </h6>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(rec => (
          <tr className={`${styles.inventoryData}`} key={rec.productName}>
            <td className={`${styles.tableData}`}>
              <div className={styles.tableImage}>
                <img src={rec.imageUrl} alt={rec.productName} />{' '}
              </div>{' '}
            </td>
            <td className={`${styles.tableData} ${styles.productName}`}>{rec.productName} </td>
            <td className={`${styles.tableData}`}>{rec.quantity} </td>
            <td className={`${styles.tableData} ${styles.productPrice}}`}>${rec.price}</td>
            <td className={`${styles.tableData}`}>{rec.showPrice ? 'Yes' : 'No'} </td>
            <td className={`${styles.tableData} ${styles.productDescription}`}>
              {rec.description}{' '}
            </td>
            <td className={`${styles.tableData} ${styles.productType}`}>{rec.productType} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
