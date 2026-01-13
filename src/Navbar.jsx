
import { useState } from "react";
import shutUp from "./assets/shutup.png";
import grace from "./assets/grace.jpg";

function Navbar(){
    const [open, setOpen] = useState(false);

    return(
        <nav className="navbar" style={{backgroundImage: {grace}, backgroundSize: "cover", width: "100%", height: "300px", backgroundPosition: "center", backgroundRepeat: "no-repeat"

        }}>
            
        <ul className={open ? "nav-links active" : "nav-links"}>
            <li><a href = "#">Home</a></li>
            
            <li><a href = "#">About</a></li>
            
            <li><a href = "#">Services</a></li>
          
            <li><a href = "#">Contact</a></li>
        </ul>

        <div>
            <img src={shutUp} style={{width: "80px", height: "auto"}} alt="blue emoji" />
            <div className="burger" onClick={() => setOpen(!open)}>
            <div className={open ? "line line1" : "line"}></div>
            <div className={open ? "line line2" : "line"}></div>
            <div className={open ? "line line3" : "line"}></div>
        </div>
        </div>
        
        </nav>
        
    );
}

export default Navbar