import React, {Component} from 'react';
import {
  Link,
  useRouteMatch
} from "react-router-dom";

const menus = [
{
  name : 'Trang Chu',
  to: '/',
  exact: true
}
,
{
  name : 'Lien He',
  to: '/contact',
  exact: false
},
{
  name : 'Gioi thieu',
  to: '/about',
  exact: false
}
,
{
  name : 'San Pham',
  to: '/product',
  exact: false
}
]
const MenuLink = ({label, to ,activeOnlyWhenExact}) => {
      let match = useRouteMatch({
        path  : to,
        exact: activeOnlyWhenExact
      });
      return (
        <li className  = {match ? "active" :"abc"}>
          <Link to =  {to} className = 'my-link'>
            { label }
          </Link>
        </li>
      );
}
class Menu extends Component {
  showMenu = (menus) =>{
    var result = null;
    if(menus.length > 0)
    {
        result = menus.map((menu, index) =>{
          return(
            <MenuLink key ={index} label = {menu.name} to = {menu.to} activeOnlyWhenExact = {menu.exact} />
        )})
    }
    return result;
  }
  render(){
    return (
        <nav className="navbar navbar-inverse">
            {/*menu*/}
            <div className="container-fluid">
              <ul className="nav navbar-nav">
                  {this.showMenu(menus)}
              </ul>
            </div>
          </nav>
    );
  }
}

export default Menu;
