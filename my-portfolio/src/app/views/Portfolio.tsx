import React from "react";
import { IModelBase } from "../../domain/components/models/IModelBase";
import { Work } from "../components/Work";

interface IPortfolio extends IModelBase{
    title:string
}

export class Portfolio extends React.Component<IPortfolio>{
    render(){
        return <div className="Portfolio">
            <h4>{this.props.title}</h4>
            <Work className="workCard" title="Work 1"/>
            <Work className="workCard" title="Work 2"/>
            <Work className="workCard" title="Work 3"/>
        </div>
    }
}