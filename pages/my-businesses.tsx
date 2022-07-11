import Link from 'next/link'
import React, { useState } from 'react'
import { EmptyStateMessages } from '../const/emptyStateMessages';

type Props = {}

export default function MyBusinesses({}: Props) {
    const [businesses, setBusinesses] = useState([])
  return (
    <div className='biz-container'>
        <div className="business-section">
            <h4>My Businesses (3)</h4>
            <p>Mangage your business and keep up to date with what's new!</p>
            <div className="business-card-container">
                {
                businesses.length > 0 ?                
                <Link href='testing'><a className='card-link'>
                    <div className='business-card'>
                        
                        <div className='biz-profile-photo'><img src="/images/Default-photo-store.png" alt="Default business photo" /></div>
                        <div className="biz-card-details">
                            <h4>My business name</h4>
                            <p>Business description</p>
                        </div>
                        <div className="highlighter">

                        </div>

                    </div>
                    </a>
                </Link>

                : <div className='center'>
                    <h5>{EmptyStateMessages.NoBusinessesYet}</h5> 
                    <p>{EmptyStateMessages.NoBusinessSubheader}</p> 
                
                </div>
                }

                
            </div>
            <Link href='/create-business'><a><button className='btn btn-primary btn-form'>Create a business</button></a></Link>
        </div>




    <style>
        {`
            .center {
                text-align: center;
                padding-top: 25%;
            }
            .biz-container {
                display: flex;
                justify-content: center;
            }

            .business-section {
                display: inline-block;
                margin: auto 0;
                position: relative;
                margin-top: 24px;
            }
            .business-card {
                background-color: white;
                display: flex;
                width: 43.75rem;
                height: 6.5rem;
                border-radius: 4px;
                transition: all .4s;
            }
            a.card-link {
                display: inline-block;
                
            }
            a.card-link:link {
                text-decoration: none;
            }
            .biz-profile-photo {
                width: 5.25rem;
                height: 5.25rem;
                background-color: #F4F4F4;
                margin: 0.5rem;
            }

            .biz-profile-photo img {
                width: 100%;
            }
            .biz-card-details {
                margin: 0.5rem;
            }
            .business-card-container {
                background-color: #F4F4F4;
                padding: 1.5rem 1rem;
                max-width: 750px;
                width: 750px;
                max-height: 450px;
                height: 450px;
                border-radius: 4px;
                margin-top: 1.5rem;
                overflow-y: auto;
            }
            .highlighter {
                background-color: #E5E9E8;
                width: 12px;
                height: 100%;
                margin-left: auto;
                transition: all 0.4s;
                border-radius: 0px 4px 4px 0px;

            }

            a.card-link:hover .highlighter {
                background-color: #C6E7E0;
            }

            a.card-link:hover .business-card {
                transform: translateY(-2px);
                box-shadow: 0px 6px 20px rgba(58, 58, 58, 0.1);
            }
        `}
    </style>
    </div>
  )
}