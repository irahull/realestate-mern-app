import React from 'react'
import "./list.scss";
// import { listData } from '../../data/data'
import Card from '../Card/Card'

const List = ({listData}) => {
  return (
    <div className='listWrapper'>
        {
            listData.map((item)=>{
                return <Card item={item} key={item.id}/>
            })
        }
    </div>
  )
}

export default List