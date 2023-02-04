import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Pdf from './components/Pdf';
import Sidebar from './components/Sidebar';
import AddProduct from './pages/AddProduct';
import Category from './pages/Category';
import ChangeCategory from './pages/ChangeCategory';
import ChangeProduct from './pages/ChangeProduct';
import ChangeTransaction from './pages/ChangeTransaction';
import Etiket from './pages/Etiket';
import Home from './pages/Home';
import Order from './pages/Order';
import Products from './pages/Products';
import PromocodeId from './pages/PromocodeId';
import PromocodePage from './pages/PromocodePage';
import Statistics from './pages/Statistics';
import UserChange from './pages/UserChange';
import Users from './pages/Users';
import SetDataPerson from './pages/setDataPerson';
import ChangOrder from './pages/ChangOrder';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/orders' element={<Order/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/users/:id' element={<UserChange/>}></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/category/:id' element={<ChangeCategory/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/addproduct' element={<AddProduct/>}></Route>
        <Route path='/etiket' element={<Etiket/>}></Route>
        <Route path='/products/:id' element={<ChangeProduct/>}></Route>
        <Route path='/statistics' element={<Statistics/>}></Route>
        <Route path='/promocode' element={<PromocodePage/>}></Route>
        <Route path='/promocode/:id' element={<PromocodeId/>}></Route>
        <Route path='/pdf' element={<Pdf/>}></Route>
        <Route path='/changetransaction' element={<ChangeTransaction/>}></Route>
        <Route path='/changeperson' element={<SetDataPerson/>}></Route>
        <Route path='/changeorder' element={<ChangOrder/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
