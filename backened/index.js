const express=require('express');
require('dotenv').config()
const connection=require('./database/db')
const errorMiddleware = require("./middleware/errorMiddleware");
const loginRouter=require('./routes/loginRoutes');
const signupRouter=require('./routes/signupRoutes');
const prodRouter=require('./routes/productRoutes');
const toyProdRouter=require('./routes/toyProductRoutes');
const fashionRouter=require('./routes/fashionRoute');
const adminRouter=require('./routes/adminRoutes');
const allProduct=require('./routes/allProductRoutes');
const orderRouter=require('./routes/orderRoutes');

const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: 'rzp_test_35zy3Hqp4Jtv6M',
  key_secret: '0LDDihu5S8UgdBS4o6KvL4Fj',
});


const cors =require('cors');

const port=5000;

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("we are here now in backened");
})
app.use('/login',loginRouter);
app.use('/adminlogin',adminRouter);
app.use('/signup',signupRouter);
app.use('/product',prodRouter);
app.use('/toy',toyProdRouter);
app.use('/fashion',fashionRouter);
app.use('/all',allProduct);
app.use('/order',orderRouter);
// /login/
app.post("/razorpay", async (req, res) => {
    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
  
    const options = {
      amount: amount * 100,
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };
  
    try {
      const response = await razorpay.orders.create(options);
    //   console.log(response);
      res.json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
    }
  });
  

app.use(errorMiddleware);
connection;
app.listen(port, () => console.log(`server is running at http://localhost:${port}`));
