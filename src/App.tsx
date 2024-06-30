import React, {FC} from 'react';
import './App.css';
import {Users} from "./components/users-component/Users";

const App: FC = () => {
    return (
        <div className="App">
            <h2>Users</h2>
            <Users/>
        </div>
    );
}
export default App;
