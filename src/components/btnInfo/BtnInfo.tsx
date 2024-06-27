import React, {FC} from "react";

type IProps = {age: number, children: React.ReactNode};

const BtnInfo: FC<IProps> = ({age,children}) => {
    // const clickHandler = (msg:string) => {
    const clickHandler = () => {
        console.log(children);
        console.log(age);
        alert(`child${age}`);
       // let child = document.getElementById(`child${age}`) ;   //don`t use
       // child.classList.toggle('blockHide');
       // child.innerText = info;
       // child.innerText = msg;
    }
    return (
        // <button onClick={() => {clickHandler(info)}}>Info </button>
        <button onClick={clickHandler}>Info</button>
    )
}

export default BtnInfo;