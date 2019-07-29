import React from "react";
import { IModelBase } from "../../domain/components/models/IModelBase";
import { Work } from "../components/Work";
import { Header } from "../../domain/components/basics/header"

interface IPortfolio extends IModelBase{
    header:string,

}

export class Portfolio extends React.Component<IPortfolio>{
    render(){

        let works=[
            {id:1,title:"Work1",description:"lorem ipsum 1"},
            {id:2,title:"Work2",description:"lorem ipsum 2"},
            {id:3,title:"Work3",description:"lorem ipsum 3"},
        ]

        return <div className="Portfolio">
            <Header className="header">{this.props.header}</Header>

            {
                works.map(w=>{
                        return <Work key={w.id} className="workCard" 
                                     title={w.title}
                                     description={w.description}/>
                    })
            }
        </div>
    }
}