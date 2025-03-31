import React, { useState, useEffect } from "react";
import * as S from "./styled";

interface RotatingIconProps {
    src: string;
    alt: string;
}

const RotatingIcon: React.FC<RotatingIconProps> = ({ src, alt }) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prevRotation) => prevRotation + 2);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <S.DivIconReactjs>
            <img 
                style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.1s ease-in-out" }} 
                src={src} 
                alt={alt} 
                draggable="false" 
            />
        </S.DivIconReactjs>
    );
};

export default RotatingIcon;
