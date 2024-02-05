import React, { useState } from 'react';

export default function Trail() {
    const array=useState([]);
  return (
    <div>
    {
        <div>
        {array.push(1,2,3,4,5,6,7,8)}
        <h1>{array}</h1>
        </div>
      }
    </div>
  )
}
