import React from 'react';
import { Router } from '@reach/router';
import CreatePet from './components/CreatePet';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import EditPet from './components/EditPet';

function App() {
  return (
    <div className="App">
      <>
        <div className="container-sm pt-3">
          <h1><strong>Pet Shelter</strong></h1>
        </div>
        <Router>
          <PetList path="/" />
          <CreatePet path="/pets/new" />
          <PetDetail path="/pets/:id" />
          <EditPet path="/pets/:id/edit" />
        </Router>
      </>
    </div>
  );
}

export default App;
