import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';

$(document).ready(function(){
   // Add body-small class if window less than 768px
    if ($(this).width() < 769) {
        $('body').addClass('body-small')
    } else {
        $('body').removeClass('body-small')
    }
   // Minimalize menu when screen is less than 768px
   $(window).bind("resize", function () {
       if ($(this).width() < 769) {
           $('body').addClass('body-small');
           $(".left-column").fadeOut(700);
       } else {
           $('body').removeClass('body-small');
           $(".left-column").fadeIn(700);
       }
   });

   $(".rms-hmore").on("click", function(){
      if($(".left-column").hasClass("show")){
         $(".left-column").removeClass("show")
         $(".left-column").fadeOut(700);
      }else{
         $(".left-column").addClass("show")
         $(".left-column").fadeIn(700);
      }
   })

   $('.add-employee-btn').draggable({
       appendTo: $(".left-column")
   });
});


export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (

      <div id="wrapper"> 
      
      
         <div id="page-wrapper1" className="gray-bg">            
            <div className="fh-breadcrumb">
               <div className="left-column">

                  <div className="full-height-scroll">
                    <ul className="nav navbar-nav rms-nav left-menu">
                        <li className="width-100">
                           <div className="input-group stylish-input-group">
                              <span className="input-group-addon"><button type="submit"><span className="glyphicon glyphicon-search text-white font-size-16px"></span></button></span><input type="text" className="form-control rms-search-box text-white font-size-16px" placeholder="Search"/>
                              <span className="input-group-addon">
                                 <button><span className="glyphicon glyphicon-trash text-white font-medium"></span></button>
                                 <button type="submit"><span className="glyphicon glyphicon-sort text-white font-medium"></span></button><button type="submit"><span className="glyphicon glyphicon-filter text-white font-medium"></span></button>
                                 <div className="glyphicon rms-search-count">99999999999</div>
                              </span>
                           </div>
                        </li>
                     </ul>  
                     
                     <div className="clearfix" ></div>
                        <ul className="list-group elements-list">
                        
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                           <li className="list-group-item rms-list-item">
                              <a data-toggle="tab" href="#persional-info" aria-expanded="false">
                                    <div className="col-xs-2"><span><img alt="image" className="img-circle" src="http://topanhdep.net/wp-content/uploads/2015/12/anh-girl-xinh-gai-dep-98-18.jpg"/></span></div>
                                    <div className="col-xs-7 text-black">
                                       <div>ToanNH </div>
                                       <div>SE - AP</div>
                                       <div>Hanoi, VietNam</div>
                                    </div>
                                    <div className="col-xs-1 text-black">
                                       <small>20/12/2016</small>
                                       <span className="glyphicon glyphicon-record record-item"><i className="glyphicon glyphicon-menu-right"></i></span>
                                    </div>
                                 
                              </a>
                           </li>
                        </ul>
                   </div>
               </div>
               <div className="right-column">
                  <div className="full-height-scroll white-bg border-left">
              <div className="right-menu">
               
               <ul className="nav nav-tabs nav-justified " role="tablist">
                  <li className="selected"><a data-toggle="tab" href="#persional-info" className="glyphicon glyphicon-user" aria-expanded="false"></a></li>
                  <li><a data-toggle="tab" href="#history" className="glyphicon glyphicon-time"></a></li>
                  <li className=""><a data-toggle="tab" href="#menu2" className="glyphicon glyphicon-education" aria-expanded="false"></a></li>
                  <li className="active"><a data-toggle="tab" href="#menu1" className="glyphicon glyphicon-heart" aria-expanded="true"></a></li>
                  <li><a data-toggle="tab" href="#menu2" className="glyphicon glyphicon-home"></a></li>
                  <li><a data-toggle="tab" href="#menu1" className="glyphicon glyphicon-map-marker"></a></li>
               </ul>

               <div className="tab-content">
                <div id="persional-info" className="tab-pane fade in active">
                  <h3>Persional Info</h3>
                  <div className="table-responsive">
                    <table className="table persional-info">
                    <tbody>
                      <tr>
                        <td>
                           <small>First Name</small>
                           <div>Apple</div>
                        </td>
                        <td>
                           <small>Sub Division</small>
                           <div >Java Bootcamp</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <small>Last Name</small>
                           <div >Last Name</div>
                        </td>
                        <td>
                           <small>Status</small>
                           <div >Contract</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <small>Gender</small>
                           <div >Male</div>
                        </td>
                        <td>
                           <small>Suspend Date</small>
                           <div>-</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <small>Date Of Birth</small>
                           <div >Januarry 04, 1988</div>
                        </td>
                        <td>
                           <small>Hired Date</small>
                           <div >22 August 2016</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <small>National</small>
                           <div >VietNam</div>
                        </td>
                        <td>
                           <small>Grade</small>
                           <div >SE - AP</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <small>Marital Status</small>
                           <div >Narrired</div>
                        </td>
                        <td>
                           <small>Division</small>
                           <div >CDC</div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                           <small>Phone</small>
                           <div >+84949040188</div>
                        </td>
                        <td>
                           <small>Email</small>
                           <div >email@mitrais.com</div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div id="history" className="tab-pane fade">
                  <h3>Persional histories</h3>
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div id="menu2" className="tab-pane fade">
                  <h3>Menu 2</h3>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  
                </div>
                <div id="menu3" className="tab-pane fade">
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                  <h3>Menu 3</h3>
                  <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>

                </div>
              </div>


               
            </div>
         </div>
               </div>
            </div>

            <div className="footer">
               <div className="pull-right">
                  10GB of <strong>250GB</strong> Free.
               </div>
               <div>
                  <strong>Copyright</strong> Example Company &copy; 2014-2017
               </div>
            </div>    

<div id="add-employee-btn" className="add-employee-btn"></div>            

         </div>
      </div>
   
    );
  }
}
