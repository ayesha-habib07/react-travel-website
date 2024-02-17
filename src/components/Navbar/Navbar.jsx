import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { SiYourtraveldottv } from "react-icons/si";
import Button from "../Button";
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <section className="section">
            <div className="navbar">
                <div className="dots">
                    <h1> Dots</h1>
                    <SiYourtraveldottv style={{fontSize:"25px",color:"rgb(139, 92, 214)"}} />
                </div>
                <div className="Items">
                    <ul className={showMenu ? "listItems show" : "listItems"}>
                        <li><a href="#" >Home</a></li>
                        <li><a href="#" >Products</a></li>
                        <li><a href="#" >Resources</a></li>
                        <li><a href="#" >Contact</a></li>
                        <li><a href="#" >Blog</a></li>
                    </ul>
                    <div className="buttons">
                    <button className="login">Login</button>
                    <Button name="Sign Up"/>
                   
                    </div>
                    <div className="toggle" onClick={toggleMenu}>
                        <div className={showMenu ? "icon closeIcon" : "icon menuIcon"}>
                            {showMenu ? <BiMenuAltRight size={30} />:<RxCross2 size={30} /> }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Navbar;