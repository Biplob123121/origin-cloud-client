import React from 'react';

const Login = () => {
    
    return (
        <div className='mt-5'>
            <div className="card shadow p-3 mb-5 bg-body rounded border-0">
                <div className="card-body">
                    <h3 className="card-title text-center">Please Login</h3>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email" />
                    </div>
                    <div className="mb-3">
                        <input type="pasword" className="form-control" id="exampleFormControlInput1" placeholder="Pasword" />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-info" id="exampleFormControlInput1" value='LOGIN' />
                    </div>

                    <div className='d-flex mt-5'>
                        <div style={{ height: '1px' }} className='w-50 mt-2'><hr /></div>
                        <p className='mt-2 px-2'>OR</p>
                        <div style={{ height: '1px' }} className='w-50 mt-2'><hr /></div>
                    </div>

                    <div className="mb-3">
                        <input type="submit" className="form-control btn btn-info" id="exampleFormControlInput1" value='Create An Account' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;