import Link from 'next/link'
import React from 'react'

interface BusinessSummary {
    id: number;
    business_name: string;
    description: string;
    profile_pic_url?: string;
}
type Props = {
    business: BusinessSummary;
}

function BusinessCard({business}: Props) {
  return ( 
    <>
        <Link href={`/b/${business.id}`}>
            <a className="card-link">
                <div className="business-card">
                    <div className="biz-profile-photo">
                    <img src={business.profile_pic_url ? business.profile_pic_url : "/images/Default-photo-store.png"} alt="Default business photo" />
                    </div>
                    <div className="biz-card-details">
                    <h5>{business.business_name}</h5>
                    <small>{business.description}</small>
                    </div>
                    <div className="highlighter"></div>
                </div>
            </a>
        </Link>
    </div>
  )
}

export default BusinessCard