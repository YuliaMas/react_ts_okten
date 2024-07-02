import React, {FC,useState} from 'react';
import './App.css';
import Block from "./component/Block";
import useToggle from "./hooks/useToggle";

const App: FC = () => {
    const [state, setState] = useState<boolean>(false);
    const [value, toggleValue] = useToggle(state);
    const [styleClass, setStyleClass] = useState<string>("blockHidden");
    const click = () => {
        setState(toggleValue);
        value ? setStyleClass("blockHidden") : setStyleClass("blockVisible");

    }

    return (
        <div className="App">
            <h3>Click me, please...</h3>
            <button onClick={() => {
                click()
            }}>Click
            </button>
            <div>{value.toString()}</div>
            <Block styleClass={styleClass}>useState</Block>
        </div>
    );
}

export default App;
