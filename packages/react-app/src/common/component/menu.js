import React from 'react';
import {NavLink} from "react-router-dom";
import {nav} from "../../router/route_list";
export default function Menu(porps){
    return (
        <nav id="menu">
            {nav.map((item,index)=>{
                return (<NavLink 
                    className={item.className}
                    to={item.path}
                    key={index}
                    exact={true}
                    activeClassName={"active"}
                    onTouchEnd={porps.menuHide}
                >{item.name}</NavLink>)
            })}
        </nav>
    );
} 