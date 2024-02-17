import React from "react";
import "./About.css";
import {data} from "../../utils/aboutData";
const About = () => {
    console.log(data);
    return (
        <section className="section aboutSection">
            <h2 className="heading">Why Hikings?</h2>
            <div className="hikingDiv">
               
               {
                data.map((item ,index)=>{
                 return <div className="hiking" key={index}>
                    <img src={item.image}></img>
                    <h2>{item.heading}</h2>
                    <p>{item.para}</p>
                </div>
                })
               };
            </div>
            <div className="image">
                <div>
                    <h2>Wonderful House <br></br> experience in there!</h2>
                    <p>The adventure subranking is based on an equality  <br></br>weighted averageof scores from five country.</p>
                </div>

            </div>
        </section>
    )
}
export default About;