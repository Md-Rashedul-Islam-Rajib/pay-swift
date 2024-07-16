import React from 'react';
import { useForm } from "react-hook-form";
const Login = () => {
    
    const CashIn = () => {
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();

        const onSubmit = (data) => {
            console.log(data);

    return (
        <div>
            
        </div>
    );
};

export default Login;