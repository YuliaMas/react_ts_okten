import React, {FC} from 'react';
import './App.css';
import UsersComponent from './components/users/UsersComponent';

const App: FC = () => {
    return (
        <div className="App">
            <h1 className={"header"}>Users</h1>
            <UsersComponent/>
        </div>
    );
}

export default App;
