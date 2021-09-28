const mongoose = require("mongoose")
const { Schema } = mongoose

// Creando el objeto molde
const numberSchema = new Schema(
    {
        number: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//Exportando modulo 🔸
module.exports = mongoose.model("Number", numberSchema)