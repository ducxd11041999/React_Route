import React,{Component} from 'react';
import {Prompt} from 'react-router-dom'
class Contact extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	isChecked: true
	  };
	}
	ChangeState = (param)=>{
		console.log(param)
		this.setState( {
			isChecked : param
		})
	}
  render(){
  	var {isChecked} = this.state;
    return (
      <div className = 'App'>
            This is Contact
            <button type="button" 
	            className="btn btn-success"
	            onClick = {() => this.ChangeState(false)}
	            >Cho phép
            </button>
            <button type="button" 
	            className="btn btn-primary"
	            onClick = {() =>this.ChangeState(true)}
            >Không cho phép</button>
            <Prompt
            	when = {isChecked}
            	message = {location => (`Bạn có chắc chắn muốn đi đến ${location.pathname}`)}
            />
      </div>
    );
  }
}

export default Contact;
