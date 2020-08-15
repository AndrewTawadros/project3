import React, { Component } from 'react';

import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';

import 'bootstrap/dist/css/bootstrap.css';
import '../App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      homeSearchBarText: "",
    }
    this.handleSearchBar = this.handleSearchBar.bind(this);
  }

  handleSearchBar() {
    const { homeSearchBarText } = this.state
    if (homeSearchBarText) {
      this.props.history.push('/restaurants', this.state.homeSearchBarText)
    }
  }

  handleOrderNowBtn(){
    this.props.history.push('/restaurants')
  }

  render() {
    return (
      <div>
        {/* Home Navbar Section */}
        <div className="container-fluid home-cont1">
          <div className="">
           
            <Navbar2 history={this.props.history} />
            <div className="container home-cont1-text">
              <h1 className="h1 text-uppercase text-white text-center mb-4"><strong>Organic Fast Food Made <br /> Easy And Healthy</strong></h1>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                    <input type="text" className="form-control text-uppercase" id="searchText" placeholder="Restaurant Name" onChange={(e) => { this.setState({ homeSearchBarText: e.target.value }) }} />
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-12">
                    <button type="button" className="btn btn-warning mb-2 text-uppercase btn-block rounded-0" onClick={this.handleSearchBar}><b>Search</b></button>
                  </div>
                </div>
              </div>
              <div className="container text-white text-center mt-4">
                <div className="col-lg-7 col-md-8 col-sm-12 mx-auto">
                  <img style={{ width: "95%" }} alt="" src={require("../assets/images/options-img.png")} />
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Home How it work section */}
        <div className="container-fluid text-center py-4">
          <div className="py-4">
            <h2 className="h2 text-uppercase">How It Works</h2>
            
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Restaurant" src={require("../assets/images/how-to-work2.png")} />
                </span>
                <h3 className="h3 mb-4">Choose A Restaurant</h3>
                
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Choose A Tasty Dish" src={require("../assets/images/how-to-work3.png")} />
                </span>
                <h3 className="h3 mb-4">Choose A Tasty Dish</h3>
                
              </div>
              <div className="col-12 col-lg-4 col-md-4 px-5">
                <span className="round-border my-4">
                  <img alt="Pick Up Or Delivery" src={require("../assets/images/how-to-work1.png")} />
                </span>
                <h3 className="h3 mb-4">Pick Up Or Delivery</h3>
                
              </div>
            </div>
          </div>
        </div>

        {/* Home Order now section */}
        <div className="container-fluid text-center py-5 home-cont3">
          <p className="h1 text-uppercase text-white mt-5 mb-3">Just Order And We Will Deliver You</p>
          
          <button type="button" className="btn btn-warning text-uppercase mb-5" onClick={() => this.handleOrderNowBtn()}><b>Order Now</b></button>
        </div>

        
        {/* Home Footer */}
        <Footer />
      </div>
    );
  }
}

export default Home;