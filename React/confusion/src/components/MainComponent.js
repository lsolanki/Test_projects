import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutUsComponent';



class Main extends Component {

	constructor(props) {
		super(props);

		this.state = {
		};
	}

	render() {

		const HomePage = () => {
			return(
				<Home />
			);
		}

		return(

			<div>
				<Header />
				<Switch>
					<Route path='/home' component={HomePage} />
					<Route exact path='/about' component={() => <About />} />
					<Redirect to='/home' />
				</Switch>				
				<Footer />
			</div>

		);
	}
}


export default Main;