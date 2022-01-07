require('dotenv').config({ path : './config.env'});
// console.log(process.env.PORT);
// console.log(process.env.HOSTNAME);

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const res = require('express/lib/response');
const port = process.env.PORT || 4002;

const productRoute = require("./routes/productRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended : false
}));

app.use("/product",productRoute);
//Routing Table
// app.get();  ดึงข้อมูล,ค้นหา
// app.post(); Add data เพิ่มข้อมูล 
// app.put();  แก้ไขข้อมูล Edit Data
// app.patch(); แก้ไขข้อมูล (บางส่วน)  Edit Data
// app.delete(); ลบข้อมูล 
// ()=>{} เรียกว่า แอโร่ ฟังชั่น
app.get("/", (req , res)=>{
    console.log("Hello From Index"); //แสดงที่console
    res.send("Hello From Index");  //ส่งผลลัพธ์ออกไป Browser เป็นข้อความ
});

app.get("/login", (req , res)=>{
    console.log("Hello From login"); 
    res.send("Hello From login");  
});

app.get("/register", (req , res)=>{
    console.log("Hello From register"); 
    res.send("Hello From register");  
});

app.post("/register", (req , res)=>{
    console.log(req.body.name); 
    console.log(req.body.email); 
    res.send("Hello From register");  //ส่งผลลัพธ์ออกไป Browser เป็นข้อความ
});

            // พารามิเตอร์ ID  ==> ค้นหา / เข้าไปอีก ควรสร้าง รูปแบบให้ต่างกันนิดนึง
app.get("/product/name/:name", (req , res)=>{
    res.send(`Product Name : ${req.params.name}`);
});

app.get("/product/:id", (req , res)=>{
    res.send(`Product Id : ${req.params.id}`);
});


app.listen(port,()=>{
    console.log(`App is running on port ${port}`);
});
              
console.log(port);