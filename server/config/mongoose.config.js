const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost/petdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then(() => {console.log("Succesfull connection to the database")})
    .catch((err) => {console.log("Something went wrong when connecting to the database", err)});
