import express from 'express'
import router from './routes/router.js'
const app = express()
const PORT = process.env.PORT || 3007

//Middleware
app.use(express.static('assets'))
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})