import React from "react";
import "./Footer.css";
import {data} from "../../utils/footerData";
import { SocialIcon } from "react-social-icons";
import { SiYourtraveldottv } from "react-icons/si";

const Footer = () => {
    return (
        <section className="section">
            <div className="footerDiv">
            {
                    data.map((item,key)=>{
                        return  <div className="box" key={key}>
                    <h2>{item.heading}</h2>
                    <div>{item.div1}</div>
                    <div>{item.div2}</div>
                    <div>{item.div3}</div>
                    <div>{item.div4}</div>
                </div>
                    })
                }
                <div className="box">
                    <div className="dot">
                        <h2>Dot</h2>
                        <SiYourtraveldottv style={{fontSize:"25px",color:"rgb(139, 92, 214)"}} />
                    </div>
                    <div className="social-icons">
                        <SocialIcon className="icon" url="https://twitter.com" />
                        <SocialIcon className="icon" url="https://facebook.com" />
                        <SocialIcon className="icon" url="https://linkedin.com" />
                        <SocialIcon className="icon" url="https://instagram.com" />
                    </div>
                </div>
              
            </div>

        </section>
    )
}
export default Footer;