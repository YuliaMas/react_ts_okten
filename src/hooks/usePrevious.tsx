import  {useRef} from "react";

const usePrevious = (value:  number) => {
    const currentValue = useRef<number | any>(value);
    const prevValue = useRef<number>();
    if (currentValue.current !== value) {
        prevValue.current = currentValue.current;
        currentValue.current = value;
    }
    return [currentValue.current , prevValue.current];
}

export default usePrevious;