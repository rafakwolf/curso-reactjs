import React from "react";
import { childrenWithProps, clone } from "../utils/reactUtil";

// propagando propiedades do componente pai para os filhos

export default props => (
    <div>
        <h2>Família</h2>

        { childrenWithProps(props.children, props) }
    </div>
)