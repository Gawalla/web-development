import express from "express" 
import cors from 'cors'
import bodyParser from "body-parser";
const app =express()
const __dirname = import.meta.dirname;
// app.get('/',(req,res)=>{
//     res.send("hello worlddc")
// })
app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
res.json({msg:"suucesssfully askes"})
console.log('some ask data')
})
app.post('/', (req, res) => {
  console.log(typeof(req.body))
  console.log(req.body)

 res.json({msg:'form recieved'})
})
app.get('/blog/:slug', (req,res)=>{
  res.send(`hello blogger ${req.params.slug}`)
})
app.listen(5000,()=>{
console.log(`backend running at http://localhost:5000`)
})