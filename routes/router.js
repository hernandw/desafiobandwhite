import express from 'express'
import Jimp from 'jimp'
import { v4 as uuidv4 } from "uuid";
const router = express.Router()
import path from 'path'
const __dirname = import.meta.dirname


router.get('/', (req, res) => {
    
    res.sendFile(path.join(__dirname, '../views/index.html'))
})

router.get('/cargar', async(req, res) => {
    const nombreImagen = `img${uuidv4().slice(0, 6)}.jpg`
    const { img } = req.query
    const imgJimp = await Jimp.read(img);
    await imgJimp
      .resize(350, Jimp.AUTO)
      .grayscale()
        .writeAsync(`assets/img/${nombreImagen}`);
    res.sendFile(path.join(__dirname, `../assets/img/${nombreImagen}`))


})

export default router