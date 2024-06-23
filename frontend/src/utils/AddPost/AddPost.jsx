import React from 'react';
import "addPost.scss";

const AddPost = () => {
  return (
    <div className='addPostWrapper'>
        <div className="apLeft">
            <input type="text" placeholder='Post title' />
        
        </div>
        <div className="apRight"></div>
    </div>
  )
}

export default AddPost