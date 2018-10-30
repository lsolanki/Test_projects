import React, { Component } from 'react';
import { nav } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

	constructor(props){
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false
		}
	}


	toggleNav(){
		this.setState({isNavOpen: this.state.isNavOpen});
	}


	render() {
		return(

			<React.Fragment>

				<header>
			        <div className="container">
			          <div className="row">
			          	
			          	

				        



						<nav className="navbar navbar-default">
						  <div className="container-fluid">
						    
						    
						    <div className="navbar-header">
						      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false" onClick={this.toggleNav}>
						        <span className="sr-only">Toggle navigation</span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						        <span className="icon-bar"></span>
						      </button>
						      <Link className="navbar-brand" to="/home">
						      	<img src="assets/gtd_logo.png" alt="logo" />
						      </Link>
						    </div>
						    
						    <div className="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1" isOpen={this.state.isNavOpen}>
						      
						      <ul className="nav navbar-nav navbar-left menu">
						        <li className="active"><Link to="/home">Home</Link></li>
						        <li><Link to="/about">About Us</Link></li>
						        <li><Link to="/contact">Contact Us</Link></li>
						      </ul>
						      <form className="navbar-form pull-left">
						        <label className="form-group">
						          <input type="text" value="Search" />
						        </label>
						      </form>
						    </div>
						  </div>
						</nav>

			          </div>
			        </div>
			      </header>
				
			</React.Fragment>

		);
	}
}


export default Header;