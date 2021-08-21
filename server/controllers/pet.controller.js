const Pet = require('../models/pet.model');

module.exports.createPet = (req, res) => {
    const { name, type, description, skill1, skill2, skill3} = req.body;
    Pet.create({
        name,
        type,
        description,
        skill1,
        skill2,
        skill3
    })
    .then((pet) => res.json(pet))
    .catch((err) => res.json(err));
}
module.exports.getAllPets = (req, res) => {
    Pet.find({}).sort("type").exec()
        .then((allPets) => res.json(allPets))
        .catch((err) => res.json(err))
}
module.exports.getOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
        .then((onePet) => res.json(onePet))
        .catch((err) => res.json(err))
}
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true, new:true})
        .then((updatedPet) => res.json(updatedPet))
        .catch((err) => res.json(err))
}
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
        .then((deletedPet) => res.json(deletedPet))
        .catch((err) => res.json(err))
}
module.exports.likePet = (req, res) => {
    Pet.updateOne(
        {_id: req.params.id},
        {$inc: {likes:1}}
    )
        .then(() => res.json({message:"Likes increased"}))
        .catch(err => res.json(err))
}