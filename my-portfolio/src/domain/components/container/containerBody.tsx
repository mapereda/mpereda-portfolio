import React from "react";
import { IModelBase } from "../models/IModelBase";

export class ContainerBody extends React.Component<IModelBase>{
    render(){
        return <div className="ContainerBody">
            {this.props.children}
        </div>
    }
}