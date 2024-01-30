import React, { useState } from 'react';
import Product from './Product';
import Myproducts from './Myproducts.json';
import Header from './Header';

function ProductList() {
  const [tamt, Settamt] = useState(0);
  const [count, SetCount] = useState(0);


  const addcart2 = (rs) => {
    // alert("i'm add cart 2")
    Settamt(Number(tamt) + Number(rs))
    SetCount(count + 1)
  }

  return (
    <>
      <Header 
      tamt = {tamt}
      count = {count}
      />


      <div className="container">
        <h1 className='text-center text-primary'>Our Products</h1>
        <div className="row mt-4">
          {Myproducts.map((data) => (
            <Product arrObj={data}
            addcart1={addcart2}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;