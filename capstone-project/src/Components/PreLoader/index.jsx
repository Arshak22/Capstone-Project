import React from "react";
import ReactLoading from 'react-loading';


export default function PreLoader() {  
    return (
      <div className="preLoader">
        <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
      </div>
    );
}