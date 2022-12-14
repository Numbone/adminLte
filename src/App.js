import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddProduct from './pages/AddProduct';
import Category from './pages/Category';
import Etiket from './pages/Etiket';
import Home from './pages/Home';
import Order from './pages/Order';
import Products from './pages/Products';
import Statistics from './pages/Statistics';
import Users from './pages/Users';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/orders' element={<Order/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/etiket' element={<Etiket/>}></Route>
        <Route path='/products/:id' element={<Products/>}></Route>
        <Route path='/statistics' element={<Statistics/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
