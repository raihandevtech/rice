import React, { useEffect, useRef } from "react";

 const useIsMobile = () : boolean =>  {
    const screenSize: React.MutableRefObject<number | any > = useRef();

    useEffect(() => {
        window.addEventListener("resize", () => {
            screenSize.current = window.innerWidth;
        });
        return () => {
            window.removeEventListener("resize", () => {
                screenSize.current = window.innerWidth;
            })
        }
    }, []);
    
    return screenSize.current <= 768;
}

export default useIsMobile;