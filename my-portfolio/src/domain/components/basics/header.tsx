import React from "react";
import { IHeaderModel } from "../models/IHeaderModel";

export class Header extends React.Component<IHeaderModel>{
 render(){

    let myImg=null;
    if(this.props.img){
        myImg = <img alt="Header" src={this.props.img} className="img"/>
    }


     return <h3 className="header">
        {myImg}
        <span>{this.props.children}</span>
     </h3>
 }
}