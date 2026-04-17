import React from 'react'

function Props({items}) {
  return (
    <div>
        <ul>
            {items.map(item=><li key={item}>{item}</li>)}
        </ul>

    </div>
  );
}

export default Props