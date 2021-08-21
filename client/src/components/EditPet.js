import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const EditPet = (props) => {
    const { id } = props;
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            })
            .catch((err) => console.log(err))
    }, [])
    
    const editPet = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pets/" + id + "/edit", {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res => {
            if(res.data.errors){
                setErrors(res.data.errors);
            }
            else{
                navigate("/")
            }
        })
        .catch((err) => console.log(err))
    }
    return (
        <div className="container-sm pt-3 bg-primary text-black">
            <h5 className="text-end"><Link to="/" style={{color: "lightblue", marginRight: "10px"}}>back to home</Link></h5>
            <h2><strong style={{color: "black"}}>Edit: {name} </strong></h2>
            <form onSubmit={editPet}>
                <div className="form-group mb-3 col-4">
                    <h5 className="text-danger">{errors.name ? errors.name.message: "" }</h5>
                    <label><strong>Pet Name</strong></label>
                    <input 
                    type="text" 
                    name = "name" 
                    value = {name} 
                    onChange = {e => setName(e.target.value)} 
                    className="form-control" 
                    />
                </div>

                <div className="form-group mb-3 col-4">
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

                <div className="form-group mb-3 col-4">
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
                <h3><strong> Skills (optional):</strong></h3>
                <div className="form-group mb-3 col-4">
                    <label><strong>Skill 1</strong></label>
                    <input 
                    type="text"  
                    name = "skill1" 
                    value = { skill1 } 
                    onChange = {e => setSkill1(e.target.value)} 
                    className="form-control" 
                    />
                </div>

                <div className="form-group mb-3 col-4">
                    <label><strong>Skill 2</strong></label>
                    <input 
                    type="text" 
                    name = "skill2" 
                    value = { skill2 } 
                    onChange = {e => setSkill2(e.target.value)} 
                    className="form-control" 
                    />
                </div>

                <div className="form-group mb-3 col-4">
                    <label><strong>Skill 3</strong></label>
                    <input 
                    type="text" 
                    name = "skill3" 
                    value = { skill3 } 
                    onChange = {e => setSkill3(e.target.value)} 
                    className="form-control" 
                    />
                </div>
                <input type="submit" value="Edit Pet" className="btn btn-dark" style={{marginBottom: "20px"}}/>
            </form>
        </div>
    )
}
export default EditPet;