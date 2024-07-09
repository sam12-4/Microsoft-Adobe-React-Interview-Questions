import { useEffect, useState } from "react";
import MenuList from "./menu-list";

export default function MenuItem({ menu = {} }) {
    console.log("menu children", menu.children);
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    const handleToggle = (getCurrentLabel) => {
        setDisplayCurrentChildren({
            ...displayCurrentChildren, 
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]
            })
        console.log(displayCurrentChildren);
    }

    
    
    return <>
        <li>
            <p>{menu.label}{menu && menu.children && menu.children.length > 0? <span style={{cursor: "pointer"}} onClick={()=>{handleToggle(menu.label)}}>{displayCurrentChildren[menu.label] ? "-" : "+"}</span> : null}</p>
            {menu && menu.children && menu.children.length > 0 && displayCurrentChildren[menu.label]  ?
            <MenuList list={menu.children}/>
            : null}

        </li>       

    </>
}