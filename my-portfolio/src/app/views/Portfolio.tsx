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
            {id:1,title:"Psiconvence desktop",description:"Responsive website developed with WordPress (Divi Theme) for desktop",img:`${process.env.PUBLIC_URL}/img/PsiconvenceDesktop.png`,onClick:()=>window.location.href = "https://psiconvence.com/"},
            {id:2,title:"Psiconvence mobile",description:"Responsive website developed with WordPress (Divi Theme) for mobile",img:`${process.env.PUBLIC_URL}/img/PsiconvenceMovil.png`,onClick:()=>window.location.href = "https://psiconvence.com/"},
            {id:3,title:"Prototyping for Psiconvence",description:"Prototype designed with Adobe XD for Psiconvence",img:`${process.env.PUBLIC_URL}/img/PsiconvencePrototype.png`,onClick:()=>window.location.href = "https://xd.adobe.com/view/31c43e8a-a2a5-4f77-603a-977e647d4dbc-47f5/?fullscreen"},
        ]

        return <div className="Portfolio">
                <Header className="header">{this.props.header}</Header>
                    {
                        works.map(w=>{
                                return <Work key={w.id}
                                            title={w.title}
                                            description={w.description}
                                            img={w.img} onClick={w.onClick}/>
                            })
                    }
            </div>
    }
}