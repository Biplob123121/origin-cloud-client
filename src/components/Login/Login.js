import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const navigate = useNavigate();
    let signInError;
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        
    }
    if (error) {
        signInError = <p className='text-red-500'>{error?.message}</p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    if(user){
        navigate('profile');
    }

    const navigateToRegister = () => {
        navigate('/register');
    }
    return (
        <div className='mt-5'>
            <div className="card shadow p-3 mb-5 bg-body rounded border-0">
                <div className="card-body">
                    <h3 className="card-title text-center">Please Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="">
                            <input type="email" className="form-control" id="email" placeholder="Your Email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter a valid email'
                                    }
                                })} />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="">
                            <input type="password" className="form-control" id="password" placeholder="Pasword"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Password should be minimum 6 characters'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <div className="mb-3">
                        {signInError}
                            <input type="submit" className="form-control btn btn-info" id="exampleFormControlInput1" value='LOGIN' />
                        </div>
                    </form>

                    <div className='d-flex mt-5'>
                        <div style={{ height: '1px' }} className='w-50 mt-2'><hr /></div>
                        <p className='mt-2 px-2'>OR</p>
                        <div style={{ height: '1px' }} className='w-50 mt-2'><hr /></div>
                    </div>

                    <div className="mb-3">
                        <input onClick={navigateToRegister} type="submit" className="form-control btn btn-info" id="exampleFormControlInput1" value='Create An Account' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;