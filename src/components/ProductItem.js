import React,{Component} from 'react';

class ProductItem extends Component {
  render(){
  	var {match} = this.props;
  	var name = match.match.params.slug
  	console.log(match.match.params.slug)
    return (
      <div className = 'App'>
        	đây là trang chi tiết sản phẩm: {name}
      </div>
    );
  }
}

export default ProductItem
