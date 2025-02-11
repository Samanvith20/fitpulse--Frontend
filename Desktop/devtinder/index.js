const express = require('express');
const app=express();
const port=3000;
// app.use() used to handle all types of HTTP requests and middleware functions
 // this will also match all  the  HTTP method api call sub-paths of /about 
app.use("/about",(req,res)=>{
    res.send("About Us");
});
app.use("/contact",(req,res)=>{
    res.send("Contact Us");
});
app.use("/",(req,res)=>{
    res.send("Hello World");
});

// app.listen() used to bind and listen the connections on the specified host and port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});