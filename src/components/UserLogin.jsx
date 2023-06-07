import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const UserLogin = (props) => {

var navigate = useNavigate();
    console.log(props);
    const {register,handleSubmit} = useForm();
    const submit = async(data)=>{
        console.log(data);
        //api
        props.loginHandler(data)
        navigate('/dashboard')

    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" {...register("email")}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" {...register("password")}/>
                
            </div>
            <div>
                <input type="submit" value="Login"/>
            </div>
        </form>

    </div>
  )
}

