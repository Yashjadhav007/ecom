import React from 'react';

function Product(props) {
  const addcart = () => {
    // alert("i'm addcart function")
    props.addcart1(props.Rs);
  };

  return (
    <>

    <div className="col-4 mt-2 mb-4"> 
      <div className="card">
        <img className="card-img-top text-center" src={props.arrObj.img} alt="Card cap" />
        <div className="card-body ">
          <h5 className="card-title text-center">{props.arrObj.title}</h5>
          <p className="card-text text-center">Price: {props.arrObj.price}</p>
          <a href="#" className="btn btn-primary" onClick={addcart} >Add to cart</a>
   
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Product;


