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

 // description="I'm an UX and UI Designer and Front-End Developer based in Madrid. I studied Fine Arts degree and Graphic and Web Design. I'm interested in the synthesis of Design and Development, also in illustration, video and photography. "/>