const PetController = require('../controllers/pet.controller')

module.exports = function(app){
    app.get('/api/pets', PetController.getAllPets);
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets/:id', PetController.getOnePet);
    app.put('/api/pets/:id/edit', PetController.updatePet);
    app.delete('/api/pets/:id',PetController.deletePet);
    app.put('/api/like/:id',PetController.likePet);
}