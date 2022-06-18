import React, { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Header from '../Header';

const Project = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [projects, setProjects] = useState([]);

    useEffect( () => {
        const url = `http://localhost:5000/project/${email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [email]);
    let noProjects;
    if(projects.length ===0){
        noProjects = <h4 className='text-center pt-5'> You have no project. Please add your Project.</h4>
    }
    return (
        <section className='container' style={{height : '100vh'}}>
            <Header />
            <h2 className='text-center'>My projects {projects.length}</h2>
            {noProjects}
            {
                projects.map(p =><div
                key={p._id}>
                    <h3>Project Name : {p.pName}</h3>
                    <h5>Project Name : {p.category}</h5>
                    <p>Project Description : {p.description}</p>
                    <h5>Live Site : {p.sLink}</h5>
                </div>)
            }
        </section>
    );
};

export default Project;