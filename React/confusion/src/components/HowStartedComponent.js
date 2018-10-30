import React, { Component } from 'react';

class HowStarted extends Component{

	constructor(props){
		super(props);
		
		this.state = {

		}
	}


	render(){
		const users = this.props.users;
		var show_users = users.slice(0, 2)
		const howstarted = show_users.map((user) => {
			return(

				<div key={user.id}>
					<div className="col-md-1 col-sm-2 col-xs-12 pd-nn">
		              <div className="how_started_circle">
		                <img src={user.image} alt={user.name} />
		              </div>
		            </div>
					<div className="col-md-2 col-sm-2 col-xs-12 text-left">
						<h3>{user.name}</h3>
						<p>{user.email} <br/> {user.phone}</p>
					</div>
				</div>

			);
		});

		return(

			<section className="how_started">
		        <div className="container text-center">
		          <h2>How it started</h2>
		          <p>
		            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		          </p>

		          <div className="row how_started_team_row">
		            <div className="col-md-4 col-sm-2 col-xs-12"></div>
		            { howstarted }
		          </div>


		        </div>
		     </section>

		);
	}
}


export default HowStarted;