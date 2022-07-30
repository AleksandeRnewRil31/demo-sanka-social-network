import React from "react";
import preloader from "../../../assets/images/load.gif"

let Preloader = (props) => {
    return <div style={{ backgroundColor: "white", width: "10px" }}>
        <img src={preloader} />
        </div>
}

export default Preloader;