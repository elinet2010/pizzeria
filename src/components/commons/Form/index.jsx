import React from "react"
import { Wrapper } from "./styles";

function FormWrapper ({ children, ...props }) {
    return (
        <Wrapper {...props}>
            {children}
        </Wrapper>
    );
}

export default FormWrapper;