import React from "react"
import { Wrapper } from "./styles";

function Button ({ children, ...props }) {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    );
}

export default Button;