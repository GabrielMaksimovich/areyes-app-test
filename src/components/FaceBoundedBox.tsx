import React, {CSSProperties} from 'react';
import '../styles/components/_FaceBoundedBox.scss';

interface FaceBoundedBoxProps {
    color: string;
    size: string | number;
    borderLength: string | number;
    thickness?: number;
    borderRadius?: number;
    style?: CSSProperties;
}

const FaceBoundedBox: React.FC<FaceBoundedBoxProps> = ({
                                                           color,
                                                           size,
                                                           borderLength,
                                                           thickness = 2,
                                                           borderRadius = 0,
                                                           style
}) => (
    <div className="face-bounded-box" style={{height: size, width: size, ...style}}>
        <div className="face-bounded-box__border face-bounded-box__border--top-left" style={{
            height: borderLength,
            width: borderLength,
            borderTop: `${thickness}px solid ${color}`,
            borderLeft: `${thickness}px solid ${color}`,
            borderTopLeftRadius: borderRadius
        }}/>
        <div className="face-bounded-box__border face-bounded-box__border--top-right" style={{
            height: borderLength,
            width: borderLength,
            borderTop: `${thickness}px solid ${color}`,
            borderRight: `${thickness}px solid ${color}`,
            borderTopRightRadius: borderRadius
        }}/>
        <div className="face-bounded-box__border face-bounded-box__border--bottom-left" style={{
            height: borderLength,
            width: borderLength,
            borderBottom: `${thickness}px solid ${color}`,
            borderLeft: `${thickness}px solid ${color}`,
            borderBottomLeftRadius: borderRadius
        }}/>
        <div className="face-bounded-box__border face-bounded-box__border--bottom-right" style={{
            height: borderLength,
            width: borderLength,
            borderBottom: `${thickness}px solid ${color}`,
            borderRight: `${thickness}px solid ${color}`,
            borderBottomRightRadius: borderRadius
        }}/>
    </div>
);

export default FaceBoundedBox;
