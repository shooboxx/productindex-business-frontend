import React from 'react'
import Link  from 'next/link';
import { Dropdown } from '@productindex/components/dropdown'

type Props = {}


export default function ManageBusiness ({}: Props) {
  const handleOnChange = (e) => {

  }
  const optionList = []
  return (
    <div>
      <div className='biz-sidebar'>
        <div className="business-section side-bar-section">
          <div className="business-box">
            <h5>The Imbue Brand</h5>
            <Link href='/my-businesses'><a className='link'>Change</a></Link>
          </div>

        </div>
        <div className="side-bar-section">
          <h6 className='label side-bar-label'>Your stores</h6>
          <div className="business-box">
            <select name='stores-list' id='stores-list' className='textbox' onChange={handleOnChange} defaultValue={'-'}>
                {optionList && <> <option disabled hidden value={'-'}> - </option> {optionList.map((item) => <option key={item.name} value={item.value}>{item.name}</option> )}</>}
            </select>
          </div>

          <Link href='/my-businesses'><a className='link item-padding'>+ Add new store</a></Link>
        </div>
        <div className='manage-business side-bar-section '>
          <h6 className='label side-bar-label'>Manage store</h6>
          <Link href='/profile'><a className="nav-selector">Details</a></Link>
          <Link href='/profile/password'><a className="nav-selector">Inventory</a></Link>
          <Link href='/profile/password'><a className="nav-selector">Reviews</a></Link>
        </div>
        <div className="side-bar-section">
          <Link href='/profile/password'><a className="nav-selector">Manage Business</a></Link>
          <Link href='/profile/password'><a className="nav-selector">Buisness Products</a></Link>
        </div>
        <div className="side-bar-section">
          <Link href='/profile/password'><a className="nav-selector">Help</a></Link>
        </div>
      </div>

        
        <style>{`

        `}

        </style>
    </div>

  )
}