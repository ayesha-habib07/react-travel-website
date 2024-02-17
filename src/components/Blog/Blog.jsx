import React from "react";
import "./Blog.css";
import {data} from "../../utils/blogData";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
    return (
        <section className="section ">
            <div className="aboutBlog">
                <h2>Our best blog?</h2>
                <p>An insight to the incredible experience in the world.</p>
            </div>
            <div className="blogDiv">
             {
                data.map((item,key)=>{
                    return    <div className="blog" key={key}>
                    <div className="blogImg">
                        <img src={item.image}></img>
                    </div>
                    <div className="blogDetail">
                        <h2 style={{color:"grey"}}>{item.heading}</h2>
                        <p style={{color:"grey"}}>{item.para}</p>
                       <div className="rightArrow">
                       <span>{item.read}</span>  
                        <span>
                        <FaArrowRight className="right"/>
                        </span>
                       </div>
                    </div>
                </div>
                })
             }
            </div>
        </section>
    )
}
export default Blog;