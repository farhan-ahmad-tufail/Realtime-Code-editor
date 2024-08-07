import React from 'react';
import Avatar from 'react-avatar';
function Client({username}) {
    return (
        <div className='p-2'>
            <Avatar size={50} name={username} round="14px" />
            <span className='mx-2 my-1'>{username}</span>
        </div>
    )
}

export default Client; 