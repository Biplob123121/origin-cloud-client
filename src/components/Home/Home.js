import React from 'react';
import Login from '../Login/Login';

const Home = () => {
    return (
        <section className='container ' style={{ height: '100vh' }}>
            <div>
                <div className='row pt-5'>
                    <div className='d-flex justify-content-center align-items-center col-12 col-lg-6 col-sm-12'>
                        <div>
                            <h1>Welcome to <strong>Origin Cloud Technologies</strong> </h1>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 col-sm-12'>
                        <Login />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Home;