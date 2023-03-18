import React, { useEffect } from "react";
import Lottie from 'react-lottie';
import * as MovieLoader from "../../assets/lotties/Movie2.json";

export default function PreLoader() {  
    useEffect(() => {
      window.scrollTo(0, 0);
      document.body.classList.add('hiddenScroll');
    }, [])

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: MovieLoader,
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