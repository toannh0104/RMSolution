import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';


$(document).ready(function(){
	
     $('#add-employee-btn').draggable({       
       containment: ".left-column",
       scroll: false
     });

// Step show event 
            $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
               console.log("You are on step "+stepNumber+" now");
               if(stepPosition === 'first'){
                   $("#prev-btn").addClass('disabled');
               }else if(stepPosition === 'final'){
                   $("#next-btn").addClass('disabled');
               }else{
                   $("#prev-btn").removeClass('disabled');
                   $("#next-btn").removeClass('disabled');
               }
            });
            
            // Toolbar extra buttons
            var btnFinish = $('<button></button>').text('Finish')
                                             .addClass('btn btn-info')
                                             .on('click', function(){ alert('Finish Clicked'); });
            var btnCancel = $('<button></button>').text('Cancel')
                                             .addClass('btn btn-danger')
                                             .on('click', function(){ $('#smartwizard').smartWizard("reset"); });                         
            
            
            // Smart Wizard
            $('#smartwizard').smartWizard({ 
                    selected: 0, 
                    theme: 'circles',
                    transitionEffect:'fade',
                    toolbarSettings: {toolbarPosition: 'both',
                                      toolbarExtraButtons: [btnFinish, btnCancel]
                                    }
                 });
                                         
            
            
            $("#prev-btn").on("click", function() {
                // Navigate previous
                $('#smartwizard').smartWizard("prev");
                return true;
            });
            
            $("#next-btn").on("click", function() {
                // Navigate next
                $('#smartwizard').smartWizard("next");
                return true;
            });
            

   
});

export default class AddEmployee extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  };

  componentDidMount(){
  	//$("#myModal").modalSteps();
  }

  doClick(){
  	//alert("clicked reactjs")
   
  	$("#myModal").modal({backdrop:'static'});
    $(".employeeForm").draggable();


    $('#datePicker').datepicker({
            autoclose: true,
            format: 'mm/dd/yyyy'
        })



  };

  render() {
    return (
    	<div>
        

	     	<div id="add-employee-btn" onClick={this.doClick} className="btn btn-primary" data-toggle="modal" ></div>
	      	
			<div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div className="modal-dialog modal-lg employeeForm" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			        <div className="modal-title" id="myModalLabel">Add Employee <span className="step-title"></span></div>
			      </div>
			      <div className="modal-body">
			        
			        <div id="smartwizard">
			            <ul>
			                <li><a href="#step-1"><span className="mobile-hide">Step</span> 1<br /><small className="mobile-hide" >General information</small></a></li>
			                <li><a href="#step-2"><span className="mobile-hide">Step</span> 2<br /><small className="mobile-hide">Employment history</small></a></li>
			                <li><a href="#step-3"><span className="mobile-hide">Step</span> 3<br /><small className="mobile-hide">Employee grade</small></a></li>
			                <li><a href="#step-4"><span className="mobile-hide">Step</span> 4<br /><small className="mobile-hide">Family members</small></a></li>
                      <li><a href="#step-5"><span className="mobile-hide">Step</span> 5<br /><small className="mobile-hide">Employee address</small></a></li>
                      <li><a href="#step-6"><span className="mobile-hide">Step</span> 6<br /><small className="mobile-hide">Employee location</small></a></li>
			            </ul>
			            
			            <div>
			                <div id="step-1" className="step">
                        <h2>Step 1 General information</h2>
                          <div className="row">
                            <div className="col-sm-2">First Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="col-sm-2">Sub Division</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Sub Division" />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-2">Last Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                            <div className="col-sm-2">Status</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Status" />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-2">Gender</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Gender" />
                            </div>
                            <div className="col-sm-2">Suppened Date</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Suppened Date" />
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-sm-2">Date of Birth</div>
                            <div className="col-sm-4 date">                                                                   
                              <div className="input-group input-append date" id="datePicker">
                                  <input type="text" className="form-control" name="date" />
                                  <span className="input-group-addon add-on">
                                    <span className="glyphicon glyphicon-calendar"></span>
                                  </span>
                              </div>
                            </div>
                            <div className="col-sm-2">Hired Date</div>
                            <div className="col-sm-4">
                               <div className="input-group input-append date" id="datePicker">
                                  <input type="text" className="form-control" name="date" />
                                  <span className="input-group-addon add-on">
                                    <span className="glyphicon glyphicon-calendar"></span>
                                  </span>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-2">Nationality</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Nationality" />
                            </div>
                            <div className="col-sm-2">Phone</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Phone" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-2">Email</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="col-sm-2">Marital Status</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder="Marital Status" />
                            </div>
                          </div>
			                </div>
			                <div id="step-2" className="">
			                    <h2>Step 2 Employment history</h2>
			                    <div className="row">
                            <div className="col-sm-2">First Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder=".col-sm-2" />
                            </div>
                            <div className="col-sm-2">First Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder=".col-sm-2" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-2">First Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder=".col-sm-2" />
                            </div>
                            <div className="col-sm-2">First Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder=".col-sm-2" />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-2">First Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder=".col-sm-2" />
                            </div>
                            <div className="col-sm-2">First Name</div>
                            <div className="col-sm-4">
                               <input type="text" className="form-control" placeholder=".col-sm-2" />
                            </div>
                          </div>
			                </div>
			                <div id="step-3" className="">
                        <h2>Employment grade</h2>
		                    <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
			                </div>
			                <div id="step-4" className="">
			                    <h2>Step 4 Family members</h2>
			                    <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
			                </div>

                      <div id="step-5" className="">
                          <h2>Step 5 Employee address</h2>
                          <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
                      </div>

                        <div id="step-6" className="">
                          <h2>Step 6 Employee location</h2>
                          <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                          <div className="col-sm-2">First Name</div>
                          <div className="col-sm-4">
                             <input type="text" className="form-control" placeholder=".col-sm-2" />
                          </div>
                        </div>
                      </div>

			            </div>
			        </div>
					
			      </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
			        <button type="button" className="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>

		</div>
    );
  }
}
