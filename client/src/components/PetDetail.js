import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const PetDetail = (props) => {
    const { id } = props;
    const [pet, setPet] = useState({});
    const [likes, setLikes] = useState(0);

    const getPet = () => {
        axios.get("http://localhost:8000/api/pets/" + id)
            .then((res) => {
                setPet(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPet();
    }, [ id ])

    const adoptPet = (petId) => {
        axios.delete("http://localhost:8000/api/pets/" + petId)
            .then(res => {
                console.log("pet adopted");
                navigate("/")
            })
            .catch((err) => console.log(err))
    }

    const likePet = () => {
        axios.put("http://localhost:8000/api/like/" + id, {
            likes
        })
            .then(res => {             
                console.log(res);
                getPet();
            })
            .catch(err => console.log(err))
            document.getElementById('button').setAttribute("disabled", "disabled");
    }
    return (
    <div className="container-sm pt-3 bg-primary text-dark">
        <h5 className="text-end"><Link to="/" style={{color: "lightblue", marginRight: "10px"}}>back to home</Link></h5>
        <h2><strong>Details about: { pet.name } </strong></h2>
        <button style={{marginRight: "10px"}} onClick={ (e) => {adoptPet(pet._id)}} className="btn btn-danger float-end">Adopt {pet.name}</button>
        <br/>
        <br/>
        <div style={{border: "4px solid black",width: "auto",padding: "20px", height: "310px"}}>
            <h5><strong>Pet type:</strong><span style={{marginLeft: "56px"}}>{ pet.type }</span></h5>
            <h5><strong>Description:</strong><span style={{marginLeft: "19px"}}> { pet.description }</span></h5>
            <h5><strong>Skills:</strong> 
                {pet.skill1 ? <p style={{marginLeft: "140px"}}>{pet.skill1}</p> : "" }
                {pet.skill2 ? <p style={{marginLeft: "140px"}}>{pet.skill2}</p> : "" }
                {pet.skill3 ? <p style={{marginLeft: "140px"}}>{pet.skill3}</p> : "" }
            </h5>
            <button onClick={ (e) => {likePet(pet._id)}} id="button" disabled={ likes } className="btn btn-success" style={{marginBottom: "10px"}}>Like { pet.name }</button>
            <p><strong> {pet.likes} like(s)</strong></p>
        </div>
        <br/>
    </div>
    )
}
export default PetDetail;
