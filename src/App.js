import { useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import products from './products.json'
import Product from './components/Product';
import Basket from './components/Basket';

function App() {
  const [money,setMoney]=useState(119000000000 )
  const [basket,setBasket]=useState([])
  const [total,setTotal]=useState(0)

  const resetBasket=()=>{
    setBasket([])
  }

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return acc + (item.amount*(products.find(product => product.id === item.id).price))
      }, 0)
    );
  },[basket])
  return (
    <div className="">
      <div className='bg-white flex justify-center mx-auto mt-10 rounded-lg w-[900px] h-80 text-center'>
      <nav className=' flex flex-col items-center justify-center'>
         <img className='rounded-full w-32 h-32 object-cover' src="https://image.cnbcfm.com/api/v1/image/105510261-1591797492468preview.jpg?v=1646662881&w=929&h=523&vtcrop=y" alt="" />
        <h2 className='mt-4 font-bold text-3xl '>Spend Jeff Bezos' Money</h2> 
      </nav>
      </div>
      <Header total={total} money={money}/>

<div className='content products  text-center'>
{
  products.map(product=>(
    <Product total={total} money={money} key={product.id} basket={basket} setBasket={setBasket} product={product}/>
  ))
}
</div>
      {
        total > 0 &&(
  <Basket resetBasket={resetBasket} total={total} products={products} basket={basket}/>
        ) 
      }
    </div>
  );
}

export default App;
