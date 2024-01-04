const express=require("express")
const path=require("path")
const app=express()
const exphb=require("express-handlebars")
const { request } = require("http")


app.engine("hbs",exphb.engine({
  defaultLayout:"main",
  extname:"hbs"  
}))


app.set("view engine","hbs")


const data={
    title:"Handlebars",
    contacts:[
        {name:"Harish",age:23,"mobile":"967239292"},
        {name:"Piyush",age:24,"mobile":"777239292"},
        {name:"Yogesh",age:22,"mobile":"117239292"}
    ]
}
app.get("/",(request,response)=>{
   response.render("index") 
})
app.get("/about",(request,response)=>{
response.render("about")})

app.get("/about/:name",(request,response)=>{
const name=request.params.name
response.render("about",{name})})

app.get("/contact",(request,response)=>{
response.render("contact",data)
})

const port=3000
const host="127.0.0.1"

app.listen(port,host,()=>{
    console.log(`server started on http://${host}:${port}`)
})