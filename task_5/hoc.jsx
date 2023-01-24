import React, { useState } from "react";
export const withBlock = () => {
    const WrappedComponent = ({imgSrc, imgAlt, mouseEnterCallbak, content, userData}) => {
        const [isActive, setActive] = useState(false);

        const mouseEnterHandler = () => {
            setActive(true);
            mouseEnterCallbak();
        };
        return (
            <div
                onMouseEnter={mouseEnterHandler}
                className={isActive ? "active" : ""}
            >
                {imgSrc && <img src={imgSrc} alt={imgAlt} />}
                {content && <p>{content}</p>}
                {userData && (
                    <address>
                        country: {userData.country}, street: {userData.street}
                    </address>
                )}
            </div>
        );
    };
    return WrappedComponent;
};
