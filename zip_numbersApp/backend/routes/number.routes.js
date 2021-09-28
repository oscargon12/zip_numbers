const {Router} = require('express')
const numsControllers = require('../controllers/nums.controllers')
const router = Router(); //Método de express

router.post("/createNum", numsControllers.createNumber)

module.exports = router //Exportando las rutas 🔸