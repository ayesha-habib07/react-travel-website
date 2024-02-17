import React from "react";
import "./Home.css";
import Button from "../Button";
const Home = () => {
    return (
        <section className="section homeSection">

            <div className="homeMainDiv">
                <h1>Plan Your Trip With Travel <br></br>Dot</h1>
                <p>Travel to your favourite city with respectful of the <br></br> enjoyment!</p>
                <button className="explore">Explore Now</button>
            </div>
            <div className="AboutDestination">
                
                    <div>
                        <h2>Location</h2>
                        <div className="box">Dream Destination</div>
                    </div>
                    <div>
                        <h2>Distance</h2>
                       <div className="box">11/Meters</div>
                    </div>
                    <div>
                        <h2>Price Range</h2>
                        <div className="box">$140-500$</div>
                    </div>
                    <div>
                        <div className="box" id="search">Search</div>
                    </div>
                </div>
        

        </section>
    );
}
export default Home;