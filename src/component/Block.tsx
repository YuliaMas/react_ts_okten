import "./block.css";
import React, {FC} from "react";
import {IProps} from "../models/IProps";

type IBlock = IProps & { children: React.ReactNode }
const Block: FC<IBlock> = ({styleClass, children}) => {
    console.log(styleClass);
    return (
        <div className={styleClass}>
            <h2>{children}</h2>
            <p>useState is probably one you are going to use a lot. Instead of using this.state from class components,
                you can access the current state of a component instance, and initialise it, with one single function
                call. Our desire for strong typing is that values we initially set, get per component update, and set
                through events, always have the same type.</p>
        </div>
    )
}

export default Block;