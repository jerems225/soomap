import React from 'react';
import filters from '../../../utils/datas/search';
import './Tab.css';

const Tab = () => {
    return (
        <div className="tabs">
            {filters.map((filter, index) => (
                <div className="tab" key={index}>
                    <h4>{filter.name}</h4>
                </div>
            ))}

        </div>
    )
}

export default Tab;