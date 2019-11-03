import React, { Component } from 'react';
import Sidebar from '../components/sidebar'
import Introduction from '../components/introduction'
import About from '../components/about'


export default class App extends Component {
	render() {
	  return (
		<div id="colorlib-page">
		  <div id="container-wrap">
			   <Sidebar></Sidebar>
				  <div id="colorlib-main">
					  <Introduction></Introduction>
					  <About></About>
				</div>
			</div>
		</div>
	  );
	}
  }
  
