const express = require ('express');
const userRouter = require ('./routes/user.routes');
const dotenv = require ('dotenv');
const connectToDB = require ('./config/db');
dotenv.config ();
connectToDB ();
const cookieParser=require('cookie-parser')
const app = express ();
const indexRouter=require('./routes/index.routes')


app.set ('view engine', 'ejs');
app.use(cookieParser())
app.use (express.json ());
app.use (express.urlencoded ({extended: true}));

app.use('/',indexRouter)
app.use ('/user', userRouter);

app.listen (3000, () => {
  console.log ('server is running on port 3000');
});
