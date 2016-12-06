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
      <div className="container table-responsive">
      
        <table className="table">
          <tr>
            <td className="left-column" >
                <div >

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
            </td>





            <td className ="right-column">
              

        <ul className="nav nav-tabs nav-justified" role="tablist">

  <li className="selected"><a data-toggle="tab" href="#home" className="glyphicon glyphicon-user" ></a></li>

  <li><a data-toggle="tab" href="#menu1" className="glyphicon glyphicon-time" ></a></li>


  <li><a data-toggle="tab" href="#menu2" className="glyphicon glyphicon-education" ></a></li>

    <li><a data-toggle="tab" href="#menu1" className= "glyphicon glyphicon-heart"></a></li>
  <li><a data-toggle="tab" href="#menu2" className="glyphicon glyphicon-home" ></a></li>
    <li><a data-toggle="tab" href="#menu1" className="glyphicon glyphicon-map-marker" ></a></li>
</ul>

<div className="tab-content">
  <div id="home" className="tab-pane fade in active">
    <h3>HOME</h3>
    <p>Some content.</p>
  </div>
  <div id="menu1" className="tab-pane fade">
    <h3>Menu 1</h3>
    <p>Some content in menu 1.</p>
  </div>
  <div id="menu2" className="tab-pane fade">
    <h3>Menu 2</h3>
    <p>Some content in menu 2.</p>
  </div>
</div>


            </td>





          </tr>
        </table>
      </div>
    );
  }
}
