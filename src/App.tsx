import React, {FC, useEffect, useState} from 'react';
import './App.css';
import Block from "./component/Block";
import useToggle from "./hooks/useToggle";
import usePrevious from "./hooks/usePrevious";
import {getUsers} from "./services/user.api.service";
import {IUser} from "./models/IUsers";

const App: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const [value, toggleValue] = useToggle(state);
    const [styleClass, setStyleClass] = useState<string>("blockHidden");
    const click = () => {
        setState(toggleValue);
        value ? setStyleClass("blockHidden") : setStyleClass("blockVisible");
    }
    // -------------------------------

    const array: string[] = ['Mila' , 'Mia', 'Sia', 'Lilia', 'Sofia'];
    const [count, setCount] = useState<number>(0)
    const [name, setName] = useState<string>(array[0]);
    const [users, setUsers] = useState<IUser[]>([]);
    const[currentValue,previousValue] = usePrevious(count);

    useEffect(() => {
        getUsers().then(value =>{
            value.data.users.map(user => user.firstName);
            setUsers(value.data.users);
        });

    }, [users]);

    return (
        <div className="App">
            <div>
                <div>
                    {previousValue} - {currentValue}
                </div>
                <h2>{name}</h2>
                <button onClick={() => setCount(currentCount => currentCount + 1)}>
                    Increment
                </button>
                <button onClick={() => setCount(currentCount => {
                 return  currentCount< 1 ? 0 :( currentCount - 1)
                })}>
                    Decrement
                </button>
                {/*<button onClick={() => setName(array[currentValue]) }>Change Name</button>*/}
                <button onClick={() => setName(users[currentValue].firstName)}>Change Name</button>
            </div>

            <h3>Click me, please...</h3>
            <button onClick={() => {
                click()
            }}>Click
            </button>
            <h4>{value.toString()}</h4>
            <Block styleClass={styleClass}>useState</Block>
        </div>
    );
}

export default App;
