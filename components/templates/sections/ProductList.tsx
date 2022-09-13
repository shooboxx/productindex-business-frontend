import React from 'react'
import Link from 'next/link';

type Props = {
    businessId: string | string[];
}

export default function ProductList({businessId}: Props) {
  return (
    <div >
        <div className="tableHeader side-by-side">
            <h6>Products</h6>
            <Link href={`/create-store?businessId=${businessId}`}><a className='btn btn-menu right'>Add Products</a></Link>
        </div>
        <ul>
            <li>Product Key</li>
            <li>Product Name</li>
            <li>Product Type</li>
            <li>Product Description</li>
            
            <li>Product Img</li>
        </ul>


    </div>
  )
}