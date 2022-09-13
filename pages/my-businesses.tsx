import Link from 'next/link';
import React, {useState, useEffect} from 'react';
import {EmptyStateMessages} from '@productindex/const/emptyStateMessages';
import { BusinessApi } from '@productindex/api/business';
import BusinessCard from '@productindex/components/BusinessCard';
//TODO: Only show this page if you are logged in
export default function MyBusinesses() {
  const [businesses, setBusinesses] = useState([]);
  useEffect(()=> {
    BusinessApi.getUserBusinesses().then(({data})=> {
      setBusinesses(data)
    }).catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <div className="biz-container">
      <div className="business-section">
        <h4>My Businesses ({businesses.length})</h4>
        <p>Mangage your business and keep up to date with what's new!</p>
        <div className="business-card-container">
          {businesses.length > 0 ? (
            businesses.map(business => <BusinessCard business={business} key={business.id} />)
          ) : (
            <div className="center">
              <h5>{EmptyStateMessages.NoBusinessesYet}</h5>
              <p>{EmptyStateMessages.NoBusinessSubheader}</p>
            </div>
          )}
        </div>
        <Link href="/create-business">
          <a>
            <button className="btn btn-primary btn-form">Create a business</button>
          </a>
        </Link>
      </div>

      <style>
        {`
            .center {
                text-align: center;
                padding: 15% 0;
            }
            .biz-container {
                display: flex;
                justify-content: center;
            }

            .business-section {
              width: 37.5rem;
              padding: 3rem 2rem;
              margin: auto auto;
              border-radius: 4px;
              box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04), 0px 12px 16px rgba(96, 97, 112, 0.16);
              background-color: #FFF;
              height: 100%;
            }
            .business-card {
                background-color: white;
                display: flex;
                width: 100%;
                height: 6.5rem;
                border-radius: 4px;
                transition: all .4s;
                border: 1.5px solid #e5e9e8;
                margin-bottom: .25rem;
            }
            a.card-link {
                display: inline-block;
                width: 100%;
                
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
                height: 25rem;
                border-radius: 4px;
                margin-top: 1.5rem;
                overflow-y: auto;
                width: 100%;
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
                box-shadow: 0px 6px 20px rgba(58, 58, 58, 0.1), 0px -6px 32px rgba(58, 58, 58, 0.1);
                // border: 1.5px solid transparent;
            }
        `}
      </style>
    </div>
  );
}
