import React from 'react';
import { Link } from 'react-router';

import { LoginLink, LogoutLink, NotAuthenticated, Authenticated } from 'react-stormpath';

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" data-toggle="collapse" data-target="#navbar-collapse" className="navbar-toggle collapsed">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
            </button>
          </div>
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
              
                <Link to="/" activeClassName="active rms-hmore rms-icon" onlyActiveOnIndex={true}>
                  <span className="glyphicon glyphicon-align-justify" aria-hidden="true" ></span>
                </Link>
              
                <div className="rms-user-info">
                  <div className="glyphicon glyphicon-user rms-user rms-icon" aria-hidden="true" ></div>
                  <div className="rms-user-detail">Nguyen Hai Toan <br/> SE - AP</div>                    
                </div>
              </li>
              <Authenticated>
                <li>
                  <Link to="/profile" activeClassName="active">Profile</Link>
                </li>
              </Authenticated>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" className="text-center rms-user-info">
                  <i className="rms-user-info">
                  Hi
                  { this.context.user ? ' ' + this.context.user.givenName : null }!
                  </i>
                </a>
              </li>         
              <NotAuthenticated>
                <li>
                  <Link to="#" activeClassName="active">
                    <i className="glyphicon glyphicon-off rms-icon"></i>
                  </Link>
                </li>
              </NotAuthenticated>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}