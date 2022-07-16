const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "name": "ADMIN", "email": "admin@gmail.com", "password": "admin1" })
})

app.listen(5000, () => { console.log("server started on Port 5000") })