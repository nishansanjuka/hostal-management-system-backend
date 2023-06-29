const express = require('express');
const app = express();

const PORT = 3000;


app.get('/',(req,res)=>{
    res.send('Well come to the HMS')
    console.log("loading is root")
})

app.get('api/hostels',(req,res)=>{});

app.get('api/rooms',(req,res)=>{});

app.get('api/room-requests',(req,res)=>{});

app.get('api/users',(req,res)=>{});

app.post('api/users',(req,res)=>{});

app.get('api',(req,res)=>{});



app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}`);
});
