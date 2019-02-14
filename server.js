const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 8080;
const path = require("path"); 
const cors = require('cors');
const config = require('./server/database/DB');
const UserRouter = require('./server/routes/UserRouter');
const BlogRouter = require('./server/routes/BlogRouter');


mongoose.connect(config.DB).then(
  () => {console.log('Database is connected')},
  err => { console.log('Can not connect to the database' + err)
});

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use('/users', UserRouter);
app.use('/blog', BlogRouter);

app.listen(PORT, function(){
  console.log('Server is running on Port: ',PORT);
});