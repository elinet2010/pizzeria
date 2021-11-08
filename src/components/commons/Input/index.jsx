import React from "react"
import { Wrapper } from "./styles";

function Input ({ ...props }) {
    return (
        <Wrapper {...props} />
    );
}

export default Input;