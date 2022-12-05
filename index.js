
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();
// import routes
const authRoutes = require('./routes/auth');
// const userRoutes = require('./routes/user');
const postRoutes = require('./routes/post');
const budgetRoute = require('./routes/budget')
const loanRoute = require('./routes/loan')
const todoRoute = require('./routes/todo')
const categoryRoute = require('./routes/category')



// app
const app = express();

// db
const PORT = process.env.PORT
const MONGO_URL = 'mongodb+srv://NiteshDas:Siu33005@cluster0.y5dul.mongodb.net/featureAdd?retryWrites=true&w=majority'
mongoose.connect(MONGO_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true 
    }).then( (data,error) =>{ 
          if(error){
                console.log("Have a some error",error)
          }else{
                console.log('Database connected')
          }
    })



// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// routes middleware
app.use('/api', authRoutes); 
app.get('/', (req, res) => {
   res.send('Hello World!')
})
//app.use('/api', userRoutes);
app.use('/target', postRoutes);
app.use('/budget', budgetRoute);
app.use('/loan', loanRoute);
app.use('/todo', todoRoute);
app.use('/category', categoryRoute);
//app.use('/api', braintreeRoutes); 
//app.use('/api', orderRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
