import {useState} from "react";

const UseToggle = (init:boolean) => {
    const [value, setValue] = useState(init);
    function toggleValue() {
        setValue(currentValue =>
                 !currentValue);
        return value;
    }
    return [value, toggleValue];
}
export  default UseToggle;