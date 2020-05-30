import React, {Component} from 'react';
import routes from './Route'
import Menu from './components/Menu'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends Component {
  render(){
    return (
        <Router>
          <div>
            <Menu />
            <Switch>
               {this.showContentMenu(routes)}
            </Switch>
          </div>
        </Router>
    );
  }
  showContentMenu = (routes) =>
  {
      var result = null;
      result = routes.map((route, index)=>{
        return (
          <Route key = {index} path = {route.path} exact = {route.exact} component = {route.main} />
        )
      })
      return result;
  }
}

export default App;
