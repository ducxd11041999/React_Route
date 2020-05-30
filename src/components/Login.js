import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        usr: '',
        psw: ''
    };
  }
  onChange = (event) => {
    var target =  event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value
    })
  }
  onSubmit = (event) =>{
      event.preventDefault();
      var {usr, psw} = this.state;
      if(usr === 'admin' && psw === 'admin')
      {
          localStorage.setItem('account', JSON.stringify(this.state))
      }
  }

  render(){
    var {usr, psw} = this.state;
    var loggedInUser = (localStorage.getItem('account'))
    var {currentLocation} = this.props;
    console.log(currentLocation)
    if(loggedInUser !== null)
    {
      
        return(
             <Redirect
                to={{
                  pathname: "/product/",
                  search: "?utm=your+face",
                  state: { referrer: '/Login'  }
                }}
              />)
    }
    else{
    return(
    <div className="row">
      <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <form onSubmit = {this.onSubmit}>
            <legend>Đăng nhập</legend> 
            <div className="form-group">
              <label>Tên tài khoản:</label>
              <input type="text" className="form-control" id="un" placeholder="Nhập tài khoản" 
                name = 'usr'
                value = {usr}
                onChange = {this.onChange}
              />
            </div>
            <div className="form-group">
              <label>Mập khẩu:</label>
              <input type="password" className="form-control" id="pw" placeholder="Nhập mật khẩu" 
                name = 'psw'
                value = {psw}
                onChange = {this.onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Đăng nhập</button>
          </form>
      </div>
    </div>
    )
  }
  }
}

export default Login
