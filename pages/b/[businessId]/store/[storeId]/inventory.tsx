import React from 'react'

type Props = {}

export default function Inventory({}: Props) {
  return (
    <div>
      <h6 className='page-header'>Inventory</h6>
      <table className='inventory-table'>
        <tr className='table-header'>
            <th><h6>Image </h6></th>
            <th><h6>Product Name </h6></th>
            <th><h6>Quantity </h6></th>
            <th><h6>Price </h6></th>
            <th><h6>Show Price </h6></th>
            <th><h6>Description </h6></th>
            <th><h6>Type </h6></th>
        </tr>
        <tr className='inventory-data'>
            <td><div className='table-image'>e </div> </td>
            <td className='product-name'>1 Hour photoshoot (Digital) </td>
            <td>1 </td>
            <td className='product-price'>$1000000.00 </td>
            <td>True </td>
            <td className='product-description'>Description </td>
            <td className='product-type'>Service </td>
        </tr>
        <tr className='inventory-data'>
            <td><div className='table-image'>e </div> </td>
            <td className='product-name'>1 Hour photoshoot (Digital) </td>
            <td>1 </td>
            <td className='product-price'>$1000000.00 </td>
            <td>True </td>
            <td className='product-description'>Description </td>
            <td className='product-type'>Service </td>
        </tr>
      </table>

    <style>{`
      table{
        border-collapse: collapse;
        border-style: hidden;
        box-shadow: 0 0 0 1px #E5E9E8; /* this draws the table border  */ 
        border-radius: 4px;
      }
      .page-header {
        color: #A0A0A0
      }
      .inventory-data:hover {
        background-color: #E5E9E8;
      }
      .inventory-data:nth-child(even) {
        background-color: #F4F9FD;
      }
      tr {
        border: 1px solid #E5E9E8;
      }
      .table-header {
        padding: 100rem;
      }
      .inventory-table th {
        padding: 0.75rem 1rem;
        text-align: left;
      }
      td {
        padding: 0.5rem 1rem;
      }
      .table-image {
        background-color: #E5E9E8;
        width: 50px;
        height: 50px;
        border-radius: 4px;
      }
      .product-name {
        width: 20rem;
      }
      .product-price {
        width: 10rem;
      }
      .product-description {
        width: 25rem;
      }
      .product-type {
        width: 6rem;
      }
    `}</style>
    </div>
  )
}