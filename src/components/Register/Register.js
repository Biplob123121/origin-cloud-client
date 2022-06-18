import React from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Register = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate = useNavigate();
    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        const url = `https://sleepy-wildwood-18876.herokuapp.com/user`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    navigate('/')
                }
            })
    }
    return (
        <section>
            <div className='conteainer  w-50 mx-auto pt-5' style={{ height: '100vh' }}>
                <div className="card shadow p-3 mb-5 bg-body rounded border-0">
                    <div className="card-body">
                        <h3 className="card-title text-center">Please Register</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Your Name" name='name' 
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })} />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Your Email" name='email'
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
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Your Password" name='password'
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
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="phone" placeholder="Phone Number" name='phone' 
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is required'
                                    }
                                })}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="address" placeholder="Your Address" name='address' 
                                {...register("address", {
                                    required: {
                                        value: true,
                                        message: 'Address is required'
                                    }
                                })}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="country" placeholder="Your Country" name='country' 
                                {...register("country", {
                                    required: {
                                        value: true,
                                        message: 'Country is required'
                                    }
                                })}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="company" placeholder="Your Company" name='company' 
                                {...register("company", {
                                    required: {
                                        value: true,
                                        message: 'Company Name is required'
                                    }
                                })}/>
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="experience" placeholder="Years of Experience" name='experience' 
                                {...register("experience", {
                                    required: {
                                        value: true,
                                        message: 'Exprience is required'
                                    }
                                })}/>
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="form-control btn btn-info" id="exampleFormControlInput1" value='Register' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;