import {useState} from "react";

const useToggle = (init:boolean) => {
    const [value, setValue] = useState(init);
    const toggleValue =() => {
        setValue(value =>
                 !value);
        return value;
    }
    return [value, toggleValue];
}
export  default useToggle;