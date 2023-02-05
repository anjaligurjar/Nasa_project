const express = require('express');


const app =express();
const App = require('./app.js')
const Router=require('./api/planet/planet.router.js')
const PORT=process.env.PORT || 3000
const http=require('http').createServer(App)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Router)

app.get('/launch',(req,res)=>{
    res.send()

})
http.listen(PORT,()=>{
    console.log(`server is connected, ${PORT}`)})
