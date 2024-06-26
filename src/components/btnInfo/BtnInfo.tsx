import React, {FC} from "react";

type IProps = {info : string} & {age: number};

const BtnInfo: FC<IProps> = ({info, age}) => {
    const clickHandler = (msg:string) => {
    // const clickHandler = () => {
        console.log(age);
        console.log(info);
       alert(`child${age}`);
       let child = document.getElementById(`child${age}`) ;
       console.log(child);
       console.log(info);
       // child.classList.toggle('blockHide');
       // child.innerText = info;
       child.innerText = msg;
    }
    return (
        <button onClick={ () => {clickHandler(info)}}>Info </button>
        // <button onClick={clickHandler}>Info</button>
    )
}

export default BtnInfo;