const dotenv = require('dotenv');
dotenv.config('backend/.env');

const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

app.use(cors({origin : '*'}));

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));

//DB Connection

mongoose
  .connect("mongodb://localhost:27017/EcommDB", { useNewUrlParser: true })
  .then((res) => console.log("DB Connected!"))
  .catch((err) => console.log(err));



  // Import Routes

const userRoutes = require('./Routes/UserRoute');
const orderRoutes = require('./Routes/OrdersRoute');

app.use('/', userRoutes);
app.use('/', orderRoutes);

app.listen(8800, () => {
    console.log('Port listening on the port 8800');
})

