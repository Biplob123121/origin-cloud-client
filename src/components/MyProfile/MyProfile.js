import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Header from '../Header/Header';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [profile, setProfile] = useState([]);

    useEffect( () => {
        const url = `https://sleepy-wildwood-18876.herokuapp.com/user/${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProfile(data[0]))
    }, [email]);
    return (
        <section className='container' style={{height : '100vh'}}>
            <Header />
            <h2 className='text-center'>My Profile</h2>
            <h3>Name : {profile?.name}</h3>
            <h5>Email : {profile?.email}</h5>
            <h5>Phone : {profile?.phone}</h5>
            <h5>Address : {profile?.address}</h5>
            <h5>Country : {profile?.country}</h5>
            <h5>Company : {profile?.company}</h5>
            <h5>Experience : {profile?.experience} years</h5>
        </section>
    );
};

export default MyProfile;