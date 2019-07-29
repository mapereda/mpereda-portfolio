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
            {id:1,title:"Psiconvence desktop",description:"Responsive website developed with WordPress (Divi Theme) for desktop",img:`${process.env.PUBLIC_URL}/img/PsiconvenceDesktop.png`},
            {id:2,title:"Psiconvence mobile",description:"Responsive website developed with WordPress (Divi Theme) for mobile",img:`${process.env.PUBLIC_URL}/img/PsiconvenceMovil.png`},
            {id:3,title:"Psiconvence mobile",description:"Psiconvence prototype designed with Adobe XD",img:`${process.env.PUBLIC_URL}/img/PsiconvencePrototype.png`},
        ]

        return <div className="Portfolio">
            <Header className="header">{this.props.header}</Header>

            {
                works.map(w=>{
                        return <Work key={w.id} className="workCard" 
                                     title={w.title}
                                     description={w.description}
                                     img={w.img}/>
                    })
            }
        </div>
    }
}