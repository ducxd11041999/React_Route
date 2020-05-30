import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Notfound from './components/NotFound'
import Product from './components/Product'
import ProductItem from './components/ProductItem.js'
import React from 'react';
import Login from './components/Login'
const routes = [{
	path : '/',
	exact: true,
	main: () =>{
		return <Home />
	}
},
{
	path : '/contact',
	exact: true,
	main: () =>{
		return <Contact />
	}
},

{
	path : '/about',
	exact: true,
	main: () =>{
		return <About />
	}
},
{
	path : '/product',
	exact: true,
	main: (match, location) =>{
		return <Product match={match}  location = {location}/>
	}
},
{
	path: '/product/:slug',
	exact : false,
	main: (match) =>{
		return <ProductItem match = {match}/>
		}
},
{
	path: '/login',
	exact : false,
	main: (currentLocation) =>{
		return <Login currentLocation = {currentLocation}/>
		}
},
{
	path : '',
	exact: true,
	main: () =>{
		return <Notfound />
	}
},

] 


export default routes