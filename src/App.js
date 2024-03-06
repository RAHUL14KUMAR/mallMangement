import './App.css';
import Headers from './components/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Order from './components/userOrder';
import Product from './components/allProducts'
import Address from './components/Address';
import Payment from './components/paymentOrder';
import Admin from './components/Adminlogin';
import Login from './components/loginPage';
import Signup from './components/signupPage';
import Register from './components/register';
import Add from './components/addProduct';
import Delete from './components/deleteProduct';
import Sales from './components/salesRegister';
import ProductsRegister from './components/productRegister';
function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path='/' element={<Headers/>}/>
        <Route path='/all' element={<Product/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/paymentOrder' element={<Payment/>}/>
        <Route path='/adminlogin' element={<Admin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/sales' element={<Sales/>}/>
        <Route path='/prod' element={<ProductsRegister/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
