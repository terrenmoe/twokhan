import React from 'react'

function ListItem(props) {
  return <li className='Link'>{props}</li>;
}
// No keys here key={value.toString()}
export default ListItem
