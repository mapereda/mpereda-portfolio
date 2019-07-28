import React from "react";
import { IModelBase } from '../../domain/components/models/IModelBase'

export interface ICoverPage extends IModelBase{
  title:string,
  subtitle?:string,
  description?:string | number
}

export class CoverPage extends React.Component<ICoverPage>{
    render(){
        return <div className="CoverPage">
                <h1>{this.props.title}</h1>
                <h4>{this.props.subtitle}</h4>
                <div>{this.props.description}</div>
            </div>
    }
}