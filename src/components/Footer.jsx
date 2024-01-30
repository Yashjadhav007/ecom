import React from 'react'

function Footer() {
  return (
    <footer className="text-center bg-dark text-lg-start bg-body-tertiary text-muted ">
  
 
  <section className="bg-dark pt-4 pb-4">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-light">
            <i className="fas fa-gem me-3"></i>iStepUp
          </h6>
          <p className='text-light'>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-light">
            Products
          </h6>
          <p className='text-light'>
            <a href="#!" className="text-reset ">Angular</a>
          </p>
          <p className='text-light' >
            <a href="#!" className="text-reset text-light">React</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Vue</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Laravel</a>
          </p>
        </div>
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-light">
            Useful links
          </h6>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Pricing</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Settings</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Orders</a>
          </p>
          <p className='text-light'>
            <a href="#!" className="text-reset text-light">Help</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4 text-light">Contact</h6>
          <p className='text-light'><i className="fas fa-home me-3 text-light"></i> Vanve Lawns, old bajar, Us</p>
          <p className='text-light'>
            <i className="fas fa-envelope me-3 text-light"></i>
            info@example.com
          </p>
          <p className='text-light'><i className="fas fa-phone me-3"></i> + 91 234 567 88</p>
          <p className='text-light'><i className="fas fa-print me-3"></i> + 91 234 567 89</p>
        </div>
      </div>
    </div>
  </section>
  <div className="text-center bg-secondary p-4 text-light">
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://yashjadhav.com/">yashjadhav.com</a>
  </div>
  
</footer>
  )
}

export default Footer