import React from 'react'

function Header(props) {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-light">
        <a className="navbar-brand text-dark ms-4" id='logoAtNav' href="#">iStepUp</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mt-0 " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active text-dark" aria-current="page" href="#" id='homeNav'>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-dark ms-4" aria-current="page" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active text-dark ms-4" aria-current="page" href="#">Pages</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active text-dark ms-4" aria-current="page" href="#">Shop</a>
            </li>
            
           
           
          </ul>
         
        </div>
        <div>
      <h3><span>Total Qty : {props.count}</span>   <span>  Total Amt : {props.tamt}</span> </h3>
    </div>
      </div>
    </nav>
    </>
  )
}

export default Header