import React from "react"
import { H2 } from "./styles";

function SubTitle({ children, ...props }) {
    return (
        <H2 {...props}>
            {children}
        </H2>
    );
}

export default SubTitle;