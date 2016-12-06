import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div className="container">
        <div className="left-column" >

          <div className="column-head">
            <ul className="nav navbar-nav rms-nav">
              <li>
                  <div className="input-group stylish-input-group">                                      
                      <span className="input-group-addon">
                          <button type="submit">
                              <span className="glyphicon glyphicon-search text-white"></span>
                          </button>  
                      </span>
                      <input type="text" className="form-control rms-search-box text-white"  placeholder="Search" />
                      <span className="input-group-addon">
                          <button type="submit">
                              <span className="glyphicon glyphicon-sort text-white font-medium"></span>
                          </button>
                          <button type="submit">
                              <span className="glyphicon glyphicon-filter text-white font-medium"></span>
                          </button> 
                          <div className="glyphicon rms-search-count">999</div>
                      </span>
                  </div>
              </li>
            </ul>

          </div>
          <div className="left-content" >
            <ul className="list-group elements-list" >
              <li className="list-group-item active rms-list-item" >
                <div className="container">
                  <div className="row">
                    <div className="col-xs-2">
                      <span>
                        <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                      </span>
                    </div>
                    <div className="col-xs-7 text-black">
                      <div>Nguyen Hai Toan </div>
                      <div>SE - AP</div><div>Hanoi, VietNam</div>
                    </div>

                    <div className="col-xs-1 text-black">
                      <div>20/12/2016</div>
                      <div>
                        <span className="glyphicon glyphicon-record record-item">
                          <i className="glyphicon glyphicon-menu-right"></i>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
              </li>
              <li className="list-group-item active rms-list-item" >
                <div className="container">
                  <div className="row">
                    <div className="col-xs-2">
                      <span>
                        <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                      </span>
                    </div>
                    <div className="col-xs-7 text-black">
                      <div>Nguyen Hai Toan </div>
                      <div>SE - AP</div><div>Hanoi, VietNam</div>
                    </div>

                    <div className="col-xs-1 text-black">
                      <div>20/12/2016</div>
                      <div>
                        <span className="glyphicon glyphicon-record record-item">
                          <i className="glyphicon glyphicon-menu-right"></i>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
              </li>
              <li className="list-group-item active rms-list-item" >
                <div className="container">
                  <div className="row">
                    <div className="col-xs-2">
                      <span>
                        <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                      </span>
                    </div>
                    <div className="col-xs-7 text-black">
                      <div>Nguyen Hai Toan </div>
                      <div>SE - AP</div><div>Hanoi, VietNam</div>
                    </div>

                    <div className="col-xs-1 text-black">
                      <div>20/12/2016</div>
                      <div>
                        <span className="glyphicon glyphicon-record record-item">
                          <i className="glyphicon glyphicon-menu-right"></i>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
              </li>
              <li className="list-group-item active rms-list-item" >
                <div className="container">
                  <div className="row">
                    <div className="col-xs-2">
                      <span>
                        <img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg" />
                      </span>
                    </div>
                    <div className="col-xs-7 text-black">
                      <div>Nguyen Hai Toan </div>
                      <div>SE - AP</div><div>Hanoi, VietNam</div>
                    </div>

                    <div className="col-xs-1 text-black">
                      <div>20/12/2016</div>
                      <div>
                        <span className="glyphicon glyphicon-record record-item">
                          <i className="glyphicon glyphicon-menu-right"></i>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="right-column">
          <div className="column-head">
            header right
          </div>
          <div className="right-content" >
            right content
          </div>

        </div>

      </div>
    );
  }
}
