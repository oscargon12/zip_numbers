const mongoose = require('mongoose');

const atlas = "mongodb+srv://oscargon12:dataPass21@cluster0.shuqb.mongodb.net/numbersData?retryWrites=true&w=majority"

mongoose.connect(atlas)
    .then(db => console.log('Hola, conectado a la DB ;)'))
    .catch(err => console.log(err))

module.exports = mongoose;