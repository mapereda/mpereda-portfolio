import React from "react";
import { IModelBase } from "../../domain/components/models/IModelBase";
import { Header } from "../../domain/components/basics/header";

interface IAboutModel extends IModelBase{
    header:string,
    text?:string | number
}

export class About extends React.Component<IAboutModel>{
    render(){
        return <div className="About">
            <Header className="header">{this.props.header}</Header>
            <span className="text">{this.props.text}</span>
        </div>
    }
}