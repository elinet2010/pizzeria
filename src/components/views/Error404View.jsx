//Los valores que deberá tener la propiedad “data-testid” en los elementos HTML son:
//h1 de título="error404__title"

import React from "react";

function Error404View() {
    return (
        <div>
            <h1 data-testid="error404__title">
                <p>Error 404</p>
                <p>
                    no encontramos esta página.
                </p>
            </ h1>
        </div>
    );
}

export default Error404View;
