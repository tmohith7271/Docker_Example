var express = require('express')
var app = express()
var PORT = 4567

// app.get('/', (req, res)=>{
//     res.send("Hello")
// })

app.use(express.static('views'))

app.listen(PORT, ()=>{
    console.log(`server running at PORT ${PORT}`)
})