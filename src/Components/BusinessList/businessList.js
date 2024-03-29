import React from 'react';
import Business from '../Business/business.js';
import './businessList.css';


class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {
                    this.props.businesses.map(business => {
                        return <Business key={business.id} business={business} />;
                    })
                }
            </div>
        );
    }
}

export default BusinessList;