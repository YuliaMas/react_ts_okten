import {useForm} from "react-hook-form";
import "./formComponent.css";

type IFormType = {
    name: string,
    username: string,
    password: string,
    email: string,
    age: string
}
const FormComponent = () => {
    let {register, handleSubmit} = useForm<IFormType>();
    let formSubmit = (data: IFormType) => {
        console.log(data);
    }
    return(
        <div>
            <h1>Registration Form</h1>
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
                <button> Login</button>
            </form>
        </div>
    )
}

export default FormComponent;