import React, {FC} from 'react';
import './App.css';
import UserFormComponent from './components/userForm/UserFormComponent';
import AddPost from "./components/postForm/PostFormComponent";

const App: FC = () => {
    return (
        <div className="App">
            <UserFormComponent />
            <AddPost/>
        </div>
    );
}

export default App;
