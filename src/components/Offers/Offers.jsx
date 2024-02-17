import React from "react";
import "./Offers.css";
import {data} from "../../utils/offerData";
import { IoBed } from "react-icons/io5";
import { FaBath } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa";
import { FaShuttleVan } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
const Offers = () => {
    // console.log(data);
    return (
        <section className="section offerSection">
            <div className="offer">
                <h2>Special Offers</h2>
                <p>From historical cities to natural specteculars , come see the best of the world!</p>
            </div>
            <div className="houseDiv">
            {
                data.map((item,key)=>{
                    return <div className="house" key={key}>
                    <img src={item.image}></img>
                    <div className="rentPrice">
                        <div style={{ fontWeight:600 }}>${item.price}</div>
                        <div style={{ color: 'rgb(139, 92, 214)', fontWeight:600 ,backgroundColor: ' rgb(223, 221, 221)', padding: '4px', borderRadius:'5px'}}>{item.rent}</div>
                    </div>
                    <div className="aboutHouse">
                        <div className="icon">{item.BedRoom} <IoBed  /></div>
                        <div className="icon">{item.Bath} <FaBath /></div>
                        <div className="icon">{item.Wifi} <FaWifi /></div>
                        <div className="icon">{item.Shuttle} <FaShuttleVan /></div>
                    </div>
                    <div className="address">  <MdLocationPin /> {item.address}</div>
                    <div className="detail">{item.detail} <FaArrowRightLong /></div>
                </div>
                })
            }
            </div>
        </section>
    )
}
export default Offers;