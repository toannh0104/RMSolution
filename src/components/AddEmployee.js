import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import {
  Step,
  Stepper,
  StepLabel,
  StepButton,
} from 'material-ui/Stepper';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import DatePicker from 'material-ui/DatePicker';


$(document).ready(function(){

$(".add-emp-btn").draggable({containment:$(".employees"), scroll:false});
        $("#geocomplete").geocomplete({
          map: ".map_canvas",
          details: "form ",
          location: "ha noi",
          markerOptions: {
            draggable: true
          }
        });
        
        $("#geocomplete").bind("geocode:dragged", function(event, latLng){
          $("input[name=lat]").val(latLng.lat());
          $("input[name=lng]").val(latLng.lng());
          $("#reset").show();
        });
        
        
        $("#reset").click(function(){
          $("#geocomplete").geocomplete("resetMarker");
          $("#reset").hide();
          return false;
        });
        
        $("#find").click(function(){
          $("#geocomplete").trigger("geocode");
        }).click();


})

class AddEmployee extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	       open: false,
		   finished: false,
    	   stepIndex: 0,

    	   fixedHeader: true,
	      fixedFooter: true,
	      stripedRows: false,
	      showRowHover: false,
	      selectable: true,
	      multiSelectable: false,
	      enableSelectAll: false,
	      deselectOnClickaway: true,
	      showCheckboxes: true,
	      height: '600px',
	    };

	    this.initMap= this.initMap.bind(this);
	};

	handleOpen = () => {
	    this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	handleReset = (event) => {		
      event.preventDefault();
      this.setState({stepIndex: 0, finished: false});
      $(".gmap-next-btn").removeAttr('disabled');
	}

	 handleNext = () => {
	    const {stepIndex} = this.state;
	    if(stepIndex < 5){
		    this.setState({
		      stepIndex: stepIndex + 1
		    });
	    }

	    console.log("next: "+(stepIndex+1));

	    if(stepIndex === 4){
			this.initMap();
			$(".gmap-next-btn").prop('disabled', true);
	    }
	  };

	  initMap(){
	  	setTimeout(function(){
				$("#geocomplete").geocomplete({
	          map: ".map_canvas",
	          details: "form ",
	          location: "Hanoi",
	          markerOptions: {
	            draggable: true
	          }
	        });
			}, 100);	  	
	  }

	  handlePrev = () => {
	    const {stepIndex} = this.state;	    
	    console.log("prev: "+stepIndex);
	    $(".gmap-next-btn").removeAttr('disabled');
	    if (stepIndex > 0) {
	      this.setState({stepIndex: stepIndex - 1});
	    }
	  };

	  handleToggle = (event, toggled) => {
	    this.setState({
	      [event.target.name]: toggled,
	    });
	  };

	  handleChange = (event) => {
	    this.setState({height: event.target.value});
	  };


	  getStepContent(stepIndex) {
	    switch (stepIndex) {
	      case 0:
	        return (
			<Table className="tbl-add-emp"
	          height={this.state.height}
	          fixedHeader={this.state.fixedHeader}
	          fixedFooter={this.state.fixedFooter}
	          selectable={false}
	          multiSelectable={false}
	        >
				<TableBody className="tbl-body"
		            displayRowCheckbox={false}
		            deselectOnClickaway={this.state.deselectOnClickaway}
		            showRowHover={this.state.showRowHover}
		            stripedRows={this.state.stripedRows}
		          >
		
		    		<TableRow>
		              <TableRowColumn><TextField hintText="First Name" floatingLabelText="First Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Sub Division" floatingLabelText="Sub Division"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Last Name" floatingLabelText="Last Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Status" floatingLabelText="Status"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Gender" floatingLabelText="Gender"/></TableRowColumn>
		              <TableRowColumn>
		                  <DatePicker hintText="Suspend Date" mode="landscape" />
		              </TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn>
		              	<DatePicker hintText="Date Of Birth" mode="landscape" />		              
		              </TableRowColumn>
		              <TableRowColumn>
		              	<DatePicker hintText="Hired Date" mode="landscape" />
		              </TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Phone" floatingLabelText="Phone"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Grade" floatingLabelText="Grade"/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn><TextField hintText="Marital Status" floatingLabelText="Marital Status"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Division" floatingLabelText="Please Choose"/></TableRowColumn>
		            </TableRow>
		         </TableBody>
			</Table>
	        	);
	      case 1:
	        return (
			<Table className="tbl-add-emp"
	          height={this.state.height}
	          fixedHeader={this.state.fixedHeader}
	          fixedFooter={this.state.fixedFooter}
	          selectable={false}
	          multiSelectable={false}
	        >
				<TableBody className="tbl-body"
		            displayRowCheckbox={false}
		            deselectOnClickaway={this.state.deselectOnClickaway}
		            showRowHover={this.state.showRowHover}
		            stripedRows={this.state.stripedRows}
		          >
		
		    		<TableRow>
		              <TableRowColumn><TextField hintText="Company" floatingLabelText="Company"/></TableRowColumn>
		            
		            </TableRow>
		            	           
		            <TableRow>
		              <TableRowColumn><TextField hintText="Position" floatingLabelText="Position"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Description" floatingLabelText="Description" multiLine={true}/></TableRowColumn>		              
		            </TableRow>
		            <TableRow>
		              <TableRowColumn>
		              	<DatePicker hintText="From Date" mode="landscape" />
		              </TableRowColumn>
		              <TableRowColumn>
		                  <DatePicker hintText="To Date" mode="landscape" />
		              </TableRowColumn>
		            </TableRow>
		         </TableBody>
			</Table>
	        	);
	      case 2:
	        return (
			<Table className="tbl-add-emp"
	          height={this.state.height}
	          fixedHeader={this.state.fixedHeader}
	          fixedFooter={this.state.fixedFooter}
	          selectable={false}
	          multiSelectable={false}
	        >
				<TableBody className="tbl-body"
		            displayRowCheckbox={false}
		            deselectOnClickaway={this.state.deselectOnClickaway}
		            showRowHover={this.state.showRowHover}
		            stripedRows={this.state.stripedRows}
		          >
		
		    		<TableRow>
		              <TableRowColumn><TextField hintText="Grade" floatingLabelText="Grade"/></TableRowColumn>
		            </TableRow>
					<TableRow>		            
		              <TableRowColumn><TextField hintText="Description" floatingLabelText="Description" multiLine={true}/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn>
		              	<DatePicker hintText="From Date" mode="landscape" />
		              </TableRowColumn>
		              <TableRowColumn>
		                  <DatePicker hintText="To Date" mode="landscape" />
		              </TableRowColumn>
		            </TableRow>
		         </TableBody>
			</Table>
	        	);
	      case 3:
	        return (
			<Table className="tbl-add-emp"
	          height={this.state.height}
	          fixedHeader={this.state.fixedHeader}
	          fixedFooter={this.state.fixedFooter}
	          selectable={false}
	          multiSelectable={false}
	        >
				<TableBody className="tbl-body"
		            displayRowCheckbox={false}
		            deselectOnClickaway={this.state.deselectOnClickaway}
		            showRowHover={this.state.showRowHover}
		            stripedRows={this.state.stripedRows}
		          >
		
		    		<TableRow>
		              <TableRowColumn><TextField hintText="Name" floatingLabelText="Name"/></TableRowColumn>
		              <TableRowColumn><TextField hintText="Relation" floatingLabelText="Relation"/></TableRowColumn>
		            </TableRow>
					<TableRow>		            
		              <TableRowColumn><TextField hintText="Description" floatingLabelText="Description" multiLine={true}/></TableRowColumn>
		            </TableRow>
		         </TableBody>
			</Table>
	        	);
	      case 4:
	        return (
			<Table className="tbl-add-emp"
	          height={this.state.height}
	          fixedHeader={this.state.fixedHeader}
	          fixedFooter={this.state.fixedFooter}
	          selectable={false}
	          multiSelectable={false}
	        >
				<TableBody className="tbl-body"
		            displayRowCheckbox={false}
		            deselectOnClickaway={this.state.deselectOnClickaway}
		            showRowHover={this.state.showRowHover}
		            stripedRows={this.state.stripedRows}
		          >
		
		    		<TableRow>
		              <TableRowColumn><TextField hintText="Address" floatingLabelText="Address"/></TableRowColumn>
		            </TableRow>
					<TableRow>		            
		              <TableRowColumn><TextField hintText="Description" floatingLabelText="Description" multiLine={true}/></TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn>
		              	<DatePicker hintText="From Date" mode="landscape" />
		              </TableRowColumn>
		              <TableRowColumn>
		                  <DatePicker hintText="To Date" mode="landscape" />
		              </TableRowColumn>
		            </TableRow>
		         </TableBody>
			</Table>
	        	);
	      case 5:
	        return (
	        	<div>


<div className="map_canvas"></div>
    
    <form>
      <input id="geocomplete" type="text" placeholder="Type in an address" />
      <input id="find" type="button" value="find" />
      
      <fieldset className="hide">
        <label>Latitude</label>
        <input name="lat" type="text" />
      
        <label>Longitude</label>
        <input name="lng" type="text" />
      
        <label>Formatted Address</label>
        <input name="formatted_address" type="text" />
      </fieldset>
    </form>

	        	</div>
	        );	        
	      default:
	        return 'You\'re a long way from home sonny jim!';
	    }
	  }


	doClick(){
		//alert();


	};

	render(){
		const styles = {
		  headline: {
		    fontSize: 24,
		    paddingTop: 16,
		    marginBottom: 12,
		    fontWeight: 400,
		  },
		  slide: {
		    padding: 10,
		  },
		  propContainer: {
		    width: 200,
		    overflow: 'hidden',
		    margin: '20px auto 0',
		  },
		  propToggleHeader: {
		    margin: '20px auto 10px',
		  },
		};



		const customContentStyle = {
		  width: '80%',
		  maxWidth: 'none',
		  top: '-50px'
		};

		const actions = [
		<FlatButton label="Back" primary={false} onTouchTap={this.handlePrev}  className="gmap-back-btn"/>,
	    <button onTouchTap={this.handleNext} className="gmap-next-btn">Next</button>,
	    <FlatButton className="gmap-reset-btn" label="Reset" secondary={true} onTouchTap={this.handleReset} />,

	      <FlatButton label="Cancel" primary={true} onTouchTap={this.handleClose} />,
	      <FlatButton label="Submit" primary={true} onTouchTap={this.handleClose} />,
	    ];

	    const {finished, stepIndex} = this.state;
	    const contentStyle = {margin: '0 16px'};

		return(
			<div>
		        <div className="add-emp-btn" onTouchTap={this.handleOpen} >		        	
                    <i className="material-icons">add_circle</i>
                </div>

		        <Dialog className="emp-diag"
		          title="Add Employee"
		          actions={actions}
		          modal={true}
		          contentStyle={customContentStyle}
		          open={this.state.open}
		        >
		          <div className="dialog-content">

					<div style={{width: '100%', maxWidth: 800, margin: 'auto'}}>
				        <Stepper activeStep={stepIndex} linear={false}>
				          <Step>
					          <StepButton onClick={() => this.setState({stepIndex: 0})} className="btn-steps" >
					              General info
					          </StepButton>				            
				          </Step>
				          <Step>
					          <StepButton onClick={() => this.setState({stepIndex: 1})}  className="btn-steps">
					              History
					          </StepButton>
				          </Step>
				          <Step>
					          	<StepButton onClick={() => this.setState({stepIndex: 2})} className="btn-steps">
					              Grade
					          </StepButton>
				          </Step>
				          <Step>
				            <StepButton onClick={() => this.setState({stepIndex: 3})} className="btn-steps">
				              Dependents 
				          </StepButton>
				          </Step>
				          <Step>
				            <StepButton onClick={() => this.setState({stepIndex: 4})} className="btn-steps">
				              Address
				          </StepButton>
				          </Step>
				          <Step>
				            <StepButton onClick={() => {this.setState({stepIndex: 5}); this.initMap(); } }  className="btn-steps">
				              location
				          </StepButton>
				          </Step>
				        </Stepper>
				        <div style={contentStyle}>
				          {finished ? (
				          		<div></div>
				          ) : (
				            <div>
				              <p>{this.getStepContent(stepIndex)}</p>
				              
				             
				            </div>
				          )}
				        </div>
				      </div>

		          </div>
		        </Dialog>
		      </div>

			
          );
	}
}

export default AddEmployee;