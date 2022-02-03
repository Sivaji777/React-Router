import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from '../React-Router/About'
import Contact from '../React-Router/Contact'
class Navigation extends Component {
render() {
	return (
	<Router>
			<ul className="App-header">
			<li>
				<Link to="/about">About Us</Link>
			</li>
			<li>
				<Link to="/contact">Contact Us</Link>
			</li>
			</ul>
		<Routes>
				<Route exact path='/about' element={< About />}></Route>
				<Route exact path='/contact' element={< Contact  />}></Route>
		</Routes>
	</Router>
);
}
}

export default Navigation;
