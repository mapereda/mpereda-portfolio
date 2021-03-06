import React from "react";
import { IModelBase } from "../../domain/components/models/IModelBase";

export interface IWork extends IModelBase{
    title:string,
    description?:string,
    img?:string,
    onClick?:()=>void
}

export class Work extends React.Component<IWork>{
    render(){
        return <div className="Work" onClick={this.props.onClick}>
            <img alt="Work" src={this.props.img}/>
            <div className="legend">
                <h4>{this.props.title}</h4>
                <div>{this.props.description}</div>
            </div>
        </div>
    }
}