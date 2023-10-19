const express = require('express');
const app = express();

// uses public folder to render the static files like css
app.use(express.static(__dirname + '/public'));
const port = 3000;

// main Route
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/hometry.html")
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + "/register.html")
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + "/login.html")
});

app.get('/home', (req,res)=>{
    res.sendFile(__dirname + "/home.html")
});

// Server is running on the given port 
app.listen(port,()=>{
    console.log("Server at port ",port," !!!");
}); 