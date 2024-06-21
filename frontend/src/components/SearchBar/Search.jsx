import React, { useState } from 'react';
import "./search.scss";

const types = ["buy", "rent"]

const Search = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: 0,
        maxPrice: 10000,
    })

    const switchType = (type) => {
        setQuery({ ...query, type: type })
    }

    return (
        <div className='searchBar'>
            <div className="type">
                {types.map((item, type) => {
                    return <button key={type} onClick={() => switchType(item)} className={query.type === item ? "active" : ""}>{item}</button>
                })}
            </div>
            <div className="inpBox">
                <input type="text" name='location' placeholder='City Location' className='location' />
                <input type="number" name='minPrice' min={0} max={10000} placeholder='Min' className='minVal' />
                <input type="number" name='maxPrice' min={0} max={10000} placeholder='Max' className='maxVal' />
                <div className="searchIcon">
                    <img src="/search.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Search