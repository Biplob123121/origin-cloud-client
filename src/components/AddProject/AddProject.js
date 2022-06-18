import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Header from '../Header/Header';

const AddProject = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    

    const onSubmit = async data => {
        
        const email = user?.email;
        const project = Object.assign({email : email}, data);

        const url = `http://localhost:5000/project`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    alert('Project is Added');
                    navigate('/project')
                }
            })
    }
    return (
        <section className='container'>
            <Header></Header>
            <div className=' w-50 mx-auto pt-5' style={{ height: '100vh' }}>
                
                <div className="card shadow p-3 m-5 bg-body rounded border-0">
                    <div className="card-body">
                        <h3 className="card-title text-center">Add Your Project</h3>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Project Name" name='name'
                                    {...register("pName", {
                                        required: {
                                            value: true,
                                            message: 'Project Name is required'
                                        }
                                    })} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="caategory" placeholder="Project Category" name='category'
                                    {...register("category")} />
                            </div>
                            <div className="mb-3">
                                <textarea type="text" className="form-control" id="des" placeholder="Description" name='des'
                                    {...register("description")} />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="des" placeholder="Live Link" name='des'
                                    {...register("sLink")} />
                            </div>
                            <div className="mb-3">
                                <input type="submit" className="form-control btn btn-info" id="exampleFormControlInput1" value='ADD PROJECT' />
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProject;