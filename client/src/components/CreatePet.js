import React, { useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const CreatePet = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});


    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3,
        })
            .then(res => {
                if(res.data.errors) {
                    setErrors(res.data.errors);
                }
                else {
                    navigate("/")
                }
                console.log(res)
                
            })
            .catch(err => console.log(err))
    }
    return(
        <div className="container pt-2 bg-primary text-black">
            <h5 className="text-end"><Link to="/" style={{color: "lightblue", marginRight: "10px"}}>back to home</Link></h5>
            <div className="row justify-content-center mt-6">
                <div className="col-md-3 col-md-offset-3 column">
                    <h3><strong>Know a pet needing a home?</strong></h3>
                    <form onSubmit={onSubmitHandler}>
                        <div className="form-group mb-3 row">
                            <h5 className="text-danger"><strong>{errors.name ? errors.name.message: "" }</strong></h5>
                            <label><strong>Pet Name</strong></label>
                            <input 
                            type="text" 
                            name = "name" 
                            value = {name} 
                            onChange = {e => setName(e.target.value)} 
                            className="form-control" 
                            />
                        </div>

                        <div className="form-group mb-3 row">
                            <h5 className="text-danger">{errors.type ? errors.type.message: "" }</h5>
                            <label><strong>Pet Type</strong></label>
                            <input 
                            type="text" 
                            name = "type" 
                            value = { type } 
                            onChange = {e => setType(e.target.value)} 
                            className="form-control" 
                            />
                        </div>

                        <div className="form-group mb-3 row">
                            <h5 className="text-danger">{errors.description ? errors.description.message: "" }</h5>
                            <label><strong> Pet Description</strong></label>
                            <input 
                            type="text" 
                            name = "description" 
                            value = { description } 
                            onChange = {e => setDescription(e.target.value)} 
                            className="form-control" 
                            />
                        </div>
                        <h3><strong>Skills (optional):</strong></h3>
                        <div className="form-group mb-3 row">
                            <label><strong>Skill 1</strong></label>
                            <input 
                            type="text"  
                            name = "skill1" 
                            value = { skill1 } 
                            onChange = {e => setSkill1(e.target.value)} 
                            className="form-control" 
                            />
                        </div>

                        <div className="form-group mb-3 row">
                            <label><strong>Skill 2</strong></label>
                            <input 
                            type="text" 
                            name = "skill2" 
                            value = { skill2 } 
                            onChange = {e => setSkill2(e.target.value)} 
                            className="form-control" 
                            />
                        </div>

                        <div className="form-group mb-3 row">
                            <label><strong>Skill 3</strong></label>
                            <input 
                            type="text" 
                            name = "skill3" 
                            value = { skill3 } 
                            onChange = {e => setSkill3(e.target.value)} 
                            className="form-control" 
                            />
                        </div>
                        <button type="submit" className="btn btn-dark" style={{margin: "0px 10px 20px 10px"}}>Add Pet</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePet;