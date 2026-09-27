import express from "express"
import path from "path"

const app = express()
const PORT = 4000

const publicPath = path.join(__dirname, "../public")

app.use(express.static(publicPath))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})