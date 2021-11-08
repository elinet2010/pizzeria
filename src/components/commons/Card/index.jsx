import React from "react"
import { Wrapper } from "./styles";

function Card({ text, children, ...props }) {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    );
}

export default Card;