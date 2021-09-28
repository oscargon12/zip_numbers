const Number = require("../models/Numbers")
const numberController = {}

//Crear numero
numberController.createNumber = async(req, res) => {
    try {
        const {number} = req.body
        const newNumber = new Number({number})

        await newNumber.save()
        res.status(201).json({message: "Numero creado", newNumber})

    } catch (error) {
        console.log(error)
        res.status(400).json({message: "error al crear el numero", error})
    }
}

//Exportando modulo 🔸
module.exports = numberController