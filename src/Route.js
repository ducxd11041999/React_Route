import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Notfound from './components/NotFound'
import Product from './components/Product'

import React from 'react';

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
	main: ({match}) =>{
		return <Product match={match} />
	}
},
{
	path : '',
	exact: true,
	main: () =>{
		return <Notfound />
	}
}
] 


export default routes