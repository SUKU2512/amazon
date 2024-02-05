import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import "./App.css";
import About from './UI/About';
import Allproducts from "./UI/Allproducts";
import Cart from "./UI/Cart";
import Footer from "./UI/Footer";
import Header from "./UI/Header";
import Home from "./UI/Home";
import Login from "./UI/Login";
import PageNotFound from "./UI/PageNotFound";
import Payment from "./UI/Payment";
import Privacypolicy from "./UI/Privacypolicy";
import ProductItem from "./UI/ProductItem";
import Productview from "./UI/Productview";
import Returnpolicy from "./UI/Returnpolicy";
import Scanner from "./UI/Scanner";
import Search from "./UI/Search";
import SearchItem from "./UI/SearchItem";
import Shippingpolicy from "./UI/Shippingpolicy";
import Signup from "./UI/Signup";
import Terms from "./UI/Terms";
import Thanks from "./UI/Thanks";
import View from "./UI/View";
import Wishlist from "./UI/Wishlist";
import { MyContext } from "./UI/context";

function App() {
  const [rimages,setRimages]=useState([]);
  const [cart,setCart] = useState([]);
  const [count,setCount]=useState(0);
  const [wishcount,setwishCount]=useState(0);
  const [wishlist,setWishlist]=useState([]);
  const [profilename,setProfileName]=useState();
  const [store,setStore]=useState([]);
  const[totalprice,setTotalprice]=useState(0);
  const [disc,setDisc]=useState();
  
  return (
    <div>
      <BrowserRouter>
      <MyContext.Provider value = {{rimages,setRimages,disc,setDisc,cart,wishlist,profilename,setWishlist,setProfileName,count,setCount,setCart,wishcount,setwishCount,store,setStore,totalprice,setTotalprice}} >  
      <Header/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/thanks" element={<Thanks />}></Route>
          <Route path="/Scanner" element={<Scanner />}></Route>
          <Route path="/men" element={<Allproducts/>}></Route>
          <Route path="/SearchItem" element={<SearchItem/>}></Route>
          <Route path="/women" element={<Allproducts/>}></Route>
          <Route path="/girls" element={<Allproducts/>}></Route>
          <Route path="/boys" element={<Allproducts/>}></Route>
          <Route path="/infants" element={<Allproducts/>}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/bodysuits" element={<Productview />} />
          <Route path="/dresses" element={<Productview />} />
          <Route path="/Productitem" element={<ProductItem/>}/>
          <Route path="/dresses/ProductItem" element={<ProductItem/>}/>
          <Route path="/babycare" element={<Productview />} />
          <Route path="/babycare/ProductItem" element={<ProductItem/>}/>
          <Route path="/Allproducts" element={<Allproducts/>}/>
          <Route path="/tshirt" element={<Productview />} />
          <Route path="/tshirt/ProductItem" element={<ProductItem/>}/>
          <Route path="/shirts" element={<Productview />} />
          <Route path="/shirts/ProductItem" element={<ProductItem/>}/>
          <Route path="/pants" element={<Productview />} />
          <Route path="/Privacypolicy" element={<Privacypolicy/>}/>
          <Route path="/pants/ProductItem" element={<ProductItem/>}/>
          <Route path="/frocks" element={<Productview />} />
          <Route path="/frocks/ProductItem" element={<ProductItem/>}/>
          <Route path="/skirts" element={<Productview />} />
          <Route path="/skirts/ProductItem" element={<ProductItem/>}/>
          <Route path="/jumpsuits" element={<Productview />} />
          <Route path="/Returnpolicy" element={<Returnpolicy/>}/>
          <Route path="/Shippingpolicy" element={<Shippingpolicy/>}></Route>
          <Route path="/jumpsuits/ProductItem" element={<ProductItem/>}/>
          <Route path="/track" element={<Productview />} />
          <Route path="/track/ProductItem" element={<ProductItem/>}/>
          <Route path="/jeans" element={<Productview />} />
          <Route path="/jeans/ProductItem" element={<ProductItem/>}/>
          <Route path="/tshirts" element={<Productview />} />
          <Route path="/sarees" element={<Productview />} />
          <Route path="/sarees/ProductItem" element={<ProductItem/>}/>
          <Route path="/kurtis" element={<Productview />} />
          <Route path="/kurtis/ProductItem" element={<ProductItem/>}/>
          <Route path="/tops" element={<Productview />} />
          <Route path="/terms" element={<Terms/>}/>
          <Route path="/tops/ProductItem" element={<ProductItem/>}/>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/tshirts/ProductItem" element={<ProductItem/>}/>
          <Route path="/bodysuits/ProductItem" element={<ProductItem/>}/>
          <Route path="/View" element={<View />} />
          <Route path="/wishlist" element={<Wishlist />} />
          
          <Route path="/cart" element={<Cart/>}/>
          
          <Route path="/about" element={<About/>}/>
          <Route path='*' element={<PageNotFound />}/>
          </Routes>
          <Footer/>
          </MyContext .Provider>
        
      </BrowserRouter>
    </div>
  );
}
export default App;
