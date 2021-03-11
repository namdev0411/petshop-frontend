import React from 'react';
import './Sort.scss';

export default function Sort() {
    return (
        <div className="sort container">
            <h3 className="sort__title">
                全てのペット
            </h3>
            <select className="sort__select">
                <option value="">高い順に</option>
                <option value="">安い順に</option>
                <option value="">評価順に</option>
            </select>
        </div>
    )
}
