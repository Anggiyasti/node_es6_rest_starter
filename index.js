import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import router from './src/app/routes/index'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import db from './src/app/models'

import {} from 'dotenv/config'

let app = express()
const port = process.env.PORT || 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cookieParser())
app.use(compression())

app.use('/api', router)

app.listen(port, function () {
    db.sequelize.sync()
    console.log(`Server listening on port  ${port}!`)
})

export default app