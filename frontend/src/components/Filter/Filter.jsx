import React from 'react';
import "./filter.scss";

const Filter = () => {
    return (
        <div className='filter'>
            <div className="filterTitle">Search result for</div>
            <div className="filterBox">
                <span>Location</span>
                <input type="text" placeholder='Enter City' name='citySearch' />
            </div>
            <div className="filterCategory">
                <div className="filterType">
                    <label htmlFor="type">Type</label>
                    <select name="type" id="type">
                        <option value="any">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="filterProperty">
                    <label htmlFor="property">Property</label>
                    <select name="property" id="property">
                        <option value="any">Any</option>
                        <option value="farm">Farm</option>
                        <option value="buy">House</option>
                        <option value="rent">Land</option>
                    </select>
                </div>
                <div className="filterMin">
                    <label htmlFor="minPrice">MinPrice</label>
                    <input type="number" placeholder='0' name="minPrice" />
                </div>
                <div className="filterMax">
                    <label htmlFor="maxPrice">MaxPrice</label>
                    <input type="number" placeholder='0' name='maxPrice' />
                </div>
                <div className="filterBedroom">
                <label htmlFor="bedroom">Bedroom</label>
                    <input type="text" placeholder='0' name='bedroom' />
                </div>
                <div className="filterSearch">
                    <img src="/search.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Filter