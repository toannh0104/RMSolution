import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';
import { Authenticated, NotAuthenticated, LoginLink } from 'react-stormpath';
import PersionalInfo from './PersionalInfo';
import LeftMenu from './LeftMenu';
import EmployeeList from './EmployeeList';
import PersionalHistory from './PersionalHistory';
import PersionalGrade from './PersionalGrade';
import PersionalDependent from './PersionalDependent';
import AddEmployee from './AddEmployee';


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
       } else {
           $('body').removeClass('body-small');
       }
   });


  $(".rms-hmore").on("click", function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  })


});


export default class IndexPage extends React.Component {
  static contextTypes = {
    user: React.PropTypes.object
  };

  render() {
    return (
      <div id="wrapper"> 

         <div className="left-column">

            <LeftMenu/> 
            <div className="clearfix" ></div>
            <EmployeeList/>
         </div>
         <div className="right-column">            
               <div className="right-menu">               
                  <ul className="nav nav-tabs nav-justified " role="tablist">
                     <li className="selected active"><a data-toggle="tab" href="#persional-info" className="glyphicon glyphicon-user"></a></li>
                     <li><a data-toggle="tab" href="#history" className="glyphicon glyphicon-time"></a></li>
                     <li><a data-toggle="tab" href="#grade" className="glyphicon glyphicon-education" aria-expanded="false"></a></li>
                     <li><a data-toggle="tab" href="#dependent" className="glyphicon glyphicon-heart" aria-expanded="true"></a></li>
                     <li><a data-toggle="tab" href="#menu2" className="glyphicon glyphicon-home"></a></li>
                     <li><a data-toggle="tab" href="#menu1" className="glyphicon glyphicon-map-marker"></a></li>
                  </ul>
                  <div className="tab-content">
                      <PersionalInfo/>
                      <PersionalHistory/>
                      <PersionalGrade/>
                      <PersionalDependent />
                 </div>
            </div>
         </div>
         <AddEmployee />
      </div>
    );
  }
}
