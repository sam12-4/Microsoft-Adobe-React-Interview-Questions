import React from 'react'
import MenuItem from './menu-item'

const MenuList = ({list=[]}) => {
    console.log(list);
  return (
    <>
        <ul>
            {list && list.length>0 ? list.map((item, index)=><MenuItem menu={item}/>): null }
        </ul>
        
    </>
  )
}

export default MenuList
