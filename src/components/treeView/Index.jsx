import React from 'react'
import MenuList from './menu-list'

const TreeView = ({list = []}) => {
  return (
    <div>
        <MenuList list={list}/>
    </div>
  )
}

export default TreeView
