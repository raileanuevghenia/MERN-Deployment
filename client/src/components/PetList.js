import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

const PetList = (props) => {
    const [pets, setPets] = useState([]);

    useEffect (() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {setPets(res.data)})
            .catch(err => {console.log(err)})
    }, []);
    return(
        <div className="container pt-3">
            <h5 className="text-end"><Link to="/pets/new">Add a pet to the shelter</Link></h5>
            <h3>These pets are looking for a good home</h3>
            <table className="table table-primary table-striped">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    {
                        pets.map((pet,index) => (
                            <tr key={ index }>
                                <td>{pet.name}</td>
                                <td>{pet.type}</td>
                                <td>
                                    <Link to={"/pets/" + pet._id}>details</Link>  |  <Link to={"/pets/" + pet._id + "/edit"}>edit</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
 export default PetList;