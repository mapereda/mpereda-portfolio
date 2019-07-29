import React from "react";
import { IModelBase } from "../../domain/components/models/IModelBase";
import { Work } from "../components/Work";

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
            <h4>{this.props.header}</h4>

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