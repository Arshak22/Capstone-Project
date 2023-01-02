import React from "react";
import Lottie from 'react-lottie';
import * as MovieLoader1 from "../../assets/lotties/Movie1.json";
import * as MovieLoader2 from "../../assets/lotties/Movie2.json";

export default function PreLoader() {  

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: MovieLoader2,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };
    
    return (
      <div className="preLoader">
        <div>
        <Lottie options={defaultOptions}
              height={400}
              width={400}
        />
        </div>
      </div>
    );
}