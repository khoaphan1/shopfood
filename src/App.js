import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import About from './pages/about/About'
import Blog from './pages/blog/Blog'
import Cart from './pages/cart/Cart'
import Payment from './pages/payment/Payment'
import ProductDetail from './pages/productDetail/ProductDetail'
import SignIn from './pages/signIn/SignIn'
import SignUp from './pages/signUp/SignUp'
import BlogDetail from './pages/blogDetail/BlogDetail';
import AdminPage from './pages/adminPage/AdminPage';
import ShopTest from './pages/shopTest/ShopTest';
import ManageProduct from './pages/manageProduct/ManageProduct';
import { ManageCategory } from './pages/manageCategory/ManageCategory';
import ManageUser from './pages/manageUser/ManageUser';
import ManageComment from './pages/manageComment/ManageComment';
import { ManageBlog } from './pages/manageBlog/ManageBlog';
import { ManageOrder } from './pages/manageOrder/ManageOrder';




function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/shop2" element= {<ShopTest/>}/>
        <Route path="/shop" element= {<Shop/>}/>
        <Route exact path="/product/:id" element= {<ProductDetail/>}/>
        <Route path="/about" element= {<About/>}/>
        <Route path="/cart" element= {<Cart/>}/>
        <Route path="/blog" element= {<Blog/>}/>
        <Route exact path="/blog/:id" element= {<BlogDetail/>}/>
        <Route path="/checkout" element= {<Payment/>}/>
        <Route path="/signin" element= {<SignIn/>}/>
        <Route path="/signup" element= {<SignUp/>}/>
        <Route path="/admin/Home" element= {<AdminPage/>}/>
        <Route path="/admin/Shop" element= {<ManageProduct/>}/>
        <Route path="/admin/Category" element= {<ManageCategory/>}/>
        <Route path="/admin/User" element= {<ManageUser/>}/>
        <Route path="/admin/Comment" element= {<ManageComment/>}/>
        <Route path="/admin/Blog" element= {<ManageBlog/>}/>
        <Route path="/admin/Order" element= {<ManageOrder/>}/>
      </Routes>
    </>
  )
}

export default App;
