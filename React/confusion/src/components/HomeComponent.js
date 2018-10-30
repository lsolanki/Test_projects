import React, { Component } from 'react';

import Banner from './BannerComponent';
import HappyUsers from './HappyUsersComponent';
import HowStarted from './HowStartedComponent';
import { USERS } from '../shared/users';

class Home extends Component{

	constructor(props){
		super(props);

		this.state = {
			users: USERS
		};
	}

	render(){
		return(
			<div>
				<Banner />
				<HappyUsers users={this.state.users} />
				<HowStarted users={this.state.users} />
			</div>
		);
	}
}


export default Home;