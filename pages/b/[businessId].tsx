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
            .biz-sidebar {
              display: flex;
              flex-direction: column;
              min-height: 100vh;
              width: 14rem;
              
            }
            #stores-list {
              margin: 0 0 1rem 0;
            }
            .item-padding {
              padding: 0 .5rem;
            }

            .business-box {
              padding: 0 0.5rem;
            }
            .business-section {
              flex-grow: 1;
            }
            .manage-business {
              flex-grow: 8;
              
            }
            .nav-selector {
                padding: 8px 8px;
                // margin-bottom: 4px;
                border-radius: 4px;
                display: block;
            }
            .nav-selector:hover {
                background-color: #E5E9E8;
            }
            .nav-selector:active {
                background-color: #E5E9E8;
            }
            
            .profile-sidebar {
                width: 20%;
                display: inline-block;
            }

            .nav-selector:visited,
            .nav-selector:link {
                text-decoration: none;
                color: #5C5C5C;
                font-weight: 400;
            }
            .side-bar-section:not(:last-child) {
              border-bottom: 1px solid #E5E9E8;
            }
            .side-bar-section {
              background-color: #F4F4F4;
              padding: 0 0 1rem 0 ;
            }
            .side-bar-label {
              text-transform: uppercase;
              padding: 1rem 0.5rem;
              font-size: 12px;
              letter-spacing: 1px;
            }
        `}

        </style>
    </div>

  )
}