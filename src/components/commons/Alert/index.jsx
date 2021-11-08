import React from "react"
import { Span } from "./styles";

function Alert({ text, ...props }) {
    return (
        <Span {...props}>
            {text}
        </Span>
    );
}

export default Alert;