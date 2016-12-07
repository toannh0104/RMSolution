import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container">
          
          <div id="navbar-collapse">
            <ul className="nav navbar-nav navbar-left">
              <li>
              
                <Link to="/" activeClassName="active rms-hmore rms-icon" onlyActiveOnIndex={true}>
                  <span className="glyphicon glyphicon-menu-hamburger" aria-hidden="true" ></span>
                </Link>
              
                <div className="rms-user-info">              
                    <span className="rms-user" >
                      <img className="avt-img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                    </span>
                 
                  <div className="rms-user-detail">Nguyen Hai Toan <br/> SE - AP</div>                    
                </div>
              </li>
              <Authenticated>
                <li>
                  <Link to="/profile" activeClassName="active">Profile</Link>
                </li>
              </Authenticated>
            
              <li className="right-align">
                <div className="text-center rms-user-info padding-right-10">
                  <i className="rms-user-info" >Hi Admin !</i>
                </div>
                <div className="rms-user padding-right-10">
                  <a href="#"><i className="glyphicon glyphicon-cog rms-icon"></i></a>
                </div>
                <div className="rms-user padding-right-10">
                  <a href="#"><i className="glyphicon glyphicon-off rms-icon"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}