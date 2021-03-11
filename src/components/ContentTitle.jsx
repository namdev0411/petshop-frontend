import React from 'react'
import './ContentTitle.scss';

export default function ContentTitle({title}) {
    return (
        <div className="content__title">
            <h2>{title}</h2>
        </div>
    )
}
