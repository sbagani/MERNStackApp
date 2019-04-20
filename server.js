const express=require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');

const items=require('./routes/api/items');

const app=express();

//bodyparser middleware
app.use(bodyParser.json());

//db config

const db=require('./config/keys').mongoURI;
 
//connect to mongo

mongoose.connect('mongodb+srv://admin:admin@mernstackapp-bfstw.mongodb.net/test?retryWrites=true',{ useNewUrlParser: true })
.then(()=> console.log('Connected to Mongodb'))
.catch(err => console.log(err));

app.use('/api/items', items);


const port=process.env.PORT || 5000;

app.listen(port,()=> console.log(`Server started on port ${port}`));
