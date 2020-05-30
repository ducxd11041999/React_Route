import React,{Component} from 'react';
import ProductItem from './ProductItem.js'
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";
class Product extends Component {
  render(){
  	var products = [{
  		id: 1,
  		slug: 'Iphone11',
  		name: "Iphone 11 ProMax",
  		price: 35000000
  	},
  	{
  		id: 2,
  		slug: 'Iphone12',
  		name: "Iphone 12 ProMax",
  		price: 40000000
  	},
  	{
  		id: 3,
  		slug: 'Iphone13',
  		name: "Iphone 13 ProMax",
  		price: 45000000
  	}
  	] 
  	var {match}	= this.props;
  	//console.log(match)
  	var rs = products.map((product, index) =>{
  		return (
  			<Link to = {`${match.url}/${product.slug}`} key={index}>
  				<li  className="list-group-item">
  					{product.id} - {product.name} - {product.price}
  				</li>
  			</Link>
  			)
  	})
    var {location} = this.props;
    console.log(location)
    return (
      <div className = 'container'>
  	  	<div className="row">
  	  		<ul className="list-group">
  	   			{rs}
  	   		</ul>
  	  	</div>
  	  	<div className="row">
          <Router>
  	  		   <Route path = "/product/:slug" exact = {false}component = {ProductItem} />
          </Router>
  	  	</div>
      </div>
    );
  }
}

export default Product;
