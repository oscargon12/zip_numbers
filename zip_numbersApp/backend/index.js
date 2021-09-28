const express = require('express');
const cors = require('cors')
const morgan = require("morgan")

const app = express()

const db = require('./database')
const numsRoutes = require('./routes/number.routes')

const port = (process.env.PORT || 5000) // Puerto (Trabaje en otro oooo el 6000)

//Midlewares
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

//routes
app.use("/numbers", numsRoutes)
//app.use('/menu', require('./routes/menu.routes'))

app.listen(port, () => console.log("App conectada correctamente en el puerto", port))