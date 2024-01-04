const express=require("express")
const mysql=require("mysql")
const bodyParser=require("body-parser")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send("root  link.............")
})


app.post("/register",(req,res)=>{

    const data=req.body;
    console.log(data)

    const con=mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"",
   database:"nodedb"

    });

con.connect((err)=>{
    try{
        if(err){
            throw err;
        }

        const sql=`insert into user (name,age,mobile,email,password) values('${data.name}','${data.age}','${data.mobile}','${data.email}','${data.password}');`

        con.query(sql,(err,result,field)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("1 row inserted")
               res.send("Register success")
               
                
            }
        });
    }
    catch(err){
        console.log(err)
    }
});

}) ;


app.post("/login", (req, res) => {
      const data = req.body;
      console.log(data);
    
      const con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "nodedb",
      });
      con.connect((err) => {
        try {
          if (err) {
            throw err;
          }
    const sql=`select * from user where 
    email='${data.email}' and password='${data.password}';`
          con.query(sql,(err,result,fields)=>
          {
            console.table(result)
            console.table(fields)
    
            if(result.length>0)
            {
                res.send("true")
            }
            else{
                res.send("false")
            }
          })
    
    
        } catch (err) {
          console.error(err);
        }
      });
    });
app.get("/getusers",(req,res)=>{
    const data=req.body

    const con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"nodedb"


    });

    con.connect((err)=>{
        try{
            if(err){
                throw err;
            }

            const sql=`select *from user where 1;`
            con.query(sql,(err,result)=>{
                if(err){
                  
                    console.log(err)
                }
                else{
                    
                    res.json(result)
                }
            })
        }catch(err){
            console.log(err)
        }
        
    })

})

app.post("/update",(req,res)=>{
    const id=req.params.id
    const data=req.body

    const con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"nodedb"
    });
    con.connect((err)=>{
        try{
            if(err){
                throw err;
            }

            const sql=`update user set name='${data.name}',age='${data.age}',
            mobile='${data.mobile}', email='${data.email}', password='${data.password}' 
            where id='${data.id}';`

            con.query(sql,(err,result)=>{
                if(err){
                    throw err;
                }
                if(result.affectedRows>0){
                    res.send("true")
                }
                else{
                    res.send("false")
                }
            })
        }
        catch(err){
            console.log(err)
        }
    })
})

app.post("/deleteuser",(req,res)=>{
    const id=req.body.id
    const con=mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"nodedb"
    });
    con.connect((err)=>{
        try{
            if(err){
                throw err;
            }

            const sql=`delete from user where id='${id}';` 
            con.query(sql,(err,result)=>{
                if(err){
                    console.log(err)
                }

                if(result.affectedRows>0){
                    res.send("true")
                }
                else{
                    res.send("false")
                }
            })
        }catch(err){
            console.log(err)
        }
    })
})

const port=4000
const host="127.0.0.1"
app.listen(port,host,()=>{
    console.log(`server started on: http://${host}:${port}`)
})