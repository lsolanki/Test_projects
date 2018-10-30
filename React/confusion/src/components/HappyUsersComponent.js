import React, { Component } from 'react';

class HappyUsers extends Component{

	constructor(props) {
		super(props);

		this.state = {}
	}

	
	render(){

		const happyuser = this.props.users.map((user) => {
				
			return(

				
	            <div key={user.id} className="col-md-3 col-sm-3 col-xs-12">
	              <div className="happy_user_circle">
	                <img src={user.image} alt={user.name} />
	              </div>
	            </div>

			);
		});


		return(
			<section className="happy_user_section">
		        <div className="container">
		          <div className="row">
			            <div className="col-md-1"></div>
						{ happyuser }
		          </div>
		        </div>
		     </section>
		);
	}
}


export default HappyUsers;