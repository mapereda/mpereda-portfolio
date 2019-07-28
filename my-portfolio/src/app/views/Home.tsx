import React from "react";
import { CoverPage } from "../components/coverPage";

export class Home extends React.Component{
    render(){
        return <div className="Home">
            <CoverPage 
              title="María Pereda" 
              subtitle="UI/UX Engineer" 
              profileImg={`${process.env.PUBLIC_URL}/img/ProfileImg.png`}/>
          
        </div>
    }
}