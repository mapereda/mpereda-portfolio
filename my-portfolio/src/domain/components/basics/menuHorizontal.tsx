import React from "react";

export class MenuHorizontal extends React.Component{
    render(){
        return <ul className="MenuHorizontal">
           <li className="MenuItem">Home</li>
           <li className="MenuItem">About me</li>
           <li className="MenuItem">Contact</li> 
        </ul>
    }
}