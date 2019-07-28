import React from "react";
import { IModelBase } from '../../domain/components/models/IModelBase'

export interface ICoverPage extends IModelBase{
  title:string,
  subtitle?:string,
  description?:string | number,
  profileImg?:string
}

export class CoverPage extends React.Component<ICoverPage>{
    render(){

        let myImg=null;
        if(this.props.profileImg){
            myImg = <img alt="Profile picture" src={this.props.profileImg} className="img"/>
        }

        return <div className="CoverPage">
                <div className="ProfileImg">{myImg}</div>
                <h1 className="title">{this.props.title}</h1>
                <h4 className="subtitle">{this.props.subtitle}</h4>
                <div className="description">{this.props.description}</div>
            </div>
    }
}