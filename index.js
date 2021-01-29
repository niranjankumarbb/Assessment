const express= require('express')
const path = require('path') 
const app = express()
const port = process.env.PORT || 3016

//setup db
const configuredb = require('./config/database')
configuredb()
  
//enable express to parse json data 
app.use(express.json()) 
 

//setup routes
 const routes = require('./config/routes')
  app.use('/',routes)
 
if(process.env.NODE_ENV== 'production'){
    app.use(express.static(path.join(__dirname,"client/build"))) 
   app.get("*",(req,res) => { 
   res.sendFile(path.join(__dirname + "/client/build/index.html")) 
}) 
}

app.listen(port,()=>{
    console.log('Listening on port', port)
})       