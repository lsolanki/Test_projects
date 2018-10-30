import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
	return(

		<footer>
	        <div className="container">
	          <div className="row">
	            <div className="col-md-1"></div>
	            <div className="col-md-3 col-sm-3 col-xs-12">
	              <h3>Team</h3>
	              <h4><Link to="/">Lisa</Link></h4>
	              <h4><Link to="/">Danielle</Link></h4>
	              <h4><Link to="/">Brian</Link></h4>
	              <h4><Link to="/">Join us!</Link></h4>
	            </div>
	            <div className="col-md-3 col-sm-3 col-xs-12">
	              <h3>Learn More</h3>
	              <h4><Link to="/">Manifesto</Link></h4>
	              <h4><Link to="/">Works</Link></h4>
	              <h4><Link to="/">Stories</Link></h4>
	            </div>
	            <div className="col-md-3 col-sm-3 col-xs-12">
	              <h3>Meet Us</h3>
	              <h4><Link to="/">Studio</Link></h4>
	              <h4><Link to="/">Community</Link></h4>
	              <h4><Link to="/">Workshops</Link></h4>
	            </div>
	            <div className="col-md-2 col-sm-2 col-xs-12">
	              <h3>Contact</h3>
	              <h4><Link to="/">Twitter</Link></h4>
	              <h4><Link to="/">Facebook</Link></h4>
	              <h4><Link to="/">Instagram</Link></h4>
	            </div>
	          </div>
	        </div>
	      </footer>

	);
}


export default Footer;