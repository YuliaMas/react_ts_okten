import {useForm} from "react-hook-form";
import "./UserFormComponent.css";
import {useState} from "react";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../../validators/user.validator";
import {IUserFormType} from "../../interfaces/IForm";

const UserFormComponent = () => {
    let {
        formState: {errors, isValid},
        register,
        handleSubmit,
        reset
    } = useForm<IUserFormType>({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    let [posts, setPosts] = useState<IUserFormType>();
    // useEffect()
    let formSubmit = (data: IUserFormType) => {
        console.log(data);
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                username: data.username,
                password: data.password,
                name: data.name,
                age: data.age,
                email: data.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setPosts(json);
            });

        reset();
    };

    return (
        <div>
            <h1>Registration Form</h1>

                {errors.username && <div>Username error: {errors.username?.message}</div>}
                {errors.name && <div>Name error: {errors.name?.message}</div>}
                {errors.password && <div>Password error: {errors.password?.message}</div>}
                {errors.email && <div>Email error: {errors.email?.message}</div>}
                {errors.age && <div>Age error: {errors.age?.message}</div>}

            <form onSubmit={handleSubmit(formSubmit)}>
                <label htmlFor="username"> Username:
                    <input type="text" placeholder="Nickname..." {...register('username')}/>
                </label>
                <label htmlFor="password"> Password:
                    <input type="text" placeholder="Password..." {...register('password')}/>
                </label>
                <label htmlFor="email"> Email:
                    <input type="text" placeholder="Email..." {...register('email')}/>
                </label>
                <label htmlFor="name"> Firstname:
                    <input type="text" placeholder="Name..." {...register('name')}/>
                </label>
                <label htmlFor="age"> Your age:
                    <input type="number" placeholder="Age..." {...register('age')}/>
                </label>
                <button disabled={!isValid}> Login</button>
            </form>
            <div>
                <h1>{posts?.age}</h1>
                <p> {posts?.email}</p>
                <p> {posts?.name}</p>
                <p> {posts?.username}</p>
                <p> {posts?.password}</p>
                <p> {posts?.id}</p>
             </div>
         </div>
    )
}

export default UserFormComponent;