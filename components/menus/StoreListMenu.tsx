import React from 'react'
import Link from 'next/link';

type Props = {
    storeId : number;
}

function StoreListMenu({storeId}: Props) {
    const handleClick = e => {
        e.currentTarget.classList.toggle('kebab-menu')
    }
  return (
    <div className='menu' onClick={handleClick}>   
        <img src="/icons/kebab-menu.svg" alt="" />       
        <div className="user-menu">
            <div className='menu-option'>Edit Details</div>
            <div className='menu-option'>Change Store Hours</div>
            <div className='menu-option'>View Reviews</div>
            <div className='menu-option'>Add Inventory</div>
            <div className='menu-option'>Temporarily Close Store</div>
            <div className='menu-option'>Delete Store</div>
        </div>
        <style>{`
                .menu:hover {
                    cursor: pointer;
                }
                .kebab-menu{
                    position: relative;
                  }
                .kebab-menu .user-menu {
                    display: block;
                  }
                .user-menu {
                    background-color: white;
                    height: max-content;
                    width: 200px;
                    border-radius: 2px;
                    padding: 0.5rem 0;
                    top: 2rem;
                    right: 0;
                    lefft: 0;
                    bottom: 0;
                    position: absolute;
                    display: none;
                    box-shadow: 0px 2px 8px rgba(40, 41, 61, 0.08),
                      0px 20px 32px rgba(96, 97, 112, 0.24);
                    z-index: 1000;
                  }
                  .menu-option {
                    padding: 0.5rem 0.5rem;
                    display: block;
                    text-decoration: none;
                    color: #1c1c1c;
                    font-size: 1rem;
                  }
                  .menu-option:hover {
                    background-color: #f4f4f4;
                    cursor: pointer;
                  }
        
        `}</style>
    </div>
  )
}

export default StoreListMenu